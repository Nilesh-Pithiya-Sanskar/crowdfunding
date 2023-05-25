<template>
    <Navbar />

    <section class="bg-[#eefeb1]">
        <div class="responsivesection container h-full mx-auto">
            <div
                class="grid grid-cols-12 gap-0 md:gap-12 lg:gap-10 xl:gap-24 py-[40px] md:py-[52px] lg:py-[80px] px-[24px] md:px-[0px] lg:px-[0px] xl:px-[0px]">
                <div class="col-span-12 md:col-span-5 lg:col-span-5">
                    <h1
                        class="text-[30px] md:text-[34px] xl:text-[36px] lg:text-[40px] font-extrabold text-[#40b751] leading-[3rem] md:leading-[3rem] lg:leading-[3rem] xl:leading-[3.5rem]">
                        {{ $t('How It Works!') }}</h1>
                    <div
                        class="mb-[14px] md:mb-[16px] lg:mb-[20px] text-[20px] md:text-[20px] lg:text-[25px] font-semibold text-[#3f4640] leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2rem]">
                        {{ $t('Simplifying the way crowdfunding campaigns operate!') }}</div>
                    <p
                        class="mb-[14px] md:mb-[16px] lg:mb-[20px]  text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#3f4640] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem]">
                        {{ $t('Best Deed wanted to help NGOs, charitable organizations and individuals across the globe while keeping the process simple and convenient.') }}
                    </p>
                    <p
                        class="mb-[14px] md:mb-[16px] lg:mb-[20px] text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#3f4640] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem]">
                        {{ $t('Best Deed is the leading crowdfunding platform with the motive to push the feeling of giving and contributing to making the world a better place to live in! We simplify the process of getting the necessities and volunteers through our platform.') }}
                    </p>
                    <p
                        class="text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#3f4640] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.5rem]">
                        {{ $t('With just a few simple steps, you can donate and start a campaign on our Platform.') }}</p>
                </div>

                <div class="flex content-center col-span-12 md:col-span-7 lg:col-span-7">
                    <img class="mt-10 md:mt-0 lg:mt-0 px-[20px] md:px-[0px] lg:px-[0px]" alt="How It Work"
                        src="../../src/assets/Inter/img/rightside.svg">
                </div>
            </div>
        </div>
    </section>
    <section class="container mx-auto">
        <p class="text-center text-[#40b751] font-black  text-[22px] md:text-[28px] lg:text-[33px] py-6">How Can I Donate ?
        </p>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-6 gap-8">
            <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto p-4 grid justify-items-center">
                <div class=" h-30 md:3/5 lg:h-3/5 w-3/5 md:w-[600px] lg:w-[460px] pr-4 ">
                    <img class="mx-auto" src="../assets/Inter/img/firstimagedonor.png">
                </div>
                <div class="">
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Select A Cause</p>
                    </div>
                    <p class="w-full">First things first, you need to choose the fundraiser and select the cause you would
                        like to support.
                        You
                        can even choose multiple campaigns as well as per your convenience. </p>
                </div>
            </div>

            <div class="flex-none md:flex lg:flex-auto p-4  grid justify-items-center">
                <div class="h-30 md:3/5 lg:h-3/5 w-1/2 px-4  ">
                    <img class="mx-auto" src="../assets/Inter/img/secondimagedonor1.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]"> Quick Filtering</p>
                    </div>
                    <p class="">After choosing the cause, you can even filter your preferences based on the
                        location and
                        launching
                        time.</p>
                </div>
            </div>

            <div class="flex-none md:flex lg:flex-auto  p-4  grid justify-items-center	">
                <div class="h-30 md:3/5 lg:h-3/5 w-1/2 px-4 ">
                    <img class="mx-auto" src="../assets/Inter/img/secondimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                        </div>

                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Making a decision</p>
                    </div>

                    <p> After filtering your preferences, you need to choose the products you want to donate for a
                        particular
                        cause.
                    </p>
                </div>

            </div>

            <div class="flex-none md:flex lg:flex-auto p-4  grid justify-items-center">
                <div class="h-30 md:3/5 lg:h-3/5 w-1/2 sm:px-4 md:px-0 lg:px-4 pb-2">
                    <img class="mx-auto" src="../assets/Inter/img/fourthimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">4</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Add The Essential Details
                        </p>
                    </div>

                    <p>Moving forward, you need to add essential
                        details such as your name, email id, and contact number.</p>
                </div>
            </div>

        </div>
        <div class="flex-none md:flex lg:flex-auto justify-center  grid justify-items-center sm:px-4 md:px-16 lg:px-64">
            <div class="h-30 md:3/5 lg:h-3/5  w-1/2 sm:pr-4 md:pr-8 lg:pr-4 sm:pl-4 md:pl-0 lg:pl-4">
                <img class="mx-auto" src="../assets/Inter/img/fifthimagedonor.png">
            </div>
            <div class="pl-4">
                <div class="flex flex-wrap pb-2">
                    <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                        <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">5</span>
                    </div>
                    <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Make A Payment
                    </p>
                </div>

                <p>After entering the required details, you can make the payment through your preferred payment method,
                    and
                    IT'S DONE!</p>
            </div>
        </div>

        <div>
            <p
                class="mt-5 md:mt-6 lg:mt-10 text-center font-black text-[#3f4640] text-[22px] md:text-[27px] lg:text-[30px]">
                How Can I Donate with Best Deed?
            </p>
            <div class="py-4 grid justify-items-center">
                <router-link to="/explore-campaigns" style="font-size: 16px; font-weight: 700;"
                    class="bg-[#40b751] px-6 py-2 text-white rounded-full hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                    Donate now!
                </router-link>
            </div>
        </div>

    </section>





    <section class="bg-[#f1fab4]">
        <div class="container mx-auto">
            <p class="text-center text-[#40b751] font-black text-[22px] md:text-[28px] lg:text-[33px] py-6">How Can I Start
                a Crowdfunding Campaign with
                Best
                Deeds?</p>
            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-6">
                <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto p-4 grid justify-items-center">
                    <div class="h-30 md:3/5 lg:h-3/5 w-1/2 pr-4 ">
                        <img class="mx-auto" src="../assets/Inter/img/imagefirstngo.png">
                    </div>
                    <div>
                        <div class="flex flex-wrap pb-2">
                            <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                                <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                            </div>
                            <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Fill Up The Details</p>
                        </div>
                        <p>To start a campaign on Best Deed; you need to fill up all the essential details. To start a
                            campaign,
                            click here, start a campaign.</p>
                    </div>
                </div>
                <div class="flex-none md:flex lg:flex-auto p-4 md:p-0 lg:p-4 grid justify-items-center">
                    <div class="h-30 md:3/5 lg:h-3/5 w-1/2 sm:px-4 md:px-0 lg:px-4 ">
                        <img class="mx-auto" src="../assets/Inter/img/imagesecondngo.png">
                    </div>
                    <div>
                        <div class="flex flex-wrap pb-2">
                            <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                                <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                            </div>
                            <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Verification
                            </p>
                        </div>
                        <p>
                            After getting all the details from your end, our team will verify everything before getting
                            started
                            with
                            your campaign.</p>
                    </div>
                </div>

                <div class="flex-none md:flex lg:flex-auto p-4 md:p-0 lg:p-4 grid justify-items-center	">
                    <div class="h-30 md:3/5 lg:h-3/5 lg:w-2/5 md:w-1/2 sm:w-1/2 sm:px-4 md:px-0 lg:px-4">
                        <img class="mx-auto" src="../assets/Inter/img/imagethirdngo.png">
                    </div>
                    <div class="md:-ml-5 sm:ml-0 lg:ml-0">
                        <div class="flex flex-wrap pb-2">
                            <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                                <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                            </div>

                            <p class="grid place-content-center pl-4 font-black text-[#3f4640]">It's LIVE</p>
                        </div>
                        <p>
                            If everything goes well, we will live your campaign with the story, your requirements, images,
                            and
                            videos.</p>
                    </div>
                </div>
                <div class="flex-none md:flex lg:flex-auto pr-4 pb-4 pt-4 pl-4 md:pl-12 lg:pl-0  grid justify-items-center">
                    <div
                        class="h-30 md:3/5 lg:h-3/5 lg:w-72 md:w-1/2 sm:w-1/2 sm:px-4 md:px-0 lg:px-4 pb-2 sm:ml-0 md:ml-8 lg:ml-0">
                        <img class="mx-auto" src="../assets/Inter/img/imagefourthngo.png">
                    </div>
                    <div class="sm:ml-0 md:ml-5 lg:ml-3">
                        <div class="flex flex-wrap pb-2">
                            <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                                <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">4</span>
                            </div>
                            <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Share It</p>
                        </div>
                        <p>
                            To get better support; you can easily share your campaign with your friends, family, colleagues,
                            and
                            even on social media directly from our dashboard.</p>
                    </div>
                </div>
            </div>
            <div class="flex-none md:flex lg:flex-auto justify-center  grid justify-items-center sm:px-4 md:px-16 lg:px-64">
                <div class="h-30 md:3/5 lg:h-3/5  w-1/2 sm:pr-4 md:pr-8 lg:pr-4 sm:pl-4 md:pl-0 lg:pl-4">
                    <img class="mx-auto" src="../assets/Inter/img/imagefifthngo.png">
                </div>
                <div class="ml-4 md:ml-0 lg:ml-0">
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#f1fab4] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">5</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Stay updated
                        </p>
                    </div>

                    <p>After the campaign is live, you can check out the amount, donors and other essentials with easy
                        updates
                        and
                        real-time alerts.</p>
                </div>
            </div>
        </div>
        <div>
            <p
                class="mt-5 md:mt-6 lg:mt-10 text-center font-black text-[#3f4640] text-[22px] md:text-[27px] lg:text-[30px]">
                Get started with your campaign

            </p>
            <p class=" text-center font-black text-[#3f4640] text-[22px] md:text-[27px] lg:text-[30px]">

                in just a few simple steps!
            </p>
            <div class="py-4 grid justify-items-center">
                <router-link to="/request-campaign" style="font-size: 16px; font-weight: 700;"
                    class="bg-[#40b751] px-6 py-2 text-white rounded-full hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                    Start now
                </router-link>
            </div>
        </div>
    </section>

    <!-- <section class="container mx-auto">
        <p class="text-center text-[#40b751] font-black text-[30px] py-6">How Can I Donate ? </p>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-6 gap-8">
            <div class="flex-none md:flex lg:flex-auto ">
                <div class="h-3/5 w-[460px] pr-4 ">
                    <img class="" src="../assets/Inter/img/firstimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Select A Cause</p>
                    </div>
                    <p>First things first, you need to choose the fundraiser and select the cause you would like to support.
                        You
                        can even choose multiple campaigns as well as per your convenience. </p>
                </div>
            </div>

            <div class="fflex-none md:flex lg:flex-auto">
                <div class="h-3/5 w-1/2 px-4">
                    <img class="" src="../assets/Inter/img/secondimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]"> Quick Filtering</p>
                    </div>
                    <p class="">After choosing the cause, you can even filter your preferences based on the
                        location and
                        launching
                        time.</p>
                </div>
            </div>

            <div class="flex-none md:flex lg:flex-auto">
                <div class="h-3/5 w-1/2 px-4">
                    <img class="" src="../assets/Inter/img/thirdimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap pb-2">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                        </div>

                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Making a decision</p>
                    </div>

                    <p> After filtering your preferences, you need to choose the products you want to donate for a
                        particular
                        cause.
                    </p>
                </div>

            </div>

            <div class="flex-none md:flex lg:flex-auto ">
                <div class="h-3/5 w-1/2 px-4 pb-2">
                    <img class="" src="../assets/Inter/img/fourthimagedonor.png">
                </div>
                <div>
                    <div class="flex flex-wrap">
                        <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">4</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Add The Essential Details
                        </p>
                    </div>

                    <p>Moving forward, you need to add essential
                        details such as your name, email id, and contact number.</p>
                </div>
            </div>

        </div>
        <div class="flex-none md:flex lg:flex-auto justify-center sm:px-0 md:px-48 lg:px-72">
            <div class="h-3/5 w-1/2  px-4 pb-2">
                <img class="" src="../assets/Inter/img/fourthimagedonor.png">
            </div>
            <div>
                <div class="flex flex-wrap">
                    <div class="relative border border-black w-8 h-8 text-xl font-bold bg-[#ebf8ec] rounded-full">
                        <span class="absolute top-0 left-2 transform -translate-x-1/2 -translate-y-1/2">5</span>
                    </div>
                    <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Make A Payment
                    </p>
                </div>

                <p>After entering the required details, you can make the payment through your preferred payment method,
                    and
                    IT'S DONE!</p>
            </div>
        </div>


    </section>


    <section class="bg-[#eefeb1]">
        <div class="container mx-auto">
            <p class="text-center text-[#40b751] font-black text-[30px] py-6">How Can I Start a Crowdfunding Campaign with
                Best
                Deeds?</p>
            <div class="grid grid-cols-2 py-6">
                <div>
                    <img src="../assets/Inter/img/imagefirstngo.png">
                    <div class="flex flex-wrap">
                        <div class="relative border border-black w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">1</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Fill Up The Details</p>
                    </div>
                    <p>To start a campaign on Best Deed; you need to fill up all the essential details. To start a campaign,
                        click here, start a campaign.</p>
                </div>
                <div>
                    <img src="../assets/Inter/img/imagesecondngo.png">
                    <div class="flex flex-wrap">
                        <div class="relative border border-black  w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">2</span>
                        </div>

                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Verification
                        </p>
                    </div>
                    <p>
                        After getting all the details from your end, our team will verify everything before getting started
                        with
                        your campaign.</p>
                </div>
                <div>
                    <img src="../assets/Inter/img/imagethirdngo.png">
                    <div class="flex flex-wrap">
                        <div class="relative border border-black w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">3</span>
                        </div>

                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">It's LIVE</p>
                    </div>
                    <p>
                        If everything goes well, we will live your campaign with the story, your requirements, images, and
                        videos.</p>
                </div>
                <div>
                    <img src="../assets/Inter/img/imagefourthngo.png">
                    <div class="flex flex-wrap">
                        <div class="relative border border-black w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full">
                            <span class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">4</span>
                        </div>
                        <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Share It</p>
                    </div>
                    <p>
                        To get better support; you can easily share your campaign with your friends, family, colleagues, and
                        even on social media directly from our dashboard.</p>
                </div>
            </div>
            <div class="grid place-content-center ">
                <img src="../assets/Inter/img/imagefifthngo.png">
                <div class="flex flex-wrap">
                    <div class="relative border border-black w-14 h-14 text-2xl font-bold bg-[#ebf8ec] rounded-full"><span
                            class="absolute top-3 left-5 transform -translate-x-1/2 -translate-y-1/2">5</span></div>
                    <p class="grid place-content-center pl-4 font-black text-[#3f4640]">Stay updated</p>
                </div>
                <p>
                    After the campaign is live, you can check out the amount, donors and other essentials with easy updates
                    and
                    real-time alerts.</p>
            </div>
        </div>
    </section> -->

    <!-- <section class="container mx-auto">
        <h1 class="ml-5 text-[#364958] font-bold text-3xl mt-5 mb-5">{{$t("How it Works!")}}</h1>

        <div class="flex flex-wrap">

             <div class="w-full md:w-8/12 sm:12/12 mr-auto px-4">
                <div class="md:pr-12">
                    
                </div>
            </div> -

            <div class="md:w-7/12 sm:w-full lg:w-7/12 mr-auto px-4">
                <p class="font-bold text-[#364958] text-xl mb-2 mt-1">{{$t("Simplifying the way crowdfunding campaigns operate!")}}</p>
                <p class="leading-relaxed text-slate-500">{{$t("For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, BestDeed works with a distinctive approach and helps streamline the crowdfunding environment.")}}</p>

                <p class="leading-relaxed text-slate-500 mt-3">{{$t("Whether it's your cause or one that you support, we'll assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs efficiently.")}}</p>

                <p class="leading-relaxed text-slate-500 mt-3">{{$t("With our one-of-a-kind platform that enables people all around the world to give towards goods required by NGOs, we have revolutionized the crowdfunding sector. We are working hard to change the world by connecting people together to have a lasting influence. We do this with the utmost trust, integrity, and compassion.")}}</p>
            </div>

            <div class="md:w-5/12 sm:w-full ml-auto mr-auto px-4 h-auto w-auto">
                <img alt="..." class="max-w-full rounded-lg lg:h-[20rem] md:h-[15rem] w-full mt-2"
                    src="../assets/Inter/img/how-it-works.jpg">
            </div>
        </div>
    </section> -->



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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Select the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter the details</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Select the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter the details</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Select the campaign")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Choose the products")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Enter the details")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("You did it!")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Start the campaign")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Enter all the information")}}
                            </p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Share it quickly")}}</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">{{$t("Withdraw Funds")}}</p>
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
    </section> -->


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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs">Select the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Choose the products</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs">Enter the details</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">You did it!</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Start the campaign</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Enter all the information
                            </p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Share it quickly</p>
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
                            <p class="text-xl font-semibold leading-normal md:max-w-xs ml-16">Withdraw Funds</p>
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
    data() {
        return {
            lang: this.get_language(),
        }
    },
    created() {
        document.title = this.$t("How you can Donate & Request a Campaign | BestDeed")
        const linkElement = document.querySelector('link[rel="canonical"]');
        if (!linkElement) {
            var link = document.createElement('link');
            link.rel = 'canonical';
            link.href = "https://bestdeed.org/how-it-works"
            document.head.appendChild(link);
        }
        else {
            linkElement.href = "https://bestdeed.org/how-it-works"
            document.head.appendChild(linkElement)
        }
    },

    mounted() {
        this.get_language()
    },
    methods: {
        get_language() {
            return this.$cookies.get('lang') || localStorage.getItem('lang')
        },
    }
}
</script>