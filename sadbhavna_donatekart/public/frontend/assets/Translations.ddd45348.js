import{K as d,z as p,s as i,L as v,M as m,N as T,O as S,P as g,Q as l,_ as y,R as h,S as H,T as c,o as M,c as b}from"./index.2ba5c368.js";let B;function _(){return B}const w=["useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function A(e){return typeof e=="function"?e():l(e)}function o(e,a=""){if(e instanceof Promise)return e;const s=A(e);return!e||!s?s:Array.isArray(s)?s.map(t=>o(t,a)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([t,r])=>t==="titleTemplate"||t.startsWith("on")?[t,l(r)]:[t,o(r,t)])):s}const j=typeof window!="undefined",I="usehead";function u(){return d()&&p(I)||_()}function N(e,a={}){const s=u(),t=i(!1),r=i({});v(()=>{r.value=t.value?{}:o(e)});const n=s.push(r.value,a);return m(r,f=>{n.patch(f)}),d()&&(T(()=>{n.dispose()}),S(()=>{t.value=!0}),g(()=>{t.value=!1})),n}function O(e,a={}){return u().push(e,a)}function U(e,a={}){var t;const s=u();if(s){const r=j||!!((t=s.resolvedOptions)!=null&&t.document);return a.mode==="server"&&r||a.mode==="client"&&!r?void 0:r?N(e,a):O(e,a)}}const $=["injectHead"];[...$,...w];const x=h({metaInfo:{title:"My Page Title",meta:[{name:"description",content:"This is my page description"},{property:"og:title",content:"My Open Graph Title"}]},setup(){const e=H({title:"My website",description:"My beautiful website"});U({title:c(()=>e.title),meta:[{name:"description",content:c(()=>e.description)}]})}});function C(e,a,s,t,r,n){return M(),b("div",null,"Test")}var P=y(x,[["render",C]]);export{P as default};
