import{N as C,F as T}from"./Footer.4d1d4430.js";import{_ as j,o as i,c as r,e as t,k as h,p as g,t as n,C as x,E as M,I as w,F as b,g as v,b as m,n as d,r as u,x as N,w as D,y as E}from"./index.8411dce3.js";import{_ as S,a as L,b as F,c as B,d as z,e as A,f as V,g as I,h as $,i as Q,j as R,k as H,l as U,m as W,n as X,o as q,p as G,q as J}from"./old-man.db79dafc.js";const K={name:"Explore Campaigns",components:{Navbar:C,Footer:T},mounted(){document.title=this.$t("Support Causes That Matter: BestDeed - Your Trusted and 100% Transparent Crowdfunding Platform | Bestdeed"),this.get_language(),this.get_campaigns();var e=document.createElement("link");e.rel="canonical",e.href="https://bestdeed.org/explore-campaign",document.head.appendChild(e)},data(){return{searchQuery:"",filteredList:[],campaigns:[],campaign_title:"",ngo:"",campain_image:"",location:null,selected:"newly launched",totalCampaign:0,loading:!1,selection:1,openTab:1,openTabTestimonials:1,featured_campaigns:[],lang:"",start:0,page_length:6,url:window.location.origin,last_campaigns:!1,lang:this.get_language()}},resources:{get_campaigns(){return{method:"/api/method/sadbhavna_donatekart.api.campaign.get_campaigns",onSuccess:e=>{if(e!=""){var s=e.length;for(s=0;s<e.length;s++)this.campaigns.push(e[s])}e.length<this.page_length&&(this.last_campaigns=!0),e==""&&(this.category?this.$toast({title:"No Campaigns",text:`No Campaigns Found For ${this.category}.`,icon:"x-circle",appearance:"denger",position:"top-center"}):this.$toast({title:"No Campaigns",text:"No Campaigns Found",icon:"x-circle",appearance:"denger",position:"top-center"}))},onError:e=>{console.log("Error",e)}}},get_search_campaigns(){return{method:"/api/method/sadbhavna_donatekart.api.campaign.get_search_campaigns",onSuccess:e=>{console.log("get_search_campaign_success",e),this.filteredList=e},onError:e=>{console.log("Error",e)}}}},methods:{numberWithCommas(e){return e.toLocaleString()},toggleTabs:function(e){this.openTab=e},get_campaigns(e,s){this.start=0,e!=""&&(this.campaigns=[],this.category=e),this.last_campaigns=!1,this.$resources.get_campaigns.submit({category:this.category,language:localStorage.getItem("lang")||window.navigator.language,start:s,page_length:this.page_length})},reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)},donate(e){this.$router.push(`/campaign-donation/${e}`)},get_more_campagins(){this.start+=6,this.last_campaigns=!1,this.$resources.get_campaigns.submit({category:this.category,language:localStorage.getItem("lang")||window.navigator.language,start:this.start,page_length:this.page_length})},get_search_campaigns(){this.$resources.get_search_campaigns.submit({search:this.searchQuery})},dayCalculate(c){var s=new Date,c=new Date(c);const _=c.getTime()-s.getTime();return Math.ceil(_/(1e3*3600*24))},get_language(){return this.$cookies.get("lang")||localStorage.getItem("lang")}}},O={class:"top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover mb-10",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')"}},P={class:"bg-overlay lg:!py-24 py-10"},Y={key:0,class:"container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4"},Z=t("p",{class:"text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal"},[g(" \u091C\u0930\u0942\u0930\u0924\u092E\u0902\u0926\u094B\u0902 \u0915\u0940 \u092E\u0926\u0926 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F "),t("span",{class:"text-[#40b751]"},"\u092C\u0947\u0938\u094D\u091F\u0921\u0940\u0921 \u0905\u092D\u093F\u092F\u093E\u0928"),g(" \u0938\u0947 \u0939\u093E\u0925 \u092E\u093F\u0932\u093E\u0913\u0964 ")],-1),tt=[Z],et={key:1,class:"container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4"},st=t("p",{class:"text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal"},[g(" \u0A9C\u0AB0\u0AC2\u0AB0\u0ABF\u0AAF\u0ABE\u0AA4\u0AAE\u0A82\u0AA6\u0ACB\u0AA8\u0AC7 \u0AAE\u0AA6\u0AA6 \u0A95\u0AB0\u0AB5\u0ABE "),t("span",{class:"text-[#40b751]"},"\u0AAC\u0AC7\u0AB8\u0ACD\u0A9F\u0AA1\u0AC0\u0AA1 \u0A9D\u0AC1\u0A82\u0AAC\u0AC7\u0AB6"),g(" \u0AB8\u0ABE\u0AA5\u0AC7 \u0AB9\u0ABE\u0AA5 \u0A9C\u0ACB\u0AA1\u0ACB. ")],-1),ot=[st],lt={key:2,class:"container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4"},nt={class:"text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal"},it={class:"text-[#40b751]"},rt={class:"container mx-auto card-space campaign-search mb-12"},at={class:"flex justify-center mx-auto lg:!w-4/6 w-full sm:!w-1/2 flex-wrap lg:!flex-nowrap"},dt={class:"grid col-span-2 pl-0 lg:pr-2 pb-0 pt-0 w-full mb-2 lg:mb-0"},gt={class:"border border-[#40b751] rounded-lg"},ct=t("div",{class:"grid place-items-center h-12 float-left text-gray-300"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-4 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"#40b751"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),pt={class:"relative flex h-12 rounded-lg overflow-hidden"},mt=["placeholder"],ht={class:"grid lg:pr-2 lg:w-6/12 w-full mb-2 lg:mb-0"},xt={value:null,disabled:"",hidden:""},bt={class:"grid lg:w-6/12 w-full"},ut={selected:""},_t={value:"urgent"},wt={value:"newly launched"},vt={value:"closed"},ft={value:"most raised"},yt={class:"container mx-auto h-full categorycard pb-16 card-space z-2 relative -mt-[125px]"},kt={key:0,class:"relative flex flex-col border border-[#40b751] min-w-0 break-words bg-white w-full shadow-lg rounded"},Ct={class:"tab-content tab-space overflow-y-auto h-auto"},Tt=["onClick"],jt={class:"cursor-pointer grid p-[10px] md:p-[30px] lg:p-[30px] overscroll-y-contain grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 hover:bg-gray-100"},Mt=["src","onClick"],Nt={class:"fontfamily fontcolor col-span-2 md:col-span-2 lg:col-span-3 leading-tight"},Dt={class:"text-[16px] md:text-[19px] lg:text-[21px] font-bold mb-1"},Et={class:"text-[#36495875] mb-[16px] text-[14px] md:text-[16px] lg:text-[16px] italic"},St={class:"flex"},Lt={class:"overflow-x-auto"},Ft={class:"flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-hidden category-horizontal-tab"},Bt={key:0,class:"grid justify-items-center"},zt=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:S},null,-1),At={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Vt={key:1,class:"grid justify-items-center"},It=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:L},null,-1),$t={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Qt={key:0,class:"grid justify-items-center"},Rt=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:F},null,-1),Ht={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Ut={key:1,class:"grid justify-items-center"},Wt=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:B},null,-1),Xt={class:"text-[13px] md:text-[16px] lg:text-[16px]"},qt={key:0,class:"grid justify-items-center"},Gt=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:z},null,-1),Jt={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Kt={key:1,class:"grid justify-items-center"},Ot=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:A},null,-1),Pt={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Yt={key:0,class:"grid justify-items-center"},Zt=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:V},null,-1),te={class:"text-[13px] md:text-[16px] lg:text-[16px]"},ee={key:1,class:"grid justify-items-center"},se=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:I},null,-1),oe={class:"text-[13px] md:text-[16px] lg:text-[16px]"},le={key:0,class:"grid justify-items-center"},ne=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:$},null,-1),ie={class:"text-[13px] md:text-[16px] lg:text-[16px]"},re={key:1,class:"grid justify-items-center"},ae=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:Q},null,-1),de={class:"text-[13px] md:text-[16px] lg:text-[16px]"},ge={key:0,class:"grid justify-items-center"},ce=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:R},null,-1),pe={class:"text-[13px] md:text-[16px] lg:text-[16px]"},me={key:1,class:"grid justify-items-center"},he=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:H},null,-1),xe={class:"text-[13px] md:text-[16px] lg:text-[16px]"},be={key:0,class:"grid justify-items-center"},ue=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:U},null,-1),_e={class:"text-[13px] md:text-[16px] lg:text-[16px]"},we={key:1,class:"grid justify-items-center"},ve=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:W},null,-1),fe={class:"text-[13px] md:text-[16px] lg:text-[16px]"},ye={key:0,class:"grid justify-items-center"},ke=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:X},null,-1),Ce={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Te={key:1,class:"grid justify-items-center"},je=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:q},null,-1),Me={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Ne={key:0,class:"grid justify-items-center"},De=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:G},null,-1),Ee={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Se={key:1,class:"grid justify-items-center"},Le=t("img",{class:"h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6",src:J},null,-1),Fe={class:"text-[13px] md:text-[16px] lg:text-[16px]"},Be={key:1,class:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-16"},ze={class:"pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid category-tab-content"},Ae={class:"max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow"},Ve=["src","onClick"],Ie={class:"pt-[20px] pr-[20px] pl-[20px] leading-6"},$e={key:0,class:"fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines"},Qe={key:1,class:"fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines"},Re=["onClick"],He={class:"text-gray-700 text-[13px] truncate"},Ue={class:"flex fontcard font-[600] justify-between border-b-0 pb-1 border-b-gray-100 mb-1"},We={class:"flex items-center text-[14px] md:text-[12px] lg:text-[14px]"},Xe=E('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather h-4 w-4 feather-users mr-1 md:mr-1 lg:mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',1),qe={class:"w-full h-[5px] bg-gray-200 rounded dark:bg-gray-700 mb-2"},Ge={class:"fontcard flex mt-1 mb-0 pb-1 text-[14px]"},Je={class:"font-[600] text-[#222222]"},Ke={class:"text-[#222222] ml-1"},Oe={class:"sm:pr-2 md:pr-4 lg:pr-4 pb-4 pl-5 md:pl-4 lg:pl-5 pt-2 flex justify-between"},Pe=t("svg",{class:"fill-[#40b751] group-hover:fill-white",fill:"none",height:"17",width:"17",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 308 308","xml:space":"preserve"},[t("g",{id:"XMLID_468_"},[t("path",{id:"XMLID_469_",d:"M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"}),t("path",{id:"XMLID_470_",d:"M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"})])],-1),Ye=[Pe],Ze=["onClick"],ts={key:2,class:"text-center"};function es(e,s,c,_,l,a){const f=u("Navbar"),y=u("ShareNetwork"),k=u("Footer");return i(),r(b,null,[t("div",O,[h(f),t("div",P,[l.lang=="hi"?(i(),r("div",Y,tt)):l.lang=="gu"?(i(),r("div",et,ot)):(i(),r("div",lt,[t("p",nt,[g(n(e.$t("Join hands with"))+" ",1),t("span",it,n(e.$t("BestDeed Campaigns")),1),g(" "+n(e.$t("to help needy.")),1)])])),t("div",rt,[t("div",at,[t("div",dt,[t("div",gt,[ct,t("div",pt,[x(t("input",{class:"w-full text-md placeholder-gray-400 border-hidden text-gray-700 pr-2 !bg-transparent",type:"text",onKeyup:s[0]||(s[0]=o=>a.get_search_campaigns()),"onUpdate:modelValue":s[1]||(s[1]=o=>l.searchQuery=o),placeholder:e.$t("Search by Campaign/NGO")},null,40,mt),[[M,l.searchQuery]])])])]),t("div",ht,[x(t("select",{class:"cursor-pointer rounded-lg mt-0 border border-[#40b751] text-[16px] h-12 py-2 px-3 text-grey-darker !bg-transparent","onUpdate:modelValue":s[2]||(s[2]=o=>l.location=o),onChange:s[3]||(s[3]=o=>e.handleChange(o))},[t("option",xt,n(e.$t("Location")),1),t("option",null,n(e.$t("Ahmedabad")),1),t("option",null,n(e.$t("Rajkot")),1)],544),[[w,l.location]])]),t("div",bt,[x(t("select",{class:"cursor-pointer appearance-none rounded-lg mt-0 border border-[#40b751] text-[16px] h-12 py-2 px-3 text-grey-darker !bg-transparent","onUpdate:modelValue":s[4]||(s[4]=o=>l.selected=o),onChange:s[5]||(s[5]=o=>e.handleChange(o))},[t("option",ut,n(e.$t("All Types")),1),t("option",_t,n(e.$t("Urgent")),1),t("option",wt,n(e.$t("Newly Launched")),1),t("option",vt,n(e.$t("Closed")),1),t("option",ft,n(e.$t("Most Raised")),1)],544),[[w,l.selected]])])])])])]),t("section",yt,[l.searchQuery!=""?(i(),r("div",kt,[t("div",Ct,[(i(!0),r(b,null,v(l.filteredList,o=>(i(),r("div",{class:"",key:o,onClick:p=>a.donate(o.name)},[t("div",jt,[t("img",{class:"h-32 w-52",src:o.campain_image,alt:"Mountain",onClick:p=>a.donate(o.name)},null,8,Mt),t("div",Nt,[t("h3",Dt,n(e.$t(o.campaign_title)),1),t("p",Et,n(e.$t(o.ngo)),1)])])],8,Tt))),128))])])):m("",!0),t("div",St,[t("div",Lt,[t("ul",Ft,[t("li",{class:"-mb-px mr-3 last:mr-0 text-center",onClick:s[7]||(s[7]=o=>a.get_campaigns())},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==1,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===1}]),onClick:s[6]||(s[6]=o=>a.toggleTabs(1))},[l.openTab!==1?(i(),r("div",Bt,[zt,t("p",At,n(e.$t("All")),1)])):(i(),r("div",Vt,[It,t("p",$t,n(e.$t("All")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 text-center",onClick:s[9]||(s[9]=o=>a.get_campaigns("Animal Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==2,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===2}]),onClick:s[8]||(s[8]=o=>a.toggleTabs(2))},[l.openTab!==2?(i(),r("div",Qt,[Rt,t("p",Ht,n(e.$t("Animal")),1)])):(i(),r("div",Ut,[Wt,t("p",Xt,n(e.$t("Animal")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[11]||(s[11]=o=>a.get_campaigns("Education Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==3,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===3}]),onClick:s[10]||(s[10]=o=>a.toggleTabs(3))},[l.openTab!==3?(i(),r("div",qt,[Gt,t("p",Jt,n(e.$t("Education")),1)])):(i(),r("div",Kt,[Ot,t("p",Pt,n(e.$t("Education")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[13]||(s[13]=o=>a.get_campaigns("Children Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==4,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===4}]),onClick:s[12]||(s[12]=o=>a.toggleTabs(4))},[l.openTab!==4?(i(),r("div",Yt,[Zt,t("p",te,n(e.$t("Children")),1)])):(i(),r("div",ee,[se,t("p",oe,n(e.$t("Children")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[15]||(s[15]=o=>a.get_campaigns("Medical Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==5,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===5}]),onClick:s[14]||(s[14]=o=>a.toggleTabs(5))},[l.openTab!==5?(i(),r("div",le,[ne,t("p",ie,n(e.$t("Medical")),1)])):(i(),r("div",re,[ae,t("p",de,n(e.$t("Medical")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[17]||(s[17]=o=>a.get_campaigns("Hunger Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==6,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===6}]),onClick:s[16]||(s[16]=o=>a.toggleTabs(6))},[l.openTab!==6?(i(),r("div",ge,[ce,t("p",pe,n(e.$t("Hunger")),1)])):(i(),r("div",me,[he,t("p",xe,n(e.$t("Hunger")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[19]||(s[19]=o=>a.get_campaigns("Religious Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==7,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===7}]),onClick:s[18]||(s[18]=o=>a.toggleTabs(7))},[l.openTab!==7?(i(),r("div",be,[ue,t("p",_e,n(e.$t("Religious")),1)])):(i(),r("div",we,[ve,t("p",fe,n(e.$t("Religious")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[21]||(s[21]=o=>a.get_campaigns("Disability Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==8,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===8}]),onClick:s[20]||(s[20]=o=>a.toggleTabs(8))},[l.openTab!==8?(i(),r("div",ye,[ke,t("p",Ce,n(e.$t("Disability")),1)])):(i(),r("div",Te,[je,t("p",Me,n(e.$t("Disability")),1)]))],2)]),t("li",{class:"-mb-px mr-3 last:mr-0 flex-auto text-center",onClick:s[23]||(s[23]=o=>a.get_campaigns("Elder Campaign"))},[t("div",{class:d(["font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30",{"bg-white text-gray-500":l.openTab!==9,"rounded-t-3xl bg-[#40b751] text-white":l.openTab===9}]),onClick:s[22]||(s[22]=o=>a.toggleTabs(9))},[l.openTab!==9?(i(),r("div",Ne,[De,t("p",Ee,n(e.$t("Elder")),1)])):(i(),r("div",Se,[Le,t("p",Fe,n(e.$t("Elder")),1)]))],2)])])])]),l.campaigns!=""?(i(),r("div",Be,[(i(!0),r(b,null,v(l.campaigns,o=>(i(),r("div",ze,[t("div",Ae,[t("img",{class:"w-full h-52 cursor-pointer",src:o.campain_image,alt:"Mountain",onClick:p=>a.donate(o.name)},null,8,Ve),t("div",Ie,[l.lang=="gu"&&o.campaign_title_gu?(i(),r("div",$e,n(o.campaign_title_gu),1)):l.lang=="hi"&&o.campaign_title_hi?(i(),r("div",Qe,n(o.campaign_title_hi),1)):(i(),r("div",{key:2,class:"fontfamily cursor-pointer font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines",onClick:p=>a.donate(o.name)},n(o.campaign_title),9,Re)),t("p",He,[g(n(e.$t("Funds from"))+": ",1),t("strong",null,n(o.ngo),1)]),t("div",Ue,[t("p",We,[Xe,g(n(o.total_donor||0)+" "+n(e.$t("Donors")),1)])]),t("div",qe,[o.raised_amount?(i(),r("div",{key:0,class:"bg-[#40b751] h-[5px] rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md",style:N({width:o.raised_amount*100/o.donation_amount+"%"})},null,4)):m("",!0)]),t("div",Ge,[t("span",Je," \u20B9"+n(a.numberWithCommas(o.raised_amount))+" "+n(e.$t("raised")),1),t("span",Ke,n(e.$t("of"))+" \u20B9"+n(a.numberWithCommas(o.donation_amount)),1)])]),t("div",Oe,[h(y,{network:"WhatsApp",url:l.url+"/campaign-donation/"+o.name,title:o.campaign_title,description:o.short_description},{default:D(()=>[t("button",{class:"flex group rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600 text-sm md:text-xs lg:text-xs px-3 md:px-2 lg:px-6 py-2 md:py-2 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 md:mr-4 lg:mr-4 lg:mr-1 ease-linear transition-all duration-150",type:"button",onClick:s[24]||(s[24]=()=>{})},Ye)]),_:2},1032,["url","title","description"]),t("button",{class:"rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:p=>a.donate(o.name)},n(e.$t("Donate Now")),9,Ze)])])]))),256))])):m("",!0),l.last_campaigns==!1?(i(),r("div",ts,[t("button",{class:"mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600 text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:s[25]||(s[25]=o=>a.get_more_campagins())},n(e.$t("Show More")),1)])):m("",!0)]),h(k)],64)}var ns=j(K,[["render",es]]);export{ns as default};
