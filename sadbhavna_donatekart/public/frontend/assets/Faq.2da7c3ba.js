import{N as v,F as _}from"./Footer.1b35510d.js";import{_ as x,o as s,c as i,k as h,e,t as l,F as c,g as p,r as f,C as m,K as g}from"./index.a534a200.js";const $={name:"requester_type",components:{Navbar:v,Footer:_},data(){return{openTab:1,faq:[{question:this.$t("How can I get my tax redemption?"),answer:this.$t("You will be getting tax redemption after donating through our Platform. On the payment success page, which appears once your payment for product purchase has been completed successfully, you will see the 'GET 80G' button. <br> <br> Please enter your PAN number, complete location, and PAN-compliant name before clicking 'Submit.' You will receive an email and a download link for your 80G certificate. <br><br> This receipt will include all the necessary information you need for tax reporting purposes. You can use this receipt to claim a tax deduction or credit on your tax return."),open:!0},{question:this.$t("Why should I choose Best Deed?"),answer:this.$t("Best Deed is a platform of its sort that adds a new level of transparency and trust to the donations made for social causes. We have introduced these special features on our Platform, which places the highest value on transparency. <br><br><b>Let's find out -</b><ul style='list-style-type:disc;' class='px-6'><li >Best Deed doesn't charge anything to launch a crowdfunding campaign and accept donations.</li><li>We accept contributions in several currencies.</li><li>We offer the varied payment alternatives of any crowdfunding website.</li><li>Your fundraising campaign can be stopped or put on hold whenever you wish.</li><li>You can donate to one or more crowdfunding campaigns at once.</li><li>All the campaigns on Best Deed are verified and reliable.</li></ul>"),open:!1},{question:this.$t("What is the reliability of your crowdfunding Platform?"),answer:this.$t("Our crowdfunding Platform is governed by a local exchange and securities commission, and we abide by strict guidelines to ensure the security of investors' investments. To get a better idea, check out our certificates, licenses, <a href='/bestdeed/privacy-policy' style='color: blue'>privacy policy</a>, and <a href='/bestdeed/terms-of-service' style='color: blue'>terms & conditions</a>."),open:!1},{question:this.$t("Which types of payment methods do you accept at Best Deed?"),answer:this.$t("Best Deed accepts credit cards, debit cards, bank transfers, UPI, PayPal, and other payment methods. You can select the most convenient option and carry out the necessary actions."),open:!1},{question:this.$t("Can I volunteer with NGOs instead of donating money?"),answer:this.$t("Yes, you can help in any way possible. If you choose to volunteer with us instead of donations, then you reach out to any NGO listed on our Platform and can volunteer with them based on your location convenience."),open:!1},{question:this.$t("Can I donate anonymously through Best Deed?"),answer:this.$t("Yes, you can. If you don't want to reveal your identity, you can even donate anonymously through our Platform."),open:!1},{question:this.$t("My payment got stuck, how can I solve this problem?"),answer:this.$t("In case of any such queries, we have a dedicated help center available for your help. So you can reach out to us on +919999999999 or bestdeed2023@gmail.com, and our team will gladly assist you."),open:!1},{question:this.$t("I want to help students who are deprived of primary education. How can I help?"),answer:this.$t("Our Platform has categories and NGOs catering to different needs ranging from education, healthcare, Women, Old age homes, Children, Animals, etc."),open:!1}],ngofaq:[{questionngo:this.$t("In what cases will you reject my campaign request?"),answerngo:this.$t("Here are some of the cases why your request might be rejected - <br><ul style='list-style-type:disc' class='px-6'><li>The stated objective amount and fund usage have not been justified.</li><li>Creating a campaign when there is already an acknowledged one by the same person and for the same cause</li><li>False information given or details misrepresented in the campaign.</li><li>Documents needed for authentication are missing.</li><li>Using language that promotes hate or violence</li><li>Usage of fake documents</li><li>Copied text from another fundraising campaign.</li></ul>"),open:!1},{questionngo:this.$t("What am I going to need to start a campaign?"),answerngo:this.$t("Here are some of the things you need to start a campaign - <br><ul style='list-style-type:disc' class='px-6'><li>A narrative outlining your mission, vision, and detailed organization explanation.</li><li>Type and number of products needed or any other help needed.</li><li>Timeline for the campaign.</li><li>Video, ideally one with a pitch</li><li>High-resolution images and videos</li></ul>"),open:!1},{questionngo:this.$t("What if my fundraising target is not reached? Will I still receive the money or products? "),answerngo:this.$t("According to Best Deed, every work put into the campaign should be rewarded. Therefore, even if you fall short of your fundraising target, you still receive all the products or money you have received from the donors."),open:!1},{questionngo:this.$t("How to start a crowdfunding campaign with Best Deed?"),answerngo:this.$t("Check out the following guide to start the campaign with Best Deed - <br><b>Step 1 -</b> You can create your crowdfunding campaign on the Best Deed portal. You can compose your story, enter the type and quantity of products or any other help you need, and include eye-catching images and videos for the campaign.<br><b>Step 2 -</b> Once we have approved your campaign, you can share the link with your friends, family, and coworkers and even post it on your social media accounts. It will be simpler for you to achieve your objective as more people know about your campaign!<br><b>Step 3 -</b> You can even send updates, images, and milestones through your email and social media to boost visibility and donors to your campaign.<br><b>Step 4 -</b> Once the campaign hits the end date, we will deliver the products to you immediately."),open:!1},{questionngo:this.$t("Do we have to pay any fees to start our campaign on Best Deed? "),answerngo:this.$t("No, you don't have to pay any fees to start a campaign on Best Deed. You can do it for free."),open:!1},{questionngo:this.$t("Will your Platform protect the confidential information given by our non-profit organization? "),answerngo:this.$t("Yes, we thoroughly protect your organization's confidential information with us and ensure end-to-end data security."),open:!1},{questionngo:this.$t("Can my organization customize its profile on Best Deed to reflect our brand and mission?"),answerngo:this.$t("After receiving all the details, our team will customize every detail of your organization as per your offerings, mission, vision, and other details to make it relevant and satisfactory for the donors. "),open:!1},{questionngo:this.$t("Does your Platform offer us details for taxes and other financial details?"),answerngo:this.$t("Best Deed provides NGOs with access to a secure online dashboard to view all donations made to their organization, track the progress of fundraising campaigns, and generate detailed reports on financial activity. NGOs can easily track and manage their donations and ensure that all financial reporting requirements are met."),open:!1}]}},methods:{toggleQuestion(o){this.faq=this.faq.map((t,r)=>(r===o?t.open=!t.open:t.open=!1,t)),this.ngofaq=this.ngofaq.map(t=>(t.open=!1,t))},toggleQuestionNgo(o){this.ngofaq=this.ngofaq.map((t,r)=>(r===o?t.open=!t.open:t.open=!1,t)),this.faq=this.faq.map(t=>(t.open=!1,t))}}},k={class:"w-full h-[13rem] md:h-[15rem] lg:h-[17rem] bg-center bg-right bg-transparent bg-cover",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/faq-bnr.jpg')"}},q={class:"text-[30px] md:text-[36px] lg:text-[48px] pt-20 text-center text-[#40b751] font-black"},D={class:"relative container mx-auto h-full pt-0"},B={class:"w-full bg-grey-lightest"},N={class:"py-0"},T={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},I={class:""},P={class:"px-0 py-px flex-auto"},H={class:"tab-content tab-space"},C={class:"text-gray-700"},Y={class:"container px-0 py-7 mx-auto"},O={class:""},F={class:"w-full lg:w-1/2 px-4 py-2"},W={class:"text-[28px] text-[#40b751] py-2 font-black"},j=["onClick"],L=["innerHTML"],G={class:"mt-0 py-6 px-6 text-[18px] text-justify bg-white"},M=["innerHTML"],z={class:"text-gray-700"},A={class:"container px-0 pb-7 mx-auto"},S={class:""},Q={class:"w-full lg:w-1/2 px-4 py-2"},U={class:"text-[28px] text-[#40b751] py-2 font-black"},V=["onClick"],E=["innerHTML"],K={class:"mt-0 py-6 px-6 text-[18px] text-justify bg-white"},J=["innerHTML"];function R(o,t,r,X,d,u){const y=f("Navbar"),b=f("Footer");return s(),i(c,null,[h(y),e("div",k,[e("p",q,l(o.$t("Frequently Asked Questions")),1)]),e("div",D,[e("div",B,[e("div",N,[e("div",T,[e("div",I,[e("div",P,[e("div",H,[e("section",C,[e("div",Y,[e("div",O,[e("div",F,[e("h1",W,l(o.$t("For Donors")),1),(s(!0),i(c,null,p(d.faq,(n,a)=>(s(),i("div",{key:a,class:"rounded-md bg-[#40b751] shadow-xl pt-4 my-4"},[e("button",{type:"button",class:"flex justify-between w-full text-left font-medium text-white font-bold text-[20px] focus:outline-none",onClick:w=>u.toggleQuestion(a)},[e("p",{innerHTML:n.question,class:"pl-4 pb-4"},null,8,L)],8,j),m(e("div",G,[e("p",{innerHTML:n.answer,class:"text-gray-700"},null,8,M)],512),[[g,n.open]])]))),128))])])])]),e("section",z,[e("div",A,[e("div",S,[e("div",Q,[e("h1",U,l(o.$t("For NGOs")),1),(s(!0),i(c,null,p(d.ngofaq,(n,a)=>(s(),i("div",{key:a,class:"rounded-md bg-[#40b751] shadow-xl pt-4 my-4"},[e("button",{type:"button",class:"flex justify-between w-full text-left font-medium text-white font-bold text-[20px] focus:outline-none",onClick:w=>u.toggleQuestionNgo(a)},[e("p",{innerHTML:n.questionngo,class:"pl-4 pb-4"},null,8,E)],8,V),m(e("div",K,[e("p",{innerHTML:n.answerngo,class:"text-gray-700"},null,8,J)],512),[[g,n.open]])]))),128))])])])])])])])])])])]),h(b)],64)}var te=x($,[["render",R]]);export{te as default};