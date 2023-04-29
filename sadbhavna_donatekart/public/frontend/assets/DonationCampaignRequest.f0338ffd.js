import{N as f,F as x}from"./Footer.a83e0de6.js";import{_ as E,D as v,o as p,c as m,k as d,e,t as i,n as b,p as n,C as a,E as l,b as u,F as w,r as c}from"./index.2ba5c368.js";const k={name:"Donation Campaign Request",components:{Navbar:f,Footer:x,Dialog:v},data(){return{openTab:1,full_name:"",full_nameig:"",fullNameError:"",fullNameErrorig:"",campaign_type:"",campaign_typeig:"",organisation_name:"",organizationNameError:"",organisation_website:"",email:"",emailError:"",emailErrorig:"",phone:"",phoneError:"",phoneErrorig:"",error:!1,campaign_story:"",campaignStoryError:"",campaignStoryErrorig:"",social_media_page:"",beneficiary_group:"",beneficiaryGroupError:"",beneficiaryGroupErrorig:"",phoneig:"",emailig:"",social_media_pageig:"",campaign_storyig:"",beneficiary_groupig:"",showDialog:!1}},created(){document.title=this.$t("Request a Campaign | BestDeed"),this.$nextTick(()=>this.$refs.fullname.focus())},mounted(){this.$nextTick(()=>this.$refs.fullname.focus())},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:s=>{this.showDialog=!0},onError:s=>{console.log(s),this.$toast({title:"Error",text:s,icon:"x-circle",appearance:"denger",position:"top-center"})}}}},methods:{resetForm(){this.full_name="",this.organisation_name="",this.organisation_website="",this.phone="",this.email="",this.social_media_page="",this.campaign_story="",this.beneficiary_group=""},resetFormIg(){this.full_nameig="",this.phoneig="",this.emailig="",this.social_media_pageig="",this.campaign_storyig="",this.beneficiary_groupig=""},resetFormErrorReset(){this.fullNameError="",this.organizationNameError="",this.phoneError="",this.emailError="",this.campaignStoryError="",this.beneficiaryGroupError=""},resetFormErrorResetIg(){this.fullNameErrorig="",this.phoneErrorig="",this.emailErrorig="",this.campaignStoryErrorig="",this.beneficiaryGroupErrorig=""},toggleTabs:function(s){this.openTab=s,this.tab=this.tabNumber,this.$nextTick(()=>this.$refs.fullname.focus())},request_campaign(){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_type="NGO",this.full_name==""&&(this.fullNameError="Enter full name",console.log("full name")),this.organisation_name==""&&(this.organizationNameError="Enter organisation name",console.log("org name")),this.campaign_story==""&&(this.campaignStoryError="Enter campaign story",console.log("story")),this.beneficiary_group==""&&(this.beneficiaryGroupError="Enter beneficiary group name",console.log("group")),this.email==""?(this.emailError="Enter email",console.log("email id")):s.test(this.email)==!1&&this.email&&(this.emailError="Enter valid email",console.log("email")),this.phone==""?(this.phoneError="Enter phone number",console.log("phone number")):this.phone&&r.test(this.phone)==!1?(this.phoneError="Enter valid phone number",console.log("phone")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}))},request_campaignig(){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_typeig="Indivisual/Group",this.full_nameig==""&&(this.fullNameErrorig="Enter full name",console.log("full name")),this.organisation_nameig==""&&(this.organizationNameErrorig="Enter organisation name",console.log("org name")),this.campaign_storyig==""&&(this.campaignStoryErrorig="Enter campaign story",console.log("story")),this.beneficiary_groupig==""&&(this.beneficiaryGroupErrorig="Enter beneficiary group name",console.log("group")),this.emailig==""?(this.emailErrorig="Enter email",console.log("email id")):s.test(this.emailig)==!1&&this.emailig&&(this.emailErrorig="Enter valid email",console.log("email")),this.phoneig==""?(this.phoneErrorig="Enter phone number",console.log("phone number")):this.phoneig&&r.test(this.phoneig)==!1?(this.phoneErrorig="Enter valid phone number",console.log("phone")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_nameig,campaign_type:this.campaign_typeig,email:this.emailig,phone:this.phoneig,campaign_story:this.campaign_storyig,social_media_page:this.social_media_pageig,beneficiary_group:this.beneficiary_groupig}))}}},N={class:"container mx-auto"},F={class:"container mx-auto h-full"},C={class:"w-full pt-[28px]"},S={class:"container mx-auto py-0"},V={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},G={class:"text-[24px] md:text-[30px] lg:text-[36px] px-10 text-[#40b751] font-bold text-center"},T={class:"relative z-0"},q={class:"sm:py-2 md:py-4 lg:py-8"},U={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex mb-0 flex-wrap pt-4 ml-8 mr-9 pb-4 flex-row"},z={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},R={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},D={class:"px-0 py-2 flex-auto"},K={class:"tab-content tab-space"},B={key:0,class:"py-4 px-8"},P={class:"mb-2 md:mb-4 lg:mb-6"},I={class:"block text-gray-600 text-base mb-2",for:"email"},O=e("span",{class:"text-red-600"},"*",-1),M={class:"text-red-600"},A={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-4 lg:gap-4"},Z={class:"mb-2 md:mb-4 lg:mb-6"},W={class:"block text-gray-600 text-base mb-2"},Y=e("span",{class:"text-red-600"},"*",-1),j={class:"text-red-600"},H={class:"mb-2 md:mb-4 lg:mb-6"},J={class:"block text-gray-600 text-base mb-2"},L={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},Q={class:"mb-2 md:mb-4 lg:mb-6"},X={class:"block text-gray-600 text-base mb-2"},$=e("span",{class:"text-red-600"},"*",-1),ee={class:"text-red-600"},re={class:"mb-2 md:mb-4 lg:mb-6"},oe={class:"block text-gray-600 text-base mb-2"},te=e("span",{class:"text-red-600"},"*",-1),se={class:"text-red-600"},ie={class:"mb-2 md:mb-4 lg:mb-6"},ae={class:"block text-gray-600 text-base mb-2"},le={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},ne={class:"mb-0 md:mb-4 lg:mb-6"},ge={class:"block text-gray-600 text-base mb-2"},pe=e("span",{class:"text-red-600"},"*",-1),me={class:"text-red-600"},de={class:"mb-2 md:mb-4 lg:mb-6"},ce={class:"block text-gray-600 text-base mb-2"},be=e("span",{class:"text-red-600"},"*",-1),ue={class:"text-red-600"},he={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"},ye={key:1,class:"py-4 px-8"},_e={class:"mb-2 md:mb-4 lg:mb-6"},fe={class:"block text-gray-600 text-base mb-2",for:"email"},xe=e("span",{class:"text-red-600"},"*",-1),Ee={class:"text-red-600"},ve={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},we={class:"mb-2 md:mb-4 lg:mb-6"},ke={class:"block text-gray-600 text-base mb-2"},Ne=e("span",{class:"text-red-600"},"*",-1),Fe={class:"text-red-600"},Ce={class:"mb-2 md:mb-4 lg:mb-6"},Se={class:"block text-gray-600 text-base mb-2"},Ve=e("span",{class:"text-red-600"},"*",-1),Ge={class:"text-red-600"},Te={class:"mb-2 md:mb-4 lg:mb-6"},qe={class:"block text-gray-600 text-base mb-2"},Ue={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},ze={class:"mb-2 md:mb-4 lg:mb-6"},Re={class:"block text-gray-600 text-base mb-2"},De=e("span",{class:"text-red-600"},"*",-1),Ke={class:"text-red-600"},Be={class:"mb-2 md:mb-4 lg:mb-6"},Pe={class:"block text-gray-600 text-base mb-2"},Ie=e("span",{class:"text-red-600"},"*",-1),Oe={class:"text-red-600"},Me={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4 mb-6"},Ae=e("div",{class:"pl-96"},[e("div",{class:"imageresponsive absolute bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:w-0 md:w-0 lg:w-0 xl:w-96 opacity-40 bg-white bg-contain",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}})],-1);function Ze(s,r,We,Ye,o,g){const h=c("Navbar"),y=c("Dialog"),_=c("Footer");return p(),m(w,null,[d(h),e("div",N,[e("div",F,[e("div",C,[e("div",S,[e("div",V,[e("div",G,i(s.$t("Request a Campaign")),1),e("div",T,[e("div",q,[e("ul",U,[e("li",z,[e("a",{class:b(["mb-3 md:mb-0 lg:mb-0 cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block",{"text-[#40b751] bg-white":o.openTab!==1,"text-white bg-[#40b751]":o.openTab===1}]),onClick:[r[0]||(r[0]=t=>g.toggleTabs(1)),r[1]||(r[1]=t=>g.resetFormErrorReset())]},i(s.$t("NGO")),3)]),e("li",R,[e("a",{class:b(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":o.openTab!==2,"text-white bg-[#40b751]":o.openTab===2}]),onClick:[r[2]||(r[2]=t=>g.toggleTabs(2)),r[3]||(r[3]=t=>g.resetFormErrorResetIg())]},i(s.$t("Individual Group")),3)])]),e("div",D,[e("div",K,[o.openTab==1?(p(),m("div",B,[e("div",P,[e("label",I,[n(i(s.$t("FullName"))+" ",1),O]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[4]||(r[4]=t=>o.fullNameError=""),"onUpdate:modelValue":r[5]||(r[5]=t=>o.full_name=t),type:"text",ref:"fullname"},null,544),[[l,o.full_name]]),e("p",M,i(o.fullNameError),1)]),e("div",A,[e("div",Z,[e("label",W,[n(i(s.$t("Organisation Name"))+" ",1),Y]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text",onKeyup:r[6]||(r[6]=t=>o.organizationNameError=""),placeholder:"Enter Organisation Name","onUpdate:modelValue":r[7]||(r[7]=t=>o.organisation_name=t)},null,544),[[l,o.organisation_name]]),e("p",j,i(o.organizationNameError),1)]),e("div",H,[e("label",J,i(s.$t("Organisation Website")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Organisation Website","onUpdate:modelValue":r[8]||(r[8]=t=>o.organisation_website=t)},null,512),[[l,o.organisation_website]])])]),e("div",L,[e("div",Q,[e("label",X,[n(i(s.$t("Phone Number"))+" ",1),$]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"tel",onKeyup:r[9]||(r[9]=t=>o.phoneError=""),placeholder:"Enter Phone Number","onUpdate:modelValue":r[10]||(r[10]=t=>o.phone=t)},null,544),[[l,o.phone]]),e("p",ee,i(o.phoneError),1)]),e("div",re,[e("label",oe,[n(i(s.$t("Email"))+" ",1),te]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[11]||(r[11]=t=>o.emailError=""),placeholder:"Enter Email","onUpdate:modelValue":r[12]||(r[12]=t=>o.email=t)},null,544),[[l,o.email]]),e("p",se,i(o.emailError),1)]),e("div",ie,[e("label",ae,i(s.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[13]||(r[13]=t=>o.social_media_page=t)},null,512),[[l,o.social_media_page]])])]),e("div",le,[e("div",ne,[e("label",ge,[n(i(s.$t("Campaign Story"))+" ",1),pe]),a(e("textarea",{id:"comment",onKeyup:r[14]||(r[14]=t=>o.campaignStoryError=""),rows:"4","onUpdate:modelValue":r[15]||(r[15]=t=>o.campaign_story=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[l,o.campaign_story]]),e("p",me,i(o.campaignStoryError),1)]),e("div",de,[e("label",ce,[n(i(s.$t("Beneficiary Group"))+" ",1),be]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[16]||(r[16]=t=>o.beneficiaryGroupError=""),"onUpdate:modelValue":r[17]||(r[17]=t=>o.beneficiary_group=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[l,o.beneficiary_group]]),e("p",ue,i(o.beneficiaryGroupError),1)])]),e("div",he,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[18]||(r[18]=t=>g.request_campaign())},i(s.$t("Campaign Request")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[19]||(r[19]=(...t)=>g.resetForm&&g.resetForm(...t))},i(s.$t("Reset Form")),1)])])):u("",!0),o.openTab==2?(p(),m("div",ye,[e("div",_e,[e("label",fe,[n(i(s.$t("FullName"))+" ",1),xe]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[20]||(r[20]=t=>o.fullNameErrorig=""),"onUpdate:modelValue":r[21]||(r[21]=t=>o.full_nameig=t),type:"text",ref:"fullname"},null,544),[[l,o.full_nameig]]),e("p",Ee,i(o.fullNameErrorig),1)]),e("div",ve,[e("div",we,[e("label",ke,[n(i(s.$t("Phone Number"))+" ",1),Ne]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"tel",placeholder:"Enter Phone Number",onKeyup:r[22]||(r[22]=t=>o.phoneErrorig=""),"onUpdate:modelValue":r[23]||(r[23]=t=>o.phoneig=t)},null,544),[[l,o.phoneig]]),e("p",Fe,i(o.phoneErrorig),1)]),e("div",Ce,[e("label",Se,[n(i(s.$t("Email"))+" ",1),Ve]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[24]||(r[24]=t=>o.emailErrorig=""),placeholder:"Enter Email","onUpdate:modelValue":r[25]||(r[25]=t=>o.emailig=t)},null,544),[[l,o.emailig]]),e("p",Ge,i(o.emailErrorig),1)]),e("div",Te,[e("label",qe,i(s.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[26]||(r[26]=t=>o.social_media_pageig=t)},null,512),[[l,o.social_media_pageig]])])]),e("div",Ue,[e("div",ze,[e("label",Re,[n(i(s.$t("Campaign Story"))+" ",1),De]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[27]||(r[27]=t=>o.campaignStoryErrorig=""),"onUpdate:modelValue":r[28]||(r[28]=t=>o.campaign_storyig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[l,o.campaign_storyig]]),e("p",Ke,i(o.campaignStoryErrorig),1)]),e("div",Be,[e("label",Pe,[n(i(s.$t("Beneficiary Group"))+" ",1),Ie]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[29]||(r[29]=t=>o.beneficiaryGroupErrorig=""),"onUpdate:modelValue":r[30]||(r[30]=t=>o.beneficiary_groupig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[l,o.beneficiary_groupig]]),e("p",Oe,i(o.beneficiaryGroupErrorig),1)])]),e("div",Me,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[31]||(r[31]=t=>g.request_campaignig())},i(s.$t("Request a Campaign")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[32]||(r[32]=(...t)=>g.resetFormIg&&g.resetFormIg(...t))},i(s.$t("Reset Form")),1)])])):u("",!0)])])])])])])])])]),Ae,d(y,{options:{title:s.$t("Thank You For Request"),message:s.$t("We Reach You Soon as possible"),size:"sm",actions:[{label:s.$t("Okay"),appearance:"success",handler:({close:t})=>{this.$router.push("/"),t()}},{label:s.$t("Cancel")}]},modelValue:o.showDialog,"onUpdate:modelValue":r[33]||(r[33]=t=>o.showDialog=t)},null,8,["options","modelValue"]),d(_)],64)}var Je=E(k,[["render",Ze]]);export{Je as default};