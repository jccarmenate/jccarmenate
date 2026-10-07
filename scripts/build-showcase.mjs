import { mkdir, writeFile } from 'node:fs/promises';

const items = [
  {title:'Agent orchestration',project:'Multi-agent Code Generator',description:'Coordinate agents. Execute. Iterate.',stack:'Python · LangGraph · Docker',icon:'M4 4h6v6H4zM22 20h6v6h-6zM4 20h6v6H4zM7 10v6h18v4M7 16v4'},
  {title:'Information retrieval',project:'Tech RAG',description:'Turn documents into useful context.',stack:'Python · FastAPI · ChromaDB',icon:'M5 3h14l5 5v8M19 3v6h5M5 3v25h10M9 12h8M9 17h5M24 24l5 5'},
  {title:'Compiler engineering',project:'HULK IDE',description:'Build the path from source to execution.',stack:'Rust · LLVM · LSP',icon:'M10 7L2 15l8 8M22 7l8 8-8 8M19 3l-6 24'},
  {title:'Full-stack development',project:'GuildWork',description:'Connect interfaces, APIs, and data.',stack:'TypeScript · React · Prisma',icon:'M3 4h26v23H3zM3 10h26M8 16h6v6H8zM19 16h5M19 21h5'}
];
const palettes={
  dark:{bg:'#0d1117',panel:'#0d1117',mutedBg:'#161b22',border:'#30363d',text:'#e6edf3',muted:'#9198a1',blue:'#58a6ff',accentBg:'#13233a'},
  light:{bg:'#ffffff',panel:'#ffffff',mutedBg:'#f6f8fa',border:'#d1d9e0',text:'#1f2328',muted:'#59636e',blue:'#0969da',accentBg:'#ddf4ff'}
};
function render(theme){
 const c=palettes[theme];
 const cards=items.map((item,i)=>{
  const x=20+(i%2)*402,y=69+Math.floor(i/2)*140;
  return `<g transform="translate(${x} ${y})">
   <rect width="386" height="124" rx="6" fill="${c.panel}" stroke="${c.border}"/>
   <rect class="focus p${i}" x=".5" y=".5" width="385" height="123" rx="6" fill="none" stroke="${c.blue}" stroke-width="1.5"/>
   <g transform="translate(17 16) scale(.68)" stroke="${c.muted}" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round"><path d="${item.icon}"/>${i===1?'<circle cx="20" cy="20" r="6"/>':''}</g>
   <text x="49" y="32" fill="${c.text}" font-size="17" font-weight="600">${item.title}</text>
   <text x="17" y="57" fill="${c.blue}" font-size="14" font-weight="600">${item.project}</text>
   <text x="17" y="80" fill="${c.muted}" font-size="13">${item.description}</text>
   <circle cx="21" cy="104" r="4" fill="${i===2?'#dea584':i===3?'#3178c6':'#3572a5'}"/>
   <text x="32" y="108" fill="${c.muted}" font-size="12">${item.stack}</text>
   <path class="progress p${i}" d="M338 105h28" stroke="${c.blue}" stroke-width="2"/>
  </g>`;
 }).join('\n');
 return `<svg xmlns="http://www.w3.org/2000/svg" width="840" height="409" viewBox="0 0 840 409" role="img" aria-labelledby="title desc">
 <title id="title">Engineering capabilities — Juan Carlos</title>
 <desc id="desc">Agent orchestration: Multi-agent Code Generator. Information retrieval: Tech RAG. Compiler engineering: HULK IDE. Full-stack development: GuildWork. A subtle twelve-second highlight connects the four capabilities. Project links are below this image.</desc>
 <style>
 text{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}.mono{font-family:ui-monospace,SFMono-Regular,Consolas,monospace}.focus{opacity:0;animation:focus 12s ease-in-out infinite}.progress{opacity:.12;stroke-dasharray:28;stroke-dashoffset:28;animation:progress 12s ease-in-out infinite}.p1{animation-delay:3s}.p2{animation-delay:6s}.p3{animation-delay:9s}.packet{animation:packet 12s linear infinite}
 @keyframes focus{0%,2%{opacity:0}5%,21%{opacity:.8}25%,100%{opacity:0}}@keyframes progress{0%{opacity:.1;stroke-dashoffset:28}21%{opacity:1;stroke-dashoffset:0}25%,100%{opacity:.12;stroke-dashoffset:0}}@keyframes packet{0%{transform:translateX(0);opacity:0}5%{opacity:1}92%{opacity:1}100%{transform:translateX(306px);opacity:0}}
 @media(prefers-reduced-motion:reduce){*{animation:none!important}.focus,.packet{display:none}.progress{stroke-dashoffset:0;opacity:.4}}
 </style>
 <rect x=".5" y=".5" width="839" height="408" rx="6" fill="${c.bg}" stroke="${c.border}"/>
 <path d="M1 48h838" stroke="${c.border}"/>
 <g transform="translate(20 16)" fill="none" stroke="${c.muted}" stroke-width="1.4"><path d="M2 1h10l4 4v13H2zM12 1v5h4M5 9h7M5 13h7"/></g>
 <text x="46" y="30" class="mono" font-size="13" fill="${c.muted}">engineering / <tspan fill="${c.text}" font-weight="600">capabilities</tspan></text>
 <text x="817" y="30" text-anchor="end" font-size="12" fill="${c.muted}">Juan Carlos</text>
 ${cards}
 <path d="M20 351h788" stroke="${c.border}"/>
 <text x="20" y="379" fill="${c.muted}" font-size="13">From idea to running software</text>
 <g transform="translate(490 375)"><path d="M0 0h306" stroke="${c.border}"/><g fill="${c.bg}" stroke="${c.muted}" stroke-width="1.4"><circle r="3"/><circle cx="102" r="3"/><circle cx="204" r="3"/><circle cx="306" r="3"/></g><rect class="packet" x="-3" y="-3" width="6" height="6" rx="1" fill="${c.blue}"/></g>
 </svg>\n`;
}
await mkdir('assets',{recursive:true});
for(const theme of ['dark','light']) await writeFile(`assets/engineering-${theme}.svg`,render(theme));
console.log('Generated dark and light GitHub-style SVGs');
