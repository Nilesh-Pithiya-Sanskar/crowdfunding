import{_ as a,o as r,c as s,e as n,t as o}from"./index.a534a200.js";const c={name:"Sitemap",data(){return{sitemap:null}},mounted(){fetch("/sitemap.xml").then(e=>e.text()).then(e=>{this.sitemap=e}).catch(e=>{console.error(e)})}};function p(e,i,l,m,t,u){return r(),s("div",null,[n("pre",null,o(t.sitemap),1)])}var d=a(c,[["render",p]]);export{d as default};
