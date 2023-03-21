import{_ as h,x as m,o as x,c as u,k as d,e,y as _,z as v,t as w,F as y,u as g,r as p}from"./index.083a2a0b.js";import{N as f,F as k}from"./Footer.3c13afc6.js";const L={name:"Auto Login",components:{Navbar:f,Footer:k},data(){return{phone:"",email:""}},resources:{login_with_whatsapp(){return{method:"sadbhavna_donatekart.api.api.login_with_whatsapp",onSuccess:o=>{console.log("okey",o);let t=o[0],s=o[1];this.$router.push(`/sadbhavna/otp/${t}&${s}`)},onError:o=>{console.log("error",o)}}}},methods:{login_with_google:o=>{let t=m(o.credential),s=t.email,c=t.family_name,a=t.given_name,n=t.picture,i=`https://crowdfunding.frappe.cloud/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${s}&first_name=${c}&last_name=${a}&image_url=${n}`;fetch(i,{method:"GET"}).then(r=>{r.json().then(l=>{l.message,window.location="https://crowdfunding.frappe.cloud/sadbhavna"})}).catch(function(r){log("Request failed",r)})},login_with_whatsapp(){this.$resources.login_with_whatsapp.submit({phone:this.phone})}}},F={class:"container mx-auto mb-[150px]"},N=e("div",{class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[498px] sm:h-0 md:h-0 lg:h-0 xl:h-[485px] sm:w-0 md:w-0 lg:w-0 xl:w-[600px] sm:right-0 md:right-2 lg:right-2 xl:right-0 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},null,-1),$={class:"container mx-auto h-full"},E={class:"w-full pt-0 md:pt-5 lg:pt-12"},S={class:"container py-0"},A={class:"w-5/5 md:w-6/6 lg:w-4/6 mx-auto bg-white"},D=e("div",{class:"py-1 md:py-4 lg:py-8 px-4 md:px-6 lg:px-10 text-gray-600 text-gray-600 text-center text-[30px] md:text-[32px] lg:text-[40px]"}," Register & Login ",-1),V={class:"relative py-4 z-0 px-8"},z={class:"mb-4"},B=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},"Enter WhatsApp Number",-1),C={class:"text-sm text-gray-400"},G={class:"mb-4"},R=g('<div class="mb-4"><div class="flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5"><p class="text-center mx-4 mb-0">Or</p></div></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with SMS</button></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Email</button></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Facebook</button></div>',4),T={class:"mb-4"},j=g('<div class="mb-4"><div class="flex mb-10 justify-between"><span class="text-gray-600">Forget password? <a class="text-[#40b751]" href="/sadbhavna/login">Click here</a></span><a class="text-[#40b751]" href="/sadbhavna/registration">Register</a></div></div><div class="mb-4"><span class="block text-gray-600 text-center text-base mb-2"><a class="text-[#40b751]" href="/sadbhavna/login">Login </a> \xA0via ID Password</span></div>',2);function M(o,t,s,c,a,n){const i=p("Navbar"),r=p("GoogleLogin"),l=p("Footer");return x(),u(y,null,[d(i),e("div",F,[N,e("div",$,[e("div",E,[e("div",S,[e("div",A,[D,e("div",V,[e("div",z,[B,_(e("input",{class:"appearance-none hover:border-[#40b751] border-gray-600 rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[0]||(t[0]=b=>a.phone=b),type:"number"},null,512),[[v,a.phone]]),e("span",C," An OTP will be sent to "+w(a.phone)+" whatsapp number",1)]),e("div",G,[e("button",{class:"appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded",onClick:t[1]||(t[1]=b=>n.login_with_whatsapp())},"Login with Whatsapp")]),R,e("div",T,[d(r,{callback:n.login_with_google},null,8,["callback"])]),j])])])])])]),d(l)],64)}var W=h(L,[["render",M]]);export{W as default};
