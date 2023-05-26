<template>
    <div class="bg-[#ebf8ec] bg-auto w-full h-full bg-local bg-center bg-cover">
        <Navbar />
        <div class="grid justify-items-center">
            <div class="py-5">
                <h1 style="text-shadow:3px 6px 6px #c9c9c9;"
                    class="text-[#40b751] font-sans text-center font-semibold pb-1 text-[28px] md:text-[32px] lg:text-[43px] [text-shadow:3px 6px 6px #c9c9c9]">
                    {{ $t('Get In Touch') }}
                </h1>
            </div>
        </div>
    </div>



    <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div class="z-0 ">
            <img class="w-full h-auto object-cover bg-left">
        </div>
        <div class="col-span-2">
            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10 md:gap-10 sm:gap-0 layout">
                <div>
                    <div class="basis-auto w-full py-8">
                        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

                            <div class=" mr-2 mb-2">
                                <label class="block text-gray-700 text-sm mb-2" for="">
                                    {{ $t('First Name') }} <span class="text-red-600">*</span>
                                </label>
                                <input v-model="first_name" type="text" :placeholder="$t('Enter First Name')"
                                    @keyup="firstNameError = ''" ref="first_name"
                                    class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                                <p class="text-red-600">{{ $t(firstNameError) }}</p>
                            </div>

                            <div class="mb-2">
                                <label class="block text-gray-700 text-sm mb-2" for="">
                                    {{ $t('Last Name') }}
                                </label>
                                <input v-model="last_name" type="text" :placeholder="$t('Enter Last Name')"
                                    class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                            </div>
                        </div>
                        <div class="form-group mb-2">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Phone Number') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="phone" type="tel" :placeholder="$t('Enter Phone Number')"
                                @keyup="phoneError = ''"
                                class="form-control block placeholder-gray-400 hover:border-[#40b751] placeholder-gray-400 w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(phoneError) }}</p>
                        </div>
                        <div class="form-group mb-2">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Email') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="email_id" type="email" :placeholder="$t('Enter Email')" @keyup="emailError = ''"
                                class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(emailError) }}</p>
                        </div>

                        <div class="form-group mb-2">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Subject') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="subject" type="text" :placeholder="$t('Enter Subject')"
                                @keyup="subjectError = ''"
                                class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(subjectError) }}</p>
                        </div>

                        <div class="form-group mb-2">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Message') }}
                            </label>
                            <textarea v-model="message" :placeholder="$t('Enter Message')"
                                class="hover:border-[#40b751] placeholder-gray-400 form-control block w-full px-3 py-5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none"
                                rows="3"></textarea>
                        </div>

                        <button type="submit"
                            class=" px-6 py-2.5 bg-[#40b751] text-white text-xs leading-tight  uppercase rounded shadow-md hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                            @click="contact_us()">{{ $t('send message') }}
                        </button>
                    </div>
                </div>
                <div>
                    <div class="w-full py-6 pl-2">
                        <a href="https://goo.gl/maps/UcgCrVJMHpx3vd1v9" class="flex">
                            <div class="float-left  grid justify-items-center mr-2">
                                <img class="" src="../../src/assets/Inter/img/location-round-icon.svg" />
                            </div>
                            <p class="text-green-500 mb-2">
                                <span>{{ $t('Gondal Road,') }}</span><br>{{ $t('Opp Swami Narayan Gurukul,') }}<br>{{ $t('Near D-Mart Service Road') }}<br>{{ $t('Rajkot, Gujarat, 360004') }}
                            </p>
                        </a>
                        <a href="tel:+91 7043029467" class="pb-4 flex items-center">
                            <div class="float-left bg-center grid items-center mr-2">
                                <img class="" src="../assets/Inter/img/call-round-icon.svg" />
                            </div>
                            <p class="cursor-pointer text-[#40b751]">+91 7043029467</p>
                        </a>
                        <a href="mailto:bestdeed2023@gmail.com" class="pb-4 flex items-center">
                            <div class="float-left grid justify-items-center mr-2">
                                <img class="" src="../../src/assets/Inter/img/email-round-icon.svg" />
                            </div>
                            <p class="cursor-pointer text-[#40b751]">bestdeed2023@gmail.com</p>
                        </a>
                        <div class="flex">
                            <div class="float-left  grid justify-items-center mr-2">
                                <img class="" src="../../src/assets/Inter/img/bank-round-icon.svg" />
                            </div>
                            <p class="text-[#40b751]">
                                <span v-if="lang == 'gu'">
                                    નામ: માનવ સેવા ચેરીટેબલ ટ્રસ્ટ
                                    <br> બેંક: IDFC FIRST Bank
                                    <br> A/C નંબર: 10046308440
                                    <br> IFSC કોડ: IDFB0042421
                                    <br> શાખા: રાજકોટ
                                </span>
                                <span v-else-if="lang == 'hi'">
                                    नाम: मानव सेवा चैरिटेबल ट्रस्ट
                                    <br> बैंक: आईडीएफसी फर्स्ट बैंक
                                    <br> ए/सी नंबर: 10046308440
                                    <br> IFSC कोड: IDFB0042421
                                    <br> शाखा: राजकोट
                                </span>
                                <span v-else>
                                    Name: Manav Seva Charitable Trust
                                    <br> Bank: IDFC FIRST Bank
                                    <br> A/C No: 10046308440
                                    <br> IFSC Code: IDFB0042421
                                    <br> Branch: Rajkot
                                </span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid content-end z-0">
            <img class="w-full h-auto object-cover bg-right">
        </div>
    </div>

    <!-- 
    <div class="hidden md:hidden lg:block ">
        <div class="grid grid-cols-5">
            <div class="z-0 ">
                <img class="w-full h-auto object-cover" src="../assets/Inter/img/bg-left.png">
            </div>

            <div class="py-6 w-full col-span-3 z-10 grid grid-justify-items-center">
                <div class="flex flex-wrap">
                    <div class="basis-auto w-6/12 ">
                        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                            <div class=" mr-2 mb-6">
                                <label class="block text-gray-700 text-sm mb-2" for="">
                                    {{ $t('First Name') }} <span class="text-red-600">*</span>
                                </label>
                                <input v-model="first_name" type="text" placeholder="Enter First Name"
                                    @keyup="firstNameError = ''" ref="first_name"
                                    class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                                <p class="text-red-600">{{ $t(firstNameError) }}</p>
                            </div>

                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm mb-2" for="">
                                    {{ $t('Last Name') }}
                                </label>
                                <input v-model="last_name" type="text" placeholder="Enter Last Name"
                                    class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                            </div>
                        </div>
                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Phone Number') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="phone" type="tel" placeholder="Enter Phone Number" @keyup="phoneError = ''"
                                class="form-control block placeholder-gray-400 hover:border-[#40b751] placeholder-gray-400 w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(phoneError) }}</p>
                        </div>
                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Email') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="email_id" type="email" placeholder="Enter Email" @keyup="emailError = ''"
                                class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(emailError) }}</p>
                        </div>

                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Subject') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="subject" type="text" placeholder="Enter Subject" @keyup="subjectError = ''"
                                class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ $t(subjectError) }}</p>
                        </div>

                        <div class="form-group mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Message') }}
                            </label>
                            <textarea v-model="message" placeholder="Enter Message"
                                class="hover:border-[#40b751] placeholder-gray-400 form-control block w-full px-3 py-5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none"
                                rows="3"></textarea>
                        </div>

                        <button type="submit"
                            class=" px-6 py-2.5 bg-[#40b751] text-white text-xs leading-tight  uppercase rounded shadow-md hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                            @click="contact_us()">{{ $t('send message') }}
                        </button>
                    </div>
                    <div class="w-6/12 pl-[50px]">
                        <a href="https://goo.gl/maps/UcgCrVJMHpx3vd1v9" class="pb-4">
                            <div class="bg-zinc-100 mt-1 rounded-full w-10 h-10 float-left  grid justify-items-center ">
                                <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/location-round-icon.svg" />
                            </div>
                            <p class="text-green-500 mb-2 pl-14">
                                <span>{{ $t('Gondal Road,') }}</span><br>{{ $t('Opp Swami Narayan Gurukul,') }}<br>{{ $t('Near D-Mart Service Road') }}<br>{{ $t('Rajkot, Gujarat, 360004') }}
                            </p>
                        </a>
                        <a href="tel:+91 7043029467" class="pb-4">
                            <div class="bg-zinc-100 rounded-full w-10 h-10 float-left bg-center  grid justify-items-center">
                                <img class="p-1 mt-2 h-7" src="../assets/Inter/img/call-round-icon.svg" />
                            </div>
                            <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">+91 7043029467</p>
                        </a>
                        <a href="mailto:bestdeed2023@gmail.com" class="pb-4">
                            <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center">
                                <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/email-round-icon.svg" />
                            </div>
                            <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">bestdeed2023@gmail.com</p>
                        </a>
                        <p>
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center items-center">
                            <img class="p-2 h-9" src="../../src/assets/Inter/img/bank-round-icon.svg" />
                        </div>
                        <p class="text-[#40b751] mb-2 pl-14">Name: Manav Seva Charitable Trust <br>A/C No: 10046308440<br>
                            IFSC
                            Code: IDFB0042421<br> Branch: Rajkot</p>
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid content-end z-0 ">
                <img class="w-full h-auto object-cover" src="../assets/Inter/img/bg-right.png">
            </div>
        </div>
    </div> -->
    <!-- <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto mb-8 md:mb-2 lg:mb-2 w-full md:w-6/12 px-3 lg:px-6">
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                        <div class=" mr-2 mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('First Name') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="first_name" type="text" placeholder="Enter First Name"
                                @keyup="firstNameError = ''" ref="first_name"
                                class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                            <p class="text-red-600">{{ $t(firstNameError) }}</p>
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Last Name') }}
                            </label>
                            <input v-model="last_name" type="text" placeholder="Enter Last Name"
                                class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Phone Number') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="phone" type="tel" placeholder="Enter Phone Number" @keyup="phoneError = ''"
                            class="form-control block placeholder-gray-400 hover:border-[#40b751] placeholder-gray-400 w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(phoneError) }}</p>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Email') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="email_id" type="email" placeholder="Enter Email" @keyup="emailError = ''"
                            class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(emailError) }}</p>
                    </div>

                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Subject') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="subject" type="text" placeholder="Enter Subject" @keyup="subjectError = ''"
                            class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(subjectError) }}</p>
                    </div>

                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Message') }}
                        </label>
                        <textarea v-model="message" placeholder="Enter Message"
                            class="hover:border-[#40b751] placeholder-gray-400 form-control block w-full px-3 py-5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none"
                            rows="3"></textarea>
                    </div>

                    <button type="submit"
                        class=" px-6 py-2.5 bg-[#40b751] text-white text-xs leading-tight  uppercase rounded shadow-md hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                        @click="contact_us()">{{ $t('submit') }}
                    </button>
                </div>
                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 pl-0 md:pl-16 lg:pl-32">
                    <a href="https://goo.gl/maps/UcgCrVJMHpx3vd1v9" class="pb-4">
                        <div class="bg-zinc-100 mt-1 rounded-full w-10 h-10 float-left  grid justify-items-center ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/location.png" />
                        </div>
                        <p class="text-green-500 mb-2 pl-14">
                            <span>{{ $t('Gondal Road,') }}</span><br>{{ $t('Opp Swami Narayan Gurukul,') }}<br>{{ $t('Near D-Mart Service Road') }}<br>{{ $t('Rajkot, Gujarat, 360004') }}
                        </p>
                    </a>
                    <a href="tel:+91 7043029467" class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left bg-center  grid justify-items-center">
                            <img class="p-1 mt-2 h-7" src="../assets/Inter/img/icon/navbar_phone.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">+91 7043029467</p>
                    </a>
                    <a href="mailto:bestdeed2023@gmail.com" class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/email1.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">bestdeed2023@gmail.com</p>
                    </a>
                    <p>
                    <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center items-center">
                        <img class="p-2 h-9" src="../../src/assets/Inter/img/icon/bank-building.png" />
                    </div>
                    <p class="text-[#40b751] mb-2 pl-14">Name: Manav Seva Cheritable Trust <br>A/C No: 10046308440<br> IFSC
                        Code: IDFB0042421<br> Branch: Rajkot</p>
                    </p>
                </div>
            </div> -->

    <!-- </div> -->
    <!-- <div class="block md:block lg:hidden container my-10 px-6 mx-auto">
        <section class="text-gray-800">
            <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto mb-8 md:mb-2 lg:mb-2 w-full md:w-6/12 px-3 lg:px-6">
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div class=" mr-2 mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('First Name') }} <span class="text-red-600">*</span>
                            </label>
                            <input v-model="first_name" type="text" placeholder="Enter First Name"
                                @keyup="firstNameError = ''" ref="first_name"
                                class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                            <p class="text-red-600">{{ $t(firstNameError) }}</p>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="">
                                {{ $t('Last Name') }}
                            </label>
                            <input v-model="last_name" type="text" placeholder="Enter Last Name"
                                class="appearance-none placeholder-gray-400 border-gray-300  hover:border-[#40b751] focus:text-black focus:font-semibold  rounded w-full py-2 px-3 text-grey-darker">
                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Phone Number') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="phone" type="tel" placeholder="Enter Phone Number" @keyup="phoneError = ''"
                            class="form-control block placeholder-gray-400 hover:border-[#40b751] placeholder-gray-400 w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(phoneError) }}</p>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Email') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="email_id" type="email" placeholder="Enter Email" @keyup="emailError = ''"
                            class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(emailError) }}</p>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Subject') }} <span class="text-red-600">*</span>
                        </label>
                        <input v-model="subject" type="text" placeholder="Enter Subject" @keyup="subjectError = ''"
                            class="form-control placeholder-gray-400 block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ $t(subjectError) }}</p>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="">
                            {{ $t('Message') }}
                        </label>
                        <textarea v-model="message" placeholder="Enter Message"
                            class="hover:border-[#40b751] placeholder-gray-400 form-control block w-full px-3 py-5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:font-semibold focus:bg-white focus:border-indigo-600 focus:outline-none"
                            rows="3"></textarea>
                    </div>
                    <button type="submit"
                        class=" px-6 py-2.5 bg-[#40b751] text-white text-xs leading-tight  uppercase rounded shadow-md hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                        @click="contact_us()">{{ $t('send message') }}
                    </button>
                </div>
                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 pl-0 md:pl-16 lg:pl-32">
                    <a href="https://goo.gl/maps/UcgCrVJMHpx3vd1v9" class="pb-4">
                        <div class="bg-zinc-100 mt-1 rounded-full w-10 h-10 float-left  grid justify-items-center ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/location.png" />
                        </div>
                        <p class="text-green-500 mb-2 pl-14">
                            <span>{{ $t('Gondal Road,') }}</span><br>{{ $t('Opp Swami Narayan Gurukul,') }}<br>{{ $t('Near D-Mart Service Road') }}<br>{{ $t('Rajkot, Gujarat, 360004') }}
                        </p>
                    </a>
                    <a href="tel:+91 7043029467" class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left bg-center  grid justify-items-center">
                            <img class="p-1 mt-2 h-7" src="../assets/Inter/img/icon/navbar_phone.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">+91 7043029467</p>
                    </a>
                    <a href="mailto:bestdeed2023@gmail.com" class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/email1.png" />
                        </div>
                        <p class="cursor-pointer text-[#40b751] mb-4 pt-2 pl-14">bestdeed2023@gmail.com</p>
                    </a>
                    <p>
                    <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center items-center">
                        <img class="p-2 h-9" src="../../src/assets/Inter/img/icon/bank-building.png" />
                    </div>
                    <p class="text-[#40b751] mb-2 pl-14">Name: Manav Seva Charitable Trust <br>A/C No: 10046308440<br> IFSC
                        Code: IDFB0042421<br> Branch: Rajkot</p>
                    </p>
                </div>
            </div>
        </section>
    </div> -->
    <Dialog :options="{
        title: $t('Thank You For Contact'),
        message: $t('We Reach You Soon as possible'),
        size: 'sm',
        actions: [
            {
                label: $t('Okay'),
                appearance: 'success',
                handler: ({ close }) => {
                    this.$router.push('/')
                    close()
                },
            },
            { label: $t('Cancel') },
        ],
    }" v-model="showDialog" />
    <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { Dialog } from "frappe-ui";

