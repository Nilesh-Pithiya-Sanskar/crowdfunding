import{_ as m,z as x,A as b,C as v,o as i,c as l,e as t,F as w,g as u,t as s,v as j,n as p,p as h,u as c}from"./index.3dde81a1.js";const I={name:"AutoSlider",props:{featured_campaigns:{type:Array,required:!0},interval:{type:Number,default:4e3},lang:{type:String,required:!0}},setup(e){const d=x(0),n=x(0);let A=null;const o=()=>{n.value=document.querySelector(".slider").offsetWidth},r=()=>{d.value=(d.value+1)%e.featured_campaigns.length},a=()=>{A=setInterval(r,e.interval)},g=()=>{clearInterval(A)};return b(()=>{o(),a()}),v(()=>{g()}),{currentSlide:d,slideWidth:n,updateSlideWidth:o}},methods:{donate(e){this.$router.push(`/campaign-donation/${e}`)}}},O={class:"slider"},y={class:"grid pl-[20px] pr-[20px] pt-[20px] pb-[10px] sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4"},M={class:"md:col-span-2 lg:col-span-1"},D=["src","onClick"],T={class:"md:col-span-2 lg:col-span-3"},B={class:"fontfamily fontcolor h-[160px]"},k={class:"bg-[#364958] text-[14px] rounded-lg pl-4 pr-4 pt-0 pb-0 text-white mb-2"},N={key:0,class:"leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold truncate-2-lines-card mb-1"},z={key:1,class:"leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold truncate-2-lines-card mb-1"},G={key:2,class:"leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold truncate-2-lines-card mb-1"},U={key:3,class:"text-[#000000] truncate-3-lines text-justify opacity-6"},P={key:4,class:"text-[#0000000] truncate-3-lines text-justify opacity-6"},E={key:5,class:"text-[#000000] opacity-6 truncate-3-lines text-justify"},Y=["onClick"];function V(e,d,n,A,o,r){return i(),l("div",O,[t("div",{class:"slides",style:j({transform:`translateX(-${A.currentSlide*A.slideWidth}px)`})},[(i(!0),l(w,null,u(n.featured_campaigns,(a,g)=>(i(),l("div",{key:g,class:"slide"},[t("div",y,[t("div",M,[t("img",{class:"h-60 md:h-52 lg:h-58 w-full object-cover rounded-[10px]",src:a.campain_image,alt:"Mountain",onClick:f=>r.donate(a.name)},null,8,D)]),t("div",T,[t("div",B,[t("button",k,s(e.$t("Featured")),1),n.lang=="gu"&&a.campaign_title_gu?(i(),l("div",N,s(e.$t(a.campaign_title_gu)),1)):n.lang=="hi"&&a.campaign_title_hi?(i(),l("div",z,s(e.$t(a.campaign_title_hi)),1)):(i(),l("div",G,s(e.$t(a.campaign_title)),1)),n.lang=="gu"&&a.short_description_gu?(i(),l("p",U,s(a.short_description_gu),1)):n.lang=="hi"&&a.short_description_hi?(i(),l("p",P,s(a.short_description_hi),1)):(i(),l("p",E,s(a.short_description),1))]),t("button",{class:"text-[#40b751] font-bold hover:underline md:h-[60px] mb-3 md:mb-0 underline text-[18x]",type:"button",onClick:f=>r.donate(a.name)},s(e.$t("Donate Now")),9,Y)])])]))),128))],4)])}var le=m(I,[["render",V]]),F="/assets/sadbhavna_donatekart/frontend/assets/kunj.7c6535a3.png",Q="/assets/sadbhavna_donatekart/frontend/assets/sahil.a104508b.jpeg",q="/assets/sadbhavna_donatekart/frontend/assets/jay3.c29d08e2.jpg",Z="/assets/sadbhavna_donatekart/frontend/assets/cropped-logo-goshala.67ae21ed.png",R="/assets/sadbhavna_donatekart/frontend/assets/sadbhavna_vru.13f59823.jpg",W="/assets/sadbhavna_donatekart/frontend/assets/chinmaylogo-150x150.8ec8521a.jpg";const C={name:"Testimonials",data(){return{openTabTestimonials:3}},methods:{toggleTabsTestimonials:function(e){this.openTabTestimonials=e}}},K={class:"bg-[#ebf8ec] testimonial-wrap pt-5 pl-5 md:pl-5 lg:pl-0 pr-5 md:pr-5 lg:pr-0 lg:!pt-[5rem]"},X={class:"responsivesection container mx-auto h-full"},H={class:"flex flex-wrap justify-between items-center lg:mb-10 mb-5"},J={class:"fontfamily text-center mt-0"},S={class:"text-[20px] md:text-[24px] lg:text-[30px] pt-0 font-black text-[#40b751] mb-0"},L={class:"flex mb-0 list-none flex-wrap pt-2 md:pt-0 lg:pt-0 flex-row"},_={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},$=t("i",{class:"fas fa-cog text-base mr-1"},null,-1),tt={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},et=t("i",{class:"fas fa-cog text-base mr-1"},null,-1),st={class:"flex"},at={class:"overflow-x-auto"},ot={class:"flex mb-4 list-none pt-3 pb-0 overflow-x-scroll overflow-y-hidden custom-scrollbar scrollbar-thin"},it={class:"mb-2 break-words pr-4"},lt={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},dt=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+F+'" class="rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),nt={class:"text-justify"},rt={class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"},At={class:"text-[14px] md:text-[14px] lg:text-[16px] leading-3 text-[#364958] text-opacity-60"},ct=t("i",{class:"fas fa-map-marker-alt text-lg text-blueGray-400"},null,-1),ht={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},pt={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"},gt={class:"mb-2 break-words pr-4"},xt={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},mt=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+Q+'" class="rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),ft={class:"text-justify"},bt=t("div",{class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"}," Sahil Patel ",-1),vt=t("div",{class:"text-[14px] md:text-[14px] lg:text-[16px] leading-3 text-[#364958] text-opacity-60"},[t("i",{class:"fas fa-map-marker-alt text-lg text-blueGray-400"}),h(" Developer ")],-1),wt={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},ut={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"},jt={class:"mb-2 break-words pr-4"},It={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},Ot=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+q+'" class="rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),yt={class:"text-justify"},Mt={class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"},Dt={class:"text-[14px] md:text-[14px] lg:text-[16px] leading-3 text-[#364958] text-opacity-60"},Tt=t("i",{class:"fas fa-map-marker-alt text-lg text-blueGray-400"},null,-1),Bt={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},kt={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"},Nt={class:"flex"},zt={class:"overflow-x-auto"},Gt={class:"flex mb-0 list-none pt-3 pb-0 overflow-x-scroll overflow-y-hidden custom-scrollbar scrollbar-thin"},Ut={class:"mb-2 break-words pr-4"},Pt={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},Et=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+Z+'" class="rounded-full align-middle border-none absolute -m-14 object-center h-20 max-w-150-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),Yt={class:"text-justify"},Vt={class:"h-[55px]"},Ft={class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"},Qt={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},qt={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"},Zt={class:"mb-2 break-words pr-4"},Rt={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},Wt=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+R+'" class="rounded-full h-30 align-middle border-solid border-2 border-green-600 absolute -m-14 object-center max-w-100-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),Ct={class:"text-justify"},Kt={class:"h-[55px]"},Xt={class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"},Ht={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},Jt={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"},St={class:"mb-2 break-words pr-4"},Lt={class:"px-4 rounded-lg shadow-lg bg-white mb-6 mt-12 cardsize"},_t=c('<div class="flex flex-wrap justify-center"><div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"><div class="relative"><img alt="..." src="'+W+'" class="rounded-full h-30 align-middle border-none absolute -m-14 object-center max-w-100-px"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"><div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"></div></div><div class="w-full lg:w-4/12 px-4 lg:order-1"></div></div>',1),$t={class:"text-justify"},te={class:"h-[55px]"},ee={class:"text-[18px] md:text-[20px] lg:text-[20px] leading-7 font-semibold text-gray-600"},se={class:"h-[250px] pb-5 mb:pb-0 lg:pb-0 no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4"},ae={class:"text-[16px] md:text-[16px] lg:text-[16px] leading-7 text-blueGray-600"};function oe(e,d,n,A,o,r){return i(),l("section",K,[t("div",X,[t("div",H,[t("div",J,[t("h3",S,s(e.$t("Testimonials")),1)]),t("ul",L,[t("li",_,[t("a",{class:p(["text-[16px] transition ease-in-out delay-100 px-[10px] md:px-[24px] lg:px-[40px] py-[5px] md:py-[8px] lg:py-[12px] rounded block leading-normal cursor-pointer border border-[#40b751] text-[#40b751]",{"bg-transparent":o.openTabTestimonials!==2,"bg-[#40b751] text-white":o.openTabTestimonials===2}]),onClick:d[0]||(d[0]=a=>r.toggleTabsTestimonials(2))},[$,h(" "+s(e.$t("Donors")),1)],2)]),t("li",tt,[t("a",{class:p(["text-[16px] transition ease-in-out delay-100 md:mt-0 lg:mt-0 px-[10px] md:px-[24px] lg:px-[48px] py-[5px] md:py-[8px] lg:py-[12px] rounded block leading-normal cursor-pointer border border-[#40b751] text-[#40b751]",{"bg-transparent":o.openTabTestimonials!==3,"bg-[#40b751] text-white":o.openTabTestimonials===3}]),onClick:d[1]||(d[1]=a=>r.toggleTabsTestimonials(3))},[et,h(" "+s(e.$t("NGOs")),1)],2)])])]),t("div",{class:p({hidden:o.openTabTestimonials!==2,block:o.openTabTestimonials===2})},[t("div",st,[t("div",at,[t("ul",ot,[t("li",it,[t("div",lt,[dt,t("div",nt,[t("div",rt,s(e.$t("Kunj Popat")),1),t("div",At,[ct,h(" "+s(e.$t("Assistant Manager")),1)]),t("div",ht,[t("div",pt,s(e.$t("I have always wanted to help those in need, but I never knew how to do it effectively. Best Deed has made it so easy for me to make a contribution through their platform. I love that there is 100% transparency in the whole process and I\u2019m donating and they are donating the products to the ones in need. Thank you, Best Deed!")),1)])])])]),t("li",gt,[t("div",xt,[mt,t("div",ft,[bt,vt,t("div",wt,[t("div",ut,s(e.$t("I recently donated through Best Deed and was blown away by how simple and easy it was. They have listed the products the NGO needs and I know exactly what I was contributing for! I was able to make a donation to a cause I care about. I appreciate the transparency of the platform and knowing exactly where my donation is going. Once, I visited there to volunteer with them and enjoy every bit of my time there.")),1)])])])]),t("li",jt,[t("div",It,[Ot,t("div",yt,[t("div",Mt,s(e.$t("Jay Bhatt")),1),t("div",Dt,[Tt,h(" "+s(e.$t("It Recruiter")),1)]),t("div",Bt,[t("div",kt,s(e.$t("I was hesitant to donate to a crowdfunding platform at first, but Best Deed has completely changed my mind. The platform is user-friendly and the payment process is also quite secure. I highly recommend Best Deed to anyone looking to make a positive impact.")),1)])])])])])])])],2),t("div",{class:p({hidden:o.openTabTestimonials!==3,block:o.openTabTestimonials===3})},[t("div",Nt,[t("div",zt,[t("ul",Gt,[t("li",Ut,[t("div",Pt,[Et,t("div",Yt,[t("div",Vt,[t("div",Ft,s(e.$t("Vallabh Goshala")),1)]),t("div",Qt,[t("div",qt,s(e.$t("We are so grateful for the products we have received through Best Deed to nurture the lives of mentally retarded childrens at Chitransh. The platform has made it so easy for people to donate  and support our cause by offering us the right products. We appreciate the transparency of the platform, and it has been a pleasure to work with their team. Thank you, Best Deed, for helping us fulfill the requirements by donating necessary products!")),1)])])])]),t("li",Zt,[t("div",Rt,[Wt,t("div",Ct,[t("div",Kt,[t("div",Xt,s(e.$t("Sadbhavna Vrudhashram")),1)]),t("div",Ht,[t("div",Jt,s(e.$t("As an NGO, it can be challenging to find the funding for the necessary items required at Sadbhavna Vrudhashram to fulfill requirements of elderly people. Best Deed has been proved to be a game-changer for us. Their platform has helped us reach a wider audience and receive donations we wouldn't have been able to otherwise.")),1)])])])]),t("li",St,[t("div",Lt,[_t,t("div",$t,[t("div",te,[t("div",ee,s(e.$t("Chinmay Organization")),1)]),t("div",se,[t("div",ae,s(e.$t("Working with Best Deed has been an excellent experience for our NGO. They have helped us raise funds to fulfill the requirements of our NGO, and we have seen a significant impact on our ability to carry out our mission. The platform is also easy to use, and their team is always available to provide support. We highly recommend Best Deed to other NGOs looking to avail products.")),1)])])])])])])])],2)])])}var de=m(C,[["render",oe]]),ne="/assets/sadbhavna_donatekart/frontend/assets/home-banner-icon-100.5f25a98b.svg",re="/assets/sadbhavna_donatekart/frontend/assets/home-banner-icon-verified.3c1645fb.svg",Ae="/assets/sadbhavna_donatekart/frontend/assets/home-banner-icon-tax.4d15fd70.svg",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBAwFKSl4/F2OAAACMklEQVRo3mNgGAWjYBSMglEwCoYMCA1ZtTI0hI0tNHTVqtBQZmZKzWMaaA8RCxxm7LAIjMjOfrWaV+SPxadPr014Xf5kvX7tcHQnX4BhcDC55jIOtMcIAU+Vbbc8VdjZv91mfMyR8fEjoyPDL4aj7OxIPrjH4PbnD0P1/1uMZ2JiDrh4TVw3d+VKYs0f9CmAx/DLBR7DP38YuxgMGYy/fcNQ8J9BiWEXCwtDK6Paf5MlSxz2bMsPSg4PHzYBsHp1WNjq1X//MtgwKfwvSk2FxziVAmLQZwF0YP9/260gj5AQRifG3f/9ly+Hexw9PPYzqDN8/vuXgYHhxP/chISDjJ5RG/yXLBnyAUDtgBiyAUCtgGB0uLUjMPC1t/d/VYZL/9/MnMno+H8KY5W09EB7jGYAWob83/f/wr+M0FBGB/ftlwKNHj9m+MnwlEFeRmag3Uc3wM4gzfDwyZNBXwvQDHgyrGOI+f+f6f+N/x3/y9LSYCEy0O6iOYBlgfz/T/8V5uUN/ULQbvu2wIDQUEZmhvsM7suWESoEGbf8/8MQEB9/wNdLbX3O0qVDNgAo9ThMfsgFALU8DgNDphCE9foIeRyWxxn3/p/IKB8djcvjCOWDHMD6/a/f8038I/TmDcOf/zUMrwQEcHmc1F7hoE8BX87zGHw5z8Lyf/f/JgZVTk5qeXzIAUeT7d1BMllZ9v+37w3s+fHDoXP7u8D9795ROiAy5AC1h8RGwSgYBaNgFIxkAAAUQkvGjgyF0gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xMlQwNTo0MTo0MSswMDowMLyDhpEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTJUMDU6NDE6NDErMDA6MDDN3j4tAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTEyVDA1OjQxOjQxKzAwOjAwmssf8gAAAABJRU5ErkJggg==",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMFSURBVFiFvZdbiJVVFMd/a7yhD5o3vIZBoMigMSA5opAPImj54oOVhEhYIUQUKfhQKaQvggq9RJIM3kC6DPogKamFeVQChZGmnGq66JQVeSPFpgZ+PXz74OmkM9+59YcDZ6+9v7V+fHuttfcHFUgdqm5Sf1KvqSfVOZX4KFdUCPA6MBP4C7gAdADvAi0RcaMagKYK188G9gLfAk0RcRz4DJhXTfBqAM4B7wOrge5kuwU8UC1ARVLHqT3qgjQeqX6jPvx/AUxQD6u31a/Vy+rLtfjMvQXqeOB0+q0EjgAC52sByF0F6lvAr8AhYC3wBVklbI2I+bVA5Ak+SP1FHaN+rz6rfqquVX9uaPAE8IhaUIckkFHqNPU39btafA/OuW4W0BERf6ttwDaynjAO+LMWgLxJ2Ax0pv+bgSeBUcAMQHVWLRADSv1QXVQyXqZ+nnJjceoNp9U31dZGABTU5jLbAXVPakZNaov6qnpO3VBvgG51bJlteErIq+qx4jak5OzI6ztXH1D7yHpAucYC04EHgYvAo2RnRS9QAHZExCf9+c5bBb3AFaCvzH4HaI2I99L4I3VqAnsI2KUuiYiunHHuLbVd3XkP+yL1RD/PvaG+1J/vvGW4E1ilLiyzHwemqDPu89wfwOh6ABwFrgH71dlFY0RIdiN6Pqef6gBSoHbgA6BdnVwy3QY8pQ5vGEBSARgCbAEOqyMT3O9kR/TiRgPMBS5GRBtwkGz/izoKLGwYQGpCK4A9yXQEaFanpfGPwJSGAQAvAntLrt7rgS5gahr3AsOqARiwEakjgOfIuhzqdGAOd09HgC/JkrFi5XkDrwEnI6J481kHbCe7DxZ1HThbdwB1MLAGWKF2qiuBpcCusqWtwNt1BwCeAE6RJVgXWRIei4jbwETgHfUMWadsSBL2AeOByRGxnGyfC2muF+gh+0z7CphUUhX1k/pMev0fqy+oPyT7IfWxknVPq5dKu6T6irqxP/8DVkFE7FP3A4+TJWBPmtoNHFDLy28MUEzYm/w7Wf+jfwDQZM45Mz5u8AAAAABJRU5ErkJggg==",pe="/assets/sadbhavna_donatekart/frontend/assets/fifthimage.d76c29af.png",ge="/assets/sadbhavna_donatekart/frontend/assets/firstimagedonor.acbe1779.png",xe="/assets/sadbhavna_donatekart/frontend/assets/secondimagedonor.71af6944.png",me="data:image/png;base64,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",fe="data:image/png;base64,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",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACHCAYAAADjqTAVAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADpFJREFUeJztnX+MXFUVxwsoQSgtU0BDNAZXoxKlghv+EIKgGUsRxYZktSnUQCYsmsgvEQfwD7TVvCFK/MdAtlFEgj9YJcFAhTpFuwQIkkGQ8KvKJIKkgJJNKIKAhvWcmXOmZ+/ee+fe9968Nztzvsmnnffj3nvufd+578fOnFmxYsw0Nze3P/AZ4EfAQ8BeYKFk9lIsGNM64ICyx0mVUXAQ9wPOBZ4GngWuBT4PfAA4rGQmgDOAHwDPUIw1jLnscVOlEBy49wD3AG1gI85yZcfkEs3AXyTT3Qu8t+yYVBGCA3Y88CKdrg4qO55QYawU87+Aj5cdjypAcKA+TAfs0rJjSSuI/SLgJeCYsmNReQQH6GDgcWBL2bFkFfYBeApYWXYsKofg4DTmuhra67VQ0XXdH4Dvlx1L7qrVanWgIcDlyRzr79SZV302wYE5CngN+Ghs2RNPOrkKNIg6MJF3fFx/TBm6PMA+vTvveKT4+DvW18Vyw2AaqPSrx9ZgC1iwMJ1DZypUVytrXT7BQfkO8OvYcmCCGWDBYB6Nl1dsUFdF1F3pX2KfoE+zwHfzisUmcfwrlvUtel1xeKQNTPjq8TZIVG0mwYqBKW5ArJcur8rZ0WU4bitybJyCg/JX4PSYMjSb9QwGTNFMxOsqxv64fcnMz/vhNjk70sw5mdFwpwF/iykTq0jDtYRP6rRu1ldPUIPk3JZYnjGcPWMJpOnbTsuTwDwHnseA4SkHeD32EQgc/DaZYNpYj7NeCw1Gy3UyIJumzcaj/XDdLP3fIIO1xP6NDIbDRyX/GeSzuVjDie3msY02HJ+bZ8lwk7R9ikxSp0bYfFPGVFundVxf1fLOaBN5zm44CzwcUyZ01qEZaoEMNC3M06TtbKx5MuqUMF+L9m+lNRz1D/8E9tnYcqHKYLhJWtf01eNrsEWwKeQFY0WcUhvCoLZApi2G5LrnaznekKDoz1e/jSkTc5qjfSeMU26LtrGZpsX+PBtWaXkyo+FuA86LLReqSMO1xaQ0XxPX+llPqXx6nCR4eb62eEa0GW7KMQNy+dxmNxQcjK/E3jAYhpswtlXJXBO0X9O4obAZbspSb8W1LrJ/Pwe+FlsuVJGG4+PPl1BT/eoJatA4bbLZqrSNDRVjuLaY+Zo5jVVHcDDOAX4XW04YaUasq4hrO35cskCnywoZ0Wk4WtcrT8tZZ7jtwObYcqESx1/e7E3I42o7zp56oq/hZsjJ89RQUxhIznYxhuPAe6fjzCNFgoNxcpo7OTJCb8Yi2Cx8jSYNt+j6jLbbDDcj6szjGm43cEpsuVCJiaAtPNA2TpcDMZykVdt30zApAkATzqY1nNFeNfNoregckEOB/wJHxpYl08lTZm82o+2uO06f4czTcD2t4aBPh1PfVsf2LUa17g3fvDj+nZtEsT0/w4kKezj2qcr9ba/TbM9D9FGk89OWJ5NMugwht5n7eMpUDOOmmd3OA+6LLZdWNLlYb+pCjlnex3VoRR9efKjsOPIW9OlPwAVlx6EyRA9I9wBnlR1LXoK+fAF4HnhH2bGoLIIDczbwHLCm7FiyCvsA/AP4ctmxqDyCA/Qr4G7gwLJjSSuMHWgCvyk7FlUf0Ycw78fncsAhZccTK4yZnrs9gH0pOx5VgOgxyQ769O+y+W4AxkoxY+yryo5HFSE4YAcAVwL/Bm4EPlZ2TC5BbGspRoz1qjn9juryFX6sB7gOeBl4ArgeuBDYBGwoiU0Uw/UU016KUb8eOCrCRwvA+rnul1PwxuIuYFdJYNu3AFuB0/Wxh0qlUqlUKpVKpVKpVCrV6CppNFYBVwP3A48oSo6gp9Bbq9hshwNPAm8BfwRuVJQc2ZV0vYUeO3wF/LMNeB0Y2BczVOMt9BZ5bBsuzAM/Ljso1WgLPYZewxcLwNfLDkg12kKPodfYcJeUHZBqtIUeU8OpCpMaTlWoogwH2w8EDkvBoUV1SDXcCjIcrF8D3EXPURZS8hxwRtEdVA2XQg03A7wBfI8KxHIZ8CjwSsJPmg1ROolpwkzfOiG2memjqrR+KrQ+Y78p2qcaWt7Vpq++rOXTjEFE+TRj4KzPp1DD/RnYHlqpo47TqY3jzG0UfJuSpfD/nDSnaqzvZcqs7csny9tm+9VntDsr9lngRC194rG26avPaDO6fJoxMNr0lU8zBs76AnwQZLhHyXTnZqDhMVyDAufM19gBmbJT5gLmNK4VKsN5g3ngq776RJuczYlTT/HAV1zl+7TprE+0map8mjEw+uoqHz0GvvryNNwTGa7dTGyG66R0Fcsz/K6RAyo6PmMZLE6WN+2qz2iTc9LxgHI+tAlPPL42nfWJetKU54TbUWMg9vWNYZoxcNZn846pUMPhX/u3p7xDZT7nMRwGLE8tnPxwybuH9m3JA2IMdsNTn5nNUw6ozEHsKl/3tOmsz7Iupjy3GTUGYt8JT/k0Y+A8Jkuds1QxhrstpEJPQ6d6DNc0Os4Z033vTv7dCH5380BMu+oz2uQDOWEue+LxtemsT9STprxvhnPWJ/b1jWGaMShshhuk4bijnL5VXpc0xTurdwoRHW/SAPWuOXz1iTb5YDXEALd88fRp01mfaDNV+TRjYLTrKh89Br76An1QvuGoE5yylVO78ruOryd4m5zm+W7Jlg7UWp/RZt0oX+1Xvk+bzvoCY7aWTzsGYh9f+TRj4Kyvn6INB/9vSfp/uvNDwKFi+fJ+hqOO+FJ7Vh2m4Z9lsqVwddaXpXyfMs5tWcunGYOs5dMcE5/SGO4ifN2H9wGHiOVaiOFUo69Qwz0A3JuxobOpjWOz1KNa3go13Ddp+8NJ97PpscwBrwK7AU07NcYKNdz+wKXAzpSGQ24ANPXUmCvIcCpVXlLDqQqVGk5VqEzDXV52QKrRFj2T7RhuDxD1+6IqVazQY+g1fJHQLHc+sF/ZgalGS+gp8hZ6LMEVBwG/pxV7+vzpSlFiQU+ht9BjB7EL8XnbRuCnSf8/XylKDOgp9Nb+JU+2KpVKpVKpVCqVSqVSuQS3rUcBXwIuTtKldVAUE/QSeuoo02xXAG8m+X3pWVEk6K0r2Gz8EfBZYG2S7UvP48K9RNlxLAfQU+gt9NjZaLjHgAcT/Qh4sBL6NHPZcSwXobfIY4/xx5O+VXZQy0lquHihx4C39AOYKaSGi1fSvYnQT/ymURrDwf4HA8cmY/qFIjVcBsUYjq5fvg28luy7a8PrmWMGHOZQKdhwsO1twEnABmBr0v2e6cW0bANzys3R6/XAO4vsWBGKNNxWGuNfAmcBFwIvAC+O4ti4FGS4pPsw+PEk2zMYzBG8uegODlKhhku6v9KIvzF1k7H+I8D/gC0BdfwQuDJDuEOhUMPdQKeCTcBxwFeT7ic4z6JlG/h86lZ6jTPjPVTHalsbtRwSGNe6aadySdQcogjDfYLG9zTLNjyt3hlQxyNApgxWw6BQw2F+3zsyNpR7UmmjDk7GN2msj07UHNGnUMNxIp9TM9QxVob7S9L9LPrRGdjoMVzmBMaU58zMchmdqDly8JxmSbpfGjklWZxQu5EsTbb9FIGv8e+N73LU5zQc9XOG+iezYTaM/TiRdN3IA7dk30Ep1HBDl1TaUgcO9qyxLjpRc+Tg+Qx3S8rx2QssycfmMhwZiPMP16kfMsM5JzXsLdO4NEUdi5YHqVDDDTptfqYExmIwp4310YmaIwfParik+5wN+3pN0s2VF3oWmAT+iWa11OkyXMvoR1VcNjR55pJnAHE5wb/V0I6d3dMq1HCZrx+SnJNKG+U5V615sxGdqDmyTy7DOa/ZMtS55BiYs5gpmv3YZE3DmC0+tUrzDVrDYrhMCYxrlus3Wh+dqDmyT6UaDkVvFHM8eOZiQ/Jpd1LsU+cZsBaRozerhsJwqFqGBMa03XrRW0uRqDmiT8NguBkyTkUsy8sT/t0K85d42Ixt1ww5CA2N4VC19EmlO+9iT73RiZpDNCSG45mbzbMoY7uY5W139osuZYrQUBkurdIaJquGwXCsPm9W6/jQG7GQazfWSBiuLA2T4ZaLQg2HyaRvz9jQaWq4THWOleFuTroPJNcl6f7KgD8UckfS/RLFmqI7OSip4eIVarj3J92fEM/yFwb8+fKLi+7gIOUxxyepz+tT1Il/zN9pWT8+hqMdVybdz7adm4JzgA8W2bEi5DHcamAeeAb4GXBjILfTcbjKUueZwKcL6dgAFWw41VK5DEfbTgTuBv4ewZNJ989hby+4K4VJDZdBPsOp7JKGw0/kXlN2QMtJarh40Qz+Br7YATwPHFl2UMtFarg4obfIYztw4fik+xHwZ4ErU94cjBvyw5OKH8xbg95Cjx3PDjwBuD/J78OWiiJBb51gm/rwW0ZHK0qOrCr6FK5SqVQqlUqlUqlUKlWkPnXnhiOAzcAlipIj6KkjTLOtA14BFhRlAKC31rHZVgIvDUFQymiDHluJhqsOQTDKeFBFw20YgkCU8WCDGk4pEjWcUihqOOSC+y5b+MaDVy/Cta9tnzN3ntNbh69dZWzbxgw1HNJ66ZEFU3vffGVh2+6bFu23ae6CRfvgMm/b/fLTnXW/aN+6qMy1j13Xq08Np4brwIa7/dkdHZPtev6+nqnQMLwfbpOShsQZzDQiGgyNZtYzxqjhEDacPE3iTIXCbbyOZzE2JC7b6kHj4jIbdM+rL5TexyFBDYfYDMdmYcPhdZ6cwWynVbke9+fZzXdNOGao4RDTcGgcns14tuIZD2c3XOZZzrzO4/3YbHKGVNRwHWw3DWwansHwtCivxfhmwDytyus2cwZU1HAd2HBoHnyN4MzFd5XydGoTbpf12a7/lA5qOMR2DSdhA+Esx4ZEeNYzH4WY139KDzUc0s9w5umU4dOqeReqhnOihkN8hpPP18wHt/Ku1HeHq/RQwymFooZTCkUNpxSKGk4pFDWcUigdw60dgkCU8WAtf3OrOQTBKKNNU34vdTXwE+C1IQhMGS3QU+it1ei1/wP0+OLbZCAcLgAAAABJRU5ErkJggg==",ve="data:image/png;base64,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",we="/assets/sadbhavna_donatekart/frontend/assets/imagesecondngo.9e6b415b.png",ue="/assets/sadbhavna_donatekart/frontend/assets/imagethirdngo.8ced8894.png",je="/assets/sadbhavna_donatekart/frontend/assets/imagefourthngo.64c9185c.png",Ie="/assets/sadbhavna_donatekart/frontend/assets/imagefifthngo.f5b18148.png",Oe="/assets/sadbhavna_donatekart/frontend/assets/cmo-gujraat-logo.c2263164.png",ye="/assets/sadbhavna_donatekart/frontend/assets/divyabhaskar.c814a014.png",Me="/assets/sadbhavna_donatekart/frontend/assets/mainlogo_gujrati.6033871c.png",De="/assets/sadbhavna_donatekart/frontend/assets/zee5.00342421.png",Te="/assets/sadbhavna_donatekart/frontend/assets/NEW-Abtak-rr-logo-png-1.1500a651.png",Be="/assets/sadbhavna_donatekart/frontend/assets/images.5753159e.png",ke="data:image/png;base64,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",Ne="/assets/sadbhavna_donatekart/frontend/assets/am-logo.b9d3834c.png";export{le as S,de as T,Oe as _,ye as a,Me as b,De as c,Te as d,Be as e,ke as f,Ne as g,ce as h,he as i,ge as j,xe as k,me as l,fe as m,be as n,ve as o,we as p,ue as q,je as r,Ie as s,ne as t,re as u,Ae as v,pe as w};
