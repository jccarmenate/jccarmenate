import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const DAY = 86400000;
export const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));

export function summarize(previous, incoming, owner, now = new Date()) {
  const cutoff = +now - 30 * DAY;
  const byId = new Map();
  for (const e of previous) byId.set(e.id, e);
  for (const e of incoming) {
    if (e.public !== true || e.actor?.login?.toLowerCase() !== owner.toLowerCase()) continue;
    if (e.repo?.name?.toLowerCase() === `${owner}/${owner}`.toLowerCase()) continue;
    let kind;
    if (e.type === 'PushEvent') kind = 'push';
    if (e.type === 'PullRequestReviewEvent' && e.payload?.action === 'created') kind = 'review';
    if (e.type === 'PullRequestEvent' && e.payload?.action === 'closed' && e.payload?.pull_request?.merged === true) kind = 'merge';
    if (e.type === 'ReleaseEvent' && e.payload?.action === 'published') kind = 'release';
    if (kind) byId.set(e.id, {id:e.id, kind, repo:e.repo.name, at:e.created_at});
  }
  const events = [...byId.values()].filter(e => Date.parse(e.at) >= cutoff && Date.parse(e.at) <= +now)
    .sort((a,b) => b.at.localeCompare(a.at) || a.id.localeCompare(b.id));
  const counts = {push:0,review:0,merge:0,release:0};
  for (const e of events) counts[e.kind]++;
  const energy = counts.push + counts.review*2 + counts.merge*4 + counts.release*8;
  return {owner, updated:now.toISOString().slice(0,10), events, counts, energy,
    level:1+Math.floor(energy/25), progress:energy%25,
    latest:events[0]?.repo.split('/').slice(1).join('/') || 'Waiting for the next experiment'};
}

