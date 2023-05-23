<!-- <template>
    <pre>{{ xmlContent }}</pre>
  </template>
  
  <script>
  import sitemapContent from '@/assets/sitemap.xml';
  
  export default {
    name: 'Sitemap',
    data() {
      return {
        xmlContent: '',
      };
    },
    mounted() {
      this.xmlContent = sitemapContent;
    },
  };
  </script>
   -->


   <!-- <template>
    <div>
      <pre>{{ sitemap }}</pre>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Sitemap',
    data() {
      return {
        sitemap: null,
      };
    },
    mounted() {
    //   axios
    //     .get('/sitemap.xml')
    //     .then((response) => {
    //       this.sitemap = response.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    fetch('/sitemap.xml')
      .then((response) => response.text())
      .then((data) => {
        this.sitemap = data;
      })
      .catch((error) => {
        console.error(error);
      });
    },
  };
  </script> -->
  


   <!-- <template>
    <div>
      <Sitemap />
    </div>
  </template>
  
  <script>
  import Sitemap from '../pages/sitemap.xml';
  
  export default {
    name: 'MyComponent',
    components: {
      Sitemap,
    },
  };
  </script> -->
  


<!-- adsffffffffffffffffffffffffffffffffffffffffffffffffff -->


<template>
  <!-- Header-->
  <main>
    
    <Navbar />
    <section class="bg-image bg-cover bg-center lg:h-[84vh] md:h-[97vh] sm:h-full" style="background-image: url('https://bestdeed.org/files/BG.png');">
 <div class="flex items-center justify-center container mx-auto pb-[2rem] md:pb-[3rem] lg:pb-[5rem]">
   <!-- <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"> -->
     <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center mx-2 md:items-center lg:items-center lg:mt-16 md:mt-16 sm:mt-5">
    
        <div class="mb-8">
            <div
              class="text-[#40b751] font-black text-[36px] md:text-[40px] lg:text-[44px] [text-shadow:2px 2px 2px #c9c9c9] mt-2">
              BestDeed
            </div>
            <h1
              class="[text-shadow:2px 2px 2px #c9c9c9] leading-[32px] md:leading-[40px] lg:leading-[46px] text-gray-600 font-bold text-[24px] md:text-[28px] lg:text-[38px]">
              Most trusted crowd <br>funding platform of india.</h1>

              <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-5 mt-8 md:mt-16 lg:mt-16 mb-4 md:mb-4 lg:mb-4 md:mb-8 lg:mb-8 sm:mr-auto md:mr-24 lg:mr-24">
          <div class="flex items-center">
            <!-- <div><img src="https://bestdeed.org/assets/sadbhavna_donatekart/frontend/assets/0.png" class="h-20" alt="asdf" /></div> -->
            <img src="../../src/assets/Inter/img/home-banner-icon-0.svg" alt="0" title="0 fees" class="h-10 md:h-10 lg:h-12 w-18 md:w-14 lg:w-16" />
            <div
              class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Platform</div>
              <div class="-mt-2">Fees</div>
            </div>
          </div>
          <div class="flex items-center">
            <img src="../../src/assets/Inter/img/home-banner-icon-100.svg" alt="100%" title="Transparency" class="max h-22 md:h-22 lg:h-22 w-28 md:w-22 lg:w-32" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Donate With</div>
              <div class="-mt-2">Transparency</div>
            </div>
          </div><div class="flex items-center">
            <img src="../../src/assets/Inter/img/home-banner-icon-verified.svg" class="h-12 md:h-14 lg:h-20 w-12 md:w-10 lg:w-12" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Verified</div>
              <div class="-mt-2">NGOs</div>
            </div>
          </div>
          <div class="flex items-center">
            <img src="../../src/assets/Inter/img/home-banner-icon-tax.svg" class="h-10 md:h-22 lg:h-22 w-12 md:w-20 lg:w-32" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Tax</div>
              <div class="-mt-2">Exemption</div>
            </div>
          </div>
        </div>
        <p
          class="[text-shadow:2px 2px 2px #c9c9c9] leading-[46px] mb-2 text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] break-keep">
          Your help goes a long way!</p>
        <router-link to="/explore-campaigns"
          class="bg-[#40b751] px-6 py-3 text-white rounded-full text-[18px] hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          Support an NGOs </router-link>

        </div>

        <div class="sm:11/12 md:hidden lg:block lg:w-11/12 items-center md:mt-5">
          <img src="../../src/assets/Inter/img/rightside.png"
            class="sm:ml-0 md:ml-5 lg:ml-9 xl:ml-10 sm:mt-10"/>
        </div>
   </div>
 </div>
