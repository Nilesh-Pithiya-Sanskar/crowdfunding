<template>
  <Navbar />
  <div
    class="w-full h-[13rem] md:h-[15rem] lg:h-[17rem] bg-center bg-right bg-transparent bg-cover"
    style="background-image: url('https://crowdfunding.frappe.cloud/files/faq-bnr.jpg')"
  >
        <p
          class="text-[30px] md:text-[36px] lg:text-[48px] pt-20 text-center text-[#40b751] font-black"
        >
      {{ $t("Frequently Asked Questions")}}
        </p>
  </div>

  <div class="relative container mx-auto h-full pt-0">
    <div class="w-full bg-grey-lightest">
      <div class="py-0">
        <div class="w-6/6 lg:w:4/6 mx-auto bg-white">
          <div class="">
            
            <div class="px-0 py-px flex-auto">
              <div class="tab-content tab-space">
                
                  <section class="text-gray-700">
                    <div class="container px-0 py-7 mx-auto">
                      <div class="">
                        <div class="w-full lg:w-1/2 px-4 py-2">
                          <h1 class="text-[28px] text-[#40b751]  py-2 font-black">{{$t('For Donors')}}</h1>
                          <div v-for="(question, index) in faq" :key="index" class=" rounded-md bg-[#40b751] shadow-xl   pt-4 my-4">
          <button
            type="button"
            class="flex justify-between w-full text-left font-medium text-white  font-bold text-[20px]  focus:outline-none"
            @click="toggleQuestion(index)"
          >
            <!-- <span  class="pl-4 pb-4">{{ question.question }}</span> -->
            <p v-html="question.question" class="pl-4 pb-4"></p>
            <!-- <span class="ml-6 flex-shrink-0">
              <svg
                class="h-5 w-5 transform"
                :class="{'rotate-180': question.open}"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.707 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 01-2 0V7.414L6.707 10.707a1 1 0 01-1.414-1.414l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span> -->
          </button>
          <div v-show="question.open" class="mt-0 py-6 px-6 text-[18px] text-justify bg-white ">
            <!-- <p class="text-gray-500">{{ question.answer }}</p> -->
            <p v-html="question.answer" class="text-gray-700"></p>
          </div>
        </div>
                          <!-- <details class="mb-4 shadow-2xl" >
                            <summary  
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('How can I get my tax redemption?') }}
                            </summary>
                              <p
                                class=" pt-6 pb-4 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 "
                              >{{ $t("You may quickly obtain your tax receipt because all of our partner NGOs are 80G approved.") }}</p>
                              <p class="pb-6 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 ">
                                {{ $t(" On the payment success page, which appears once your payment for product purchase has been completed successfully, you will see the 'GET 80G' button. Please enter your PAN number, complete location, and PAN-compliant name before clicking 'Submit'. You will receive an email and a download link for your 80G certificate.") }}
                              </p>
                          </details>
                          <details class="mb-4 shadow-2xl">
                            <summary
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('What if my fundraising target is not reached? Will I still receive the products?') }}</summary>
                            
                              <p
                                class="py-6 px-6 text-[18px] text-justify text-gray-700 dark:text-gray-300 "
                              >{{$t('According to Best Deed, every work put into the campaign should be rewarded. Therefore, even if you fall short of your fundraising target, you still receive all of the products you have received so far.')}}</p>
                          </details>
                          <details class="mb-4 shadow-2xl">
                            <summary
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('What is the reliability of your crowdfunding platform? ') }}</summary>
                              <p
                                class="pt-6 pb-4 px-6 text-[18px] text-justify text-gray-700 dark:text-gray-300 "
                              >{{ $t("The environment, structure, and sophistication of crowdfunding platforms can vary greatly. Our crowdfunding platform is governed by a local exchange and securities commission and is required to follow strict guidelines to ensure the security of investors' investments. ")}}</p>
                              <p class="px-6 pb-4 text-[18px] text-justify text-gray-700 dark:text-gray-300 ">
                                {{ $t("Look for a license number in the page's footer to quickly spot these sites. On the other hand, some crowdfunding platforms work independently, with no supervision to ensure the safety of investors.") }}
                              </p>
                              <p class="pb-6 px-6 text-[18px] text-justify text-gray-700 dark:text-gray-300 ">
                                {{ $t("Best Deed accepts credit cards, debit cards, bank transfers, UPI, PayPal, and other payment methods. You can select the most convenient option and carry out the necessary actions.") }}
                              </p>
                            </details>
                          <details class="mb-4 shadow-2xl">
                            <summary
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('In what cases, will you reject my campaign request? ') }}
                            </summary>
                              <p
                                class=" py-6 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 "
                              >{{ $t("Here are some of the cases, why your request might be rejected - ") }}
                              <ul class="list-disc pl-8">
                                <li>{{ $t("The stated objective amount and fund usage have not been justified.") }}</li>
                                <li>{{ $t("Creating a campaign when there is already an acknowledged one by the same person and for the same cause") }}</li>
                              <li>{{ $t("False information given or details misrepresented in the campaign.") }}</li>
                              <li>{{ $t("Documents needed for authentication are missing.") }}</li>
                              <li>{{ $t("Using language that promotes hate or violence") }}</li>
                              <li>{{ $t("use of fake medical or other documents") }}</li>
                              <li>{{ $t("copied text from another fundraising campaign.") }}</li>
                              </ul>
                            </p>
                          </details>
                          <details class="mb-4 shadow-2xl" >
                            <summary
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('Why should you choose to start with Best Deed? ') }}
                            </summary>
                              <p
                                class=" pt-6 pb-4 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 "
                              >{{ $t("Best Deed is a platform of its sort that adds a new level of transparency and trust to the donations made for social causes. On our platform, which places the highest value on transparency, we have introduced these special features.") }}</p>
                               <p class="pb-6 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 ">
                                {{ $t("Let’s find out - ") }}
                                <ul class="list-disc pl-8">
                                  <li>{{ $t("Best Deed doesn't charge anything to launch a crowdfunding campaign and accept donations.") }}</li>
                                  <li>{{ $t("To make a payment on Best Deed, we accept contributions in several currencies from people all around the world.") }}</li>
                                  <li>{{ $t("We offer the most payment alternatives of any crowdfunding website.") }}</li>
                                  <li>{{ $t("Your fundraising campaign can be stopped or put on hold whenever you wish. ") }}</li>
                                  <li>{{ $t("You can donate in one or more crowdfunding campaigns at once. ") }}</li>
                                  <li>{{ $t("All the campaigns on Best Deed are verified and reliable. ") }}</li>
                                </ul>
                               </p>
                            </details>
                          <details class="mb-4 shadow-2xl" >
                            <summary
                              class="font-bold text-center text-[20px] text-white list-none bg-[#40b751] rounded py-3 px-2 "
                            >{{ $t('What am I going to need to start a campaign?') }}
                            </summary>
                              <p
                                class=" py-6 px-6 text-justify text-[18px] text-gray-700 dark:text-gray-300 "
                              >{{ $t("Here are some of the things you need to start a campaign - ") }}
                            <ul class="list-disc pl-8">
                              <li>{{ $t("A narrative outlining your objective.") }}</li>
                              <li>{{ $t("Type and number of products needed.") }}</li>
                              <li>{{ $t("Timeline for the campaign.") }}</li>
                              <li>{{ $t("Video, ideally one with a pitch") }}</li>
                              <li>{{ $t("High resolution images and videos") }}</li>
                            </ul>
                            </p>
                          </details> -->
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="text-gray-700">                               
                    <div class="container px-0 pb-7 mx-auto">
                      <div class="">                        
                        <div class="w-full lg:w-1/2 px-4 py-2">
                          <h1 class="text-[28px] text-[#40b751] py-2 font-black">{{$t('For NGOs')}}</h1>
                          <div v-for="(questionngo, index) in ngofaq" :key="index" class=" rounded-md bg-[#40b751] shadow-xl   pt-4 my-4">
                          <button
                            type="button"
                            class="flex justify-between w-full text-left font-medium text-white  font-bold text-[20px]  focus:outline-none"
                            @click="toggleQuestionNgo(index)"
                          >
                            <!-- <span class="pl-4 pb-4">{{ questionngo.questionngo }}</span> -->
                            <p v-html="questionngo.questionngo" class="pl-4 pb-4"></p>
                          </button>
                          <div v-show="questionngo.open" class="mt-0 py-6 px-6 text-[18px] text-justify bg-white ">            
                            <p v-html="questionngo.answerngo" class="text-gray-700"></p>            
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'requester_type',
  components: {
    Navbar,
    Footer,
  },
  created(){
    const linkElement = document.querySelector('link[rel="canonical"]');
        if (!linkElement) {
          var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://bestdeed.org/faq"
        document.head.appendChild(link);
        }
        else{
        linkElement.href = "https://bestdeed.org/faq"
        document.head.appendChild(linkElement)
        }
  },
  data() {
    return {
      openTab: 1,
      faq: [
        {
          question: this.$t("How can I get my tax redemption?"),
          answer: this.$t("You will be getting tax redemption after donating through our Platform. On the payment success page, which appears once your payment for product purchase has been completed successfully, you will see the 'GET 80G' button. <br> <br> Please enter your PAN number, complete location, and PAN-compliant name before clicking 'Submit.' You will receive an email and a download link for your 80G certificate. <br><br> This receipt will include all the necessary information you need for tax reporting purposes. You can use this receipt to claim a tax deduction or credit on your tax return."),
          
          open: true,
        },
        {
          question: this.$t("Why should I choose Best Deed?"),
          answer: this.$t("Best Deed is a platform of its sort that adds a new level of transparency and trust to the donations made for social causes. We have introduced these special features on our Platform, which places the highest value on transparency. <br><br><b>Let's find out -</b><ul style='list-style-type:disc;' class='px-6'><li >Best Deed doesn't charge anything to launch a crowdfunding campaign and accept donations.</li><li>We accept contributions in several currencies.</li><li>We offer the varied payment alternatives of any crowdfunding website.</li><li>Your fundraising campaign can be stopped or put on hold whenever you wish.</li><li>You can donate to one or more crowdfunding campaigns at once.</li><li>All the campaigns on Best Deed are verified and reliable.</li></ul>"),
          open: false,
        },
        {
          question: this.$t("What is the reliability of your crowdfunding Platform?"),
          answer: this.$t("Our crowdfunding Platform is governed by a local exchange and securities commission, and we abide by strict guidelines to ensure the security of investors' investments. To get a better idea, check out our certificates, licenses, <a href='/bestdeed/privacy-policy' style='color: blue'>privacy policy</a>, and <a href='/bestdeed/terms-of-service' style='color: blue'>terms & conditions</a>."),
          open: false,
        },
        {
          question: this.$t("Which types of payment methods do you accept at Best Deed?"),
          answer: this.$t("Best Deed accepts credit cards, debit cards, bank transfers, UPI, PayPal, and other payment methods. You can select the most convenient option and carry out the necessary actions."),
          open: false,
        },
        {
          question: this.$t("Can I volunteer with NGOs instead of donating money?"),
          answer: this.$t("Yes, you can help in any way possible. If you choose to volunteer with us instead of donations, then you reach out to any NGO listed on our Platform and can volunteer with them based on your location convenience."),
          open: false,
        },
        {
          question: this.$t("Can I donate anonymously through Best Deed?"),
          answer: this.$t("Yes, you can. If you don't want to reveal your identity, you can even donate anonymously through our Platform."),
          open: false,
        },
        {
          question: this.$t("My payment got stuck, how can I solve this problem?"),
          answer: this.$t("In case of any such queries, we have a dedicated help center available for your help. So you can reach out to us on +919999999999 or bestdeed2023@gmail.com, and our team will gladly assist you."),
          open: false,
        },
        {
          question: this.$t("I want to help students who are deprived of primary education. How can I help?"),
          answer: this.$t("Our Platform has categories and NGOs catering to different needs ranging from education, healthcare, Women, Old age homes, Children, Animals, etc."),
          open: false,
        }
      ],

      ngofaq: [
        {
          questionngo: this.$t("In what cases will you reject my campaign request?"),
          answerngo: this.$t("Here are some of the cases why your request might be rejected - <br><ul style='list-style-type:disc' class='px-6'><li>The stated objective amount and fund usage have not been justified.</li><li>Creating a campaign when there is already an acknowledged one by the same person and for the same cause</li><li>False information given or details misrepresented in the campaign.</li><li>Documents needed for authentication are missing.</li><li>Using language that promotes hate or violence</li><li>Usage of fake documents</li><li>Copied text from another fundraising campaign.</li></ul>"),
          open: false,
        },
        {
          questionngo: this.$t("What am I going to need to start a campaign?"),
          answerngo: this.$t("Here are some of the things you need to start a campaign - <br><ul style='list-style-type:disc' class='px-6'><li>A narrative outlining your mission, vision, and detailed organization explanation.</li><li>Type and number of products needed or any other help needed.</li><li>Timeline for the campaign.</li><li>Video, ideally one with a pitch</li><li>High-resolution images and videos</li></ul>"),
          open: false,
        },
        {
          questionngo: this.$t("What if my fundraising target is not reached? Will I still receive the money or products? "),
          answerngo: this.$t("According to Best Deed, every work put into the campaign should be rewarded. Therefore, even if you fall short of your fundraising target, you still receive all the products or money you have received from the donors."),
          open: false,
        },
        {
          questionngo: this.$t("How to start a crowdfunding campaign with Best Deed?"),
          answerngo: this.$t("Check out the following guide to start the campaign with Best Deed - <br><b>Step 1 -</b> You can create your crowdfunding campaign on the Best Deed portal. You can compose your story, enter the type and quantity of products or any other help you need, and include eye-catching images and videos for the campaign.<br><b>Step 2 -</b> Once we have approved your campaign, you can share the link with your friends, family, and coworkers and even post it on your social media accounts. It will be simpler for you to achieve your objective as more people know about your campaign!<br><b>Step 3 -</b> You can even send updates, images, and milestones through your email and social media to boost visibility and donors to your campaign.<br><b>Step 4 -</b> Once the campaign hits the end date, we will deliver the products to you immediately."),
          open: false,
        },
        {
          questionngo: this.$t("Do we have to pay any fees to start our campaign on Best Deed? "),
          answerngo: this.$t("No, you don't have to pay any fees to start a campaign on Best Deed. You can do it for free."),
          open: false,
        },
        {
          questionngo: this.$t("Will your Platform protect the confidential information given by our non-profit organization? "),
          answerngo: this.$t("Yes, we thoroughly protect your organization's confidential information with us and ensure end-to-end data security."),
          open: false,
        },
        {
          questionngo: this.$t("Can my organization customize its profile on Best Deed to reflect our brand and mission?"),
          answerngo: this.$t("After receiving all the details, our team will customize every detail of your organization as per your offerings, mission, vision, and other details to make it relevant and satisfactory for the donors. "),
          open: false,
        },
        {
          questionngo: this.$t("Does your Platform offer us details for taxes and other financial details?"),
          answerngo: this.$t("Best Deed provides NGOs with access to a secure online dashboard to view all donations made to their organization, track the progress of fundraising campaigns, and generate detailed reports on financial activity. NGOs can easily track and manage their donations and ensure that all financial reporting requirements are met."),
          open: false,
        },
      ]
    }
  },
  methods: {
  toggleQuestion(index) {
    this.faq = this.faq.map((question, i) => {
      if (i === index) {
        question.open = !question.open;
      } else {
        question.open = false;  
      }
      return question;
    });

    // close all questions in the other FAQ list
    this.ngofaq = this.ngofaq.map((questionngo) => {
      questionngo.open = false;
      return questionngo;
    });
  },

  toggleQuestionNgo(index) {
    this.ngofaq = this.ngofaq.map((questionngo, i) => {
      if (i === index) {
        questionngo.open = !questionngo.open;
      } else {
        questionngo.open = false;
      }
      return questionngo;
    });

    // close all questions in the other FAQ list
    this.faq = this.faq.map((question) => {
      question.open = false;
      return question;
    });
  },
},
}
</script>