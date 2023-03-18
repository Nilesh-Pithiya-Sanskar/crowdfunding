import{N as _,F as x}from"./Footer.bbb3a78f.js";import{_ as h,o as i,c as l,k as c,e,b as p,n as b,z as a,A as r,F as y,r as g}from"./index.889b9342.js";const v={name:"Donation Campaign Request",components:{Navbar:_,Footer:x},data(){return{openTab:1,full_name:"",campaign_type:"",organisation_name:"",organisation_website:"",email:"",phone:"",campaign_story:"",social_media_page:"",beneficiary_group:""}},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:n=>{this.$toast({title:"Success",text:"Your Request is successfully sent to sadbhavna donatekart",customIcon:"check"}),this.$router.go()},onError:n=>{console.log(n),this.$toast({title:"Error",text:n,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{toggleTabs:function(n){this.openTab=n,this.tab=this.tabNumber},request_campaign(){this.openTab==1?this.campaign_type="NGO":this.campaign_type="Indivisual/Group",this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group})}}},f={class:"container mx-auto"},w={key:0,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[650px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('../../src/assets/Inter/img/bg-tree.png')"}},k={key:1,class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[300px] sm:h-0 md:h-0 lg:h-0 xl:h-[643px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('../../src/assets/Inter/img/bg-tree.png')"}},q={class:"container mx-auto h-full"},T={class:"w-full sm:pt-0 md:pt-5 lg:pt-12"},N={class:"container mx-auto py-0"},V={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},C=e("div",{class:"text-[24px] md:text-[30px] lg:text-[36px] py-8 px-10 text-gray-600 font-[200px] text-center"},"Donation Campaign request ",-1),U={class:"relative z-0"},F={class:"sm:p-10"},I={class:"flex mb-0 flex-wrap pt-4 ml-10 mr-11 pb-4 flex-row"},z={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},G={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},S={class:"px-4 py-2 flex-auto"},B={class:"tab-content tab-space"},D={class:"py-4 px-8"},E={class:"mb-4"},O=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},"Full Name",-1),R={key:0,class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"},M={class:"mb-4"},P=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Name",-1),A={class:"mb-4"},W=e("label",{class:"block text-gray-600 text-base mb-2"},"Organisation Website",-1),Y={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"},j={class:"mb-6"},H=e("label",{class:"block text-gray-600 text-base mb-2"},"Phone",-1),J={class:"mb-6"},K=e("label",{class:"block text-gray-600 text-base mb-2"},"Email",-1),L={class:"mb-6"},Q=e("label",{class:"block text-gray-600 text-base mb-2"},"Social Media Page",-1),X={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"},Z={class:"mb-6"},$=e("label",{class:"block text-gray-600 text-base mb-2"},"Campaign Story",-1),ee={class:"mb-6"},te=e("label",{class:"block text-gray-600 text-base mb-2"},"Beneficiary Group",-1),oe={class:"mb-6"};function se(n,o,ae,re,t,d){const m=g("Navbar"),u=g("Footer");return i(),l(y,null,[c(m),e("div",f,[t.openTab==1?(i(),l("div",w)):p("",!0),t.openTab==2?(i(),l("div",k)):p("",!0),e("div",q,[e("div",T,[e("div",N,[e("div",V,[C,e("div",U,[e("div",F,[e("ul",I,[e("li",z,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==1,"text-white bg-[#40b751]":t.openTab===1}]),onClick:o[0]||(o[0]=s=>d.toggleTabs(1))}," NGO ",2)]),e("li",G,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":t.openTab!==2,"text-white bg-[#40b751]":t.openTab===2}]),onClick:o[1]||(o[1]=s=>d.toggleTabs(2))}," Individual Group ",2)])]),e("div",S,[e("div",B,[e("div",D,[e("div",E,[O,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":o[2]||(o[2]=s=>t.full_name=s),type:"text",required:""},null,512),[[r,t.full_name]])]),t.openTab==1?(i(),l("div",R,[e("div",M,[P,a(e("input",{class:"appearance-none border-gray-300 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>t.organisation_name=s),required:""},null,512),[[r,t.organisation_name]])]),e("div",A,[W,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.organisation_website=s),required:""},null,512),[[r,t.organisation_website]])])])):p("",!0),e("div",Y,[e("div",j,[H,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[5]||(o[5]=s=>t.phone=s),required:""},null,512),[[r,t.phone]])]),e("div",J,[K,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email","onUpdate:modelValue":o[6]||(o[6]=s=>t.email=s),required:""},null,512),[[r,t.email]])]),e("div",L,[Q,a(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text","onUpdate:modelValue":o[7]||(o[7]=s=>t.social_media_page=s),required:""},null,512),[[r,t.social_media_page]])])]),e("div",X,[e("div",Z,[$,a(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[8]||(o[8]=s=>t.campaign_story=s),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",required:""},null,512),[[r,t.campaign_story]])]),e("div",ee,[te,a(e("textarea",{id:"comment",rows:"4","onUpdate:modelValue":o[9]||(o[9]=s=>t.beneficiary_group=s),class:"hover:border-[#40b751] w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",required:""},null,512),[[r,t.beneficiary_group]])])]),e("div",oe,[e("button",{class:"appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] text-lg uppercase rounded",onClick:o[10]||(o[10]=s=>d.request_campaign())},"Submit")])])])])])])])])])])]),c(u)],64)}var le=h(v,[["render",se]]);export{le as default};