</section>





    <section class="responsivesection container mx-auto h-full relative z-10">
      <div class="container mx-auto h-full p-4 lg:p-6 mt-5 pl-4 lg:!pl-0 pr-4 lg:!pr-0">
        <div class="bg-white rounded-xl drop-shadow-xl">
          <Sliders :featured_campaigns="featured_campaigns" :interval="3000" :lang="lang" />
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="container mx-auto h-full categorycard card-space lg:!py-[5rem] py-5">
      <div class="flex flex-wrap justify-between items-center mb-2">
        <h2 class="sm:text-left md:text-center lg:text-center text-3xl font-black text-[#40b751] my-0">
          {{
            $t('Categories') }}</h2>
        <!-- <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p> -->

        <div class=" mr-3 text-green-500 font-bold flex flex-row-reverse">
          <img class="h-5 w-3 md:w-4 lg:w-4 ml-2 lg:mt-1" src="../assets/Inter/img/icon/right-arrow.png">
          <router-link class="text-[13px] md:text-[16px] lg:text-[16px] hover:underline" to="/explore-campaigns">{{
            $t('View More') }}</router-link>
        </div>
      </div>

      <div class="flex sm:mr-0 lg:mr-0 flex-wrap lg:!flex-nowrap">
        <div class="lg:mr-3 w-full lg:!w-[16rem] ">
          <ul
            class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden no-scrollbar overflow-x-scroll overflow-x-hidden custom-tabs">
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(1)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'bg-[#40b751] text-white': openTab === 1 }">
                <div class="flex" v-if="openTab !== 1">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/grid(2).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>
                <div class="flex" v-else="openTab === 1">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3" src="../../src/assets/Inter/img/icon/grid.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>
              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(2)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'bg-[#40b751] text-white': openTab === 2 }">

                <div class="flex" v-if="openTab !== 2">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/paw(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>
                <div class="flex" v-else="openTab === 2">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3" src="../../src/assets/Inter/img/icon/paw.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(3)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 3, 'bg-[#40b751] text-white': openTab === 3 }">

                <div class="flex" v-if="openTab !== 3">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/mortarboard(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>
                <div class="flex" v-else="openTab === 3">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/mortarboard.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Children Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(4)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 4, 'bg-[#40b751] text-white': openTab === 4 }">

                <div class="flex" v-if="openTab !== 4">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/children(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>
                <div class="flex" v-else="openTab === 4">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/children.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(5)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'bg-[#40b751] text-white': openTab === 5 }">

                <div class="flex" v-if="openTab !== 5">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>
                <div class="flex" v-else="openTab === 5">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/healthcare.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(6)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'bg-[#40b751] text-white': openTab === 6 }">

                <div class="flex" v-if="openTab !== 6">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>
                <div class="flex" v-else="openTab === 6">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/supplies.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>

              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religious Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(7)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'bg-[#40b751] text-white': openTab === 7 }">

                <div class="flex" v-if="openTab !== 7">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/pray(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religious') }}
                  </p>

                </div>
                <div class="flex" v-else="openTab === 7">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3" src="../../src/assets/Inter/img/icon/pray.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religious') }}
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(8)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 8, 'bg-[#40b751] text-white': openTab === 8 }">

                <div class="flex" v-if="openTab !== 8">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/disability(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>
                <div class="flex" v-else="openTab === 8">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/disability.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>

              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-3 last:mb-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
              <div
                class="font-bold w-full p-4 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border border-gray-200"
                v-on:click="toggleTabs(9)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'bg-[#40b751] text-white': openTab === 9 }">

                <div class="flex" v-if="openTab !== 9">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/old-man(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>
                <div class="flex" v-else="openTab === 9">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 mr-3"
                    src="../../src/assets/Inter/img/icon/old-man.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>

              </div>
            </li>
          </ul>
        </div>
        <!--Cards-->
        <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-4 category-tab-content">
          <div v-for="index in campaignToShow">
            <div v-if="index - 1 < campaigns.length" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
              <div
                class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
                <img class="w-full h-52 cursor-pointer" :src="campaigns[index - 1].campain_image" alt="Mountain"
                  @click="donate(campaigns[index - 1].name)">
                <div class="pt-[20px] pr-[20px] pl-[20px] leading-6">
                  <div v-if="lang == 'gu' && campaigns[index - 1].campaign_title_gu"
                    class="fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines">
                    {{ campaigns[index - 1].campaign_title_gu }}</div>
                  <div v-else-if="lang == 'hi' && campaigns[index - 1].campaign_title_hi"
                    class="fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines">
                    {{ campaigns[index - 1].campaign_title_hi }}</div>
                  <div v-else
                    class="fontfamily cursor-pointer font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-1 truncate-2-lines"
                    @click="donate(campaigns[index - 1].name)">
                    {{ campaigns[index - 1].campaign_title }}</div>

                  <p class="text-gray-700 text-[13px]  truncate">
                    {{ $t('Funds from') }}: <strong>{{ campaigns[index - 1].ngo }}</strong>
                  </p>
                  <div class="flex fontcard font-[600] justify-between mb-1">
                    <!-- <p class="flex items-center text-[14px] md:text-[12px] lg:text-[14px]"> <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather h-4 w-4 feather-clock mr-1 md:mr-1 lg:mr-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg> {{ dayCalculate(campaigns[index - 1].end_date) }} {{ $t('Goal') }}
                    </p> -->
                    <p class="flex items-center text-[14px] md:text-[12px] lg:text-[14px]"> <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather h-4 w-4 feather-users mr-1 md:mr-1 lg:mr-2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>{{ campaigns[index - 1].total_donor || 0 }} {{ $t('Donors') }}</p>
                  </div>

                  <div class="w-full bg-gray-200 h-[5px] rounded dark:bg-gray-700 mb-2">
                    <!--<div v-if="campaigns[index - 1].raised_amount"
                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                    :style="{ width: campaigns[index - 1].raised_amount * 100 / campaigns[index - 1].donation_amount + '%' }">
                    {{ (campaigns[index - 1].raised_amount * 100
                      /
                      campaigns[index - 1].donation_amount).toFixed(2) }}%</div>-->

                    <div v-if="campaigns[index - 1].raised_amount"
                      class="bg-[#40b751] h-[5px] rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                      :style="{ width: campaigns[index - 1].raised_amount * 100 / campaigns[index - 1].donation_amount + '%' }">
                      <!--{{ (campaigns[index - 1].raised_amount * 100
                      /
                      campaigns[index - 1].donation_amount).toFixed(2) }}%-->
                    </div>
                  </div>
                  <div class="fontcard flex mt-1 mb-0 pb-1 text-[14px]">
                    <span class="font-[600] text-[#222222]">₹{{
                      numberWithCommas(campaigns[index - 1].raised_amount)
                    }} {{ $t('raised') }} </span><span class="text-[#222222] ml-1">{{ $t('of') }} ₹{{
  numberWithCommas(campaigns[index - 1].donation_amount) }}</span>
                  </div>
                </div>
                <div class="pr-4 pb-4 pl-5 pt-2 flex justify-between">
                  <ShareNetwork network="WhatsApp" :url="url + 'campaign-donation/' + campaigns[index - 1].name"
                    :title="campaigns[index - 1].campaign_title" :description="campaigns[index - 1].short_description">
                    <button
                      class="flex group rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600 text-sm md:text-xs lg:text-xs px-3 md:px-2 lg:px-6 py-2 md:py-2 lg:py-3   shadow hover:shadow-lg outline-none focus:outline-none mr-1 md:mr-4 lg:mr-4 lg:mr-1 ease-linear transition-all duration-150"
                      type="button" @click=""> <svg class="fill-[#40b751] group-hover:fill-white" fill="none" height="17"
                        width="17" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve">
                        <g id="XMLID_468_">
                          <path id="XMLID_469_"
                            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" />
                          <path id="XMLID_470_"
                            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
                        </g>
                      </svg> </button>
                  </ShareNetwork>
                  <button
                    class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button" @click="donate(campaigns[index - 1].name)"> {{ $t('Donate Now') }} </button>
                </div>
                <!-- <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-3 pl-9 flex justify-between">
                            <button class="text-[#40b751] text-base">{{ $t('Share') }}</button>
                            <button
                                class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm sm:px-2 md:px-2 lg:px-4 sm:py-2 md:py-2 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="donate(campaigns[index - 1].name)"> {{ $t('Donate Now') }} </button>
                        </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>


      <div v-if="campaignToShow < campaigns.length || campaigns.length > campaignToShow" class="text-center">
        <button
          class="mt-10 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-0 mb-1 ease-linear transition-all duration-150"
          type="button" @click="campaignToShow += 6">{{ $t('Show More') }}</button>
      </div>
      <div v-else class="text-center">
        <button
          class="mt-10 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-0 mb-1 ease-linear transition-all duration-150"
          type="button" @click="exploreCampaigns()">{{ $t('Explore Campaigns') }}</button>
      </div>
    </section>



    <!-- </div>

      </div> -->
    <!--Testimonials-->

    <section class=" h-full mb-10 px-10 md:px-10 lg:px-10 bg-blueGray-100 p-3">
      <div class="container mx-auto mb-10 mt-10">
        <h3 class="text-center text-[22px] md:text-[24px] lg:text-[28px] font-extrabold capitalize text-[#40b751] mb-10">
          {{ $t('Why join us in this noble cause?') }}</h3>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-8 ">         
          <div class="grid justify-items-center">
            <img class="" alt="Simple Process" title=""
              src="../../src/assets/Inter/img/firstimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640] text-[16px] md:text-[16px] lg:text-[18px] font-bold">Easy process
            </div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">Donating to NGOs and
              making an impact is quite easier with Best Deed. Within just 4 simple steps, you can make a move. </p>
          </div>
          <div class="grid justify-items-center">
            <img class="" alt="100% transparency" title=""
              src="../../src/assets/Inter/img/secondimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640] text-[16px] md:text-[16px] lg:text-[18px] font-bold">End-to-end
              transparency
            </div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">We maintain end-to-end
              transparency of every donation we receive with our donors so that they can better track where and how we are
              using it!</p>
          </div>
          <div class="grid justify-items-center">
            <img class="" alt="Fundraisers" title=""
              src="../../src/assets/Inter/img/thirdimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640] text-[16px] md:text-[16px] lg:text-[18px] font-bold">Fundraisers for various causes
            </div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">Best Deed has fundraisers for
              a diverse range of causes, right, from education, environment, animals, etc., and you can select the one
              that resonates with your values and passions.</p>
          </div>
          <div class="grid justify-items-center">
            <img class="lg:mt-10" alt="way to donate" title=""
              src="../../src/assets/Inter/img/sevenimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640]  text-[16px] md:text-[16px] lg:text-[18px] font-bold">Multiple
              Ways to Donate
            </div>
            <p class="text-[#3f4640] lg:mb-10 text-center text-[14px] md:text-[14px] lg:text-[16px]"> Best Deed offers
              flexibility when it comes to donating. Whether through monetary donations, donating through products, or
              even volunteering, you can make a difference in any way possible.</p>
          </div>
          <div class="grid justify-items-center hidden md:block lg:block ">
            <img
              class="" alt="Causes" title=""
              src="../../src/assets/Inter/img/fifthimage.png" />
          </div>
          <div class="grid justify-items-center">
            <img class="lg:mt-10" alt="0 payments" title=""
              src="../../src/assets/Inter/img/siximage.png" />
            <div class="capitalize text-[#3f4640] mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">Hassle-free payment
            </div>
            <p class="text-[#3f4640] lg:mb-14 text-center text-[14px] md:text-[14px] lg:text-[16px]">When you choose the
              products you want to donate, you can easily make the payment through your preferred payment mode and
              currency. </p>
          </div>
          <div class="grid justify-items-center">
            <img class="" alt="Plateform" title=""
              src="../../src/assets/Inter/img/sevenimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640] text-[16px] md:text-[16px] lg:text-[18px] font-bold">Trusted platform
            </div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">Best Deed is a trusted
              and reliable crowdfunding platform backed with all the required certificates, licenses, permits, and a
              robust security system. </p>
          </div>
          <div class="grid justify-items-center">
            <img class="" alt="Smart" title=""
              src="../../src/assets/Inter/img/eightimage.png" />
            <div class="capitalize mt-2 mb-2 text-[#3f4640] text-[16px] md:text-[16px] lg:text-[18px] font-bold">Smart
              dashboard</div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">Best Deed believes in keeping
              donors and NGOs updated with the donation received and paid with the help of a smart dashboard and real-time
              alerts. </p>
          </div>
          <div class="grid justify-items-center">
            <img class="" alt="0 charges" title=""
              src="../../src/assets/Inter/img/nineimage.png" />
            <div class="capitalize text-[#3f4640] mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">0% charges
            </div>
            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">At Best Deed, we do not charge
              anything from the NGOs or donors while donating or starting a campaign. Donating or starting a campaign is
              100% free.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto h-full mb-20 px-10 md:px-10 lg:px-10">
      <div>
        <h3 class="text-center text-[22px] md:text-[24px] lg:text-[28px] font-extrabold text-[#40b751] mb-8">
          {{ $t('How Can You Do It?') }}</h3>
        <div class="pt-0">
          <div class="w-full bg-grey-lightest">
            <div class="py-0">
              <div class="">
                <ul class="flex justify-center flex-wrap ">
                  <a class="cursor-pointer text-center text-[14px] md:text-[14px] lg:text-[16px] mr-4 block leading-normal"
                    v-on:click="toggleTabs(1)" v-bind:class="{
                      'text-[#3f4640] bg-white': openTab !== 1,
                      'border-b-2 border-[#40b751] text-[#40b751] font-bold bg-white': openTab === 1,
                    }">
                    {{ $t('For Donors') }}
                  </a>
                  <a class="cursor-pointer text-center text-[14px] md:text-[14px] lg:text-[16px] block leading-normal"
                    v-on:click="toggleTabs(2)" v-bind:class="{
                      'text-[#3f4640] bg-white': openTab !== 2,
                      'border-b-2 border-[#40b751] text-[#40b751] font-bold bg-white': openTab === 2,
                    }">
                    {{ $t('For NGOs') }}
                  </a>
                </ul>
                <div class="px-0 py-px flex-auto">
                  <div class="tab-content tab-space">
                    <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
                      <div class="text-[#3f4640] mt-10">
                        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-6 lg:gap-6 ">
                          <div class="relative  grid justify-items-center">
                            <img class="" alt="Cause" title=""
                              src="../../src/assets/Inter/img/firstimagedonor.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Select a cause') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('First things first, you need to choose the fundraiser and select the cause you would like to support.You can even choose multiple campaigns as well.') }}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Type" title=""
                              src="../../src/assets/Inter/img/secondimagedonor.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Choose the type') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('After selecting the cause you want to donate to, you can decide whether you need to donate monetarily or through products.') }}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Enter amount" title=""
                              src="../../src/assets/Inter/img/thirdimagedonor.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Decide the what & how') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{$t('After choosing the type of donation, you have to enter the amount you would like to donate or the products you want to donate.')}}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Detail" title=""
                              src="../../src/assets/Inter/img/fourthimagedonor.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Add the essential details') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('Moving forward, you need to add essential details such as your name, email id, and contact number.') }}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="grid justify-items-center">
                            <img class="" alt="Payment" title=""
                              src="../../src/assets/Inter/img/fifthimagedonor.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Make a payment') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t("After entering the required details, you can make the payment through your preferred payment method, and IT'S DONE!") }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
                      <div class="text-[#3f4640] mt-10">
                        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-6 lg:gap-6 ">
                          <div class="relative  grid justify-items-center">
                            <img class="" alt="Detail" title=""
                              src="../../src/assets/Inter/img/imagefirstngo.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Fill up the details') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('To start a campaign on Best Deed; you need to fill up all the essential details. To start a campaign, For click here,') }}
                               <a class="underline font-bold">{{ $t('start a campaign.') }}</a></p>
                               <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Verification" title=""
                              src="../../src/assets/Inter/img/imagesecondngo.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Verification') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('After getting all the details from your end, our team will verify everything before getting started with your campaign.') }}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Campaign live" title=""
                              src="../../src/assets/Inter/img/imagethirdngo.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t("It's LIVE") }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('If everything goes well, we will live your campaign with the story, your requirements, images, and videos.') }}</p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] step-sm-arrow text-[28px] font-bold ">V</span>
                          </div>
                          <div class="relative grid justify-items-center">
                            <img class="" alt="Campaign Share" title=""
                              src="../../src/assets/Inter/img/imagefourthngo.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Share it') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('To get better support; you can easily share your campaign with your friends, family, colleagues, and even on social media directly from our dashboard.') }}
                            </p>
                            <span
                                class="absolute text-[#40b751] text-[28px] font-bold step-arrow ">&gt;</span>
                                <span class="absolute text-[#40b751] sm-arrow  text-[28px] font-bold ">V</span>
                          </div>
                          <div class="grid justify-items-center">
                            <img class="" alt="Manage dashboard" title=""
                              src="../../src/assets/Inter/img/imagefifthngo.png" />
                            <div
                              class="capitalize text-[#3f4640] text-center mt-2 mb-1 text-[16px] md:text-[16px] lg:text-[18px] font-bold">
                              {{ $t('Manage it seamlessly') }}</div>
                            <p class="text-[#3f4640] text-center text-[14px] md:text-[14px] lg:text-[16px]">{{ $t('After the campaign is live, you can manage it through your personalized dashboard and stay updated with real-time alerts.') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Testimonials />

    <!-- <section class="mx-auto container mt-5">
      <h3 class="text-[24px] md:text-[24px] lg:text-[30px] font-black text-[#40b751] mb-[20px]">{{ $t('Featured in') }}
      </h3>
      <div class="overflow-x-scroll overflow-y-hidden flex flex-auto">
        <div class="h-24 w-24">
          <a
            href="https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"><img
              src="../assets/Inter/img/cmo-gujraat-logo.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"><img
              src="../assets/Inter/img/divyabhaskar.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://gujarati.news18.com/news/rajkot/bull-stable-started-by-sadbhavna-vrudhashram-rml-dr-local18-1243725.html"><img
              src="../assets/Inter/img/mainlogo_gujrati.png" /></a>
        </div>
        <div class="h-24 w-24 ">
          <a
            href="https://www.dnaindia.com/india/video-rajkot-man-makes-city-green-by-planting-over-7-lakh-trees-2908027"><img
              src="../assets/Inter/img/dna.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a href="https://www.abtakmedia.com/make-a-call-sadbhavna-old-age-home-will-come-home-and-plant-a-tree/"><img
              src="../assets/Inter/img/NEW-Abtak-rr-logo-png-1.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a   <section class="mx-auto container mt-5">
      <h3 class="text-[24px] md:text-[24px] lg:text-[30px] font-black text-[#40b751] mb-[20px]">{{ $t('Featured in') }}
      </h3>
      <div class="overflow-x-scroll overflow-y-hidden flex flex-auto">
        <div class="h-24 w-24">
          <a
            href="https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/"><img
              src="../assets/Inter/img/cmo-gujraat-logo.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html"><img
              src="../assets/Inter/img/divyabhaskar.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://gujarati.news18.com/news/rajkot/bull-stable-started-by-sadbhavna-vrudhashram-rml-dr-local18-1243725.html"><img
              src="../assets/Inter/img/mainlogo_gujrati.png" /></a>
        </div>
        <div class="h-24 w-24 ">
          <a
            href="https://www.dnaindia.com/india/video-rajkot-man-makes-city-green-by-planting-over-7-lakh-trees-2908027"><img
              src="../assets/Inter/img/dna.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a href="https://www.abtakmedia.com/make-a-call-sadbhavna-old-age-home-will-come-home-and-plant-a-tree/"><img
              src="../assets/Inter/img/NEW-Abtak-rr-logo-png-1.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://timesofindia.indiatimes.com/videos/city/ahmedabad/rajkot-man-makes-city-green-by-planting-over-7-lakh-trees/videoshow/85666112.cms?from=mdr"><img
              src="../assets/Inter/img/images.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a
            href="https://www.zee5.com/articles/gujarat-man-plants-750000-trees-in-rajkot-aims-to-turn-entire-state-green"><img
              src="../assets/Inter/img/zee5.png" /></a>
        </div>
        <div class="h-24 w-24">
          <a href="https://ahmedabadmirror.com/bizman-on-green-mission-recruits-280-to-water-plants/79726987.html"><img
              src="../assets/Inter/img/am-logo.png" /></a>
        </div>
      </div>-->

    <section class="responsivesection container h-full mx-auto">
      <div class="pl-5 md:pl-5 lg:pl-0 pr-5 md:pr-5 lg:pr-0">
        <h3 class="text-[24px] md:text-[24px] lg:text-[30px] font-black text-[#40b751] mt-5">{{ $t('Featured in') }}</h3>
        <div class="flex overflow-x-scroll overflow-y-hidden items-center custom-scrollbar scrollbar-thin">
          <img alt="cmo gujarat news" class="hover:cursor-pointer" src="../assets/Inter/img/cmo-gujraat-logo.png" @click="redirect_to('https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/')"/>
          <img alt="divyabhaskar news" class="w-40 h-40 hover:cursor-pointer" src="../assets/Inter/img/divyabhaskar.png" @click="redirect_to('https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html')"/>
          <img alt="news 18 gujarati news" class="hover:cursor-pointer" src="../assets/Inter/img/mainlogo_gujrati.png" @click="redirect_to('https://gujarati.news18.com/news/rajkot/bull-stable-started-by-sadbhavna-vrudhashram-rml-dr-local18-1243725.html')"/>
          <img alt="zee5 news" class="w-48 h-24 hover:cursor-pointer" src="../assets/Inter/img/zee5.png" @click="redirect_to('https://www.zee5.com/articles/gujarat-man-plants-750000-trees-in-rajkot-aims-to-turn-entire-state-green')"/>
          <img alt="abtak news" class="w-72 h-20 hover:cursor-pointer" src="../assets/Inter/img/NEW-Abtak-rr-logo-png-1.png" @click="redirect_to('https://www.abtakmedia.com/make-a-call-sadbhavna-old-age-home-will-come-home-and-plant-a-tree/')"/>
          <img alt="times of india news" class="w-64 h-24 hover:cursor-pointer" src="../assets/Inter/img/images.png" @click="redirect_to('https://timesofindia.indiatimes.com/videos/city/ahmedabad/rajkot-man-makes-city-green-by-planting-over-7-lakh-trees/videoshow/85666112.cms?from=mdr')"/>
          <img alt="dna news" class="m-2 h-20 w-32 hover:cursor-pointer" src="../assets/Inter/img/dna.png" @click="redirect_to('https://www.dnaindia.com/india/video-rajkot-man-makes-city-green-by-planting-over-7-lakh-trees-2908027')"/>
          <img alt="ahmedabad mirror news" class="w-64 h-16 hover:cursor-pointer" src="../assets/Inter/img/am-logo.png" @click="redirect_to('https://ahmedabadmirror.com/bizman-on-green-mission-recruits-280-to-water-plants/79726987.html')"/>
        </div>
      </div>
    </section>

    <!-- <section class="container mx-auto h-full">
      <div class="text-center mt-10">
        <h2 class="text-[24px] md:text-[24px] lg:text-[30px] font-black text-[#40b751] mb-[20px]">{{ $t('Featured in') }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/protection.png" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] text-[#40b751] font-black">{{ $t('Protection') }}</p>
            <p class="text-[#aaa]">{{ $t('Protection') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/mask.png" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] text-[#40b751] font-black">{{ $t('Prevention') }}</p>
            <p class="text-[#aaa]">{{ $t('Prevention') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/sanitizer.png" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] text-[#40b751] font-black">{{ $t('Treatments') }}</p>
            <p class="text-[#aaa]">{{ $t('Treatments') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/virus.png" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] text-[#40b751] font-black">{{ $t('Symptoms') }}</p>
            <p class="text-[#aaa]">{{ $t('Symptoms') }}</p>
          </div>
        </div>

      </div>
    </section> -->

    <!--Awards-->

    <section class="responsivesection bg-blueGray-100">
      <div class="container mx-auto h-full">

        <div class="text-center mt-10">
          <h3 class="text-3xl font-black text-[#40b751] pt-12">{{ $t('Awards') }}</h3>
        </div>
        <div class="pb-16">
          <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 justify-items-center text-center">
            <div>
              <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96 "
                src="../../src/assets/Inter/img/nationalbusinessawards.jpeg">
              <div class="">
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('National Business Excellence And') }}</p>
                <p class="text-[#364958] font-bold text-[20px] leading-6"> {{ $t('Achievers Award') }}</p>
                <p class="text-[#364958] font-bold pt-2">2021</p>
              </div>
            </div>

            <div>
              <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/bsinhchennailogo.jpg">
              <div class="">
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('Top Ten Startups In Hyderabad') }}</p>
                <p class="text-[#364958] font-bold pt-2">2020</p>
              </div>
            </div>

            <div>
              <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96"
                src="../../src/assets/Inter/img/socialenterpriceaward.jpg">
              <div class="">
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('Social Enterprise Challenge Award') }}
                </p>
                <p class="text-[#364958] font-bold pt-2">2018</p>
              </div>
            </div>

            <div>
              <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/NASSCOM.jpg">
              <div class="">
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('NASSCOM Social Innovation Award') }}</p>
                <p class="text-[#364958] font-bold pt-2">2018</p>
              </div>
            </div>

            <div>
              <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/indianextress.png">
              <div class="">
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('Indian Express 40') }}</p>
                <p class="text-[#364958] font-bold text-[20px] leading-6">{{ $t('under 40') }}</p>
                <p class="text-[#364958] font-bold pt-2">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