export async function fetchEvents(owner, token = process.env.GITHUB_TOKEN) {
  const result = [];
  for (let page=1;page<=3;page++) {
    const headers = {'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10','User-Agent':'agent-lab-profile'};
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(owner)}/events/public?per_page=100&page=${page}`, {headers,signal:AbortSignal.timeout(30000)});
    if (!response.ok) throw new Error(`GitHub events request failed (${response.status}); keeping the last successful snapshot.`);
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error('Invalid GitHub events response');
    result.push(...batch);
    if (batch.length<100) break;
  }
  return result;
}

function robot(x,y,color,active=false,extra='') {
  return `<g transform="translate(${x} ${y})"><g class="${active?'bob':''}" ${extra}>
    <path d="M18 0v8" stroke="${color}" stroke-width="3"/><rect x="14" y="0" width="8" height="5" rx="2" fill="${color}"/>
    <rect x="0" y="8" width="36" height="25" rx="7" fill="${color}"/><rect x="5" y="14" width="26" height="11" rx="4" fill="#10192e"/>
    <path d="M11 18v3m14-3v3" stroke="#e6faff" stroke-width="3"/><rect x="7" y="35" width="22" height="16" rx="4" fill="${color}"/>
    <path d="M3 37l-5 8m35-8l5 8M12 51v7m13-7v7" stroke="${color}" stroke-width="4"/>
    <rect x="13" y="39" width="10" height="5" rx="2" fill="#10192e"/>
  </g></g>`;
}

export function render(s) {
  const station = (i,label,kind,color,subtitle,graphic) => {
    const x = 34+i*237, count=s.counts[kind], active=count>0;
    return `<g transform="translate(${x} 133)">
      <rect width="220" height="208" rx="14" fill="#111d32" stroke="#283750"/>
      <path d="M14 0h192" stroke="${color}" stroke-width="3"/>
      <text x="16" y="28" class="micro" fill="${color}">0${i+1} / ${label}</text>
      <rect x="16" y="43" width="188" height="78" rx="7" fill="#091323" stroke="#26354d"/>
      <g class="${active?'screen':''}">${graphic}</g>
      <path d="M19 133h182M32 133v12m154-12v12" stroke="#3b4b66" stroke-width="3"/>
      ${robot(26,139,color,active)}
      <text x="89" y="164" font-size="27" font-weight="700" fill="#f2f7ff">${count}</text>
      <text x="89" y="181" class="micro" fill="#a9bad0">${subtitle}</text>
      <circle cx="193" cy="195" r="3" fill="${active?color:'#4a5971'}" class="${active?'pulse':''}"/>
    </g>`;
  };
  const code = '<path d="M33 61h25m8 0h39M33 75h15m8 0h73M33 89h36m8 0h22M33 103h63" stroke="#61dfed" stroke-width="4" stroke-linecap="round"/><rect class="cursor" x="105" y="99" width="7" height="8" fill="#61dfed"/>';
  const review = '<path d="M42 64l5 5 8-10m-13 24 5 5 8-10m-13 24 5 5 8-10" fill="none" stroke="#b0a0ff" stroke-width="3"/><path d="M67 65h84m-84 19h63m-63 19h74" stroke="#677494" stroke-width="4" stroke-linecap="round"/>';
  const assembly = '<path d="M44 66h39l25 28h65M44 102h39l25-28h65" fill="none" stroke="#6ae0b2" stroke-width="3"/><g fill="#122c30" stroke="#6ae0b2" stroke-width="2"><circle cx="44" cy="66" r="7"/><circle cx="44" cy="102" r="7"/><circle cx="173" cy="94" r="7"/><circle cx="173" cy="74" r="7"/></g>';
  const launch = '<path d="M104 98V76q0-15 10-24 10 9 10 24v22z" fill="#ffcb83"/><circle cx="114" cy="74" r="4" fill="#18243c"/><path d="M104 85l-9 15h9m20-15 9 15h-9" fill="#e2965b"/><path class="flame" d="M109 102l5 12 5-12" fill="#f78c8c"/>';
  const latest=escape(s.latest.length>43?s.latest.slice(0,40)+'...':s.latest);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="506" viewBox="0 0 1000 506" role="img" aria-labelledby="title desc">
<title id="title">${escape(s.owner)}'s Agent Lab</title>
<desc id="desc">Animated laboratory. Observed public activity in the last 30 days: ${s.counts.push} pushes, ${s.counts.review} reviews, ${s.counts.merge} merged pull requests, ${s.counts.release} releases. Updated ${s.updated}. Decorative robots represent activity, not running agents.</desc>
<defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#21304b" stroke-opacity=".32"/></pattern><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#111b30"/><stop offset="1" stop-color="#080e1e"/></linearGradient></defs>
<style>
text{font-family:ui-monospace,SFMono-Regular,Consolas,monospace}.micro{font-size:11px;letter-spacing:.7px}
.bob{animation:bob 2.4s ease-in-out infinite}.pulse{animation:pulse 2s ease-in-out infinite}.screen .cursor{animation:pulse 1.2s steps(2) infinite}.screen{animation:screen 5s ease-in-out infinite}.carrier{animation:travel 18s ease-in-out infinite}.screen .flame{animation:pulse .7s ease-in-out infinite}
@keyframes bob{50%{transform:translateY(-4px)}}@keyframes pulse{50%{opacity:.35}}@keyframes screen{50%{opacity:.7}}@keyframes travel{0%,8%{transform:translateX(0)}45%,55%{transform:translateX(842px)}92%,100%{transform:translateX(0)}}
@media(prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<rect x="1" y="1" width="998" height="504" rx="22" fill="url(#bg)" stroke="#33415c"/>
<rect x="2" y="2" width="996" height="502" rx="22" fill="url(#grid)"/>
<rect x="34" y="29" width="31" height="31" rx="9" fill="#15354a"/><path d="M42 44h15m-8-8v16" stroke="#67e8f9" stroke-width="3"/>
<text x="78" y="51" fill="#f1f6ff" font-size="27" font-weight="700" letter-spacing="2">AGENT LAB</text>
<text x="35" y="84" fill="#96abc7" font-size="12">@${escape(s.owner)} / small robots, real work.</text>
<rect x="745" y="29" width="219" height="36" rx="18" fill="#14293c" stroke="#2a4b5b"/>
<circle cx="764" cy="47" r="4" fill="#6ae0b2"/>
<text x="778" y="51" fill="#b6eadc" font-size="11">DAILY ACTIVITY SNAPSHOT</text>
<text x="963" y="85" text-anchor="end" fill="#8da2bd" font-size="11">OBSERVED PUBLIC EVENTS / 30 DAYS</text>
<path d="M34 108h930" stroke="#2a3952"/>
${station(0,'CODE','push','#61dfed','PUSHES',code)}
${station(1,'REVIEW','review','#b0a0ff','REVIEWS',review)}
${station(2,'ASSEMBLE','merge','#6ae0b2','MERGED PRs',assembly)}
${station(3,'LAUNCH','release','#ffcb83','RELEASES',launch)}
<path d="M48 392h904" stroke="#233651" stroke-width="7" stroke-linecap="round"/><path d="M48 392h904" stroke="#57708d" stroke-width="1" stroke-dasharray="3 12"/>
<g transform="translate(57 355)"><g class="${s.energy?'carrier':''}"><rect width="34" height="25" rx="6" fill="#b0a0ff"/><rect x="5" y="5" width="24" height="9" rx="3" fill="#14213b"/><path d="M11 8v3m12-3v3" stroke="#fff" stroke-width="2"/><circle cx="8" cy="29" r="5" fill="#7a86a3"/><circle cx="27" cy="29" r="5" fill="#7a86a3"/><rect x="8" y="-10" width="17" height="10" rx="2" fill="#61dfed"/></g></g>
<text x="35" y="428" class="micro" fill="#8197b4">LATEST SIGNAL</text><text x="35" y="449" font-size="14" fill="#e0ebfc">${latest}</text>
<text x="634" y="428" class="micro" fill="#b0a0ff">LAB LEVEL ${s.level} / ${s.energy} ENERGY</text>
<rect x="634" y="441" width="329" height="8" rx="4" fill="#22314b"/><rect x="634" y="441" width="${Math.max(2,s.progress/25*329)}" height="8" rx="4" fill="#a899fa"/>
<text x="35" y="482" fill="#8da2bd" font-size="10">REST-powered / push +1 / review +2 / merge +4 / release +8</text>
<text x="964" y="482" text-anchor="end" fill="#8da2bd" font-size="10">SYNC ${escape(s.updated)} UTC</text>
</svg>\n`;
}

async function main() {
  const owner = process.env.LAB_OWNER || 'jccarmenate';
  let previous=[];
  try { previous=JSON.parse(await readFile('assets/agent-lab-state.json','utf8')).events; }
  catch(e) { if(e.code!=='ENOENT') throw e; }
  const incoming=await fetchEvents(owner);
  const snapshot=summarize(previous,incoming,owner);
  await mkdir('assets',{recursive:true});
  await writeFile('assets/agent-lab.svg',render(snapshot));
  await writeFile('assets/agent-lab-state.json',JSON.stringify(snapshot,null,2)+'\n');
  console.log(JSON.stringify({updated:snapshot.updated,counts:snapshot.counts,level:snapshot.level}));
}
if (process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) main().catch(e=>{console.error(e.message);process.exitCode=1;});
