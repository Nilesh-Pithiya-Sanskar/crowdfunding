import{N as x,F as E}from"./Footer.068121ad.js";import{_ as v,D as w,o as p,c as d,k as m,e,t as i,n as b,p as l,C as a,E as n,J as u,b as h,F as k,r as c}from"./index.4f16c8b3.js";const N={name:"Donation Campaign Request",components:{Navbar:x,Footer:E,Dialog:w},data(){return{openTab:1,full_name:"",full_nameig:"",fullNameError:"",fullNameErrorig:"",campaign_type:"",campaign_typeig:"",organisation_name:"",organizationNameError:"",organisation_website:"",email:"",emailError:"",emailErrorig:"",phone:"",phoneError:"",phoneErrorig:"",error:!1,campaign_story:"",campaignStoryError:"",campaignStoryErrorig:"",social_media_page:"",beneficiary_group:"",beneficiaryGroupError:"",beneficiaryGroupErrorig:"",phoneig:"",emailig:"",social_media_pageig:"",campaign_storyig:"",beneficiary_groupig:"",showDialog:!1,fcra_registered:"",fcra_registeredError:""}},created(){document.title=this.$t("Request a Campaign on BestDeed, the Trusted, and 100% Transparent Crowdfunding Platform  | BestDeed"),this.$nextTick(()=>this.$refs.fullname.focus())},mounted(){this.$nextTick(()=>this.$refs.fullname.focus())},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:s=>{this.showDialog=!0},onError:s=>{console.log(s),this.$toast({title:"Error",text:s,icon:"x-circle",appearance:"denger",position:"top-center"})}}}},methods:{resetForm(){this.full_name="",this.organisation_name="",this.organisation_website="",this.phone="",this.email="",this.social_media_page="",this.campaign_story="",this.beneficiary_group="",this.fcra_registered=""},resetFormIg(){this.full_nameig="",this.phoneig="",this.emailig="",this.social_media_pageig="",this.campaign_storyig="",this.beneficiary_groupig=""},resetFormErrorReset(){this.fullNameError="",this.organizationNameError="",this.phoneError="",this.emailError="",this.campaignStoryError="",this.beneficiaryGroupError="",this.fcra_registeredError=""},resetFormErrorResetIg(){this.fullNameErrorig="",this.phoneErrorig="",this.emailErrorig="",this.campaignStoryErrorig="",this.beneficiaryGroupErrorig=""},toggleTabs:function(s){this.openTab=s,this.tab=this.tabNumber,this.$nextTick(()=>this.$refs.fullname.focus())},request_campaign(){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_type="NGO",this.full_name==""&&(this.fullNameError="Enter full name"),this.organisation_name==""&&(this.organizationNameError="Enter organisation name"),this.campaign_story==""&&(this.campaignStoryError="Enter campaign story"),this.beneficiary_group==""&&(this.beneficiaryGroupError="Enter beneficiary group name"),this.email==""?this.emailError="Enter email":s.test(this.email)==!1&&this.email&&(this.emailError="Enter valid email"),this.phone==""?this.phoneError="Enter phone number":this.phone&&r.test(this.phone)==!1&&(this.phoneError="Enter valid phone number"),this.fcra_registered==""?this.fcra_registeredError="Please select your ngo is FCRA Registered or not":(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group,fcra_registered:this.fcra_registered}))},request_campaignig(){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_typeig="Indivisual/Group",this.full_nameig==""&&(this.fullNameErrorig="Enter full name",console.log("full name")),this.organisation_nameig==""&&(this.organizationNameErrorig="Enter organisation name",console.log("org name")),this.campaign_storyig==""&&(this.campaignStoryErrorig="Enter campaign story",console.log("story")),this.beneficiary_groupig==""&&(this.beneficiaryGroupErrorig="Enter beneficiary group name",console.log("group")),this.emailig==""?(this.emailErrorig="Enter email",console.log("email id")):s.test(this.emailig)==!1&&this.emailig&&(this.emailErrorig="Enter valid email",console.log("email")),this.phoneig==""?(this.phoneErrorig="Enter phone number",console.log("phone number")):this.phoneig&&r.test(this.phoneig)==!1?(this.phoneErrorig="Enter valid phone number",console.log("phone")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_nameig,campaign_type:this.campaign_typeig,email:this.emailig,phone:this.phoneig,campaign_story:this.campaign_storyig,social_media_page:this.social_media_pageig,beneficiary_group:this.beneficiary_groupig}))}}},F={class:"container mx-auto"},C={class:"container mx-auto h-full"},V={class:"w-full pt-[28px]"},S={class:"container mx-auto py-0"},R={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},T={class:"text-[24px] md:text-[30px] lg:text-[36px] px-10 text-[#40b751] font-bold text-center"},G={class:"relative z-0"},U={class:"sm:py-2 md:py-4 lg:py-8"},q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex mb-0 flex-wrap pt-4 ml-8 mr-9 pb-4 flex-row"},z={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},D={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},K={class:"px-0 py-2 flex-auto"},P={class:"tab-content tab-space"},B={key:0,class:"py-4 px-8"},I={class:"mb-2 md:mb-4 lg:mb-6"},O={class:"block text-gray-600 text-base mb-2",for:"email"},A=e("span",{class:"text-red-600"},"*",-1),M={class:"text-red-600"},Z={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-4 lg:gap-4"},W={class:"mb-2 md:mb-4 lg:mb-6"},Y={class:"block text-gray-600 text-base mb-2"},J=e("span",{class:"text-red-600"},"*",-1),j={class:"text-red-600"},H={class:"mb-2 md:mb-4 lg:mb-6"},L={class:"block text-gray-600 text-base mb-2"},Q={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},X={class:"mb-2 md:mb-4 lg:mb-6"},$={class:"block text-gray-600 text-base mb-2"},ee=e("span",{class:"text-red-600"},"*",-1),re={class:"text-red-600"},oe={class:"mb-2 md:mb-4 lg:mb-6"},te={class:"block text-gray-600 text-base mb-2"},se=e("span",{class:"text-red-600"},"*",-1),ie={class:"text-red-600"},ae={class:"mb-2 md:mb-4 lg:mb-4"},le={class:"block text-gray-600 text-base mb-2"},ne={class:"mb-2 md:mb-4 lg:mb-6"},ge={class:"text-gray-600 text-base mb-2"},pe=e("span",{class:"text-red-600 mr-2"},"*",-1),de={class:"text-red-600"},me={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},ce={class:"mb-0 md:mb-4 lg:mb-6"},be={class:"block text-gray-600 text-base mb-2"},ue=e("span",{class:"text-red-600"},"*",-1),he={class:"text-red-600"},ye={class:"mb-2 md:mb-4 lg:mb-6"},_e={class:"block text-gray-600 text-base mb-2"},fe=e("span",{class:"text-red-600"},"*",-1),xe={class:"text-red-600"},Ee={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"},ve={key:1,class:"py-4 px-8"},we={class:"mb-2 md:mb-4 lg:mb-6"},ke={class:"block text-gray-600 text-base mb-2",for:"email"},Ne=e("span",{class:"text-red-600"},"*",-1),Fe={class:"text-red-600"},Ce={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},Ve={class:"mb-2 md:mb-4 lg:mb-6"},Se={class:"block text-gray-600 text-base mb-2"},Re=e("span",{class:"text-red-600"},"*",-1),Te={class:"text-red-600"},Ge={class:"mb-2 md:mb-4 lg:mb-6"},Ue={class:"block text-gray-600 text-base mb-2"},qe=e("span",{class:"text-red-600"},"*",-1),ze={class:"text-red-600"},De={class:"mb-2 md:mb-4 lg:mb-6"},Ke={class:"block text-gray-600 text-base mb-2"},Pe={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},Be={class:"mb-2 md:mb-4 lg:mb-6"},Ie={class:"block text-gray-600 text-base mb-2"},Oe=e("span",{class:"text-red-600"},"*",-1),Ae={class:"text-red-600"},Me={class:"mb-2 md:mb-4 lg:mb-6"},Ze={class:"block text-gray-600 text-base mb-2"},We=e("span",{class:"text-red-600"},"*",-1),Ye={class:"text-red-600"},Je={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4 mb-6"},je=e("div",{class:"pl-96"},[e("div",{class:"imageresponsive absolute bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:w-0 md:w-0 lg:w-0 xl:w-96 opacity-40 bg-white bg-contain",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}})],-1);function He(s,r,Le,Qe,o,g){const y=c("Navbar"),_=c("Dialog"),f=c("Footer");return p(),d(k,null,[m(y),e("div",F,[e("div",C,[e("div",V,[e("div",S,[e("div",R,[e("div",T,i(s.$t("Request a Campaign")),1),e("div",G,[e("div",U,[e("ul",q,[e("li",z,[e("a",{class:b(["mb-3 md:mb-0 lg:mb-0 cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block",{"text-[#40b751] bg-white":o.openTab!==1,"text-white bg-[#40b751]":o.openTab===1}]),onClick:[r[0]||(r[0]=t=>g.toggleTabs(1)),r[1]||(r[1]=t=>g.resetFormErrorReset())]},i(s.$t("NGO")),3)]),e("li",D,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":o.openTab!==2,"text-white bg-[#40b751]":o.openTab===2}]),onClick:[r[2]||(r[2]=t=>g.toggleTabs(2)),r[3]||(r[3]=t=>g.resetFormErrorResetIg())]},i(s.$t("Individual Group")),3)])]),e("div",K,[e("div",P,[o.openTab==1?(p(),d("div",B,[e("div",I,[e("label",O,[l(i(s.$t("FullName"))+" ",1),A]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[4]||(r[4]=t=>o.fullNameError=""),"onUpdate:modelValue":r[5]||(r[5]=t=>o.full_name=t),type:"text",ref:"fullname"},null,544),[[n,o.full_name]]),e("p",M,i(o.fullNameError),1)]),e("div",Z,[e("div",W,[e("label",Y,[l(i(s.$t("Organisation Name"))+" ",1),J]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text",onKeyup:r[6]||(r[6]=t=>o.organizationNameError=""),placeholder:"Enter Organisation Name","onUpdate:modelValue":r[7]||(r[7]=t=>o.organisation_name=t)},null,544),[[n,o.organisation_name]]),e("p",j,i(o.organizationNameError),1)]),e("div",H,[e("label",L,i(s.$t("Organisation Website")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Organisation Website","onUpdate:modelValue":r[8]||(r[8]=t=>o.organisation_website=t)},null,512),[[n,o.organisation_website]])])]),e("div",Q,[e("div",X,[e("label",$,[l(i(s.$t("Phone Number"))+" ",1),ee]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"tel",onKeyup:r[9]||(r[9]=t=>o.phoneError=""),placeholder:"Enter Phone Number","onUpdate:modelValue":r[10]||(r[10]=t=>o.phone=t)},null,544),[[n,o.phone]]),e("p",re,i(o.phoneError),1)]),e("div",oe,[e("label",te,[l(i(s.$t("Email"))+" ",1),se]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[11]||(r[11]=t=>o.emailError=""),placeholder:"Enter Email","onUpdate:modelValue":r[12]||(r[12]=t=>o.email=t)},null,544),[[n,o.email]]),e("p",ie,i(o.emailError),1)]),e("div",ae,[e("label",le,i(s.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[13]||(r[13]=t=>o.social_media_page=t)},null,512),[[n,o.social_media_page]])])]),e("div",ne,[e("label",ge,[l(i(s.$t("FCRA Registered")),1),pe]),a(e("input",{class:"mr-1",type:"radio","onUpdate:modelValue":r[14]||(r[14]=t=>o.fcra_registered=t),value:1},null,512),[[u,o.fcra_registered]]),l(i(s.$t("Yes"))+" ",1),a(e("input",{class:"ml-2 mr-1",type:"radio","onUpdate:modelValue":r[15]||(r[15]=t=>o.fcra_registered=t),value:0},null,512),[[u,o.fcra_registered]]),l(i(s.$t("No"))+" ",1),e("p",de,i(o.fcra_registeredError),1)]),e("div",me,[e("div",ce,[e("label",be,[l(i(s.$t("Campaign Story"))+" ",1),ue]),a(e("textarea",{id:"comment",onKeyup:r[16]||(r[16]=t=>o.campaignStoryError=""),rows:"4","onUpdate:modelValue":r[17]||(r[17]=t=>o.campaign_story=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[n,o.campaign_story]]),e("p",he,i(o.campaignStoryError),1)]),e("div",ye,[e("label",_e,[l(i(s.$t("Beneficiary Group"))+" ",1),fe]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[18]||(r[18]=t=>o.beneficiaryGroupError=""),"onUpdate:modelValue":r[19]||(r[19]=t=>o.beneficiary_group=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[n,o.beneficiary_group]]),e("p",xe,i(o.beneficiaryGroupError),1)])]),e("div",Ee,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[20]||(r[20]=t=>g.request_campaign())},i(s.$t("Campaign Request")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[21]||(r[21]=(...t)=>g.resetForm&&g.resetForm(...t))},i(s.$t("Reset Form")),1)])])):h("",!0),o.openTab==2?(p(),d("div",ve,[e("div",we,[e("label",ke,[l(i(s.$t("FullName"))+" ",1),Ne]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[22]||(r[22]=t=>o.fullNameErrorig=""),"onUpdate:modelValue":r[23]||(r[23]=t=>o.full_nameig=t),type:"text",ref:"fullname"},null,544),[[n,o.full_nameig]]),e("p",Fe,i(o.fullNameErrorig),1)]),e("div",Ce,[e("div",Ve,[e("label",Se,[l(i(s.$t("Phone Number"))+" ",1),Re]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"tel",placeholder:"Enter Phone Number",onKeyup:r[24]||(r[24]=t=>o.phoneErrorig=""),"onUpdate:modelValue":r[25]||(r[25]=t=>o.phoneig=t)},null,544),[[n,o.phoneig]]),e("p",Te,i(o.phoneErrorig),1)]),e("div",Ge,[e("label",Ue,[l(i(s.$t("Email"))+" ",1),qe]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[26]||(r[26]=t=>o.emailErrorig=""),placeholder:"Enter Email","onUpdate:modelValue":r[27]||(r[27]=t=>o.emailig=t)},null,544),[[n,o.emailig]]),e("p",ze,i(o.emailErrorig),1)]),e("div",De,[e("label",Ke,i(s.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[28]||(r[28]=t=>o.social_media_pageig=t)},null,512),[[n,o.social_media_pageig]])])]),e("div",Pe,[e("div",Be,[e("label",Ie,[l(i(s.$t("Campaign Story"))+" ",1),Oe]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[29]||(r[29]=t=>o.campaignStoryErrorig=""),"onUpdate:modelValue":r[30]||(r[30]=t=>o.campaign_storyig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[n,o.campaign_storyig]]),e("p",Ae,i(o.campaignStoryErrorig),1)]),e("div",Me,[e("label",Ze,[l(i(s.$t("Beneficiary Group"))+" ",1),We]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[31]||(r[31]=t=>o.beneficiaryGroupErrorig=""),"onUpdate:modelValue":r[32]||(r[32]=t=>o.beneficiary_groupig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[n,o.beneficiary_groupig]]),e("p",Ye,i(o.beneficiaryGroupErrorig),1)])]),e("div",Je,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[33]||(r[33]=t=>g.request_campaignig())},i(s.$t("Request a Campaign")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[34]||(r[34]=(...t)=>g.resetFormIg&&g.resetFormIg(...t))},i(s.$t("Reset Form")),1)])])):h("",!0)])])])])])])])])]),je,m(_,{options:{title:s.$t("Thank You For Request"),message:s.$t("We Reach You Soon as possible"),size:"sm",actions:[{label:s.$t("Okay"),appearance:"success",handler:({close:t})=>{this.$router.push("/"),t()}},{label:s.$t("Cancel")}]},modelValue:o.showDialog,"onUpdate:modelValue":r[35]||(r[35]=t=>o.showDialog=t)},null,8,["options","modelValue"]),m(f)],64)}var er=v(N,[["render",He]]);export{er as default};
