var g=(e,o,n)=>new Promise((d,r)=>{var c=s=>{try{a(n.next(s))}catch(i){r(i)}},u=s=>{try{a(n.throw(s))}catch(i){r(i)}},a=s=>s.done?d(s.value):Promise.resolve(s.value).then(c,u);a((n=n.apply(e,o)).next())});import{_ as w,E as x,o as v,c as y,k as h,e as t,t as l,p,y as _,G as f,w as b,F as $,r as m}from"./index.5d18ed73.js";import{N as k,F as E}from"./Footer.a3f63e7f.js";const G={name:"Login",components:{Navbar:k,Footer:E},data(){return{password:"",error:!1,passwordError:"",emailError:"",email:"",isLogin:!1}},resources:{login(){return{method:"/api/method/login",onSuccess:()=>g(this,null,function*(){var e=this.$cookies.get("route");console.log("route",e),e!=null?this.$router.go(-2):this.$router.push("/sadbhavna")}),onError:e=>{this.$toast({title:"Error",text:"User Name or Password Incorrect",customIcon:"circle-fail",appearance:"denger"}),this.email="",this.password=""}}},login_with_google(){return{method:"frappe.www.login.login_via_token",onSuccess:()=>{this.$router.push("/sadbhavna")},onError:e=>{console.log("error",e),this.$toast({title:"Error",text:"Something want Wrong!",customIcon:"circle-fail",appearance:"denger"})}}},forgotPassword(){return{method:"sadbhavna_donatekart.api.api.forgot_password",onSuccess:e=>{if(console.log("susseddd",e),e=="user not found with this email")this.emailError=e;else{let o=e[0],n=e[1],d=e[2];this.$router.push(`/sadbhavna/otp/${o}&${n}&${d}`)}},onError:e=>{console.log("error for pass",e)}}}},methods:{login(){!this.email&&!this.password?this.error==!0:this.email==""?(this.emailError="Please enter email!",this.error=!0,console.log("email")):this.password==""?(this.passwordError="Please enter password!",this.error=!0,console.log("password")):(this.error==!1,this.$resources.login.submit({usr:this.email,pwd:this.password}))},login_with_google:e=>{let o=x(e.credential),n=o.email,d=o.family_name,r=o.given_name,c=o.picture,u=`http://sadbhavnadonatekart.com:8080/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${n}&first_name=${d}&last_name=${r}&image_url=${c}`;fetch(u,{method:"GET"}).then(a=>{a.json().then(s=>{console.log("asdf",s.message),console.log("asdf",s),s.message,window.location="http://sadbhavnadonatekart.com:8080/home"})}).catch(function(a){log("Request failed",a)})},forgotPassword(){this.$resources.forgotPassword.submit({email:this.email})}}},P={class:"container mx-auto h-full my-20"},F={class:"flex content-center items-center justify-center h-full"},N={class:"w-11/12 md:w-6/12 lg:w-4/12 px-4"},S={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"},I={class:"flex-auto px-4 lg:px-10 py-10 pt-5"},V={class:"text-blueGray-400 text-center mb-3 font-bold text-[40px] md:text-[45px] lg:text-[45px]"},C={class:"relative w-full mb-3"},L={class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"},q=t("span",{class:"text-red-600"},"*",-1),B=["placeholder"],D={class:"text-red-600"},M={class:"relative w-full mb-3"},T={class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"},U=t("span",{class:"text-red-600"},"*",-1),j=["placeholder"],R={class:"text-red-600"},O={class:"text-red-600"},W={class:"text-center mt-6"},z={class:"grid md:grid-cols-2 sm:grid-cols-2"},A={class:"text-center font-bold"};function H(e,o,n,d,r,c){const u=m("Navbar"),a=m("router-link"),s=m("Footer");return v(),y($,null,[h(u),t("div",P,[t("div",F,[t("div",N,[t("div",S,[t("div",I,[t("div",V,[t("small",null,l(e.$t("Sign In")),1)]),t("form",null,[t("div",C,[t("label",L,[p(l(e.$t("Email"))+" ",1),q]),_(t("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>r.email=i),type:"email",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:e.$t("Email"),required:""},null,8,B),[[f,r.email]]),t("p",D,l(r.emailError),1)]),t("div",M,[t("label",T,[p(l(e.$t("Password")),1),U]),_(t("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>r.password=i),type:"password",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:e.$t("Password"),required:""},null,8,j),[[f,r.password]]),t("p",R,l(r.passwordError),1)]),t("p",O,l(e.errorMsg),1),t("div",W,[t("button",{style:{"background-color":"#40b751"},class:"cursor-pointer border-[#40b751] hover:border-[#40b751] bg-[#40b751] hover:bg-transparent text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full ease-linear transition-all duration-150",type:"button",onClick:o[2]||(o[2]=i=>c.login())},l(e.$t("Sign In")),1)]),t("div",z,[h(a,{to:"auto-login",class:"text-green-500 text-left"},{default:b(()=>[p(l(e.$t("Other Login Method")),1)]),_:1}),t("div",{onClick:o[3]||(o[3]=i=>c.forgotPassword()),class:"text-green-500 text-right"},l(e.$t("Forgot Password?")),1)]),t("div",A,[h(a,{to:"/sadbhavna/registration",class:"text-green-500 text-center"},{default:b(()=>[p(l(e.$t("Register")),1)]),_:1})])])])])])])]),h(s)],64)}var X=w(G,[["render",H]]);export{X as default};