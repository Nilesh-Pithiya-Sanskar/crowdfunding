<template>
  <!-- Header-->
  <main>
    <section class=" bg-no-repeat  bg-cover bg-center"
      style="background-image: url('https://crowdfunding.frappe.cloud/files/Frame1.jpg');">
      <Navbar />
      <div class="pt-[0px] md:pt-[0px] lg:pt-[28px] pb-[80px] md:pb-[95px] lg:pb-[100px] container mx-auto h-fullsssss">
        <div class="grid lg:grid-cols-2 mt-5 md:mt-10 lg:mt-0">

          <div
            class="grid place-items-center tracking-wide                                                                                                                                                                                                                                                                                                                   ">
            <h1 style="text-shadow:3px 6px 6px #c9c9c9;"
              class="text-[#40b751] pl-[0x] md:pl-[28px] lg:pl-[28px] xl:pl-[0px] font-sans text-center md:text-center lg:text-left font-semibold leading-[36px] md:leading-[36px] lg:leading-[50px] text-[30px] md:text-[30px] lg:text-[48px] [text-shadow:3px 6px 6px #c9c9c9]">
              {{ $t('Donate') }} {{ $t('with') }}
              <span class="text-gray-700">{{ $t('100% Transparency') }}</span>
              {{ $t('on') }}
              <span class="text-gray-700">{{ $t('most trusted') }}</span>
              {{ $t('crowd funding platform of India.') }}
            </h1>
          </div>
          <div class="grid place-items-center  mt-5 md:mt-10 lg:mt-0  mx-4 md:mx-10 lg:mx-0">
            <img src="../../src/assets/Inter/img/map2.png" class="h-96 md:h-96 lg:h-full w-96 md:w-96 lg:w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="bg-white rounded-xl product-shodow">

  <div class="container mx-auto h-full sm:-mt-16 md:-mt-16 lg:-mt-36 -mb-20 md:-mb-0 lg:-mb-0 pl-4 lg:pl-0 pr-4 lg:pr-0">
   <div class="bg-white rounded-xl product-shodow">
      <div v-for="data in campaigns">
        <div v-if="data.is_featured == 1" class="grid mb-5 p-5 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div class="md:col-span-2 lg:col-span-1">
            <img class="pl-3 pt-3 pb-1 md:h-80 lg:h-56 sm:w-full md:w-96 lg:w-96" :src="data.campain_image" alt="Mountain"
              @click="donate(data.name)">
          </div>
          <div class="md:col-span-2 lg:col-span-3 pr-0 lg:pr-16">
            <button
              class="bg-[#364958] text-base rounded-lg pl-4 pr-4 pt-2 pb-2 text-white mb-2 md:mt-3">Featured</button>
            <h5 class="text-[#364958] text-2xl font-medium mb-2">{{ data.campaign_title }}</h5>
            <p class="text-[#364958]">
              {{ data.short_description }}
            </p>
            <button class="text-[#40b751] pt-3 font-bold" type="button" @click="donate(data.name)">Donate Now</button>
          </div>
        </div>
      </div>
    </div> -->
    <section class="container mx-auto h-full">
      <div class="container mx-auto h-full p-4 lg:p-6 -mt-[50px] md:-mt-[56px] lg:-mt-[60px] pl-4 lg:pl-0 pr-4 lg:pr-0">
        <div class="bg-white rounded-xl drop-shadow-xl">
          <Sliders :featured_campaigns="featured_campaigns" :interval="3000" :lang="lang" />
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="container mx-auto h-full categorycard">
      <div class="text-center mt-10">
        <h2 class="text-3xl font-black text-[#40b751] mb-2">{{ $t('Categories') }}</h2>
        <!-- <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p> -->
      </div>
      <div class="text-right mr-3 text-green-500 font-bold">
        <router-link to="/sadbhavna/explore-campaigns">{{ $t('View More') }}</router-link>
      </div>
      <!-- <div class="flex mt-3 border-b sm:mr-4 lg:mr-3 ">
        <div class="overflow-x-auto">
          <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-scroll ">
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(1)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

                <div class="grid justify-items-center" v-if="openTab !== 1">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/grid(2).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 1">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/grid.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0  cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(2)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

                <div class="grid justify-items-center" v-if="openTab !== 2">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/paw(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 2">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/paw.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>


              </div>
            </li>

            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(3)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 3, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 3 }">

                <div class="grid justify-items-center" v-if="openTab !== 3">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8 "
                    src="../../src/assets/Inter/img/icon/mortarboard(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 3">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/mortarboard.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Children Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(4)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 4, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 4 }">

                <div class="grid justify-items-center" v-if="openTab !== 4">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/children(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 4">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/children.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(5)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

                <div class="grid justify-items-center" v-if="openTab !== 5">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 5">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/healthcare.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(6)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

                <div class="grid justify-items-center" v-if="openTab !== 6">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 6">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/supplies.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>

              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religiouse Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(7)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

                <div class="grid justify-items-center" v-if="openTab !== 7">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/pray(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religiouse') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 7">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/pray.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religiouse') }}
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(8)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 8, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 8 }">

                <div class="grid justify-items-center" v-if="openTab !== 8">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/disability(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 8">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/disability.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
              <div
                class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(9)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

                <div class="grid justify-items-center" v-if="openTab !== 9">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/old-man(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 9">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/old-man.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>

              </div>
            </li>
          </ul>
        </div>
      </div> -->


      <div class="flex border-b sm:mr-4 lg:mr-4 ">
        <div class="overflow-x-auto">
          <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-hidden ">
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(1)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

                <div class="grid justify-items-center" v-if="openTab !== 1">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/grid(2).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 1">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/grid.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2  cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(2)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

                <div class="grid justify-items-center" v-if="openTab !== 2">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/paw(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 2">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/paw.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Animal') }}</p>
                </div>


              </div>
            </li>

            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(3)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 3, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 3 }">

                <div class="grid justify-items-center" v-if="openTab !== 3">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6 "
                    src="../../src/assets/Inter/img/icon/mortarboard(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 3">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                    src="../../src/assets/Inter/img/icon/mortarboard.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Education') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Children Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(4)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 4, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 4 }">

                <div class="grid justify-items-center" v-if="openTab !== 4">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                    src="../../src/assets/Inter/img/icon/children(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 4">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/children.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Children') }}
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(5)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

                <div class="grid justify-items-center" v-if="openTab !== 5">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 5">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/healthcare.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Medical') }}</p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(6)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

                <div class="grid justify-items-center" v-if="openTab !== 6">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 6">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/supplies.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Hunger') }}</p>

                </div>

              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religiouse Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(7)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

                <div class="grid justify-items-center" v-if="openTab !== 7">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/pray(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religiouse') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 7">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/pray.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Religiouse') }}
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(8)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 8, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 8 }">

                <div class="grid justify-items-center" v-if="openTab !== 8">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                    src="../../src/assets/Inter/img/icon/disability(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 8">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/disability.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Disability') }}
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
              <div
                class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(9)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

                <div class="grid justify-items-center" v-if="openTab !== 9">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/old-man(1).png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 9">
                  <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6" src="../../src/assets/Inter/img/icon/old-man.png" />
                  <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                    $t('Elder') }}
                  </p>

                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>



      <!--Cards-->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-10">
        <div v-for="index in campaignToShow">
          <div v-if="index - 1 < campaigns.length" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
            <div class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
              <img class="w-full h-52 cursor-pointer" :src="campaigns[index - 1].campain_image" alt="Mountain"
                @click="donate(campaigns[index - 1].name)">
              <div class="pt-[30px] pr-[30px] pl-[30px]">
                <div v-if="lang == 'gu' && campaigns[index - 1].campaign_title_gu"
                  class="fontfamily font-bold text-[#40b751] text-[25px] md:text-[20px] lg:text-[20px] mb-2 truncate-2-lines">
                  {{ campaigns[index - 1].campaign_title_gu }}</div>
                <div v-else-if="lang == 'hi' && campaigns[index - 1].campaign_title_hi"
                  class="fontfamily font-bold text-[#40b751] text-[25px] md:text-[20px] lg:text-[20px] mb-2 truncate-2-lines">
                  {{ campaigns[index - 1].campaign_title_hi }}</div>
                <div v-else
                  class="fontfamily font-bold text-[#40b751] text-[25px] md:text-[20px] lg:text-[20px] mb-2 truncate-2-lines">
                  {{ campaigns[index - 1].campaign_title }}</div>

                <p class="text-gray-700 text-[18px] md:text-[16px] lg:text-[16px]  truncate">
                  {{ $t('By') }}: {{ campaigns[index - 1].ngo }}

                <div class="fontcard flex  justify-between mt-3 pb-3 text-[14px] md:text-[12px] lg:text-[14px]">
                  <span class="font-[600] text-[#222222]">{{ $t('Raised') }}: ₹{{ numberWithCommas(campaigns[index -
                    1].raised_amount)
                  }}</span><span class="text-[#222222]">{{ $t('Goal') }}: ₹{{
  numberWithCommas(campaigns[index - 1].donation_amount) }}</span>
                </div>

                <div class="w-full bg-gray-200 rounded h-[16px] dark:bg-gray-700 mb-3 ">
                  <div v-if="campaigns[index - 1].raised_amount"
                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                    :style="{ width: campaigns[index - 1].raised_amount * 100 / campaigns[index - 1].donation_amount + '%' }">
                    {{ (campaigns[index - 1].raised_amount * 100
                      /
                      campaigns[index - 1].donation_amount).toFixed(2) }}%</div>
                </div>

                <div class="flex justify-between border-b-2 pb-3 border-b-gray-100 mb-2">
                  <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-clock mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> {{ dayCalculate(campaigns[index - 1].end_date) }} {{ $t('Days Left') }}
                  </p>
                  <p class="flex mr-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-users mr-2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>{{ campaigns[index - 1].total_donor || 0 }} {{ $t('Donors') }}</p>

                </div>

                </p>
              </div>

              <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-4 pl-9 flex justify-between">{{ }}
                <ShareNetwork network="WhatsApp" :url="url + '/campaign-donation/' + campaigns[index - 1].name"
                  :title="campaigns[index - 1].campaign_title" :description="campaigns[index - 1].short_description">
                  <button
                    class="flex rounded-lg hover:bg-white text-green-500 border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-white uppercase text-xs md:text-xs lg:text-sm px-3 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"> {{ $t('Share') }} <svg class="ml-2" fill="#40b751" height="17" width="17" version="1.1"
                      id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 308 308" xml:space="preserve">
                      <g id="XMLID_468_">
                        <path id="XMLID_469_"
                          d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" />
                        <path id="XMLID_470_"
                          d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
                      </g>
                    </svg></button>
                </ShareNetwork>
                <button
                  class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" @click="donate(campaigns[index - 1].name)"> {{ $t('Donate Now') }} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="campaignToShow < campaigns.length || campaigns.length > campaignToShow" class="text-center">
        <button
          class="  mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" @click="campaignToShow += 6">{{ $t('Show More') }}</button>
      </div>
      <div v-else class="text-center">
        <button
          class="  mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" @click="exploreCampaigns()">{{ $t('Explore Campaigns') }}</button>
      </div>
    </section>
    <!-- </div>

      </div> -->
    <!--Testimonials-->

    <Testimonials />

    <!--Featured In-->

    <section class="container mx-auto h-full">
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
    </section>

    <!--Awards-->

    <section class="bg-[#f5f3ff]">
      <div class="container mx-auto h-full">

        <div class="text-center mt-10">
          <h2 class="text-3xl font-black text-[#40b751] pt-12">{{ $t('Awards') }}</h2>
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
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { inject, provide, ref } from "vue";
import Sliders from "../components/Sliders.vue";
import Testimonials from "../components/Testimonials.vue";
import { useRoute } from 'vue-router'


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
    const user = inject("user")
    // console.log("param id", this.$route.params.razorpay_payment_id)

    return {
      user
    }
  },
  mounted() {
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
      lang: '',
      url: window.location.href,
      start: 0
    }
  },
  resources: {
    get_campaigns() {
      return {
        method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaigns',
        onSuccess: (res) => {
          console.log("get_campaign_success", res)
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
          console.log("get_featured_success", res)
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
    //         // this.$router.push(`/sadbhavna/donation-success-page/${res[1]}`)
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
    //   this.$router.push(`/sadbhavna/campaign-donation/${name}`)
    // },
    donate(name) {
      // this.$router.push(`/sadbhavna/donate/${name}`)
      this.$router.push(`/sadbhavna/campaign-donation/${name}`)
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
      this.$router.push('/sadbhavna/explore-campaigns')
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
  //   //   this.$router.push(`/sadbhavna/login`)
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
