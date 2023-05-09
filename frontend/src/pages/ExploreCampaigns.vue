<template>
    <div class="top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover mb-10"
        style="background-image: url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')">
        <Navbar />
        <div class="bg-overlay lg:!py-24 py-10">
            <div v-if="lang == 'hi'"
                class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4">
                <p
                    class="text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal">
                    जरूरतमंदों की मदद करने के लिए
                    <span class="text-[#40b751]">बेस्टडीड अभियान</span>
                    से हाथ मिलाओ।
                </p>
            </div>
            <div v-else-if="lang == 'gu'"
                class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4">
                <p
                    class="text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal">
                    જરૂરિયાતમંદોને મદદ કરવા
                    <span class="text-[#40b751]">બેસ્ટડીડ ઝુંબેશ</span>
                    સાથે હાથ જોડો.
                </p>
            </div>
            <div v-else class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4">
                <p
                    class="text-[24px] md:text-[28px] lg:text-[34px] mb-1.5 text-center font-bold text-[#364958] leading-normal">
                    {{ $t('Join hands with') }} <span class="text-[#40b751]">{{ $t('BestDeed Campaigns') }}</span>
                    {{ $t('to help needy.') }}
                </p>
            </div>
            <div class="container mx-auto card-space campaign-search mb-12">
                <div class="flex justify-center mx-auto lg:!w-4/6 w-full sm:!w-1/2 flex-wrap lg:!flex-nowrap">
                    <div class="grid col-span-2 pl-0 lg:pr-2 pb-0 pt-0 w-full mb-2 lg:mb-0">
                        <div class="border border-[#40b751] rounded-lg">
                            <div class="grid place-items-center h-12 float-left text-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="#40b751">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div class="relative flex h-12 rounded-lg overflow-hidden">
                                <!-- <div class="grid place-items-center h-10  text-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div> -->

                                <input
                                    class="w-full text-md placeholder-gray-400 border-hidden text-gray-700 pr-2 !bg-transparent"
                                    type="text" @keyup="get_search_campaigns()" v-model="searchQuery"
                                    :placeholder="$t('Search by Campaign/NGO')" />


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

                    <div class="grid lg:pr-2 lg:w-6/12 w-full mb-2 lg:mb-0">
                        <select
                            class="cursor-pointer rounded-lg mt-0 border border-[#40b751] text-[16px] h-12 py-2 px-3 text-grey-darker !bg-transparent"
                            v-model="location" @change="handleChange($event)">
                            <option :value="null" disabled hidden>{{ $t('Location') }}</option>
                            <option>{{ $t('Ahmedabad') }}</option>
                            <option>{{ $t('Rajkot') }}</option>

                        </select>
                    </div>

                    <div class="grid lg:w-6/12 w-full">
                        <select
                            class="cursor-pointer appearance-none rounded-lg mt-0 border border-[#40b751] text-[16px] h-12 py-2 px-3 text-grey-darker !bg-transparent"
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
        </div>
    </div>

    <!-- Categories -->
    <section class="container mx-auto h-full categorycard pb-16 card-space z-2 relative -mt-[125px]">
        <!-- <div class="text-center mt-10">
            <h2 class="text-3xl font-black text-[#40b751] mb-2">{{ $t('Categories') }}</h2>
            <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p>
        </div> -->


        <!-- <div class="">
            <div class="border" v-for="item in filteredList" :key="item">
                <div>
                    <div class="" @click="donate(item.name)">
                        <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 hover:bg-gray-100 h-48">
                            <div class="p-8 grid justify-items-center">
                                <img class="w-48 h-32 cursor-pointer" :src="item.campain_image" alt="img">
                            </div>
                            <div class="col-span-3 p-8 leading-8">
                                <p class="font-bold text-zinc-700 tracking-normal text-[22px]">{{
                                    item.campaign_title }}</p>
                                <p class="font-normal text-slate-500  italic text-[15px]">{{ item.ngo
                                }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div v-if="searchQuery != ''"
            class="relative flex flex-col border border-[#40b751] min-w-0 break-words bg-white w-full  shadow-lg rounded">

            <div class="tab-content tab-space overflow-y-auto h-96">
                <div class="" v-for="item in filteredList" :key="item" @click="donate(item.name)">

                    <div
                        class="cursor-pointer grid  p-[10px] md:p-[30px] lg:p-[30px] overscroll-y-contain grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 hover:bg-gray-100">
                        <img class="h-32 w-52" :src="item.campain_image" alt="Mountain" @click="donate(item.name)">
                        <div class="fontfamily fontcolor col-span-2 md:col-span-2 lg:col-span-3 leading-tight  ">
                            <h3 class="text-[16px] md:text-[19px] lg:text-[21px] font-bold mb-1">
                                {{
                                    $t(item.campaign_title) }}
                            </h3>
                            <p class="text-[#36495875] mb-[16px] text-[14px] md:text-[16px] lg:text-[16px]  italic">
                                {{ $t(item.ngo) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- <div class="border hover:bg-gray-100" v-for="item in filteredList" :key="item" @click="donate(item.name)">
            <div class="grid p-[30px] sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <div class="md:col-span-2 lg:col-span-1">
                    <img class="h-60 md:h-80 lg:h-56 w-full" :src="item.campain_image" alt="Mountain"
                        @click="donate(item.name)">
                </div>
                <div class="fontfamily fontcolor md:col-span-2 lg:col-span-3">
                   
                    <h3 class="leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold mb-2">{{
                        $t(item.campaign_title) }}</h3>
                   
                    <p class="text-[#364958] mb-[16px] leading-7">
                        {{ $t(item.ngo) }}
                    </p>
                   
                </div>
            </div>
        </div> -->




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

        <div class="flex">
            <div class="overflow-x-auto">
                <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-hidden category-horizontal-tab">
                    <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(1)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

                            <div class="grid justify-items-center" v-if="openTab !== 1">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/grid(2).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 1">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/grid.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{ $t('All') }}</p>
                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2  cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(2)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

                            <div class="grid justify-items-center" v-if="openTab !== 2">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/paw(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Animal') }}</p>
                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 2">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/paw.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Animal') }}</p>
                            </div>


                        </div>
                    </li>

                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer  hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer  hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/children.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Children') }}
                                </p>
                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(5)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

                            <div class="grid justify-items-center" v-if="openTab !== 5">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Medical') }}</p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 5">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/healthcare.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Medical') }}</p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(6)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

                            <div class="grid justify-items-center" v-if="openTab !== 6">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Hunger') }}</p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 6">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/supplies.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Hunger') }}</p>

                            </div>

                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religious Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(7)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

                            <div class="grid justify-items-center" v-if="openTab !== 7">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/pray(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Religious') }}
                                </p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 7">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/pray.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Religious') }}
                                </p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16 pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
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
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/disability.png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Disability') }}
                                </p>

                            </div>


                        </div>
                    </li>
                    <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
                        <div class="font-bold w-28 md:w-28 lg:w-28 sm:h-16 md:h-16 lg:h-16  pt-2 md:pt-2 lg:pt-2 pb-2 md:pb-2 lg:pb-2 cursor-pointer hover:transition ease-in duration-200 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                            v-on:click="toggleTabs(9)"
                            v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

                            <div class="grid justify-items-center" v-if="openTab !== 9">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
                                    src="../../src/assets/Inter/img/icon/old-man(1).png" />
                                <p class="text-[13px] md:text-[16px] lg:text-[16px]">{{
                                    $t('Elder') }}
                                </p>

                            </div>
                            <div class="grid justify-items-center" v-else="openTab === 9">
                                <img class="h-6 md:h-6 lg:h-6 w-6 md:w-6 lg:w-6"
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
        <div v-if="campaigns != ''" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-16">
            <!-- <div v-for="index in campaignToShow"> -->
            <div v-for="campaign in campaigns" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid category-tab-content">
                <div
                    class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
                    <img class="w-full h-52 cursor-pointer" :src="campaign.campain_image" alt="Mountain"
                        @click="donate(campaign.name)">
                    <div class="pt-[20px] pr-[20px] pl-[20px] leading-6">
                        <div v-if="lang == 'gu' && campaign.campaign_title_gu"
                            class="fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines">
                            {{ campaign.campaign_title_gu }}</div>
                        <div v-else-if="lang == 'hi' && campaign.campaign_title_hi"
                            class="fontfamily font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines">
                            {{ campaign.campaign_title_hi }}</div>
                        <div v-else
                            class="fontfamily cursor-pointer font-bold text-[#40b751] text-[18px] md:text-[18px] lg:text-[18px] mb-2 truncate-2-lines"
                            @click="donate(campaign.name)">
                            {{ campaign.campaign_title }}</div>

                        <p class="text-gray-700 text-[13px]  truncate">
                            {{ $t('Funds from') }}: <strong>{{ campaign.ngo }}</strong>
                        </p>
                        <div class="flex fontcard font-[600] justify-between border-b-0 pb-1 border-b-gray-100 mb-1">
                            <!-- <p class="flex items-center text-[14px] md:text-[12px] lg:text-[14px]"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather h-4 w-4 feather-clock mr-1 md:mr-1 lg:mr-2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg> {{ dayCalculate(campaign.end_date) }} {{ $t('Goal') }}
                            </p> -->
                            <p class="flex items-center text-[14px] md:text-[12px] lg:text-[14px]"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather h-4 w-4 feather-users mr-1 md:mr-1 lg:mr-2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>{{ campaign.total_donor || 0 }} {{ $t('Donors') }}</p>
                        </div>
                        <div class="w-full h-[5px] bg-gray-200 rounded dark:bg-gray-700 mb-2 ">
                            <!--<div v-if="campaigns[index - 1].raised_amount"
                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                    :style="{ width: campaigns[index - 1].raised_amount * 100 / campaigns[index - 1].donation_amount + '%' }">
                    {{ (campaigns[index - 1].raised_amount * 100
                      /
                      campaigns[index - 1].donation_amount).toFixed(2) }}%</div>-->

                            <div v-if="campaign.raised_amount"
                                class="bg-[#40b751] h-[5px] rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                                :style="{ width: campaign.raised_amount * 100 / campaign.donation_amount + '%' }">
                                <!--{{ (campaigns[index - 1].raised_amount * 100
                      /
                      campaigns[index - 1].donation_amount).toFixed(2) }}%-->
                            </div>
                        </div>

                        <div class="fontcard flex mt-1 mb-0 pb-1 text-[14px]">
                            <span class="font-[600] text-[#222222]"> ₹{{
                                numberWithCommas(campaign.raised_amount)
                            }} {{ $t('raised') }}</span><span class="text-[#222222] ml-1">{{ $t('of') }} ₹{{
    numberWithCommas(campaign.donation_amount) }}</span>
                        </div>




                    </div>
                    <div class="sm:pr-2 md:pr-4 lg:pr-4 pb-4 pl-5 md:pl-4 lg:pl-5 pt-2 flex justify-between">
                        <ShareNetwork network="WhatsApp" :url="url + '/campaign-donation/' + campaign.name"
                            :title="campaign.campaign_title" :description="campaign.short_description">
                            <button
                                class="flex group rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600 text-sm md:text-xs lg:text-xs px-3 md:px-2 lg:px-6 py-2 md:py-2 lg:py-3   shadow hover:shadow-lg outline-none focus:outline-none mr-1 md:mr-4 lg:mr-4 lg:mr-1 ease-linear transition-all duration-150"
                                type="button" @click=""> <svg class="fill-[#40b751] group-hover:fill-white" fill="none"
                                    height="17" width="17" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
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
                            type="button" @click="donate(campaign.name)"> {{ $t('Donate Now') }} </button>
                    </div>
                    <!-- <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-3 pl-9 flex justify-between">
                            <button class="text-[#40b751] text-base">{{ $t('Share') }}</button>
                            <button
                                class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm sm:px-2 md:px-2 lg:px-4 sm:py-2 md:py-2 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="donate(campaigns[index - 1].name)"> {{ $t('Donate Now') }} </button>
                        </div> -->
                </div>
            </div>
            <!-- </div> -->
        </div>
        <!-- <div v-else class="text-center text-bold mt-5"> 
            {{ $t('No Campaign Found For') }} <span v-if="category">{{ $t(category) }}</span>
        </div> -->
        <!-- <div v-if="campaignToShow < campaigns.length || campaigns.length > campaignToShow" class="text-center">
            <button
                class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" @click="campaignToShow += 6">{{ $t('Show More') }}</button>
        </div> -->
        <div class="text-center" v-if="last_campaigns == false">
            <button
                class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" @click="get_more_campagins()">{{ $t('Show More') }}</button>
        </div>
    </section>


    <!-- {{ campaigns }} -->
    <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";


export default {
    name: "Explore Campaigns",
    components: { Navbar, Footer },
    mounted() {
        document.title = this.$t('Support Causes That Matter: BestDeed - Your Trusted and 100% Transparent Crowdfunding Platform | Bestdeed')
        this.get_language()
        this.get_campaigns()
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
            campaigns: [],
            // campaigns: [{
            //     about_campaign: "“I have never had a happy married life. One that parents hope for when they marry off their daughters. My husband was an alcoholic and used to hit me when he came home drunk. It was horrible but I survived because of my sons. I worked hard to put food on the table, and did everything to give them a good education but finally when it was their turn to look after me, they forced me to live on the streets,” - Durga Devi*, an aged widow living in Vrindavan. ",
            //     about_campaign_gu: "“મેં ક્યારેય સુખી લગ્ન જીવન નથી કર્યું. એક જેની માતા-પિતા આશા રાખે છે કે જ્યારે તેઓ તેમની દીકરીઓના લગ્ન કરે છે. મારા પતિ દારૂના નશામાં હતા અને જ્યારે તે નશામાં ઘરે આવતો ત્યારે મને મારતો હતો. તે ભયાનક હતું પરંતુ મારા પુત્રોને કારણે હું બચી ગયો. મેં ટેબલ પર ખોરાક મૂકવા માટે સખત મહેનત કરી, અને તેમને સારું શિક્ષણ આપવા માટે બધું જ કર્યું પરંતુ આખરે જ્યારે મારી સંભાળ રાખવાનો તેમનો વારો આવ્યો, ત્યારે તેઓએ મને શેરીઓમાં રહેવા માટે મજબૂર કરી,” - દુર્ગા દેવી*, એક વૃદ્ધ વિધવા રહે છે વૃંદાવનમાં.",
            //     about_campaign_hi: "“मेरा वैवाहिक जीवन कभी सुखी नहीं रहा। एक जिसकी उम्मीद माता-पिता तब करते हैं जब वे अपनी बेटियों की शादी करते हैं। मेरे पति शराबी थे और शराब पीकर घर आने पर मुझे मारते थे। यह भयानक था लेकिन मैं अपने बेटों की वजह से बच गई। मैंने मेज पर खाना लगाने के लिए कड़ी मेहनत की, और उन्हें अच्छी शिक्षा देने के लिए सब कुछ किया लेकिन आखिरकार जब मेरी देखभाल करने की उनकी बारी आई, तो उन्होंने मुझे सड़कों पर रहने के लिए मजबूर कर दिया, ”- दुर्गा देवी*, एक वृद्ध विधवा जीवित वृंदावन में।",
            //     campaign_category: "Elder Campaign",
            //     campaign_request: null,
            //     campaign_title: "They’re Looking For Love & Compassion, Donate Blankets This Winter To Help Poor Widows",
            //     campaign_title_gu: "તેઓ પ્રેમ અને કરુણાની શોધમાં છે, ગરીબ વિધવાઓને મદદ કરવા માટે આ શિયાળામાં ધાબળાનું દાન કરો",
            //     campaign_title_hi: "वे प्यार और करुणा की तलाश में हैं, गरीब विधवाओं की मदद के लिए इस सर्दी में कंबल दान करें",
            //     campaign_type: null,
            //     campain_image: "/files/Help-with-winter-cloth1089302098.webp",
            //     creation: "2023-03-20 00:42:12.481030",
            //     docstatus: 0,
            //     donation_amount: 6868355,
            //     donation_details: null,
            //     duedate: null,
            //     end_date: "2023-06-30",
            //     is_featured: 0,
            //     language: null,
            //     long_description: null,
            //     modified: "2023-04-05 19:57:35.907253",
            //     modified_by: "pithiyanilesh87@gmail.com",
            //     name: "THEY’RE-20-03-2023-0001",
            //     naming_series: null,
            //     ngo: "NGO-VRIND-20-03-2023-01",
            //     ngo_email: "vrindavanwindows@gmail.com",
            //     owner: "janvi@gmail.com",
            //     published: 1,
            //     raised_amount: 255920,
            //     route: "route/they’re-20-03-2023-0001",
            //     short_description: "This winter, join hands with Pure Devotion Foundation and distribute blankets to elderly widows in Vrindavan. Your contribution will ensure that these Matajis are kept warm and protected from the chilly winters.",
            //     short_description_gu: "આ શિયાળામાં, શુદ્ધ ભક્તિ ફાઉન્ડેશન સાથે હાથ મિલાવો અને વૃંદાવનમાં વૃદ્ધ વિધવાઓને ધાબળાનું વિતરણ કરો. તમારું યોગદાન સુનિશ્ચિત કરશે કે આ માતાજીઓને ગરમ રાખવામાં આવશે અને ઠંડા શિયાળાથી સુરક્ષિત રાખવામાં આવશે.",
            //     short_description_hi: "इस सर्दी में प्योर डिवोशन फाउंडेशन के साथ हाथ मिलाकर वृंदावन में बुजुर्ग विधवाओं को कंबल बांटें। आपका योगदान यह सुनिश्चित करेगा कि इन माताजी को गर्म रखा जाए और कड़ाके की ठंड से बचाया जाए।",
            //     start_date: "2023-01-24",
            //     status: "Live"
            // }],
            campaign_title: '',
            ngo: '',
            campain_image: '',
            location: null,
            selected: 'newly launched',
            // campaignToShow: 6,
            totalCampaign: 0,
            loading: false,
            selection: 1,
            openTab: 1,
            openTabTestimonials: 1,
            featured_campaigns: [],
            lang: '',

            start: 0,
            page_length: 6,
            url: window.location.origin,
            last_campaigns: false,

            lang: this.get_language(),
        }
    },
    // computed: {
    //     filteredList() {
    //         // console.log(this.campaigns)
    //         // return this.campaigns.filter((item) =>
    //         //     item.toLowerCase().includes(this.searchQuery.toLowerCase())
    //         // );



    //         // if (this.searchQuery) {
    //         //     console.log(this.campaigns);
    //         //     return this.campaigns.filter((item) =>
    //         //         item.toLowerCase().includes(this.searchQuery.toLowerCase())
    //         //     );
    //         // } else {
    //         //     console.log('none');
    //         //     return this.campaigns
    //         // }
    //         if (!this.searchQuery) {
    //             console.log("none");
    //             return false;
    //         } else {
    //             console.log("campaign");
    //             return this.campaigns.filter(({ campaign_title, ngo, campain_image }) =>
    //                 [campaign_title, ngo, campain_image].some(val => val.toLowerCase().includes(this.searchQuery))
    //             );
    //         }

    //         // if (!this.searchQuery) {
    //         //     console.log('campaign');
    //         //     return this.campaigns;
    //         // } else {
    //         //     return this.campaigns.filter((item) =>
    //         //         item.toLowerCase().includes(this.searchQuery.toLowerCase())
    //         //     );
    //         // }
    //     },
    // },
    resources: {
        get_campaigns() {
            return {
                method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaigns',
                onSuccess: (res) => {
                    if (res != '') {
                        var a = res.length
                        for (a = 0; a < res.length; a++) {
                            this.campaigns.push(res[a])
                        }
                    }
                    if (res.length < this.page_length) {
                        this.last_campaigns = true
                    }
                    if (res == '') {
                        this.$toast({
                            title: "No Campaigns",
                            text: `No Campaigns Found For ${this.category}.`,
                            icon: "x-circle",
                            appearance: "denger",
                            position: "top-center",
                        })
                    }
                    // this.campaigns.push(res)
                    // this.campaigns = res
                    // this.totalCampaign += this.res.length
                    // this.start = this.page_length
                },
                onError: (error) => {
                    console.log("Error", error)
                }
            }
        },
        get_search_campaigns() {
            return {
                method: '/api/method/sadbhavna_donatekart.api.campaign.get_search_campaigns',
                onSuccess: (res) => {
                    console.log("get_search_campaign_success", res)
                    this.filteredList = res
                    // this.campaigns.push(res)
                    // this.totalCampaign = this.campaigns.length
                    // this.start = this.page_length
                },
                onError: (error) => {
                    console.log("Error", error)
                }
            }
        },
    },
    methods: {
        numberWithCommas(x) {
            return x.toLocaleString();
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        get_campaigns(category, start) {
            if (category != '') {
                this.campaigns = []
                this.category = category
            }
            this.last_campaigns = false
            this.$resources.get_campaigns.submit({
                category: this.category,
                language: localStorage.getItem('lang') || window.navigator.language,
                start: start,
                page_length: this.page_length
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
        get_more_campagins() {
            // var start = this.start + this.page_length
            // this.page_length += this.page_length
            // this.start = this.start + this.page_length
            // this.campaignToShow += 6
            this.start += 6
            this.get_campaigns('', this.start)
        },
        get_search_campaigns() {
            this.$resources.get_search_campaigns.submit({
                search: this.searchQuery
            })
        },
        dayCalculate(end_date) {
            var today = new Date()
            var end_date = new Date(end_date)
            const timeDiff = end_date.getTime() - today.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return daysDiff;
        },
        get_language() {
            return this.$cookies.get('lang') || localStorage.getItem('lang')
        },
    },
}
</script>
 