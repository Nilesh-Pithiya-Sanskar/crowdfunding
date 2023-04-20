<template>
  <div
    class="w-full h-[20rem] md:h-[23rem] lg:h-[25rem] bg-center bg-right bg-transparent bg-cover"
    style="background-image: url('https://crowdfunding.frappe.cloud/files/faq-bnr.jpg')"
  >
    <Navbar />
      <div class="">
        <p
          class="text-[30px] md:text-[36px] lg:text-[48px] pt-20 text-center text-[#40b751] font-black"
        >
      {{ $t("Frequently Asked Questions")}}
        </p>
      </div>
  </div>

  <div class="relative container mx-auto h-full pt-0">
    <div class="w-full bg-grey-lightest">
      <div class="py-0">
        <div class="w-6/6 lg:w:4/6 mx-auto bg-white">
          <div class="">
            <!-- <div class="mx-3 md:mx-4 lg:mx-5 border-solid border-b-2">
              <ul
                class="flex justify-center mb-0 mt-10 flex-wrap pt-4 ml-10 mr-11 flex-row"
              >
                <li class="-mb-px mr-2 hover:shadow last:mr-0 text-center">
                  <a
                    class="text-[16px] md:text-[22px] cursor-pointer lg:text-[22px] font-bold px-5 md:px-3 lg:px-5 py-3 rounded block leading-normal"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                      'text-[#40b751] bg-white': openTab !== 1,
                      'text-white bg-[#40b751]': openTab === 1,
                    }"
                  >
                    Recent
                  </a>
                </li>
                <li class="-mb-px mr-2 hover:shadow last:mr-0 text-center">
                  <a
                    class="text-[16px] md:text-[22px] cursor-pointer lg:text-[22px] font-bold px-5 py-3 rounded block leading-normal"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{
                      'text-[#40b751] bg-white': openTab !== 2,
                      'text-white bg-[#40b751]': openTab === 2,
                    }"
                  >
                    Most Generous
                  </a>
                </li>
              </ul>
            </div> -->
            <div class="px-0 py-px flex-auto">
              <div class="tab-content tab-space">
                <!-- <div
                  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                > -->
                  <section class="text-gray-700">
                    <div class="container px-0 py-7 mx-auto">
                      <div class="">
                        <div class="w-full lg:w-1/2 px-4 py-2">
                          <details class="mb-4 shadow-2xl" open>
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
                              <!-- <p class="px-6 text-justify text-base text-gray-700 dark:text-gray-300">{{ $t("The stated objective amount and fund usage have not been justified.") }}</p> -->
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
                          </details>
                        </div>
                      </div>
                    </div>
                  </section>


              <!-- </div> -->
                <!-- <div
                  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <div
                    class="container text-gray-600 py-7 px-3 md:px-4 lg:px-0 mx-auto"
                  >
                    profile
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<!-- <template>
    <div class="w-full h-[30rem] md:h-[32rem] lg:h-[36rem] bg-center bg-right bg-transparent bg-cover"
        style="background-image: url('../../src/assets/Inter/img/faq-bnr.jpg')">
        <Navbar />
        <div
            class="text-[30px] md:text-[36px] lg:text-[48px] container p-[120px] md:p-[160px] lg:p-[180px]  text-center  text-[#40b751] font-bold mx-auto h-full">
            FAQ</div>
    </div>
    <div class="container mx-auto h-full pt-0">
        <div class="w-full bg-grey-lightest">
            <div class="py-0">
                <div class="w-6/6 lg:w:4/6 mx-auto bg-white">
                    <div class="sm:pt-10">
                        <div class="mx-3 md:mx-4 lg:mx-5 border-solid border-b-2">
                            <ul class="flex justify-center mb-0 mt-10 flex-wrap pt-4 ml-10 mr-11  flex-row">
                                <li class="-mb-px mr-2 hover:shadow last:mr-0  text-center">
                                    <a class="text-[16px] md:text-[22px] cursor-pointer lg:text-[22px] font-bold  px-5 md:px-3 lg:px-5 py-3 rounded block leading-normal"
                                        v-on:click="toggleTabs(1)"
                                        v-bind:class="{ 'text-[#40b751] bg-white': openTab !== 1, 'text-white bg-[#40b751]': openTab === 1 }">
                                        Recent
                                    </a>
                                </li>
                                <li class="-mb-px mr-2 hover:shadow last:mr-0  text-center">
                                    <a class="text-[16px] md:text-[22px] cursor-pointer lg:text-[22px] font-bold  px-5 py-3 rounded block leading-normal"
                                        v-on:click="toggleTabs(2)"
                                        v-bind:class="{ 'text-[#40b751] bg-white': openTab !== 2, 'text-white bg-[#40b751]': openTab === 2 }">
                                        Most Generous
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-0 py-px flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                    <section class="text-gray-700">
                                        <div class="container px-0 py-7 mx-auto">
                                            <div class="">
                                                <div class="w-full lg:w-1/2 px-4 py-2">
                                                    <details class="mb-4">
                                                        <summary
                                                            class="font-semibold border-2 border-b-4 border-solid border-gray-200 text-xl text-green-500 list-none bg-gray-100 rounded py-3 px-4">
                                                            Collapsible Group Item #1
                                                        </summary>
                                                        <span>
                                                            <p
                                                                class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-gray-500 dark:text-gray-300">
                                                                Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                life accusamus terry richardson ad squid. 3
                                                                wolf moon officia aute, non cupidatat skateboard dolor
                                                                brunch. Food truck quinoa nesciunt laborum
                                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                                                bird on it squid single-origin coffee nulla
                                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                                                craft beer labore wes anderson cred
                                                                nesciunt sapiente ea proident. Ad vegan excepteur
                                                                butcher vice lomo. Leggings occaecat craft beer
                                                                farm-to-table, raw denim aesthetic synth nesciunt you
                                                                probably haven't heard of them accusamus
                                                                labore sustainable VHS.
                                                            </p>
                                                        </span>
                                                    </details>
                                                    <details class="mb-4">
                                                        <summary
                                                            class="font-semibold border-2 cursor-pointer border-b-4 border-solid border-gray-200 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                            Collapsible Group Item #2
                                                        </summary>
                                                        <span>
                                                            <p
                                                                class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-gray-500 dark:text-gray-300">
                                                                Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                life accusamus terry richardson ad squid. 3
                                                                wolf moon officia aute, non cupidatat skateboard dolor
                                                                brunch. Food truck quinoa nesciunt laborum
                                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                                                bird on it squid single-origin coffee nulla
                                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                                                craft beer labore wes anderson cred
                                                                nesciunt sapiente ea proident. Ad vegan excepteur
                                                                butcher vice lomo. Leggings occaecat craft beer
                                                                farm-to-table, raw denim aesthetic synth nesciunt you
                                                                probably haven't heard of them accusamus
                                                                labore sustainable VHS.</p>
                                                        </span>
                                                    </details>
                                                    <details class="mb-4">
                                                        <summary
                                                            class="font-semibold border-2 cursor-pointer border-b-4 border-solid border-gray-200 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                            Collapsible Group Item #3
                                                        </summary>
                                                        <span>
                                                            <p
                                                                class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-gray-500 dark:text-gray-300">
                                                                Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                life accusamus terry richardson ad squid. 3
                                                                wolf moon officia aute, non cupidatat skateboard dolor
                                                                brunch. Food truck quinoa nesciunt laborum
                                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                                                bird on it squid single-origin coffee nulla
                                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                                                craft beer labore wes anderson cred
                                                                nesciunt sapiente ea proident. Ad vegan excepteur
                                                                butcher vice lomo. Leggings occaecat craft beer
                                                                farm-to-table, raw denim aesthetic synth nesciunt you
                                                                probably haven't heard of them accusamus
                                                                labore sustainable VHS.</p>
                                                        </span>
                                                    </details>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                    <div class="container text-gray-600 py-7 px-3 md:px-4 lg:px-0 mx-auto">
                                        profile
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template> -->

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
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
  },
}
</script>