// import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { inject, provide, ref } from "vue";
import Sliders from "../components/Sliders.vue";
import Testimonials from "../components/Testimonials.vue";
import { useRoute } from 'vue-router'

import { useHead } from '@vueuse/head'

// useHead({
//   title: 'Website Title',
//   meta: [
//     {
//       name: 'description',
//       content: 'Website description',
//     },
//   ],
// })
export default {
  name: 'Home',
  // created() {
  //   this.get_campaigns()
  //   this.get_featured_campaigns()
  // },
  components: {
    Navbar,
    Footer,
    Sliders,
    Testimonials,
  },

  setup() {
    // this.$meta.useMeta({
    //   title: '',
    //   htmlAttrs: { lang: 'en', amp: true }
    // })
    // useHead({
    //   title: 'About',
    //   meta:[
    //     {
    //       name: 'description',
    //       content: 'this about page'
    //     }
    //   ]
    // })
    //   const { meta } = useMeta()

    // meta.value = { title: 'My App' }

    const user = inject("user")
    // console.log("param id", this.$route.params.razorpay_payment_id)

    return {
      user
    }
  },

  data() {
    return {
      campaigns: [],
      campaignToShow: 6,
      totalCampaign: 0,
      loading: false,
      selection: 1,
      openTab: 1,
      openTabTestimonials: 1,
      featured_campaigns: [],
      lang: this.get_language(),
      url: window.location.href,
      start: 0
    }
  },
  created() {
    document.title = this.$t('Trusted & 100% Transparent Crowdfunding Platform | BestDeed')

    const linkElement = document.querySelector('link[rel="canonical"]');

    if (!linkElement) {
      var link = document.createElement('link');
      link.rel = 'canonical';
      link.href = "https://bestdeed.org/"
      document.head.appendChild(link);
    }
    else {
      linkElement.href = "https://bestdeed.org/"
      document.head.appendChild(linkElement)
    }

    // addMeta({
    //   name: 'author',
    //   content: 'John Doe'
    // })
  },
  mounted() {
    this.get_language()
    this.get_campaigns()
    this.get_featured_campaigns()
    this.lang = localStorage.getItem('lang') || window.navigator.language
    // const route = useRoute()
    // if(route.query.razorpay_payment_id){
    //   this.verify_signature(route.query.razorpay_payment_id, route.query.razorpay_payment_link_id, route.query.razorpay_payment_link_reference_id, route.query.razorpay_payment_link_status, route.query.razorpay_signature, route.query.amount)
    // }
    // else{
    //   console.log("not found")
    // }
  },

  // pageMeta() {
  //       return {
  //           title: 'Page Title',
  //           emoji: '🌈'
  //       }
  //   },
  resources: {
    get_campaigns() {
      return {
        method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaigns',
        onSuccess: (res) => {
          // console.log("get_campaign_success", res)
          this.campaigns = res
          this.totalCampaign = this.campaigns.length
        },
        onError: (error) => {
          console.log("Error", error)
        }
      }
    },
    get_featured_campaigns() {
      return {
        method: '/api/method/sadbhavna_donatekart.api.campaign.get_featured_campaigns',
        onSuccess: (res) => {
          // console.log("get_featured_success", res)
          this.featured_campaigns = res
        },
        onError() {
          console.log("Error")
        }
      }
    },
    // get_donor(){
    //   return{
    //     method: 'sadbhavna_donatekart.api.api.get_recent_donation',
    //     onSuccess: (res) => {
    //       console.log("get_donation", res)
    //       this.featured_campaigns = res
    //     },
    //     onError() {
    //       console.log("Error")
    //     }
    //   }
    // }
    // verify_signature(){
    //   return{
    //     method: "sadbhavna_donatekart.api.api.verify_signature",
    //     onSuccess:(res)=>{
    //       console.log("res", res)
    //       if(res[0]){
    //         // this.$router.push(`/donation-success-page/${res[1]}`)
    //       }
    //       else{
    //         console.log("payment not done")
    //       }
    //     },
    //     onError:(error)=>{
    //       console.log("error", error)
    //     }
    //   }
    // }

  },
  methods: {
    get_language() {
      return this.$cookies.get('lang') || localStorage.getItem('lang')
    },
    numberWithCommas(x) {
      return x.toLocaleString();
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    // toggleTabsTestimonials: function (tabNumber) {
    //   this.openTabTestimonials = tabNumber
    // },
    // verify_signature(razorpay_payment_id, razorpay_payment_link_id, razorpay_payment_link_reference_id, razorpay_payment_link_status, razorpay_signature, amount){
    //   this.$resources.verify_signature.submit({
    //     razorpay_payment_id: razorpay_payment_id,
    //     razorpay_payment_link_id: razorpay_payment_link_id,
    //     razorpay_payment_link_reference_id: razorpay_payment_link_reference_id,
    //     razorpay_payment_link_status: razorpay_payment_link_status,
    //     razorpay_signature: razorpay_signature,
    //     amount: amount
    //   })
    // },

    get_campaigns(category) {
      this.$resources.get_campaigns.submit({
        category: category,
        language: localStorage.getItem('lang') || window.navigator.language,
        start: this.start,
        page_length: 12,
      })

      // ****************************
      // let url = ''
      // if (category == null) {
      //   url = '/api/resource/Donation Campaign?filters={"published": 1}&fields=["name", "campain_image", "campaign_title", "is_featured","donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]'
      // }
      // else {
      //   url = `/api/resource/Donation%20Campaign?filters=[["Donation Campaign","campaign_category","=","${category}"],["Donation Campaign","published","=",1]]&fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]`
      // }
      // axios.get(url).then((response) => {
      //   // console.log("campaign", response)
      //   this.campaigns = response.data['data']
      // }).catch(function (error) {
      //   console.log(error);
      // })
      // ***************************
      // fetch(url, {
      //           method: 'GET',
      //       })
      //       .then(response => {
      //           response.json().then(res => {
      //           this.campaigns = res.data['data']
      //           });
      //       })
      //       .catch(err => {
      //           console.error(err);
      //       });
      // *****************************
    },
    get_featured_campaigns() {
      this.$resources.get_featured_campaigns.submit({
      })
    },
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    // viewmore(name) {
    //   this.$router.push(`/campaign-donation/${name}`)
    // },
    donate(name) {
      // this.$router.push(`/donate/${name}`)
      this.$router.push(`/campaign-donation/${name}`)
    },

    dayCalculate(end_date) {
      var today = new Date()
      var end_date = new Date(end_date)
      const timeDiff = end_date.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysDiff;
    },
    // getDonor(name) {
    //   var donor = ''
    //   let url = `http://crowdfunding.com:8001/api/method/sadbhavna_donatekart.api.api.get_recent_donation?name=${name}`
    //   fetch(url, {
    //     method: 'POST'
    //   }).then(response => {
    //     response.json().then(res => {
    //       donor = res.message.length
    //       return donor
    //     })
    //     console.log("donor res", donor)
    //   })
    //   console.log("donor", donor)

    //   // this.$resources.get_donor.submit({
    //   //   name: name
    //   // })
    //   // return donor
    // },
    exploreCampaigns() {
      this.$router.push('/explore-campaigns')
    },

    redirect_to(url){
      window.location.href = url
    }

  },
  // mounted(){
  //   if (!this.user.isLoggedIn()) {
  // 		this.$router.push({
  // 			name: "DeskLogin",
  // 			query: { route: this.$route.path },
  // 		})
  // 		return
  // 	}
  //   // else{
  //   //   this.$router.push(`/login-via-email`)
  //   // }
  // 	if (!this.user.has_desk_access) {
  // 		this.$router.push({ path: "/home" })
  // 		return
  // 	}
  // }

  // beforeMount(){
  //   this.get_campaign
  // }
}
</script>
