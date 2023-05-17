<template>
    <Navbar />

    <section class="container mx-auto">
        <h1 class="ml-5 text-[#364958] font-bold text-3xl mt-5 mb-5">{{$t("How it Works!")}}</h1>

        <div class="flex flex-wrap">

            <!-- <div class="w-full md:w-8/12 sm:12/12 mr-auto px-4">
                <div class="md:pr-12">
                    
                </div>
            </div> -->

            <div class="md:w-7/12 sm:w-full lg:w-7/12 mr-auto px-4">
                <h3 class="font-bold text-[#364958] text-xl mb-2 mt-1">{{$t("Simplifying the way crowdfunding campaigns operate!")}}</h3>
                <p class="leading-relaxed text-slate-500">{{$t("For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, BestDeed works with a distinctive approach and helps streamline the crowdfunding environment.")}}</p>

                <p class="leading-relaxed text-slate-500 mt-3">{{$t("Whether it's your cause or one that you support, we'll assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs efficiently.")}}</p>

                <p class="leading-relaxed text-slate-500 mt-3">{{$t("With our one-of-a-kind platform that enables people all around the world to give towards goods required by NGOs, we have revolutionized the crowdfunding sector. We are working hard to change the world by connecting people together to have a lasting influence. We do this with the utmost trust, integrity, and compassion.")}}</p>
            </div>

            <div class="md:w-5/12 sm:w-full ml-auto mr-auto px-4 h-auto w-auto">
                <img alt="..." class="max-w-full rounded-lg lg:h-[20rem] md:h-[15rem] w-full mt-2"
                    src="../assets/Inter/img/how-it-works.jpg">
            </div>
        </div>
    </section>



    <!-- <section class="flex flex-wrap container mx-auto">
        <div class="md:w-6/12 sm:w-12/12 lg:w-6/12 pt-10 pb-16 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How can i donate?</h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Select the campaign</h3>
                            <p class="ml-16">For donation, firstly, you need to choose the campaign you would like to
                                contribute to. You can even select multiple campaigns as well.</p>
                        </div>

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</h3>
                            <p class="ml-16">After selecting the campaign and its requirements, you can choose the product
                                and quantity at your convenience.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter the details</h3>
                            <p class="ml-16">After choosing the product & its quantity, you have to enter essential details
                                such as your name, bank account details, and the products you want to contribute. </p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</h3>
                            <p class="ml-16"> After entering all the details, you need to click on donate, choose the
                                campaign and submit with utmost transparency & security. </p>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <router-link to="/explore-campaigns"
                            class="mt-16 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">Donate Now</router-link>
                    </div>

                </div>

            </div>
        </div>




        <div class="md:w-6/12 sm:w-12/12 lg:w-6/12 mt-10 pb-28 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How Can I Start Campaign With Best Deed? </h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</h3>
                            <p class="ml-16">You must sign up on our platform before you can begin the campaign. The process
                                will take just a few minutes and a few documents.</p>
                        </div>

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </h3>
                            <p class="ml-16">After registration, you must submit all the information about the project you
                                are raising money for and the necessary paperwork for verification before proceeding.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</h3>
                            <p class="ml-16">After filling out all the details, you only need to share the campaign with
                                your relatives and friends. Support will quickly begin to flow in. Even better, you can post
                                about your campaign on social media right from your dashboard.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</h3>
                            <p class="ml-16">Once the entire campaign is over, all the donated products will be delivered to
                                you in a matter of days.</p>
                        </div>

                    </div>
                    <div class="text-center mt-5">
                        <router-link to="/request-campaign"
                            class="mt-10 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"> Request a Campaign </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section> -->


    <!-- <section class="flex flex-wrap container mx-auto">
        <div class="md:w-12/12 sm:w-12/12 lg:w-12/12 pt-10 pb-16 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How can i donate?</h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Select the campaign</h3>
                            <p class="ml-16">For donation, firstly, you need to choose the campaign you would like to
                                contribute to. You can even select multiple campaigns as well.</p>
                        </div>

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</h3>
                            <p class="ml-16">After selecting the campaign and its requirements, you can choose the product
                                and quantity at your convenience.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter the details</h3>
                            <p class="ml-16">After choosing the product & its quantity, you have to enter essential details
                                such as your name, bank account details, and the products you want to contribute. </p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</h3>
                            <p class="ml-16"> After entering all the details, you need to click on donate, choose the
                                campaign and submit with utmost transparency & security. </p>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <router-link to="/explore-campaigns"
                            class="mt-16 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">Donate Now</router-link>
                    </div>

                </div>

            </div>
        </div>




        <div class="md:w-12/12 sm:w-12/12 lg:w-12/12 mt-10 pb-28 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How Can I Start Campaign With Best Deed? </h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</h3>
                            <p class="ml-16">You must sign up on our platform before you can begin the campaign. The process
                                will take just a few minutes and a few documents.</p>
                        </div>

                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </h3>
                            <p class="ml-16">After registration, you must submit all the information about the project you
                                are raising money for and the necessary paperwork for verification before proceeding.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</h3>
                            <p class="ml-16">After filling out all the details, you only need to share the campaign with
                                your relatives and friends. Support will quickly begin to flow in. Even better, you can post
                                about your campaign on social media right from your dashboard.</p>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/4 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</h3>
                            <p class="ml-16">Once the entire campaign is over, all the donated products will be delivered to
                                you in a matter of days.</p>
                        </div>

                    </div>
                    <div class="text-center mt-5">
                        <router-link to="/request-campaign"
                            class="mt-10 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"> Request a Campaign </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section> -->




    <section class="flex flex-wrap container mx-auto">
        <div class=" pt-10 pb-16 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                       {{$t("How can i donate?")}}</h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Select the campaign")}}</h3>
                            <p class="ml-16">{{$t("For donation, firstly, you need to choose the campaign you would like to contribute to. You can even select multiple campaigns as well.")}}</p>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Choose the products")}}</h3>
                            <p class="ml-16">{{$t('After selecting the campaign and its requirements, you can choose the product and quantity at your convenience.')}}</p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Enter the details")}}</h3>
                            <p class="ml-16">{{$t("After choosing the product & its quantity, you have to enter essential details such as your name, bank account details, and the products you want to contribute.")}} </p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("You did it!")}}</h3>
                            <p class="ml-16"> {{$t("After entering all the details, you need to click on donate, choose the campaign and submit with utmost transparency & security.")}} </p>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <router-link to="/explore-campaigns"
                            class="mt-16 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">{{$t("Donate Now")}}</router-link>
                    </div>

                </div>

            </div>
        </div>




        <div class="pb-28 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        {{$t("How Can I Start Campaign With Best Deed?")}} </h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading  bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Start the campaign")}}</h3>
                            <p class="ml-16">{{$t("You must sign up on our platform before you can begin the campaign. The process will take just a few minutes and a few documents.")}}</p>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Enter all the information")}}
                            </h3>
                            <p class="ml-16">{{$t("After registration, you must submit all the information about the project you are raising money for and the necessary paperwork for verification before proceeding.")}}</p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Share it quickly")}}</h3>
                            <p class="ml-16">{{$t("After filling out all the details, you only need to share the campaign with your relatives and friends. Support will quickly begin to flow in. Even better, you can post about your campaign on social media right from your dashboard.")}}</p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Withdraw Funds")}}</h3>
                            <p class="ml-16">{{$t("Once the entire campaign is over, all the donated products will be delivered to you in a matter of days.")}}</p>
                        </div>

                    </div>
                    <div class="text-center mt-5">
                        <router-link to="/request-campaign"
                            class="mt-10 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"> {{$t("Request a Campaign")}} </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- <section class="flex flex-wrap container mx-auto">
        <div class=" pt-10 pb-16 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How can i donate?</h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="md:w-7/12 lg:w-7/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Select the campaign</h3>
                            <p class="mr-16">For donation, firstly, you need to choose the campaign you would like to
                                contribute to. You can even select multiple campaigns as well.</p>
                        </div>
                        
                        <div class="md:w-5/12 lg:w-5/12 p-5 pb-0"></div>
                        <div class="md:w-6/12 lg:w-6/12 p-5 pb-0"></div>

                        <div class="md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</h3>
                            <p class="ml-16">After selecting the campaign and its requirements, you can choose the product
                                and quantity at your convenience.</p>
                        </div>
                        <div class="md:w-7/12 lg:w-7/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center mb-2 -m-2">
                               
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs">Enter the details</h3>
                            <p class="mr-16">After choosing the product & its quantity, you have to enter essential details
                                such as your name, bank account details, and the products you want to contribute. </p>
                        </div>
                        <div class="md:w-5/12 lg:w-5/12 p-5 pb-0"></div>
                        <div class="md:w-6/12 lg:w-6/12 p-5 pb-0"></div>
                        <div class="md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</h3>
                            <p class="ml-16"> After entering all the details, you need to click on donate, choose the
                                campaign and submit with utmost transparency & security. </p>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <router-link to="/explore-campaigns"
                            class="mt-16 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">Donate Now</router-link>
                    </div>

                </div>

            </div>
        </div>




        <div class="pb-28 bg-white overflow-hidden">
            <div class="px-4">
                <div class="">
                    <h2 class="mb-5 text-2xl font-bold font-heading tracking-px-n leading-tight text-[#364958]">
                        How Can I Start Campaign With Best Deed? </h2>
                    <div class="flex flex-wrap -m-8">

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading  bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</h3>
                            <p class="ml-16">You must sign up on our platform before you can begin the campaign. The process
                                will take just a few minutes and a few documents.</p>
                        </div>

                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div class="relative w-14 h-14 text-2xl font-bold bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </h3>
                            <p class="ml-16">After registration, you must submit all the information about the project you
                                are raising money for and the necessary paperwork for verification before proceeding.</p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</h3>
                            <p class="ml-16">After filling out all the details, you only need to share the campaign with
                                your relatives and friends. Support will quickly begin to flow in. Even better, you can post
                                about your campaign on social media right from your dashboard.</p>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-6/12 p-5 pb-0">
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-auto p-2">
                                    <div
                                        class="relative w-14 h-14 text-2xl font-bold font-heading bg-[#ebf8ec] rounded-full">
                                        <span
                                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                                    </div>
                                </div>
                                <div class="flex-1 p-2">
                                    <div class="w-full h-px bg-gray-200"></div>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</h3>
                            <p class="ml-16">Once the entire campaign is over, all the donated products will be delivered to
                                you in a matter of days.</p>
                        </div>

                    </div>
                    <div class="text-center mt-5">
                        <router-link to="/request-campaign"
                            class="mt-10 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-0 lg:px-6 py-2 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"> Request a Campaign </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section> -->


    <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
    name: 'How It Works',
    components: {
        Navbar,
        Footer,
    },
    created() {
        document.title = this.$t("How It Works | Trusted and 100% Transparent Online Crowdfunding Platform | BestDeed")
        var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://bestdeed.org/how-it-works"
    document.head.appendChild(link);
    }
}
</script>