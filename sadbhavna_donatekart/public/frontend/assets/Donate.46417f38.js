import{_ as m,o as p,c as i,k as o,e,t as n,F as _,H as l,r}from"./index.8411dce3.js";import{N as u,F as d}from"./Footer.4d1d4430.js";const f={name:"Donate",components:{Navbar:u,Footer:d},data(){return{data:"",name:"",price:""}},mounted(){const t=l();this.name=t.params.name,this.price=t.params.price}},N={class:"container text-xl mt-10"},h=e("h1",null,"Donation page",-1);function v(t,F,x,D,a,b){const s=r("Navbar"),c=r("Footer");return p(),i(_,null,[o(s),e("div",N,[h,e("p",null,"Item Name "+n(a.name),1),e("p",null,"Item Price "+n(a.price),1)]),o(c)],64)}var B=m(f,[["render",v]]);export{B as default};