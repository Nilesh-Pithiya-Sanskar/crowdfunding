import{_ as x,A as v,o as h,c as p,k as d,e as t,t as s,C as w,E as y,n as k,b as g,p as m,w as $,F as L,r as c}from"./index.8979d6ac.js";import{N as S,F as B}from"./Footer.41f5dc90.js";import{_ as C}from"./logo-1.1.2a2a852d.js";const F={name:"Auto Login",components:{Navbar:S,Footer:B},data(){return{phone:"",email:"",error:""}},mounted(){document.title=this.$t("Login Now | Trusted and 100% Transparent Online Crowdfunding Platform | BestDeed");const e=document.querySelector('link[rel="canonical"]');if(e)e.href="https://bestdeed.org/login",document.head.appendChild(e);else{var o=document.createElement("link");o.rel="canonical",o.href="https://bestdeed.org/login",document.head.appendChild(o)}this.$nextTick(()=>this.$refs.number.focus()),FB.init({appId:"1616534218770661",cookie:!0,xfbml:!0,version:"v13.0"})},resources:{login_with_whatsapp(){return{method:"sadbhavna_donatekart.api.api.login_with_whatsapp",onSuccess:e=>{console.log("okey",e);let o=e[0],n=e[1],i=e[2];this.$router.push(`/otp/${o}&${n}&${i}`)},onError:e=>{console.log("error",e)}}},login_with_sms(){return{method:"sadbhavna_donatekart.api.api.login_with_sms",onSuccess:e=>{console.log("okey",e);let o=e[0],n=e[1],i=e[2];this.$router.push(`/otp/${o}&${n}&${i}`)},onError:e=>{console.log("error",e)}}},login_with_google(){return{method:"sadbhavna_donatekart.api.api.login_with_google",onSuccess:e=>{this.$toast({title:"Login Success",text:"You are successfully login to our platform",icon:"check",position:"top-center"}),this.$router.push("/")},onError:e=>{console.log("error",e),this.$toast({title:"Error",text:e,icon:"x-circle",appearance:"denger",position:"top-center"})}}}},methods:{login_with_google(e){let o=v(e.credential),n=o.email,i=o.family_name,r=o.given_name,a=o.picture;this.$resources.login_with_google.submit({email:n,first_name:i,last_name:r,image_url:a})},login_with_whatsapp(){var e=/^[6-9][0-9]{9}$/;this.phone==""?this.error="Please enter mobile number for login with Whatsapp":e.test(this.phone)==!1?this.error="Please enter 10 digit mobile number":(this.error="",this.$resources.login_with_whatsapp.submit({phone:this.phone}))},login_with_sms(){var e=/^[6-9][0-9]{9}$/;this.phone==""?this.error="Please enter mobile number for login with SMS":e.test(this.phone)==!1?this.error="Please enter 10 digit mobile number":this.$resources.login_with_sms.submit({phone:this.phone})},checkLoginState(){console.log("fb called"),FB.getLoginStatus(function(e){console.log("login state response",e),e.status==="connected"?FB.api("/me",function(o){console.log("UserInfo:",o)}):console.log("User is not logged in with Facebook")})}}},N={class:"flex justify-center gradient-form h-full"},E={class:"container h-full px-8 md:px-14 lg:px-24 xl:px-48 py-10"},D={class:"g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"},T={class:"w-full"},P={class:"block rounded-lg bg-white shadow-lg card-shodow dark:bg-neutral-800"},V={class:"g-0 lg:flex lg:flex-wrap"},W={class:"px-10 py-5 px-4 md:px-0 lg:w-6/12"},A={class:"p-1 md:p-2 lg:p-4"},z={class:"text-center"},M=t("img",{src:C,class:"mx-auto rounded-full border border-[#40b751] md:mr-2 lg:mr-2 w-18 h-14 md:h-16 lg:h-20 ml-0 lg:ml-6"},null,-1),O={class:"text-[#40b751] text-center mb-3 font-bold text-[30px] md:text-[32px] lg:text-[34px]"},U={class:"relative"},j={class:"mb-4"},G={class:"block text-gray-600 text-base mb-2",for:"phone"},I={key:0,class:"text-red-500"},Y={key:1,class:"text-sm text-gray-400"},q={class:"mb-4 grid md:grid-cols-2 sm:grid-cols-1"},K=t("div",{class:"mb-4"},[t("div",{class:"flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5"},[t("p",{class:"text-center mx-4 mb-0"},"Or")])],-1),R={class:"mb-4 grid md:grid-cols-2 sm:grid-cols-1"},H={class:"text-center"},J={class:"block text-gray-600 text-center text-base mb-2"},Q={class:"text-[#40b751]",href:"/login-via-email"},X={class:"block text-gray-600 text-center text-base mb-2"},Z={class:"flex items-center rounded-b-lg bg-gradient-to-l from-lime-600 to-green-400 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"},ee={class:"px-6 py-6 text-white"},te=t("h4",{class:"mb-6 text-xl font-semibold"},"Welcome to BestDeed!",-1),oe={class:"text-sm"};function re(e,o,n,i,r,a){const u=c("Navbar"),b=c("GoogleLogin"),_=c("router-link"),f=c("Footer");return h(),p(L,null,[d(u),t("section",N,[t("div",E,[t("div",D,[t("div",T,[t("div",P,[t("div",V,[t("div",W,[t("div",A,[t("div",z,[M,t("div",O,[t("small",null,s(e.$t("Login")),1)])]),t("div",U,[t("div",j,[t("label",G,s(e.$t("Enter Your Phone Number")),1),w(t("input",{onKeyup:o[0]||(o[0]=l=>r.error=""),class:k("appearance-none hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker border",(r.error=="","border-red-600")),"onUpdate:modelValue":o[1]||(o[1]=l=>r.phone=l),ref:"number",type:"tel"},null,34),[[y,r.phone]]),r.error?(h(),p("div",I,s(r.error),1)):g("",!0),r.phone&&!r.error?(h(),p("span",Y,s(e.$t("An OTP will be sent to"))+" "+s(r.phone),1)):g("",!0)]),t("div",q,[t("button",{class:"appearance-none border-gray-600 rounded mb-5 py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded",onClick:o[2]||(o[2]=l=>a.login_with_whatsapp())},s(e.$t("Login with Whatsapp")),1),t("button",{class:"appearance-none border-gray-600 sm:ml-0 md:ml-2 lg:ml-2 mb-5 rounded py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded",onClick:o[3]||(o[3]=l=>a.login_with_sms())},s(e.$t("Login With SMS")),1)]),K]),t("div",R,[t("div",H,[d(b,{callback:a.login_with_google},null,8,["callback"])]),t("button",{class:"fb-login-button","data-button-type":"","data-use-continue-as":"true","data-width":"","data-hight":"",onClick:o[4]||(o[4]=l=>a.checkLoginState())}," Login with Facebook ")]),t("span",J,[t("a",Q,s(e.$t("Login Via Email")),1)]),t("span",X,[m(s(e.$t("New to BestDeed?"))+" ",1),d(_,{to:"/registration",class:"font-bold text-[#40b751]"},{default:$(()=>[m(s(e.$t("Register now")),1)]),_:1})])])]),t("div",Z,[t("div",ee,[te,t("p",oe,s(e.$t("BestDeed is a leading platform that connects donors with non-profit organizations worldwide. We strive to create a world where everyone has the opportunity to make a positive impact on society. Through our user-friendly website, users can easily discover and donate to a variety of causes, from education to environmental sustainability. We are committed to providing a safe and secure platform for donors and organizations to collaborate and make a meaningful difference in the world. Thank you for choosing BestDeed as your go-to platform for charitable giving.")),1)])])])])])])])]),d(f)],64)}var ae=x(F,[["render",re]]);export{ae as default};