export default {
    name: "Contact Us",
    components: { Navbar, Footer, Dialog },
    data() {
        return {
            first_name: '',
            firstNameError: '',
            last_name: '',
            email_id: '',
            emailError: '',
            subject: '',
            subjectError: '',
            message: '',
            phone: '',
            phoneError: '',
            // errorMessage: '',
            // error: false,
            // errors: false,
            showDialog: false
        }
    },
    // watch: {
    //     email_id(value) {
    //         this.email_id = value;
    //         this.validateEmail(value);
    //     }
    // },
    created() {
        document.title = this.$t("Contact Us | BestDeed")

        const linkElement = document.querySelector('link[rel="canonical"]');
        if (!linkElement) {
            var link = document.createElement('link');
            link.rel = 'canonical';
            link.href = "https://bestdeed.org/contact-us"
            document.head.appendChild(link);
        }
        else {
            linkElement.href = "https://bestdeed.org/contact-us"
            document.head.appendChild(linkElement)
        }
    },
    mounted() {
        this.$nextTick(() => this.$refs.first_name.focus())
    },
    resources: {
        contact_us() {
            return {
                method: 'sadbhavna_donatekart.api.contactus.contact_us',
                onSuccess: (res) => {
                    // if (confirm("Your message is successfully sent to bestdeed") == true) {
                    //     this.$router.push(`/`)
                    // } else {
                    //     this.$router.go(-1)
                    // }
                    this.showDialog = true
                },
                onError: (error) => {
                    this.$toast({
                        title: "Error",
                        text: error,
                        icon: "x-circle",
                        appearance: "denger",
                        position: "top-center",
                    })
                    console.log(error)
                }
                // onSuccess: (res) => {
                //     this.$toast({
                //         title: "Success",
                //         text: "Your message is successfully sent to bestdeed donatekart",
                //         customIcon: "check",
                //     })

                // },
                // onError: (error) => {
                //     console.log(error)
                //     this.$toast({
                //         title: "Error",
                //         text: error,
                //         customIcon: "circle-fail",
                //         appearance: "denger",
                //     })
                // }
            }
        }
    },
    methods: {
        // checkForm: function (e) {
        //     if (this.first_name && this.email_id) {
        //         return true;
        //     }

        //     this.error = [];
        //     if (!this.first_name) {
        //         this.error.push('First name required.');
        //     }
        //     if (!this.email_id) {
        //         this.error.push('Email required.');
        //     }

        //     e.preventDefault();
        // },



        // validEmail: function (email_id) {
        //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(email_id);
        // },

        // validName: function (first_name) {
        //     var re = /^[A-Za-z]+$/;
        //     return re.test(first_name)
        // },
        contact_us() {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var phone = /^[6-9][0-9]{9}$/;
            // if (this.first_name == '') {
            //     this.firstNameError = 'Please enter first name!'
            //     console.log('firstname')
            // }
            // if (this.email_id == '') {
            //     this.emailError = 'Please enter email!'
            //     console.log('email')
            // }
            // else if (re.test(this.email_id) == false) {
            //     this.emailError = 'Please enter valid email'
            //     console.log('valid mail')
            // }
            // if (this.subject == '') {
            //     this.subjectError = 'Please enter subject!'
            //     console.log('subject')
            // }
            // else {
            //     this.firstNameError = ''
            //     this.emailError = ''
            //     this.subjectError = ''
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            //     console.log('done')
            // }


            if (!this.first_name) {
                this.firstNameError = this.$t('Enter first name')

            }
            if (!this.subject) {
                this.subjectError = this.$t('Enter subject')

            }

            if (this.phone == '') {
                this.phoneError = this.$t('Enter phone number')
                console.log('phone number')
            }
            else if (this.phone && phone.test(this.phone) == false) {
                this.phoneError = this.$t('Enter valid phone number')
                console.log('phone')
            }
            if (!this.email_id) {
                this.emailError = this.$t('Enter email')

            }
            else if (re.test(this.email_id) == false) {

                this.emailError = this.$t('Enter valid email')

                console.log('email')
            }
            else {

                this.$resources.contact_us.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone: this.phone,
                    email_id: this.email_id,
                    subject: this.subject,
                    message: this.message,
                })
            }




            // if (!this.first_name || !this.email_id || !this.subject) {
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.emailError = 'Enter valid email!'
            //     this.subjectError = 'Enter valid subject!'
            //     this.error == true
            //     console.log('all')
            //     // return true;
            // }

            // else if (this.first_name == '') {
            //     // this.first_name == this.error
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.error = true
            //     console.log('firstname')
            // }
            // else if (this.email_id == '' || !this.validEmail(this.email_id)) {
            //     // this.email_id == this.error
            //     this.emailError = 'Enter valid email!'
            //     this.error = true
            //     console.log('email')
            // }
            // else if (this.subject == '') {
            //     // this.subject == this.error
            //     this.subjectError = 'Enter valid subject!'
            //     this.error = true
            //     console.log('subject')
            // }
            // // else if (this.error == true) {
            // //     console.log('error')
            // // }
            // else {
            //     console.log('done')
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            //     this.error == false
            // }

            // if (this.first_name && this.email_id && this.subject) {
            //     this.error == false
            //     return true;
            // }





            // this.error = [];
            // if (!this.first_name) {
            //     this.error.push('First name required.');
            //     this.error == true
            // }
            // if (!this.email_id) {
            //     this.error.push('Email required.');
            //     this.error == true
            // }
            // if (!this.subject) {
            //     this.error.push('Subject required');
            //     this.error == true
            // }
            // if (this.error == false) {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            // }




            // e.preventDefault();
            // if (this.first_name == '') {
            //     this.firstNameError = 'Invalid first name!'
            // }
            // if (this.email_id == '' || this.email_id == '') {
            //     this.emailError = 'Invalid email!'
            // }
            // if (this.subject == '') {
            //     this.subjectError = 'Invalid subject!'
            // }
            // else {
            //     alert("Message sent successfully")
            // }
            // /^[A-Za-z]+$/






            // if (!/^[a-zA-Z]*$/.test(first_name)) {
            //     this.firstNameError = ''
            // } else {
            //     this.firstNameError = 'Invalid first name!'
            // }

            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'Invalid email!'
            // }



            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'invalid'
            //     this.error = true
            //     console.log('email')
            // }

            // if (!this.email) {
            //     this.errors.push('Email required.');
            // } else if (!this.validEmail(this.email)) {
            //     this.errors.push('Valid email required.');
            // }
            // if (!this.first_name && !this.email_id && !this.subject) {
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.emailError = 'Enter valid email!'
            //     this.subjectError = 'Enter valid subject!'
            //     this.error == true
            //     // return true;
            // }



            // if (!this.first_name && !this.email_id && !this.subject) {
            //     this.firstNameError = 'Enter first name!'
            //     this.emailError = 'Enter valid email!'
            //     this.subjectError = 'Enter subject!'
            //     this.error == true
            //     // return true;
            // }
            // else if (this.first_name == '') {
            //     // this.first_name == this.error
            //     this.firstNameError = 'Enter first name!'
            //     this.error = true
            //     console.log('firstname')
            // }
            // else if (this.first_name) {
            //     // this.first_name == this.error
            //     this.firstNameError = ''
            //     this.error = false

            // }
            // else if (this.email == '' || !this.validEmail(this.email)) {
            //     // this.first_name == this.error
            //     this.emailError = 'Enter valid email!'
            //     this.error = true
            //     console.log('email')
            // }
            // else if (this.email || this.validEmail(this.email)) {
            //     // this.first_name == this.error
            //     this.emailError = ''
            //     this.error = false

            // }
            // else if (this.subject == '') {
            //     // this.first_name == this.error
            //     this.subjectError = 'Enter subject!'
            //     this.error = true
            //     console.log('subject')
            // }
            // else if (this.subject) {
            //     // this.first_name == this.error
            //     this.subjectError = ''
            //     this.error = false

            // }
            // else {
            //     console.log('done')
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            //     this.error == false

            // }
            // if (this.first_name == '') {
            //     // this.first_name == this.error
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.error = true
            //     console.log('firstname')
            // } else {
            //     this.firstNameError = ''
            //     this.error = false
            // }

            // if (this.email_id == '' || !this.validEmail(this.email_id)) {
            //     // this.email_id == this.error
            //     this.emailError = 'Enter valid email!'
            //     this.error = true
            //     console.log('email')
            // } else {
            //     this.emailError = ''
            //     this.error = false
            // }

            // if (this.subject == '') {
            //     // this.subject == this.error
            //     this.subjectError = 'Enter valid subject!'
            //     this.error = true
            //     console.log('subject')
            // } else {
            //     this.subjectError = ''
            //     this.error = false
            // }
            // // else if (this.error == true) {
            // //     console.log('error')
            // // }
            // if (this.error = true) {
            //     console.log('not done')

            // } else {
            //     console.log('done')
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })

            // }



            // if (this.first_name == this.error) {
            //     this.first_name == ''
            //     this.firstNameError = 'invalid'
            //     console.log('fnm')
            // }
            // if (this.email_id == this.error) {
            //     this.email_id == ''
            //     this.emailError = 'invalid'
            //     console.log('e-mail')
            // }
            // if (this.subject == this.error) {
            //     this.subject == ''
            //     this.subjectError = 'invalid'
            //     console.log('sub')
            // }
            // else {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            //     this.error = false
            //     console.log('done')
            // }


            // else {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            // }
            // this.submitForm()


        }

    }
}
</script>
<style>
.bg-left {
    content: url('../assets/Inter/img/bg-left.png');
}

@media (max-width:1023px) {
    .bg-left {
        display: none;
    }
}

.bg-right {
    content: url('../assets/Inter/img/bg-right.png');
}

@media (max-width:1023px) {
    .bg-right {
        display: none;
    }
}

@media (max-width:767px) {
    .layout {
        padding-left: 50px;
        padding-right: 50px;
    }
}

@media (max-width:338px) {
    .layout {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>