import{_ as C,o as d,c,n as u,t as m,D as z,e,k as p,v as j,F as f,g as x,y as A,A as R,b as v,p as g,s as S,C as V,u as q,r as b,w}from"./index.a26a8355.js";import{N as F,F as L}from"./Footer.68167667.js";const k=["square","circle"],N={name:"Avatar",props:{imageURL:String,label:String,size:{default:"md"},shape:{default:"circle",validator(t){const a=k.includes(t);return a||console.warn("shape property for <Avatar /> must be one of ",k),a}}},computed:{styleClasses(){const t={sm:"w-5 h-5",md:"w-8 h-8",lg:"w-12 h-12"}[this.size];return`${{circle:"rounded-full",square:"rounded-lg"}[this.shape]} ${t}`}}},B=["src"];function E(t,a,n,l,s,o){return d(),c("div",{class:u(["shrink-0 overflow-hidden",o.styleClasses])},[n.imageURL?(d(),c("img",{key:0,src:n.imageURL,class:u(["object-cover",o.styleClasses]),loading:"lazy"},null,10,B)):(d(),c("div",{key:1,class:u(["flex h-full w-full items-center justify-center bg-gray-200 uppercase text-gray-600",{sm:"text-xs",md:"text-base",lg:"text-lg"}[n.size]])},m(n.label&&n.label[0]),3))],2)}var U=C(N,[["render",E]]);new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");var G="/assets/sadbhavna_donatekart/frontend/assets/phonepay.d623769f.png",P="/assets/sadbhavna_donatekart/frontend/assets/gpay.3cee6d5c.png",O="/assets/sadbhavna_donatekart/frontend/assets/bhim.566c6f58.png",W="/assets/sadbhavna_donatekart/frontend/assets/paytm.8548e477.png",I="/assets/sadbhavna_donatekart/frontend/assets/crditcard.385bcb21.png",H="/assets/sadbhavna_donatekart/frontend/assets/banktransfer.dfdb0792.png",M="/assets/sadbhavna_donatekart/frontend/assets/giftcard.170fd4d2.png";const J={name:"CampaignDonation",components:{Navbar:F,Footer:L,Avatar:U,Dialog:z},setup(){const t=S("user"),a=Object.fromEntries(document.cookie.split("; ").map(n=>n.split("=")).map(n=>[n[0],decodeURIComponent(n[1])]));return{user:t,cookie:a}},data(){return{campaign_detail:"",openTab:1,recent_donation:"",campaign:"",tab2:"this is tab two content",a:70,qty:0,date:"",item_cart:[],total_price:0,anonymous:!1,showDialog:!1,donated_amount:"",donation_name:""}},mounted(){const t=V();this.campaign=t.params.name,this.get_campaign_donation_detail(t.params.name),this.get_recent_donation(t.params.name)},resources:{download_80g(){return{method:"sadbhavna_donatekart.api.donor.download_80g",onSuccess:t=>{let a=`/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${t}&format=80G Certificate for Donation`;window.open(a,"_blank")},onError:t=>{console.log("somthing want wrong!",t)}}},get_recent_donation(){return{method:"sadbhavna_donatekart.api.api.get_recent_donation",onSuccess:t=>{this.recent_donation=t},onError:t=>{console.log(t)}}},set_details_in_doctype_after_donation(){return{method:"sadbhavna_donatekart.api.api.set_details_in_doctype_after_donation",onSuccess:t=>{this.item_cart=[],this.total_price=0,this.qty=0,this.donated_amount=t[0],this.donation_name=t[1],this.showDialog=!0},onError:t=>{this.$toast({title:"Error",text:t,customIcon:"circle-fail",appearance:"denger"})}}}},methods:{formatDate(t){const a=new Date(t);return new Intl.DateTimeFormat("default",{dateStyle:"long"}).format(a)},numberWithCommas(t){return t.toLocaleString()},toggleTabs:function(t){this.openTab=t},get_campaign_donation_detail(t){let a="/api/resource/Donation Campaign/"+t;fetch(a,{method:"GET"}).then(n=>{n.json().then(l=>{this.campaign_detail=l})}).catch(n=>{console.error(n)})},get_recent_donation(t){this.$resources.get_recent_donation.submit({name:t})},donate(t,a){if(!this.user.isLoggedIn())this.$router.push("/sadbhavna/auto-login");else{var n={key:"rzp_test_Adc0DsR6E8VV3t",amount:t*100,currency:"INR",name:"Crowdfunding",description:"Test Transaction",image:"https://crowdfunding.frappe.cloud/assets/sadbhavna_donatekart/frontend/assets/logo.2bd6bc2a.png",handler:s=>{this.set_details_in_doctype_after_donation(t,a,s.razorpay_payment_id)},prefill:{name:`${this.cookie.full_name}`,email:`${this.cookie.user_id}`},notes:{address:"Razorpay Corporate Office"},theme:{color:"#40b751"}},l=new Razorpay(n);l.on("payment.failed",function(s){alert(s.error.code),alert(s.error.description),alert(s.error.source),alert(s.error.step),alert(s.error.reason),alert(s.error.metadata.order_id),alert(s.error.metadata.payment_id)}),l.open()}},set_details_in_doctype_after_donation(t,a,n){this.$resources.set_details_in_doctype_after_donation.submit({user_id:this.cookie.user_id,campaign:this.campaign,item:this.item_cart,amount:t,payment_id:n,anonymous:a==!0?1:0})},download_80g(t){this.$resources.download_80g.submit({donor:this.cookie.user_id,donation:t})},view_profile(){this.$router.push(`/sadbhavna/profile/${this.cookie.user_id}`)},increment(t,a,n){this.qty+=1;let l=0;this.item_cart.filter(function(r){r.item==t?l=r.qty:l=0});let s=a*(l+1);var o=this.item_cart.filter(function(r){if(r.item==t)return r});if(o.length>0){let r=this.item_cart.map(_=>_.item).indexOf(t);this.item_cart.splice(r,1),this.item_cart.push({item:t,rate:a,qty:l+1,amount:s}),this.total_price+=a,l=0}else this.item_cart.push({item:t,rate:a,qty:l+1,amount:s}),this.total_price+=a,l=0},decrement(t,a,n){if(n!=0){this.qty-=1;let s=0;this.item_cart.filter(function(r){r.item==t?s=r.qty:s=0});let o=a*(s-1);var l=this.item_cart.filter(function(r){if(r.item==t)return r});if(l.length>0){let r=this.item_cart.map(_=>_.item).indexOf(t);this.item_cart.splice(r,1),this.item_cart.push({item:t,rate:a,qty:s-1,amount:o}),this.total_price-=a}else this.item_cart.push({item:t,rate:a,qty:s-1,amount:o}),this.total_price-=a}if(n==1){var l=this.item_cart.filter(function(o){if(o.item==t)return o});if(l.length>0){let o=this.item_cart.map(r=>r.item).indexOf(t);this.item_cart.splice(o,1)}}}}},Q={class:"top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')"}},Y=e("div",{class:"container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"},[e("p",{class:"text-[30px] md:text-[30px] lg:text-[48px] sm:pr-10 md:pr-20 lg:pr-12 xl:pr-16 mb-32 text-center md:text-center md:text-base lg:text-left pt-20 font-medium text-[#364958] leading-none",style:{"text-shadow":"3px 6px 6px #c9c9c9"}},[g(" Join hands with "),e("span",{class:"text-[#40b751]"},"Sadbhana Campaigns"),g(" to help needy.")])],-1),K={class:"container mx-auto mt-20"},X={key:0,class:"px-[14px] md:px-0 lg:px-0"},Z={style:{"font-size":"2rem"},class:"mb-4 leading-10 md:leading-0 lg:heading-12 mb-1.5 text-[#364958] font-medium capitalize"},$={style:{"line-height":"1.7"},class:"mb-4 text-base text-[#364958] font-normal"},ee=e("div",{class:"mb-[50px]"},[e("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"},"Tax Benefit"),e("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"}," Assured"),e("span",{class:"bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[20px] rounded-[10px]"},"Old Ages")],-1),te={class:"flex flex-wrap mt-6 mb-5"},se={class:"w-full lg:w-8/12 pr-4"},ae=["src"],ie={class:"w-full h-[16px] bg-gray-200 rounded-md dark:bg-gray-700"},oe={class:"pt-4 pb-2 mt-[4px] mb-[6px] flex text-[#364958] justify-between font-bold"},ne={style:{"line-height":"1.7"},class:"text-[#364958]"},re={class:"w-full lg:w-4/12 pl-4"},le=e("div",{style:{"font-size":"2rem"},class:"text-gray-600"},"Product",-1),de={class:"pb-8"},ce={class:"block product-shodow bg-white pl-5"},me={class:"flex items-center pt-10"},pe={class:"lg:flex lg:w-3/12 xl:w-3/12"},ue=["src","alt"],_e={class:"lg:w-9/12 xl:w-9/12"},ge={class:"px-6 md:px-6 lg:px-6"},he={class:"text-xl font-medium text-[#40b751]"},be={class:"text-gray-500 mb-2"},fe={class:"text-gray-500 font-bold pb-2"},xe=e("hr",{class:"h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mr-4"},null,-1),ve={class:"flex justify-between pb-2"},ye={class:"flex justify-between w-24 text-xl h-9"},we={key:0,class:"bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center pb-5"},ke={key:0,class:"text-center font-bold text-lg mt-5"},Ce=e("div",{class:"text-gray-600"},"Total Donation",-1),qe={class:"text-[#40b751]"},De=e("label",{for:"checkbox",class:"text-sm pl-2"},"Make my donation anonymous",-1),Te=e("hr",{class:"h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),ze=q('<div style="font-size:2rem;" class="mt-3 font-medium text-gray-800">Other Donation</div><p class="text-gray-600">Donate via</p><div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4"><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+G+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Phone Pay</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+P+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Google Pay</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+O+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Bhim UPI</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+W+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Paytm</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+I+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">cr/dr card</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+H+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Bank Transfer</p></div></div></div><div><div class="cursor-pointer rounded-t-lg pt-4 pb-4"><div class="grid justify-center"><img src="'+M+'" class="w-12 h-12"></div><div class="text-center pt-2"><p class="text-xs text-[#364958]">Gift Card</p></div></div></div></div><div style="font-size:2rem;" class="mt-3 font-medium text-gray-800">Donors</div>',4),je={class:"flex flex-wrap shadow"},Ae={class:"w-full"},Re={class:"flex mb-0 list-none flex-wrap flex-row"},Se={class:"-mb-px flex-auto text-center"},Ve=e("i",{class:"fas fa-space-shuttle text-base mr-1"},null,-1),Fe={class:"-mb-px flex-auto text-center"},Le=e("i",{class:"fas fa-cog text-base mr-1"},null,-1),Ne={class:"relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded"},Be={class:"px-4 py-5 flex-auto"},Ee={class:"tab-content tab-space overflow-y-auto h-60"},Ue={class:"pb-6"},Ge={class:"grid grid-cols-[200px_minmax(80px,_1fr)_100px]"},Pe={class:"float-left pr-4"},Oe={key:0},We={key:1},Ie={key:0,class:"text-gray-900 leading-none text-lg font-bold"},He={key:1,class:"text-gray-900 leading-none text-lg font-bold"},Me={class:"text-gray-600 text-sm"},Je={class:"grid justify-end"},Qe={class:""},Ye=q('<section class="bg-white dark:bg-gray-900"><div><section class="bg-white dark:bg-gray-900"><div><section class="text-gray-700"><div class="px-5 py-10"><div class="mb-8"><p class="text-[30px] md:text-[26px] lg:text-[30px] text-[#40b751] font-semibold text-center title-font mb-4"> FAQ </p><p class="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate! </p></div><div class="flex flex-wrap sm:mx-auto sm:mb-2 mx-auto"><div class="w-full py-2"><details class="mb-4"><summary class="font-medium cursor-pointer border-2 border-b-1 border-solid border-b-gray-300 text-xl text-[#40b751] list-none bg-gray-100 rounded py-3 px-4"> What is Donatekart ?</summary><span><p style="line-height:1.7;" class="border-2 font-normal border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958]"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. </p></span></details><details class="mb-4"><summary class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4"> How to claim Tax-Exemption for my contributions on Donatekart?</summary><span><p style="line-height:1.7;" class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#39;t heard of them accusamus labore sustainable VHS.</p></span></details><details class="mb-4"><summary class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4"> How to Donate ?</summary><span><p style="line-height:1.7;" class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p></span></details></div></div></div></section></div></section></div></section>',1);function Ke(t,a,n,l,s,o){const r=b("Navbar"),_=b("Button"),y=b("Avatar"),D=b("Dialog"),T=b("Footer");return d(),c(f,null,[e("div",Q,[p(r),Y]),e("div",K,[s.campaign_detail?(d(),c("div",X,[e("h2",Z,m(s.campaign_detail.data.campaign_title),1),e("p",$,m(s.campaign_detail.data.short_description),1),ee,e("div",te,[e("div",se,[e("img",{class:"object-fill w-full mb-4",src:s.campaign_detail.data.campain_image},null,8,ae),e("div",ie,[e("div",{class:"bg-[#40b751] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded",style:j({width:s.campaign_detail.data.raised_amount*100/s.campaign_detail.data.donation_amount+"%"})},m((s.campaign_detail.data.raised_amount*100/s.campaign_detail.data.donation_amount).toFixed(2))+"%",5)]),e("div",oe,[e("p",null,"Raised: "+m(o.numberWithCommas(s.campaign_detail.data.raised_amount)),1),e("p",null,"Goal: "+m(o.numberWithCommas(s.campaign_detail.data.donation_amount)),1)]),e("p",ne,m(s.campaign_detail.data.about_campaign),1)]),e("div",re,[le,(d(!0),c(f,null,x(s.campaign_detail.data.add_campaign_items,i=>(d(),c("div",de,[e("div",ce,[e("div",me,[e("div",pe,[e("img",{src:i.image,alt:i.display_as_name,class:"rounded-full w-20 h-20"},null,8,ue)]),e("div",_e,[e("div",ge,[e("h4",he,m(i.display_as_name),1),e("p",be,m(i.about),1),e("p",fe," \u20B9 "+m(o.numberWithCommas(i.price)),1)])])]),xe,e("div",ve,[e("div",ye,[p(_,{class:"bg-gray-300",onClick:h=>o.decrement(i.item,i.price,s.qty)},{default:w(()=>[g("-")]),_:2},1032,["onClick"]),(d(!0),c(f,null,x(s.item_cart,h=>(d(),c("div",null,[i.item==h.item&&h.qty!=0?(d(),c("div",we,m(h.qty),1)):v("",!0)]))),256)),p(_,{class:"bg-gray-300",onClick:h=>o.increment(i.item,i.price,s.qty)},{default:w(()=>[g("+")]),_:2},1032,["onClick"])])])])]))),256)),s.total_price!=0?(d(),c("div",ke,[Ce,e("div",qe,"\u20B9 "+m(o.numberWithCommas(s.total_price)),1),e("div",null,[e("button",{class:"rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150",type:"button",onClick:a[0]||(a[0]=i=>o.donate(s.total_price,s.anonymous))}," donate now ")]),e("div",null,[A(e("input",{type:"checkbox",id:"anonymous","onUpdate:modelValue":a[1]||(a[1]=i=>s.anonymous=i)},null,512),[[R,s.anonymous]]),De]),Te])):v("",!0),ze,e("div",je,[e("div",Ae,[e("ul",Re,[e("li",Se,[e("a",{class:u(["text-sm font-medium px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer",{"bg-gray-200":s.openTab!==1,"text-gray-500":s.openTab===1}]),onClick:a[2]||(a[2]=i=>o.toggleTabs(1))},[Ve,g(" Recent ")],2)]),e("li",Fe,[e("a",{class:u(["text-sm font-medium px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer",{"bg-gray-200":s.openTab!==2,"text-gray-500":s.openTab===2}]),onClick:a[3]||(a[3]=i=>o.toggleTabs(2))},[Le,g(" most generous ")],2)])]),e("div",Ne,[e("div",Be,[e("div",Ee,[e("div",{class:u({hidden:s.openTab!==1,block:s.openTab===1})},[(d(!0),c(f,null,x(s.recent_donation,i=>(d(),c("div",Ue,[e("div",Ge,[e("div",null,[e("div",Pe,[i.anonymous!=1?(d(),c("div",Oe,[p(y,{imageURL:i.donor_image,label:i.donor_name,size:"lg",class:"w-12 h-12 rounded-full"},null,8,["imageURL","label"])])):(d(),c("div",We,[p(y,{imageURL:"",label:"Anonymous",size:"lg",class:"w-12 h-12 rounded-full"})]))]),e("div",null,[i.anonymous!=1?(d(),c("p",Ie,m(i.donor_name),1)):(d(),c("p",He," Anonymous")),e("p",Me,m(o.formatDate(i.date)),1)])]),e("div",Je,[e("p",Qe,"\u20B9 "+m(o.numberWithCommas(i.amount)),1)])])]))),256))],2),e("div",{class:u({hidden:s.openTab!==2,block:s.openTab===2})},[e("p",null,m(s.item_cart),1)],2)])])])])])])]),Ye])):v("",!0)]),p(D,{options:{title:"Donation Completed",message:`Your donation of ${s.donated_amount} is successfully completed.`,icon:{name:"smile",appearance:"success"},appearance:"info",size:"lg",actions:[{label:"Get 80G Certificate",appearance:"success",handler:({close:i})=>{this.download_80g(s.donation_name),i()}},{label:"View Profile",appearance:"success",handler:({close:i})=>{this.view_profile(),i()}},{label:"Cancel"}]},modelValue:s.showDialog,"onUpdate:modelValue":a[4]||(a[4]=i=>s.showDialog=i)},null,8,["options","modelValue"]),p(T)],64)}var $e=C(J,[["render",Ke]]);export{$e as default};
