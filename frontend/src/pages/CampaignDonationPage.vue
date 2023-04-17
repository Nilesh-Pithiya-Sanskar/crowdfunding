<template>
    <!-- <DonationCheckout/> -->
    <Navbar />
    <div class="container mx-auto mt-[40px]">
        <div v-if="campaign_detail" class="px-[14px] md:px-0 lg:px-0">
            <!-- {{ campaign_detail }}  -->
                <h2 v-if="lang == 'gu' && campaign_detail.data.campaign_title_gu">
                    <span class="w-full mb-1 mr-2 leading-10 md:leading-0 lg:heading-12 text-[25px] font-bold text-[#364958] capitalize">{{ $t(campaign_detail.data.campaign_title_gu) }} </span>
                    <span class="" v-for="benefit in campaign_detail.data.benefits">
                    <button v-if="lang == 'gu' && benefit.benefit_gu"
                            class="h-[25px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_gu }}
                    </button>
                    <button v-else-if="lang == 'hi' && benefit.benefit_hi"
                            class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_hi }}
                    </button>
                    <button v-else
                            class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit }}
                    </button>
                    </span>
                </h2>
                
                <h2 v-else-if="lang == 'hi' && campaign_detail.data.campaign_title_hi">
                    <span class="w-full mb-1 mr-2 leading-10 md:leading-0 lg:heading-12 text-[25px] font-bold text-[#364958] capitalize">{{ $t(campaign_detail.data.campaign_title_hi) }} </span>
                    <span class="" v-for="benefit in campaign_detail.data.benefits">
                    <button v-if="lang == 'gu' && benefit.benefit_gu"
                            class="h-[25px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_gu }}
                    </button>
                    <button v-else-if="lang == 'hi' && benefit.benefit_hi"
                        class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                        {{ benefit.benefit_hi }}
                    </button>
                    <button v-else
                            class="h-[30px] bg-[#40b751] mr-[2 capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit }}
                    </button>
                    </span>
                </h2>
                <h2 v-else>
                    <span class="w-full mb-1 mr-2 leading-10 md:leading-0 lg:heading-12 text-[25px] font-bold text-[#364958] capitalize">{{ $t(campaign_detail.data.campaign_title) }} </span>
                    <span class="" v-for="benefit in campaign_detail.data.benefits">
                    <button v-if="lang == 'gu' && benefit.benefit_gu"
                            class="h-[25px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_gu }}
                    </button>
                    <button v-else-if="lang == 'hi' && benefit.benefit_hi"
                            class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_hi }}
                    </button>
                    <button v-else
                            class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit }}
                    </button>
                    </span>
                </h2>
                <!-- <span v-for="benefit in campaign_detail.data.benefits">
                    <button v-if="lang == 'gu' && benefit.benefit_gu"
                            class="h-[30px] bg-[#40b751] mr-[2px] capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_gu }}
                    </button>
                    <button v-else-if="lang == 'hi' && benefit.benefit_hi"
                            class="h-[30px] bg-[#40b751] mr-[2px] mt-1 capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit_hi }}
                    </button>
                    <button v-else
                            class="h-[30px] bg-[#40b751] mr-[2px] mt-1 capitalize text-[11px] font-normal text-white px-[10px] md:px-[10px] lg:px-[10px] rounded-[12px] cursor-text">
                            {{ benefit.benefit }}
                    </button>
                </span> -->
           
                    
            <p v-if="lang == 'gu' && campaign_detail.data.short_description_gu" style="line-height:1.7;"
                class="mb-4 text-base text-[#364958] font-normal">{{
                    $t(campaign_detail.data.short_description_gu) }}</p>
            <p v-else-if="lang == 'hi' && campaign_detail.data.short_description_hi" style="line-height:1.7;"
                class="mb-4 text-base text-[#364958] font-normal">{{
                    $t(campaign_detail.data.short_description_hi) }}</p>
            <p v-else style="line-height:1.7;" class="mb-2 text-base text-[#364958] font-normal">{{
                $t(campaign_detail.data.short_description) }}</p>

            <!-- <div class="mb-[50px] flex flex-wrap">
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white  py-[7px] px-[18px] md:px-[20px] lg:px-[20px] rounded-[10px]">
                    {{$t('Tax Benefit')}}</span>
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px]  rounded-[10px]">
                    {{$t('Assured')}}</span>
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px] rounded-[10px]">
                    {{$t('Old Ages')}}</span>
            </div> -->
            <div class="flex flex-wrap mt-6 mb-5">
                <img class="object-fill lg:h-[35rem] md:h[25] sm:h[25] w-full mb-4"
                    :src="campaign_detail.data.campain_image">
                <div class="w-full lg:w-8/12 pr-0 md:pr-4 lg:pr-4">
                    <!-- <DonationDetail /> -->
                    <div class="pt-4 pb-2 mt-[4px] mb-[6px] flex text-[#364958] justify-between font-black">
                        <p>{{ $t('Raised') }}: {{ numberWithCommas(campaign_detail.data.raised_amount) }}</p>
                        <p>{{ $t('Goal') }}: {{ numberWithCommas(campaign_detail.data.donation_amount) }}</p>
                    </div>
                    <div class="w-full h-[16px] bg-gray-200 rounded-md dark:bg-gray-700">
                        <!-- <div class="bg-green-500 text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md" style="width: 40%"> 40%</div> -->
                       <div class="bg-[#40b751] h-[16px] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded"
                            :style="{ width: campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount + '%' }">
                           <!-- {{ (campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount).toFixed(2)
                            }}%--></div>

                            <!--<div class="bg-[#40b751]  text-[11px] font-medium text-black text-center p-0.5 leading-none rounded"
                            :style="{ width: campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount + '%' }">
                           {{ (campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount).toFixed(2)
                            }}%</div>-->
                    </div>

                    <!-- <div class="pt-4 pb-2 mt-[4px] mb-[6px] flex flex-wrap text-[#364958] font-bold">
                        <div class="lg:w-3/12 md:3/12 sm: 6/12 flex">
                            <p class="flex mr-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>{{ numberWithCommas(total_donors) }} Donors</p>
                            <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {{ campaign_days }} Days Left</p>
                        </div>
                        <div class="flex lg:w-6/12 md:6/12 sm:6/12 justify-between">
                            <p></p>
                            <p>facebook</p>
                            <p>twitter</p>
                            <p>whatsapp</p>
                            <p>link</p> -->
                    <!-- <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/facebook.svg" />
                                <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/twitter.svg" />
                                <span class="sr-only">Twitter page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4 " src="../../src/assets/Inter/img/insta.svg" />
                                <span class="sr-only">Instagram page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/linkedin.svg" />
                                <span class="sr-only">Linkedin account</span>
                                </a> -->
                    <!-- </div> -->
                    <!-- </div> -->


                    <div class="flex flex-wrap mt-2 justify-between">
                        <div class="flex flex-wrap">
                            <p class="flex mr-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>{{ numberWithCommas(total_donors) }} {{ $t('Donors') }}</p>
                            <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock mr-2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg> {{ campaign_days }} {{ $t('Days Left') }}</p>

                        </div>
                        <div class="flex flex-wrap lg:mt-0 md:mt-0 sm:mt-4">
                            <div class="bg-blue-700 rounded-full h-10 w-10 sm:ml-2 pt-2 pb-1 pl-2 pr-1 hover:cursor-pointer">
                                <ShareNetwork
                                    network="facebook"
                                    :url="url"
                                    :title="campaign_detail.data.campaign_title"
                                    :description="campaign_detail.data.short_description"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="#ffffff" stroke="currentColor" stroke-width="0" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-facebook">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                </ShareNetwork>
                                
                            </div>
                            <div class="bg-sky-400 rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2 pr-1 hover:cursor-pointer">
                                <ShareNetwork
                                    network="Twitter"
                                    :url="url"
                                    :title="campaign_detail.data.campaign_title"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="#ffffff" stroke="currentColor" stroke-width="0" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-twitter">
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                        </path>
                                        </svg>
                                </ShareNetwork>
                                
                            </div>
                            <div class="bg-[#40b751] rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2 pr-1 hover:cursor-pointer">
                                <ShareNetwork
                                    network="WhatsApp"
                                    :url="url"
                                    :title="campaign_detail.data.campaign_title"
                                    :description="campaign_detail.data.short_description"
                                    >
                                        <svg fill="#ffffff" height="24" width="24" version="1.1" id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 308 308" xml:space="preserve">
                                        <g id="XMLID_468_">
                                            <path id="XMLID_469_"
                                                d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                            <path id="XMLID_470_"
                                                d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                        </g>
                                        </svg>
                                </ShareNetwork>
                            </div>
                            <div class="bg-gray-600 rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2.5 pr-1 hover:cursor-pointer"
                                @click="copyURL()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-link">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 mt-6">
                        <div class="pb-4" v-for="products in campaign_detail.data.add_campaign_items">
                            <!-- {{ products }} -->
                            <div class="block product-shodow border border-green-500 rounded-md bg-white pl-5">
                                <div class="flex items-center pt-4">
                                    <div class="lg:flex lg:w-4/12 xl:w-4/12">
                                        <img :src="products.image" :alt="products.display_as_name" class="w-32 h-32" />
                                    </div>

                                    <div class="lg:w-8/12 xl:w-8/12">
                                        <div class="px-6 md:px-6 lg:px-6">
                                            <h4 v-if="lang == 'gu' && products.display_as_name_gu"
                                                class="text-xl font-medium text-[#40b751]">{{
                                                    $t(products.display_as_name_gu) }}</h4>
                                            <h4 v-else-if="lang == 'hi' && products.display_as_name_hi"
                                                class="text-xl font-medium text-[#40b751]">{{
                                                    $t(products.display_as_name_hi) }}</h4>
                                            <h4 v-else class="text-xl font-medium text-[#40b751]">{{
                                                $t(products.display_as_name) }}</h4>
                                            <p v-if="lang == 'gu' && products.about_gu" class="text-gray-500 mb-2">
                                                {{ $t(products.about_gu) }}
                                            </p>
                                            <p v-else-if="lang == 'hi' && products.about_hi" class="text-gray-500 mb-2">
                                                {{ $t(products.about_hi) }}
                                            </p>
                                            <p v-else class="text-gray-500 mb-2" v-if="products.about">
                                                {{ $t(products.about) }}
                                            </p>
                                            <p class="text-gray-500 font-bold pb-2">
                                                ₹ {{ numberWithCommas(products.price) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="h-px my-2 bg-gray-500 border-0 dark:bg-gray-700 mr-4 mb-5 mt-5">
                                <div class="flex between">
                                    <div class="w-full">
                                        <div class="flex w-full h-[10px] bg-gray-200 rounded-md dark:bg-gray-700">
                                            <div v-if="products.c_qty"
                                                class="bg-[#40b751] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded"
                                                :style="{ width: products.c_qty * 100 / products.qty + '%' }">
                                                <!-- {{ (products.c_qty * 100 / products.qty).toFixed(2)
                                                }}% -->
                                            </div>
                                        </div>
                                        <div class="text-gray-500 text-sm mt-1">{{ products.c_qty || 0 }} of {{ products.qty
                                        }} Quantity Obtained</div>
                                    </div>
                                    <div class="flex pb-2 ml-3" v-if="item_b.includes(products.item)">
                                        <div class="flex justify-between w-24 text-xl h-9 mr-6">
                                            <Button class="bg-gray-300"
                                                @click="decrement(products.item, products.price, qty = 1)">-</Button>

                                            <div v-for="item in item_cart">
                                                <div class="bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center"
                                                    v-if="products.item == item.item"> {{ item.qty }}
                                                </div>
                                                <!-- <div v-else>sdf</div> -->
                                            </div>
                                            <!-- :class="['bg-gray-300', products.c_qty == products.qty ? 'bg-green-500' : 'bg-red-500']" -->
                                            <Button class="bg-gray-300"
                                                @click="increment(products.item, products.price, qty = 1, products.qty, products.c_qty)">+</Button>
                                        </div>
                                    </div>

                                    <div class="pb-2" v-else-if="products.qty != products.c_qty">
                                        <div class="grid justify-items-end w-24 text-xl h-9 mr-4">
                                            <div>
                                                <button
                                                    class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-2 md:px-4 lg:px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                                    @click="increment(products.item, products.price, qty = 1)">{{ $t('Add')
                                                    }}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pb-2" v-else>
                                        <div class="grid text-xl h-9 mr-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div v-for="index in descToShow">
                        <div v-if="index - 1 < campaign_detail.data.description.length">
                            <img class="object-fill w-full" :src="campaign_detail.data.description[index - 1].image">
                            <p v-if="lang == 'gu' && campaign_detail.data.description[index - 1].image_description_gu"
                                style="line-height:1.7;" class="text-[#364958] mb-5">{{
                                    $t(campaign_detail.data.description[index - 1].image_description_gu) }}</p>
                            <p v-else-if="lang == 'hi' && campaign_detail.data.description[index - 1].image_description_hi"
                                style="line-height:1.7;" class="text-[#364958] mb-5">{{
                                    $t(campaign_detail.data.description[index - 1].image_description_hi) }}</p>
                            <p v-else style="line-height:1.7;" class="text-[#364958] mb-5">{{
                                $t(campaign_detail.data.description[index - 1].image_description) }}</p>
                        </div>
                    </div>
                    <div class="text-center"
                        v-if="descToShow < campaign_detail.data.description.length || campaign_detail.data.description.length > descToShow">
                        <button
                            class="mt-2 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="descToShow += 1">{{ $t('View More') }}</button>
                    </div>
                    <div class="text-center" v-else>
                        <button
                            class="mt-2 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="descToShow = 1" v-if="total_desc > 1">{{ $t('View Less') }}</button>
                    </div>
                </div>

                <div class=" w-full lg:w-4/12 pr-0 md:pr-4 lg:pr-4">
                    <div class="sticky top-0">
                        <div class="overflow-hidden hidden lg:block">
                            <table class=" stext-[#364958]" v-if="item_cart != ''">
                                <thead class="bg-white border-b">
                                    <tr class="">
                                            <th scope="col" class="font-bold px-2 py-4 text-left">
                                            {{ $t('Item Name') }}
                                        </th>
                                        <!-- <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                            Rate
                                        </th> -->
                                        <th scope="col" class="font-bold px-10 py-4 text-left">
                                            {{ $t('Qty') }}
                                        </th>
                                        <th scope="col" class="font-bold px-10 py-4 text-left">
                                            {{ $t('Amount') }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in item_cart"
                                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 px-2 py-4">
                                            {{ $t(item.item) }}
                                        </td>
                                        <!-- <td class="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                                            {{ item.rate }}
                                        </td> -->
                                        <td class="text-sm text-gray-900 px-10 py-4 whitespace-nowrap">
                                            {{ item.qty }}
                                        </td>
                                        <td class="text-sm text-gray-900 px-10 py-4 whitespace-nowrap">
                                            {{ item.amount }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-gray-900 font-bold px-2 py-4 whitespace-nowrap">{{ $t('Total') }}</td>
                                                                        <td class="text-gray-900 font-bold px-10 py-4 whitespace-nowrap">{{ i_qty }}</td>
                                        <td class="text-gray-900 font-bold px-10 py-4 whitespace-nowrap">₹ {{
                                            numberWithCommas(total_price) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-center mt-5" v-if="item_cart == ''">
                                <button
                                    class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-sm md:text-sm lg:text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                    type="button" @click="donate_now()"> {{ $t('Donate Now') }}
                                </button>
                            </div>
                            <div class="text-center mt-5" v-if="item_cart != ''">
                                <button
                                    class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-sm md:text-sm lg:text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                    type="button" @click="donate(total_price, anonymous)"> {{ $t('Donate Now') }}
                                </button>
                                <div v-if="isLoggedIn == true">
                                    <input type="checkbox" id="anonymous" v-model="anonymous">
                                    <label for="checkbox" class="text-sm pl-2">{{ $t('Make my donation anonymous')
                                    }}</label>
                                </div>
                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                            </div>

                            <!-- <div v-if="total_price != 0" class="text-center font-bold text-lg mt-5">
                                <div class="text-gray-600">Total Donation</div>
                                <div class="text-[#40b751]">₹ {{ numberWithCommas(total_price) }}</div>
                                <div>
                                    <button
                                        class="rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150"
                                        type="button" @click="donate(total_price, anonymous)"> donate now
                                    </button>
                                </div>
                                <div>
                                    <input type="checkbox" id="anonymous" v-model="anonymous">
                                    <label for="checkbox" class="text-sm pl-2">Make my donation anonymous</label>
                                </div>
                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                            </div> -->
                        </div>

                        <!-- <div style="font-size: 2rem;" class="mt-3 font-medium text-gray-800">Other Donation</div> -->
                        <p class="text-gray-600 font-bold mt-4 mb-2">{{ $t('Donate via') }}</p>

                        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 shadow-lg card-shodow ">
                            <div>
                                <div @click="phone()" class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/phonepay.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('Phone Pay') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/gpay.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('Google Pay') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/bhim.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('Bhim UPI') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/paytm.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('Paytm') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/crditcard.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('cr/dr card') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/banktransfer.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs  text-[#364958]">{{ $t('Bank Transfer') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/giftcard.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">{{ $t('Gift Card') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-white dark:bg-gray-900 flex flex-wrap">
                <div class="lg:w-8/12 md:w-6/12 sm:w-12/12">
                    <div class="bg-white dark:bg-gray-900">
                        <div>
                            <div class="text-gray-700">
                                <div class="pr-5 py-4">
                                    <div class="mb-2">
                                        <p
                                            class="text-[30px] md:text-[26px] lg:text-[30px] text-[#40b751] font-semibold  title-font">
                                            {{ $t('FAQ') }}
                                        </p>
                                        <!-- <p class="text-base leading-relaxed ">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!
                                        </p> -->
                                    </div>
                                   
                                    <div class="flex flex-wrap sm:mx-auto sm:mb-2 mx-auto">
                                        <div class="w-full py-2">
                                            <details class="mb-3" open>
                                                <summary
                                                    class="font-medium cursor-pointer border-2 border-b-1 border-solid border-b-gray-300 text-lg text-[#40b751] list-none bg-gray-100 rounded py-3 px-2">
                                                    {{ $t('How can I get my tax redemption?') }}</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 font-normal border-solid border-gray-200 border-t-0 py-2 px-2 text-base text-[#364958] ">
                                                        {{ $t("You may quickly obtain your tax receipt because all of our partner NGOs are 80G approved. On the payment success page, which appears once your payment for product purchase has been completed successfully, you will see the 'GET 80G' button. Please enter your PAN number, complete location, and PAN-compliant name before clicking 'Submit.'You will receive an email and a download link for your 80G certificate.") }}
                                                    </p>
                                                </span>
                                            </details>

                                            <details class="mb-3">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-lg list-none bg-gray-100 rounded py-3 px-2">
                                                    {{ $t('What if my fundraising target is not reached? Will I still receive the products?') }}</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 py-2 px-2 text-base text-[#364958] dark:text-gray-300">
                                                        {{$t('According to Best Deed, every work put into the campaign should be rewarded. Therefore, even if you fall short of your fundraising target, you still receive all of the products you have received so far.')}}</p>
                                                </span>
                                            </details>
                                            <details class="mb-3">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-lg list-none bg-gray-100 rounded py-3 px-2">
                                                    {{ $t('What is the reliability of your crowdfunding platform? ') }}</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 py-2 px-2 text-base text-[#364958] dark:text-gray-300">
                                                        {{ $t("The environment, structure, and sophistication of crowdfunding platforms can vary greatly. Our crowdfunding platform is governed by a local exchange and securities commission and is required to follow strict guidelines to ensure the security of investors' investments.Look for a license number in the page's footer to quickly spot these sites. On the other hand, some crowdfunding platforms work independently, with no supervision to ensure the safety of investors.Best Deed accepts credit cards, debit cards, bank transfers, UPI, PayPal, and other payment methods. You can select the most convenient option and carry out the necessary actions.")}}</p>
                                                </span>
                                            </details>
                                            <details class="mb-3">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-lg list-none bg-gray-100 rounded py-3 px-2">
                                                    {{ $t('How to claim Tax-Exemption ?') }}</summary>


                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 py-2 px-2 text-base text-[#364958] dark:text-gray-300">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                        occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't
                                                        heard of them accusamus labore
                                                        sustainable VHS.</p>
                                                </span>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-4/12 mb-10 md:mb-0 lg:mb-0">
                    <div style="font-size: 2rem;" class="mt-6 mb-3 font-medium text-gray-800">{{ $t('Donors') }} ({{
                        total_donors }})</div>
                    <div class="flex  mb-10  flex-wrap shadow">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap flex-row">
                                <li class="-mb-px flex-auto text-center">
                                    <a class="text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(1)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 1, 'text-gray-500': openTab === 1 }">
                                        <i class="fas fa-space-shuttle text-base mr-1"></i> {{ $t('Recent') }}
                                    </a>
                                </li>
                                <li class="-mb-px  flex-auto text-center">
                                    <a class=" text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(2)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 2, 'text-gray-500': openTab === 2 }">
                                        <i class="fas fa-cog text-base mr-1"></i> {{ $t('Most Generous') }}
                                    </a>
                                </li>
                            </ul>

                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded">
                                <div class=" px-4 py-5 flex-auto">
                                    <div class=" tab-content tab-space overflow-y-auto lg:h-[20rem] md:h-[13rem] sm:h-[17rem] h-[17rem]">
                                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                            <div class="pb-6" v-if="recent_donation != ''" v-for="donation in recent_donation">

                                                <div class="grid grid-cols-[200px_minmax(80px,_1fr)_100px]">

                                                    <div>
                                                        <div class="float-left pr-4">

                                                            <div v-if="donation.anonymous != 1">
                                                                <Avatar :imageURL="donation.donor_image"
                                                                    :label="donation.donor_name" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                            <div v-else>
                                                                <Avatar imageURL="" label="Anonymous" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p v-if="donation.anonymous != 1"
                                                                class=" text-gray-900 leading-none text-lg">{{
                                                                    donation.donor_name }}</p>
                                                            <p v-else class="text-gray-900 leading-none text-lg">
                                                                {{ $t('Anonymous') }}</p>
                                                            <p class="text-gray-600 text-sm">{{ formatDate(donation.date) }}
                                                            </p>
                                                        </div>
                                                    </div><div class="grid justify-end">
                                                        <p class="">₹ {{ numberWithCommas(donation.amount) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                {{$t('No Recent Donation')}}
                                            </div>
                                        </div>
                                        
                                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                            <div class="pb-6" v-if="most_generous != ''" v-for="m_donation in most_generous">
                                                <div class="grid grid-cols-[200px_minmax(80px,_1fr)_100px]">

                                                    <div>
                                                        <div class="float-left pr-4">

                                                            <div v-if="m_donation.anonymous != 1">
                                                                <Avatar :imageURL="m_donation.donor_image"
                                                                    :label="m_donation.donor_name" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                            <div v-else>
                                                                <Avatar imageURL="" label="Anonymous" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p v-if="m_donation.anonymous != 1"
                                                                class=" text-gray-900 leading-none text-lg">{{
                                                                    m_donation.donor_name }}</p>
                                                            <p v-else class="text-gray-900 leading-none text-lg">
                                                                {{ $t('Anonymous') }}</p>
                                                            <p class="text-gray-600 text-sm">{{ formatDate(m_donation.date)
                                                            }}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="grid justify-end">
                                                        <p class="">₹ {{ numberWithCommas(m_donation.amount) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                {{$t('No Recent Donation')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="md:block sm:block lg:hidden rounded-2xl w-full h-16 bg-white border-t-4 border-green-500
                                                                                                    fixed left-0 bottom-0
                                                                                                    flex justify-center items-center
                                                                                                    text-white text-2xl "
            v-if="total_price != 0">
            <!-- <div class="">asdfasdfasd</div> -->
            <div class="flex justify-between text-center font-bold text-lg mt-5">
                <div class="flex">
                    <div class="text-[#40b751] ml-5">{{ i_qty }} {{ $t('Item(s)') }} |</div>
                    <div class="text-[#40b751] ml-2">₹ {{ numberWithCommas(total_price) }}</div>
                </div>
                <!-- <div>
                    <input type="checkbox" id="anonymous" v-model="anonymous">
                    <label for="checkbox" class="text-sm text-green-500 pl-2">Make my donation anonymous</label>
                </div> -->
                <div>
                    <button
                        class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                        type="button" @click="donate(total_price, anonymous)"> {{ $t('Donate Now') }}
                    </button>
                </div>

            </div>

        </div>
    </div>

    <Dialog :options="{
        title: $t('Donation Completed'),
        message: $t(`Your donation of ${donated_amount} is successfully completed.`),
        icon: {
            name: 'smile',
            appearance: 'success',
        },
        appearance: 'info',
        size: 'lg',
        actions: [
            // {
            //     label: $t('Get 80G Certificate'),
            //     appearance: 'success',
            //     handler: ({ close }) => {
            //         this.download_80g(donation_name)
            //         close() // closes dialog
            //     },
            // },
            {
                label: $t('View Profile'),
                appearance: 'success',
                handler: ({ close }) => {
                    this.view_profile()
                    close() // closes dialog
                },
            },
            {
                label: $t('Cancel'),
                handler: ({ close }) => {
                    this.cancel()
                    close() // closes dialog
                },
            },
        ],
    }" v-model="showDialog" />


    <!-- <DonationCheckout v-if="showCheckout == true" :i_qty="i_qty" :total_price="total_price" :showCheckout="showCheckout"
        @donate_checkout="donate_checkout" /> -->

        <Dialog v-model="showDialog_c" >
        <template #body>
                    <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                        <h1
                            class="text-2xl md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-green-500 text-bold text-center">
                            {{ $t('Donation Checkout') }}
                        </h1>
                        <div class="relative z-0">
                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Name') }}
                                    <span class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="name" type="text" @keyup="nameError = ''" placeholder="Name" required>
                                <p class="text-red-600">{{ $t(nameError) }}</p>
                            </div>
                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                    <span class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="email" type="email" @keyup="emailError = ''" placeholder="Email" required>
                                <p class="text-red-600">{{ $t(emailError) }}</p>
                            </div>

                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                        class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="phone_number" type="text" @keyup="phoneNumberError = ''"
                                    placeholder="Phone number" required>
                                <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                            </div>

                            <!-- <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="pan_number" type="text" @keyup="panError = ''" placeholder="PAN number" required>
                            <p class="text-red-600">{{ $t(panError) }}</p>
                        </div> -->
                            <div class="mb-4">
                                <input type="checkbox" id="anonymous" v-model="anonymous">
                                <label for="checkbox" class="text-sm pl-2">{{ $t('Make my donation anonymous') }}</label>
                            </div>

                            <div class="mb-4">
                                <div class="flex justify-center">
                                    <div class="text-[#40b751] text-lg font-bold ml-5">{{ i_qty }} {{ $t('Item(s)') }} |</div>
                                    <div class="text-[#40b751] text-lg font-bold ml-2">₹ {{ numberWithCommas(total_price) }}</div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button
                                    class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                                    type="button" @click="donate_dialog_c(total_price, anonymous)"> {{ $t('Continue To Pay') }}
                                </button>
                            </div>                           
                        </div>
                    </div>    
        </template>
    </Dialog>





    <!-- <div>item_cart{{ item_cart }}</div><br> -->
    <!-- {{ a }} -->

    <!-- <input type="text" v-model="name"/>
    <button @click="get_cookies(name)">get</button><br>
    <button @click="delete_cookies('item')">del</button><br>
    <button @click="set_cookies()">set</button><br>  -->
    <!-- {{ item_cart }} -->
    <Footer />
</template>

<script>
// import { ContentMatch } from 'prosemirror-model';
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import { Avatar } from 'frappe-ui'
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { Dialog } from 'frappe-ui'
import { createConditionalExpression } from '@vue/compiler-core';
import { computeStyles } from '@popperjs/core';
// import DonationDetail from "../components/DonationDetail.vue";
import DonationCheckout from "../components/DonationCheckout.vue";

import VueMeta from 'vue-meta';


// import Razorpay from 'razorpay';
// const rzp = new Razorpay({
//     key_id: 'rzp_test_Adc0DsR6E8VV3t',
//     key_secret: 'qxawCeu9WJSdW4XjEK8vqzWO'
// });

export default {
    name: "CampaignDonation",
    components: {
        // DonationDetail,
        // DonationDetailRightside
        Navbar,
        Footer,
        Avatar,
        Dialog,
        DonationCheckout,
    },
    // watch: {
    //     $route: {
    //         immediate: true,
    //         handler(to, from) {
    //             document.title = to.meta.title || 'Some Default Title';
    //             console.log("asdf", to.meta.metaTags[0].name)
    //             to.meta.metaTags[0].name = 'asdfasf'
    //             console.log("asdfasf")
                
    //         }
    //     },
    // },
    // metaInfo: {
    //   title: 'My Example App',
    //   titleTemplate: '%s - Yay!',
    //   htmlAttrs: {
    //     lang: 'en',
    //     amp: true
    //   }
    // },
    // metaInfo: {
    //   // if no subcomponents specify a metaInfo.title, this title will be used
    //   title: 'Default Title',
    //   // all titles will be injected into this template
    //   titleTemplate: null
    // },
    setup() {
        const user = inject("user")
        const cookie = Object.fromEntries(
            document.cookie
                .split("; ")
                .map((part) => part.split("="))
                .map((d) => [d[0], decodeURIComponent(d[1])])
        )
        return {
            user,
            cookie,
        }
    },
    data() {
        return {
            campaign_detail: '',
            openTab: 1,
            recent_donation: '',
            most_generous: '',
            campaign: '',
            tab2: 'this is tab two content',
            a: 70,
            date: '',

            i_qty: 0,
            item_cart: [],
            total_price: 0,
            item_b: [],

            name: '',
            b: '',

            anonymous: false,
            showDialog: false,
            donated_amount: '',
            donation_name: '',
            loaded: false,
            total_donors: '',
            campaign_days: 0,
            campaign_end_date: '',
            campaign_start_date: '',
            descToShow: 1,
            total_desc: 0,

            lang: '',
            showCheckout: false,
            user: '',
            anonymous_c: '',
            user_c: '',
            isLoggedIn: false,

            url: window.location.href,

            showDialog_c: false,    
            nameError: '',
            emailError: '',
            phoneNumberError: '',
            panError: '',
            pan_number: '',
            error: false,

            email: '',
            name: '',
            phone_number: '',
            
        }
    },
    created() {
        const name = useRoute();
        this.campaign = name.params.name
        // const para = document.createElement("p");
        // para.innerText = "This is a paragraph";
        // document.head.appendChild(para)

        // document.title = 'campaign details' +' '+ name.params.name
        // this.$route.meta.title = 'asdfadsf'
        // this.$route.meta.title = 'asdf'
        // this.metaTitle = 'adsf'

        this.get_campaign_donation_detail(name.params.name)
        this.get_recent_donation(name.params.name)
        this.get_generous_donation(name.params.name)
        var item_cart = this.get_cookies('item')
        var i_qty = this.get_cookies('i_qty')
        var total_price = this.get_cookies('total_price')
        var item_b = this.get_cookies('item_b')
        if (item_cart != null) {
            this.item_cart = item_cart
        }
        if (i_qty != null) {
            this.i_qty = parseInt(i_qty)
        }
        if (total_price != null) {
            this.total_price = parseInt(total_price)
        }
        if (item_b != null) {
            this.item_b = item_b
        }

        if (this.user.isLoggedIn()) {
            this.isLoggedIn = true
        }
        // console.log("a", a)
    },
    mounted() {
        this.lang = localStorage.getItem('lang') || window.navigator.language
        // var a = this.get_cookies('item')
        // console.log("a", a)
        // const timeDiff = Math.abs(this.campaign_end_date.getTime() - this.campaign_start_date.getTime());
        // this.campaign_days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    // computed: {
    //     // most_generous() {
    //     // return this.most_generous.sort((a, b) => b.amount - a.amount);
    //     // }
    // },
    resources: {
        // get_campaign_donation_detail(){
        //     return{
        //         // method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaign_detail',
        //         method: "api/resource/Donation Campaign/GIVE-TH-16-01-2023-0001",
        //         onSuccess: (res) => {
        //             console.log(res)
        //             this.campaign_detail = res
        //         },
        //         onError: (error) => {
        //             console.log(error)
        //         }
        //     }
        // },

        download_80g() {
            return {
                method: 'sadbhavna_donatekart.api.donor.download_80g',
                onSuccess: (res) => {
                    // console.log('okey', res)
                    if (res == 'Please set pan number in your profile')
                    {
                        this.$toast({
                            title: 'Please add Pan Number',
                            text: 'please add pan number in edit profile to get 80g certificate',
                            icon: 'x-circle',
                            appearance: 'denger',
                            position: "top-center",
                            })
                    }
                    else{
                        let url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${res}&format=80G Certificate for Donation`
                        // window.location = url
                        window.open(url, "_blank");
                    }
                },
                onError: (error) => {
                    console.log('somthing want wrong!', error)
                },
            }
        },

        get_recent_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.get_recent_donation",
                onSuccess: (res) => {
                    this.recent_donation = res
                    this.total_donors = res.length
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        },
        get_generous_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.get_generous_donation",
                onSuccess: (res) => {
                    this.most_generous = res
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        },
        set_donor_for_donate_checkout() {
            return {
                method: "sadbhavna_donatekart.api.donor.create_donor_from_checkout",
                onSuccess: (res) => {
                    this.showCheckout = false
                    this.donate_c(this.total_price, this.anonymous_c, res[0], res[1], res[2])
                },
                onError: (error) => {
                    // alert("Something Want Wrong!", error)
                    this.$toast({
                        title: "Error",
                        text: error,
                        icon: "x-circle",
                        appearance: "denger",
                        position: "top-center",
                    })
                }
            }
        },
        set_details_in_doctype_after_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.set_details_in_doctype_after_donation",
                onSuccess: (res) => {
                    this.item_cart = []
                    this.total_price = 0
                    this.qty = 0
                    //    console.log("res", res)
                    // this.$toast({
                    //     title: "Success",
                    //     text: `Your donation of ${d_amount} is successfull, check profile for more details`,
                    //     customIcon: "check",
                    // })
                    this.donated_amount = res[0]
                    this.donation_name = res[1]
                    this.delete_cookies('item')
                    this.delete_cookies('item_b')
                    this.delete_cookies('i_qty')
                    this.delete_cookies('total_price')
                    this.showDialog = true

                    // this.$router.push(`/bestdeed/donation-success-page/${d_amount}`)
                    // alert("your donation is successfull")
                },
                onError: (error) => {
                    // alert("Something Want Wrong!", error)
                    this.$toast({
                        title: "Error",
                        text: error,
                        icon: "x-circle",
                        appearance: "denger",
                        position: "top-center",
                    })
                }
            }
        },

    },
    methods: {
        copyURL() {
            const url = window.location.href
            navigator.clipboard.writeText(url)
            this.$toast({
                title: "Link copied",
                text: "Link is copied to your clipboard.",
                icon: "smile",
                appearance: "denger",
                position: "top-center"
            })
        },
        donate_now() {
            this.$toast({
                title: "Please Add Item",
                text: "Please Select Item To Donate",
                icon: "smile",
                appearance: "denger",
                position: "top-center"
            })
        },
        delete_cookies(name) {
            this.$cookies.remove(name, `/bestdeed/campaign-donation/${this.campaign}`);
        },
        get_cookies(name) {
            // console.log("cookies", name, this.$cookies.get(name))
            return this.$cookies.get(name)
        },
        set_cookies(name, value) {
            // VueCookies.set('myCookie', '123', '1d', '/THE-ELE-16-01-2023-0001')
            // console.log("campaign", this.campaign)
            this.$cookies.set(name, value, "60 + 30", `/bestdeed/campaign-donation/${this.campaign}`);
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        },
        numberWithCommas(x) {
            return x.toLocaleString();
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        get_campaign_donation_detail(name) {
            let url = "/api/resource/Donation Campaign/" + name
            fetch(url, {
                method: 'GET',
            })
                .then(response => {
                    response.json().then(res => {
                        console.log("donation", res)
                        this.campaign_detail = res
                        this.total_desc = res.data.description.length
                        // this.campaign_start_date = new Date(res.data.start_date)
                        var today = new Date()
                        this.campaign_end_date = new Date(res.data.end_date)
                        const timeDiff = this.campaign_end_date.getTime() - today.getTime();
                        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        this.campaign_days = daysDiff;

                        if(this.lang == 'gu' && res.data.campaign_title_gu)
                        {
                            document.title = res.data.campaign_title_gu + " | " + this.$t('BestDeed') 
                        }
                        else if (this.lang == 'hi' && res.data.campaign_title_hi){
                            document.title = res.data.campaign_title_hi + " | " + this.$t('BestDeed') 
                        }
                        else{
                            document.title = res.data.campaign_title + " | " + this.$t('BestDeed')
                        }

                        var meta = document.createElement('meta');
                        meta.name = 'keywords';
                        meta.content = "donation,charity,crowdfunding,fundraising,donate online,donate online to charity,donations for nonprofits,donation websites for nonprofit,donate online india";
                        document.head.appendChild(meta);

                        var meta = document.createElement('meta');
                        meta.name = "description";
                        if (this.lang == 'gu' && res.data.short_description_gu)
                        {
                            meta.content = res.data.short_description_gu
                        }
                        else if (this.lang == 'hi' && res.data.short_description_hi)
                        {
                            meta.content = res.data.short_description_hi
                        }
                        else{
                            meta.content = res.data.short_description
                        }
                        document.head.appendChild(meta);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:type');
                        meta1.content = 'Website';
                        document.head.appendChild(meta1);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:title');
                        if(this.lang == 'gu' && res.data.campaign_title_gu)
                        {
                            meta1.content = res.data.campaign_title_gu; 
                        }
                        else if (this.lang == 'hi' && res.data.campaign_title_hi){
                            meta1.content = res.data.campaign_title_hi;
                        }
                        else{
                            meta1.content = res.data.campaign_title;
                        }                        
                        document.head.appendChild(meta1);


                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:description');
                        if (this.lang == 'gu' && res.data.short_description_gu)
                        {
                            meta1.content = res.data.short_description_gu
                        }
                        else if (this.lang == 'hi' && res.data.short_description_hi)
                        {
                            meta1.content = res.data.short_description_hi
                        }
                        else{
                            meta1.content = res.data.short_description
                        }
                        document.head.appendChild(meta1);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:image');
                        meta1.content = window.origin + res.data.campain_image;
                        document.head.appendChild(meta1);
                        
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_recent_donation(name) {
            // let url = `/api/resource/Donation?filters={[['campaign': ${name}], ['anonymous': 0]]}`
            // axios.get(url).then((response) => {
            //   this.recent_donation = response.data['data']
            // }).catch(function (error){
            //   console.log(error);
            // })
            this.$resources.get_recent_donation.submit({
                name: name
            })
        },
        get_generous_donation(name) {
            this.$resources.get_generous_donation.submit({
                name: name
            })
        },
        donate(total_price, anonymous) {
            console.log("donate called")
            if (!this.user.isLoggedIn()) {
                console.log("okey")
                this.showDialog_c = true
                this.$cookies.set('route', `/bestdeed/campaign-donation/${this.campaign}`);
                // this.$router.push(`/bestdeed/donation-checkout`)
                // return
            }
            else {
                // call razor pay api
                // rzp.open(options)
                var options = {
                    "key": "rzp_test_Adc0DsR6E8VV3t", // Enter the Key ID generated from the Dashboard
                    "amount": total_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "BestDeed",
                    "description": "Test Transaction",
                    "image": "https://crowdfunding.frappe.cloud/files/logo-1.1.ico",
                    // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    handler: (response) => {
                        this.set_details_in_doctype_after_donation(total_price, anonymous, response.razorpay_payment_id)

                        // this.verifySignature(response);
                    },
                    // "handler": function (response){

                    // },
                    "prefill": {
                        "name": `${this.cookie.full_name}`,
                        "email": `${this.cookie.user_id}`,
                        "contact": `${this.cookie.number || 8989898989}`
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#40b751"
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                });
                rzp1.open();

                // ************************main code************************

                // this.$router.push(`/bestdeed/donate/${name}&${price}`)
            }
        },
        donate_checkout(anonymous, f_name, email, phone_number) {
            localStorage.setItem('anonymous', anonymous)
            localStorage.setItem('user', email)
            this.anonymous_c = anonymous
            this.user_c = email
            this.$resources.set_donor_for_donate_checkout.submit({
                f_name: f_name,
                email: email,
                phone_number: phone_number
            })

        },
        donate_c(total_price, anonymous, f_name, email, phone) {
            // call razor pay api
            // rzp.open(options)
            var options = {
                "key": "rzp_test_Adc0DsR6E8VV3t", // Enter the Key ID generated from the Dashboard
                "amount": total_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "BestDeed",
                "description": "Test Transaction",
                "image": "https://crowdfunding.frappe.cloud/files/logo-1.1.ico",
                // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: (response) => {
                    this.set_details_in_doctype_after_donation(total_price, anonymous, response.razorpay_payment_id)

                    // this.verifySignature(response);
                },
                // "handler": function (response){

                // },
                "prefill": {
                    "name": `${f_name}`,
                    "email": `${email}`,
                    "contact": `${phone}`,
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#40b751"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            rzp1.open();
        },
        set_details_in_doctype_after_donation(total_price, anonymous, payment_id) {
            this.$resources.set_details_in_doctype_after_donation.submit({
                user_id: this.user_c != '' ? this.user_c : this.cookie.user_id,
                campaign: this.campaign,
                item: this.item_cart,
                amount: total_price,
                payment_id: payment_id,
                anonymous: anonymous == true ? 1 : 0
            })
            // this.$resources.set_details_in_doctype_after_donation.submit({
            //     user_id: cookie.user_id,
            //     campaign: this.campaign,
            //     item: this.item_cart,
            //     amount: this.total_price,
            //     payment_id: response.razorpay_payment_id,
            //     anonymous: this.anonymous == true ? 1 : 0
            // })
        },

        download_80g(donation_name) {
            this.$resources.download_80g.submit({
                donor: this.user_c != '' ? this.user_c : this.cookie.user_id,
                donation: donation_name,
            })
        },
        view_profile() {
            if (this.user_c != '') {
                this.$router.push(`/bestdeed/profile/${this.user_c}`)
            }
            else {
                this.$router.push(`/bestdeed/profile/${this.cookie.user_id}`)
            }
        },
        cancel() {
            this.$router.push('/bestdeed')
        },

        increment(item, rate, qty = 1, p_qty, p_c_qty) {
            if (qty) {
                let qty1 = 0
                this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        qty1 = elm.qty
                    }
                    // else {
                    //     qty1 = 0
                    // }
                });
                let amount = rate * (qty1 + 1)
                console.log("pqty", p_qty)
                console.log("p_cqty", p_c_qty)

                var remining_item = p_qty - p_c_qty
                if (!remining_item) {
                    remining_item = p_qty
                }

                if (remining_item == qty1) {
                    this.$toast({
                        title: "Not Allow",
                        text: "You can`t add this item, add another item.",
                        icon: "x-circle",
                        appearance: "denger",
                        position: "top-center",
                        iconClasses: 'text-red-500',
                    })
                }
                else {
                    this.i_qty += 1
                    this.set_cookies("i_qty", this.i_qty)
                    if (!this.item_b.includes(item)) {
                        this.item_b.push(item)
                        this.set_cookies("item_b", this.item_b)
                    }
                    var check = this.item_cart.filter(function (elm) {
                        if (elm.item == item) {
                            return elm;
                        }
                    });
                    if (check.length > 0) {
                        let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                        this.item_cart.splice(i, 1)
                        this.item_cart.push({ item: item, rate: rate, qty: qty1 + 1, amount: amount })
                        // this.get_total_price()
                        this.total_price += rate
                        this.set_cookies("item", this.item_cart)
                        this.set_cookies("total_price", this.total_price)
                        qty1 = 0
                    }
                    else {
                        this.item_cart.push({ item: item, rate: rate, qty: qty1 + 1, amount: amount })
                        this.total_price += rate
                        this.set_cookies("item", this.item_cart)
                        this.set_cookies("total_price", this.total_price)
                        qty1 = 0
                    }
                }
            }
        },

        decrement(item, rate) {
            this.i_qty -= 1
            this.set_cookies("i_qty", this.i_qty)
            let qty1 = 0
            this.item_cart.filter(function (elm) {
                if (elm.item == item) {
                    qty1 = elm.qty
                }
                // else {
                //     qty1 = 0
                // }
            });
            let amount = rate * (qty1 - 1)

            var check = this.item_cart.filter(function (elm) {
                if (elm.item == item) {
                    return elm;
                }
            });

            if (check.length > 0) {
                let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                this.item_cart.splice(i, 1)
                this.item_cart.push({ item: item, rate: rate, qty: qty1 - 1, amount: amount })
                this.total_price -= rate
                this.set_cookies("item", this.item_cart)
                this.set_cookies("total_price", this.total_price)

                if (qty1 == 1) {
                    var check = this.item_cart.filter(function (elm) {
                        if (elm.item == item) {
                            return elm;
                        }
                    });
                    if (check.length > 0) {
                        let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                        this.item_cart.splice(i, 1)
                        let a = this.item_b.indexOf(item);
                        this.item_b.splice(a, 1)
                        this.set_cookies("item", this.item_cart)
                        this.set_cookies("item_b", this.item_b)
                    }
                }
            }
            // else {
            //     this.item_cart.push({ item: item, rate: rate, qty: qty1 - 1, amount: amount })
            //     this.total_price -= rate
            // }
        },

        phone(){
            alert("clicked")
        },

        donate_dialog_c(){
            var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var phone = /^[6-9]\d{9}$/;
            // var pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            if (this.name == '') {
                this.nameError = 'Enter your name'
            }
            if (this.email == '') {
                this.emailError = 'Enter email'
            }
            else if (email.test(this.email) == false && this.email) {
                this.emailError = 'Enter valid email'
                console.log('email')
            }
            if (this.phone_number == '') {
                this.phoneNumberError = 'Enter phone'
            }
            else if (this.phone_number && phone.test(this.phone_number) == false) {
                this.phoneNumberError = 'Enter valid phone number'
                console.log('phone')
            }
            // if (this.pan_number == '') {
            //     this.panError = 'Enter PAN number'
            // }
            // else if (this.pan_number && pan.test(this.pan_number) == false) {
            //     this.panError = 'Enter valid PAN number'
            //     console.log('PAN')
            // }
            else {
                console.log('done')
                this.donate_checkout(this.anonymous, this.name, this.email, this.phone_number)
                
            }
        }

    }
}
</script>