import{_ as u,s as d,u as p,v as m,o as n,c,e as h,F as v,g,n as b,x as w,f,r as y}from"./index.0769b81a.js";const _={name:"AutoSlider",props:{images:{type:Array,required:!0},interval:{type:Number,default:4e3}},setup(a){const e=d(0),t=d(0);let r=null;const i=()=>{t.value=document.querySelector(".slider").offsetWidth},o=()=>{window.innerWidth>1024?e.value=(e.value+1)%(a.images.length/6):window.innerWidth>767?e.value=(e.value+1)%(a.images.length/4):e.value=(e.value+1)%(a.images.length/2)},s=()=>{r=setInterval(o,a.interval)},l=()=>{clearInterval(r)};return p(()=>{i(),s()}),m(()=>{l()}),{currentSlide:e,slideWidth:t,updateSlideWidth:i}},methods:{redirect_to(a){window.location.href=a}}},k={class:"slider"},j=["src","onClick"];function x(a,e,t,r,i,o){return n(),c("div",k,[h("div",{class:"slides",style:w({transform:`translateX(-${r.currentSlide*r.slideWidth}px)`})},[(n(!0),c(v,null,g(t.images,(s,l)=>(n(),c("div",{key:l,class:"slide"},[h("img",{src:s.src,alt:"slider image",class:b(s.class),onClick:A=>o.redirect_to(s.click)},null,10,j)]))),128))],4)])}var S=u(_,[["render",x]]);const $={components:{slider:S},data(){return{images:[{class:"hover:cursor-pointer h-40 w-40",src:"https://bestdeed.org/files/product-500x500.webp",click:"https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"},{class:"w-40 h-40 hover:cursor-pointer",src:"https://bestdeed.org/files/cow-field-cattle-feed-with-calcium-mineral-mixture-vitamines-500x500.webp",click:"https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"},{class:"hover:cursor-pointer h-40 w-40",src:"https://bestdeed.org//files/Roushya460.jpg",click:"https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"},{class:"w-40 h-40 hover:cursor-pointer",src:"https://bestdeed.org/files/resize.webp",click:"https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"},{class:"hover:cursor-pointer h-40 w-40",src:"https://bestdeed.org/files/Sadbhavna2022-project (5).webp",click:"https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"},{class:"w-40 h-40 hover:cursor-pointer",src:"https://bestdeed.org/files/artofhelping-1025product.webp",click:"https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"},{class:"hover:cursor-pointer h-40 w-40",src:"https://bestdeed.org/files/Animal5.webp",click:"https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"},{class:"w-40 h-40 hover:cursor-pointer",src:"https://bestdeed.org/files/Disaster Relief.jpg",click:"https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"}]}}};function W(a,e,t,r,i,o){const s=y("slider");return n(),f(s,{class:"block",images:i.images},null,8,["images"])}var C=u($,[["render",W]]);export{C as default};