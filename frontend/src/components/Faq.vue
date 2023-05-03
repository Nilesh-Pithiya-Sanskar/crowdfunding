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
                          <div v-for="(question, index) in faq" :key="index" class=" rounded-md bg-[#40b751] shadow-xl   pt-4 my-4">
          <button
            type="button"
            class="flex justify-between w-full text-left font-medium text-white  font-bold text-[20px]  focus:outline-none"
            @click="toggleQuestion(index)"
          >
            <span  class="pl-4 pb-4">{{ question.question }}</span>
            <span class="ml-6 flex-shrink-0">
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
            </span>
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
  data() {
    return {
      openTab: 1,
      faq: [
        {
          question: "How can I get my tax redemption?",
          answer: "You may quickly obtain your tax receipt because all of our partner NGOs are 80G approved. <br> <br> On the payment success page, which appears once your payment for product purchase has been completed successfully, you will see the 'GET 80G' button. Please enter your PAN number, complete location, and PAN-compliant name before clicking 'Submit'. You will receive an email and a download link for your 80G certificate.",
          
          open: false,
        },
        {
          question: "What if my fundraising target is not reached? Will I still receive the products?",
          answer: "According to Best Deed, every work put into the campaign should be rewarded. Therefore, even if you fall short of your fundraising target, you still receive all of the products you have received so far.",
          open: false,
        },
        {
          question: "What is the reliability of your crowdfunding platform? ",
          answer: "The environment, structure, and sophistication of crowdfunding platforms can vary greatly. Our crowdfunding platform is governed by a local exchange and securities commission and is required to follow strict guidelines to ensure the security of investors' investments. <br> <br>  Look for a license number in the page's footer to quickly spot these sites. On the other hand, some crowdfunding platforms work independently, with no supervision to ensure the safety of investors. <br> <br> Best Deed accepts credit cards, debit cards, bank transfers, UPI, PayPal, and other payment methods. You can select the most convenient option and carry out the necessary actions.",
          open: false,
        },
        {
          question: "In what cases, will you reject my campaign request? ",
          answer: "Here are some of the cases, why your request might be rejected - <br> - The stated objective amount and fund usage have not been justified. <br> - Creating a campaign when there is already an acknowledged one by the same person and for the same cause <br> - False information given or details misrepresented in the campaign. <br> - Documents needed for authentication are missing. <br> - Using language that promotes hate or violence <br> - use of fake medical or other documents <br> - copied text from another fundraising campaign.",
          open: false,
        },
        {
          question: "Why should you choose to start with Best Deed? ",
          answer: "Best Deed is a platform of its sort that adds a new level of transparency and trust to the donations made for social causes. On our platform, which places the highest value on transparency, we have introduced these special features. <br> <br> Let’s find out - <br> - Best Deed doesn't charge anything to launch a crowdfunding campaign and accept donations. <br> - To make a payment on Best Deed, we accept contributions in several currencies from people all around the world. <br> - We offer the most payment alternatives of any crowdfunding website. <br> - Your fundraising campaign can be stopped or put on hold whenever you wish. <br> - You can donate in one or more crowdfunding campaigns at once.  <br> - All the campaigns on Best Deed are verified and reliable. ",
          open: false,
        },
        {
          question: "What am I going to need to start a campaign?",
          answer: "Here are some of the things you need to start a campaign - <br>- A narrative outlining your objective. <br> - Type and number of products needed. <br> - Timeline for the campaign. <br> - Video, ideally one with a pitch <br> - High resolution images and videos",
          open: false,
        },
      ],
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    toggleQuestion(index) {
      this.faq = this.faq.map((question, i) => {
        if (i === index) {
          question.open = !question.open;
        } else {
          question.open = false;
        }
        return question;
      });
    },
  },
}
</script>