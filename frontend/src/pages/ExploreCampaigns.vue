<template>
    <div class="top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover"
        style="background-image: url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')">
        <Navbar />
        <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <p class="text-[37px] md:text-[40px] lg:text-[48px] sm:pr-10 md:pr-20 lg:pr-12 xl:pr-12  mb-32 text-center md:text-center md:text-base lg:text-left pt-20 font-bold text-[#364958] leading-none"
                style="text-shadow:3px 6px 6px #c9c9c9;">
                {{ $t('Join hands with') }} <span class="text-[#40b751]">{{ $t('Sadbhana Campaigns') }}</span>
                {{ $t('to help needy.') }}
            </p>
        </div>
    </div>








    <!-- Categories -->
    <section class="container mx-auto h-full categorycard pb-8 ">
        <div class="text-center mt-10">
            <h2 class="text-3xl font-black text-[#40b751] mb-2">{{ $t('Categories') }}</h2>
            <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p>
        </div>

        <div class="pt-8">
            <div class="grid lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">

                <div class="grid col-span-2 pl-2 pr-2 pb-2 pt-4 w-full">
                    <div class="border rounded-lg">
                        <div>
                            <div class="relative flex h-12 rounded-lg  bg-white overflow-hidden">
                                <div class="grid place-items-center h-full text-gray-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input class=" h-full w-full text-md border-none text-gray-700 pr-2" type="text"
                                    v-model="searchQuery" placeholder="Search by Campaign/NGO" />
                            </div>
                            <ul>
                                <li v-for="item in filteredList" :key="item">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 
            <div class=" col-span-2 grid justify-items-start ">
                <div class="border rounded-lg w-[603px]  h-12 ">
                    <div>
                        <div
                            class="relative flex  w-[600px] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input class=" h-full w-[600px] text-md border-none text-gray-700 pr-2" type="text" id="search"
                                placeholder="Search something..." />
                        </div>
                    </div>
                </div>
            </div> -->

                <div class="grid w-full p-2">
                    <select
                        class="appearance-none border rounded-lg border-gray-300 mt-2 hover:border-[#40b751]  rounded  h-12 py-2 px-3 text-grey-darker"
                        v-model="location" @change="handleChange($event)">
                        <option :value="null" disabled hidden>{{ $t('Location') }}</option>
                        <option>{{ $t('Ahmedabad') }}</option>
                        <option>{{ $t('Rajkot') }}</option>

                    </select>
                </div>

                <div class="grid w-full p-2">
                    <select
                        class="appearance-none border rounded-lg border-gray-300 mt-2 hover:border-[#40b751] rounded  h-12 py-2 px-3 text-grey-darker"
                        v-model="selected" @change="handleChange($event)">
                        <option selected>{{ $t('All Types') }}</option>
                        <option value="urgent">{{ $t('Urgent') }}</option>
                        <option value="newly launched">{{ $t('Newly Launched') }}</option>
                        <option value="closed">{{ $t('Closed') }}</option>
                        <option value="most raised">{{ $t('Most Raised') }}</option>
                    </select>
                </div>



            </div>
        </div>
        <!-- <div class="border">
            <div class="pt-2 relative mx-auto text-gray-600">
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                        width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search">

            </div>
        </div> -->

        <div class="flex mt-3 border-b sm:mr-4 lg:mr-3 ">
            <div class="overflow-x-auto">
                <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-scroll ">
                    <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(1)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

                            <div class="grid justify-items-center" v-if="openTab !== 1">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/grid(2).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 1">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/grid.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0  cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(2)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

                            <div class="grid justify-items-center" v-if="openTab !== 2">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/paw(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Animal') }}</p>
                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 2">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/paw.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Animal') }}</p>
                            </div>


                        </div>
                    </li>

                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer  transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/children.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Children') }}
                                </p>
                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(5)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

                            <div class="grid justify-items-center" v-if="openTab !== 5">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Medical') }}</p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 5">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/healthcare.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Medical') }}</p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(6)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

                            <div class="grid justify-items-center" v-if="openTab !== 6">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Hunger') }}</p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 6">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/supplies.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Hunger') }}</p>

                            </div>

                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religiouse Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(7)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

                            <div class="grid justify-items-center" v-if="openTab !== 7">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/pray(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Religiouse') }}
                                </p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 7">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/pray.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Religiouse') }}
                                </p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/disability.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Disability') }}
                                </p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
                        <div class="font-bold w-28 md:w-32 lg:w-32 sm:h-16 md:h-20 lg:h-20  pt-2 md:pt-4 lg:pt-4 pb-2 md:pb-0 lg:pb-0 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(9)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

                            <div class="grid justify-items-center" v-if="openTab !== 9">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/old-man(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Elder') }}
                                </p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 9">
                                <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                                    src="../../src/assets/Inter/img/icon/old-man.png" />
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
                    <div
                        class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
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
                                {{ $t('By') }}: {{ $t(campaigns[index - 1].ngo) }}
                            <div class="w-full bg-gray-200 rounded h-[16px] dark:bg-gray-700 mt-6 mb-6 ">
                                <div v-if="campaigns[index - 1].raised_amount"
                                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                                    :style="{ width: campaigns[index - 1].raised_amount * 100 / campaigns[index - 1].donation_amount + '%' }">
                                    {{ (campaigns[index - 1].raised_amount * 100
                                        /
                                        campaigns[index - 1].donation_amount).toFixed(2) }}%</div>
                            </div>
                            <div
                                class="fontcard flex border-b-2 border-b-gray-100  justify-between mt-6 mb-6 pb-6 text-[14px] md:text-[12px] lg:text-[14px]">
                                <span class="font-[600] text-[#222222]">{{ $t('Raised') }}: ₹{{
                                    numberWithCommas(campaigns[index - 1].raised_amount)
                                }}</span><span class="font-[600] text-[#222222]">{{ $t('Goal') }}: ₹{{
    numberWithCommas(campaigns[index - 1].donation_amount) }}</span>
                            </div>
                            </p>
                        </div>
                        <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-7 pl-9 flex justify-between">
                            <button class="text-[#40b751] text-base">{{ $t('Share') }}</button>
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
    </section>
    <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";


export default {
    name: "Explore Campaigns",
    components: { Navbar, Footer },
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
            searchQuery: '',
            filteredList: [],
            // list: [
            //     "apple", "banana", "orange"
            // ],
            campaigns: [],
            campaign_title: ["Children", "Animal", "Religious", "Education", "Medical"],
            location: null,
            selected: 'newly launched',
            campaignToShow: 6,
            totalCampaign: 0,
            loading: false,
            selection: 1,
            openTab: 1,
            openTabTestimonials: 1,
            featured_campaigns: [],
            lang: ''
        }
    },
    computed: {
        filteredList() {
            // console.log(this.campaigns)
            // return this.campaigns.filter((item) =>
            //     item.toLowerCase().includes(this.searchQuery.toLowerCase())
            // );



            // if (this.searchQuery) {
            //     console.log(this.campaigns);
            //     return this.campaigns.filter((item) =>
            //         item.toLowerCase().includes(this.searchQuery.toLowerCase())
            //     );
            // } else {
            //     console.log('none');
            //     return this.campaigns
            // }


            // if (!this.searchQuery) {
            //     console.log('campaign');
            //     return this.campaigns;
            // } else {
            //     return this.campaigns.filter((item) =>
            //         item.toLowerCase().includes(this.searchQuery.toLowerCase())
            //     );
            // }
        },
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
        }

    },
    methods: {
        numberWithCommas(x) {
            return x.toLocaleString();
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        get_campaigns(category) {
            this.$resources.get_campaigns.submit({
                category: category,
                language: localStorage.getItem('lang') || window.navigator.language
            })
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
        }
    },
}
</script>
 