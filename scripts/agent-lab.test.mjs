import test from 'node:test';
import assert from 'node:assert/strict';
import {summarize,render} from './agent-lab.mjs';
const now=new Date('2026-10-07T12:00:00Z');
const event=(id,type,payload={},extra={})=>({id,type,public:true,actor:{login:'jccarmenate'},repo:{name:'jccarmenate/project'},created_at:'2026-10-06T12:00:00Z',payload,...extra});
test('counts actual event types, deduplicates snapshots and excludes self/private/old activity',()=>{
 const events=[event('1','PushEvent'),event('2','PullRequestEvent',{action:'closed',pull_request:{merged:true}}),event('3','PullRequestEvent',{action:'closed',pull_request:{merged:false}}),event('4','ReleaseEvent',{action:'published'}),event('5','PullRequestReviewEvent',{action:'created'}),event('6','PushEvent',{}, {repo:{name:'jccarmenate/jccarmenate'}}),event('7','PushEvent',{}, {public:false}),event('8','PushEvent',{}, {created_at:'2026-08-01T00:00:00Z'}),event('9','PushEvent',{}, {actor:{login:'someone-else'}})];
 const first=summarize([],events,'jccarmenate',now);
 const second=summarize(first.events,events,'jccarmenate',now);
 assert.deepEqual(second.counts,{push:1,review:1,merge:1,release:1});assert.equal(second.energy,15);assert.equal(second.events.length,4);
});
test('empty feed renders standby and escapes untrusted repository names',()=>{
 const empty=summarize([],[],'jccarmenate',now);assert.equal(empty.energy,0);assert.equal(empty.level,1);assert.match(render(empty),/Waiting for the next experiment/);
 const snapshot=summarize([],[event('1','PushEvent',{}, {repo:{name:'jccarmenate/<script>&evil'}})],'jccarmenate',now);
 assert.ok(!render(snapshot).includes('<script>'));assert.match(render(snapshot),/&lt;script&gt;&amp;evil/);
});
test('stored events age out of the rolling window',()=>{
 const snapshot=summarize([{id:'1',kind:'push',repo:'jccarmenate/x',at:'2026-08-01T00:00:00Z'}],[],'jccarmenate',now);assert.equal(snapshot.events.length,0);
});
