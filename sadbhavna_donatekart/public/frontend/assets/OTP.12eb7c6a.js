import{N as p,F as d}from"./Footer.bbb3a78f.js";import{_ as m,o as u,c as _,k as a,e,t as b,z as g,A as h,F as v,u as x,r as n}from"./index.889b9342.js";const y={name:"OTP",components:{Navbar:p,Footer:d},data(){return{message:"",number:"",otp:""}},mounted(){const t=x();this.message=t.params.message,this.number=t.params.number,console.log("message",this.message)},resources:{verify_otp(){return{method:"sadbhavna_donatekart.api.api.verify_otp",onSuccess:t=>{console.log("verified",t),this.$router.push("/sadbhavna")},onError:t=>{console.log("error",t)}}}},methods:{verify_otp(){this.$resources.verify_otp.submit({number:this.number,otp:this.otp})}}},f={class:"container mx-auto h-full"},k={class:"w-full sm:pt-0 md:pt-5 lg:pt-12 bg-grey-lightest"},w={class:"container mx-auto py-0"},F={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},N=e("div",{class:"py-8 px-10 text-gray-600 text-black text-center text-4xl"},"Varify your contact detail ",-1),T={class:"py-4 px-8"},V={class:"mb-7"},O={class:"block text-gray-600 text-base mb-2",for:"email"},P={class:"mb-4"},B=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},"Enter OTP",-1),E={class:"mb-4"};function $(t,s,C,D,o,i){const c=n("Navbar"),l=n("Footer");return u(),_(v,null,[a(c),e("div",f,[e("div",k,[e("div",w,[e("div",F,[N,e("div",T,[e("div",V,[e("span",O,b(o.message),1)]),e("div",P,[B,g(e("input",{class:"appearance-none border-gray-300 rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":s[0]||(s[0]=r=>o.otp=r),type:"number"},null,512),[[h,o.otp]])]),e("div",E,[e("button",{class:"appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded",onClick:s[1]||(s[1]=r=>i.verify_otp())},"Varify OTP")])])])])])]),a(l)],64)}var A=m(y,[["render",$]]);export{A as default};
