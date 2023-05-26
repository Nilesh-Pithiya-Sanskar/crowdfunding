import{N as u,F as f}from"./Footer.222d44b8.js";import{_ as b,o as _,c as x,k as n,e,t as a,p as i,G as l,H as p,F as v,J as y,r as c}from"./index.ed28e7db.js";const P={name:"Reset Password",components:{Navbar:u,Footer:f},created(){const s=y();document.title=this.$t("Reset Password")+" "+s.params.email,this.email=s.params.email,this.key=s.params.key;const o=document.querySelector('link[rel="canonical"]');if(o)o.href="https://bestdeed.org/reset-password",document.head.appendChild(o);else{var d=document.createElement("link");d.rel="canonical",d.href="https://bestdeed.org/reset-password",document.head.appendChild(d)}},mounted(){this.$nextTick(()=>this.$refs.password.focus())},data(){return{email:"",key:"",password:"",confirm_password:"",passwordError:"",confirmPasswordError:""}},resources:{resetPassword(){return{method:"sadbhavna_donatekart.api.api.reset_password",onSuccess:s=>{s=="Your key is not valid"?conform_passwordError=s:this.$router.push("/")},onError:s=>{console.log("error",s)}}}},methods:{resetPassword(){var s=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;this.password==""?this.passwordError=this.$t("Please enter password!"):this.password&&s.test(this.password)==!1&&(this.passwordError=this.$t("Please enter strong password, minimum eight characters, at least one letter, one number and one special character")),this.conform_password==""?this.confirmPasswordError=this.$t("Please enter confirm password"):this.conform_password!=this.password?this.confirmPasswordError=this.$t("Your password is not match"):this.$resources.resetPassword.submit({email:this.email,password:this.password,key:this.key})}}},$={class:"container mx-auto h-full pb-[48px]"},g={class:"w-full sm:pt-0 md:pt-5 lg:pt-6"},k={class:"container mx-auto py-0"},E={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},N={class:"text-[20px] md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-gray-600 text-bold text-center"},C={class:"relative z-0"},F={class:"mb-4"},R={class:"block text-gray-600 text-base mb-2"},V=e("span",{class:"text-red-600"},"*",-1),S=["placeholder"],q={class:"text-red-600"},z={class:"mb-4"},B={class:"block text-gray-600 text-base mb-2"},T=e("span",{class:"text-red-600"},"*",-1),A=["placeholder"],D={class:"text-red-600"},K={class:"flex items-center justify-between mt-8"};function U(s,o,d,Y,r,m){const h=c("Navbar"),w=c("Footer");return _(),x(v,null,[n(h),e("div",$,[e("div",g,[e("div",k,[e("div",E,[e("h1",N,a(s.$t("Reset Password")),1),e("div",C,[e("div",F,[e("label",R,[i(a(s.$t("Password"))+" ",1),V]),l(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold","onUpdate:modelValue":o[0]||(o[0]=t=>r.password=t),type:"password",onKeyup:o[1]||(o[1]=t=>r.passwordError=""),placeholder:s.$t("Enter Password"),required:"",ref:"password"},null,40,S),[[p,r.password]]),e("p",q,a(s.$t(r.passwordError)),1)]),e("div",z,[e("label",B,[i(a(s.$t("Confirm Password"))+" ",1),T]),l(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold","onUpdate:modelValue":o[2]||(o[2]=t=>s.conform_password=t),type:"password",onKeyup:o[3]||(o[3]=t=>r.confirmPasswordError=""),placeholder:s.$t("Enter Confirm Password"),required:""},null,40,A),[[p,s.conform_password]]),e("p",D,a(s.$t(r.confirmPasswordError)),1)]),e("div",K,[e("button",{class:"bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg",type:"submit",onClick:o[4]||(o[4]=t=>m.resetPassword())},a(s.$t("Set Password")),1)])])])])])]),n(w)],64)}var G=b(P,[["render",U]]);export{G as default};
