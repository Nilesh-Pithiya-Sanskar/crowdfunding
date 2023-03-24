<template>
<!-- <DonationCheckout/> -->

    <div class="top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover"
        style="background-image: url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')">
        <Navbar />
        <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <p class="text-[30px] md:text-[36px] lg:text-[48px] sm:pr-10 md:pr-20 lg:pr-12 xl:pr-16  mb-32 text-center md:text-center md:text-base lg:text-left pt-20 font-[700] text-[#364958] leading-none"
                style="text-shadow:3px 6px 6px #c9c9c9;">
                Join hands with <span class="text-[#40b751]"> Sadbhana Campaigns </span> to help needy.</p>
        </div>
    </div>
    <div class="container mx-auto mt-[40px] md:mt-[40px] lg:mt-[80px]">
        <div v-if="campaign_detail" class="px-[14px] md:px-0 lg:px-0">
            <!-- {{ campaign_detail }}  -->
            <h2 style="font-size: 2rem; font-weight: 700;"
                class="mb-4 leading-10 md:leading-0 lg:heading-12 mb-1.5 text-[#364958] capitalize">{{
                    campaign_detail.data.campaign_title }}</h2>
            <p style="line-height:1.7;" class="mb-4 text-base text-[#364958] font-normal">{{
                campaign_detail.data.short_description }}</p>
           <div class="mb-[50px]">
                 <span class="bg-[#40b751] mr-[4px] capitalize text-white  py-[7px] px-[18px] md:px-[20px] lg:px-[20px] rounded-[10px]">Tax
                    Benefit</span>
                <span class="bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px]  rounded-[10px]"> Assured</span>
                <span class="bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px]  rounded-[10px]">Old Ages</span>
            </div>
            <div class="flex flex-wrap mt-6 mb-5">
                <div class="w-full lg:w-8/12 pr-4">
                    <!-- <DonationDetail /> -->
                    <img class="object-fill w-full mb-4" :src="campaign_detail.data.campain_image">
                    <div class="w-full h-[16px] bg-gray-200 rounded-md dark:bg-gray-700">
                        <!-- <div class="bg-green-500 text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md" style="width: 40%"> 40%</div> -->
                        <div class="bg-[#40b751] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded"
                            :style="{ width: campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount + '%' }">
                            {{ (campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount).toFixed(2)
                            }}%</div>
                    </div>
                    <div class="pt-4 pb-2 mt-[4px] mb-[6px] flex text-[#364958] justify-between font-bold">
                        <p>Raised: {{ numberWithCommas(campaign_detail.data.raised_amount) }}</p>
                        <p>Goal: {{ numberWithCommas(campaign_detail.data.donation_amount) }}</p>
                    </div>
                    <!-- <pre> -->
                    <!-- <code> -->
                    <p style="line-height:1.7;" class="text-[#364958]">
                        {{ campaign_detail.data.about_campaign }}
                    </p>
                    <!-- </code> -->
                    <!-- </pre> -->


                </div>
                <div class="mt-5 w-full lg:w-4/12 ">
                    <!-- <DonationDetailRightside /> -->
                    <h3 style="font-size: 1.75rem; font-weight: 700;" class="text-[#364958]">Product</h3>
                    <div class="pb-8" v-for="products in campaign_detail.data.add_campaign_items">
                        <!-- {{ products }} -->

                        <div class="block product-shodow bg-white pl-5">
                            <div class="flex  items-center pt-10">cccccccc

                                <div class="lg:flex lg:w-3/12 xl:w-3/12">
                                    <img :src="products.image" :alt="products.display_as_name"
                                        class="rounded-full w-20 h-20" />
                                </div>


                                <div class="lg:w-9/12 xl:w-9/12">
                                    <div class="px-6 md:px-6 lg:px-6">
                                        <h4 class="text-xl font-medium text-[#40b751]">{{ products.display_as_name }}</h4>
                                        <p class="text-gray-500 mb-2">
                                            {{ products.about }}
                                        </p>
                                        <p class="text-gray-500 font-bold pb-2">
                                            ₹ {{ numberWithCommas(products.price) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mr-4">
                            <div class="flex justify-between pb-2">

                                <div class="flex justify-between w-24 text-xl h-9">
                                    <Button class="bg-gray-300"
                                        @click="decrement(products.item, products.price, qty)">-</Button>

                                    <div v-for="item in item_cart">
                                        <div class="bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center pb-5"
                                            v-if="products.item == item.item && item.qty != 0"> {{ item.qty }}
                                        </div>
                                    </div>
                                    <Button class="bg-gray-300"
                                        @click="increment(products.item, products.price, qty)">+</Button>
                                </div>
                            </div>
                        </div>


                        <!-- <div class="block shadow-lg bg-white pl-5">
                            <div class="flex flex-wrap items-center pt-10">
                                <div class="lg:flex lg:w-3/12 xl:w-3/12">
                                    <img :src="products.image" :alt="products.display_as_name"
                                        class="rounded-full w-20 h-20" />
                                </div>
                                <div class="lg:w-9/12 xl:w-9/12">
                                    <div class="px-6 md:px-6 lg:px-6">
                                        <h4 class="text-xl font-medium text-[#40b751]">{{ products.display_as_name }}</h4>
                                        <p class="text-gray-500 mb-2">
                                            {{ products.about }}
                                        </p>
                                        <p class="text-gray-500 font-bold pb-5">
                                            ₹ {{ products.price }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mr-4">
                            <div class="flex justify-between pb-2"> -->
                        <!-- <button
                                                                    class="rounded-lg bg-green-500 text-white active:bg-green-500 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150"
                                                                    type="button" @click="donate(products.item, products.price)"> donate now
                                                                </button> -->
                        <!-- <div class="flex justify-between w-24 text-xl h-9">
                                    <Button class="bg-gray-300"
                                        @click="decrement(products.item, products.price, qty)">-</Button>

                                    <div v-for="item in item_cart">
                                        <div class="bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center pb-5"
                                            v-if="products.item == item.item && item.qty != 0"> {{ item.qty }}
                                        </div>
                                    </div>
                                    <Button class="bg-gray-300"
                                        @click="increment(products.item, products.price, qty)">+</Button>
                                </div>
                            </div>
                        </div> -->



                        <!-- ******************************************** -->

                        <!-- <div class="block rounded-lg shadow-lg bg-white pl-5">
                                <div class="flex flex-wrap items-center pt-10">
                                    <div class="lg:flex lg:w-3/12 xl:w-3/12">
                                        <img :src="products.image" :alt="products.display_as_name"
                                            class="rounded-full w-30 h-20" />
                                    </div>
                                    <div class="lg:w-9/12 xl:w-9/12">
                                        <div class="md:px-12">
                                            <h4 class="text-xl text-green-500">{{ products.display_as_name }}</h4>
                            
                                            <p class="text-gray-500 mb-2">
                                                {{ products.about }}
                                            </p>
                                            <p class="text-gray-500 font-bold pb-5">
                                                ₹ {{ products.price }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                                <div class="flex justify-between">
                                    
                                    <div v-if="item_cart != ''">
                                        <div v-for="item in item_cart" class="flex justify-between w-24 text-xl h-10">

                                            <div v-if="products.item == item.item">
                                            <Button class="bg-gray-300"
                                                @click="decrement(products.item, products.price, item.qty)">
                                                -
                                            </Button>
                                            </div>

                                            <div>
                                                <div class="bg-green-500 p-3 rounded-lg justify-center pb-5"
                                                    v-if="products.item == item.item && item.qty != 0"> {{ item.qty }}
                                                </div>
                                                <div v-else-if = "products.item == item.item && item.qty == 0" class="bg-green-500 p-3 rounded-lg justify-cebter pb-5">adsf</div>
                                            </div>

                                            <div v-if="products.item == item.item && item.qty != 0">
                                            <Button class="bg-gray-300"
                                                @click="increment(products.item, products.price, qty)">
                                                +
                                            </Button>
                                        </div>

                                        </div>
                                    </div>

                                    <div v-else>
                                        <div class="flex justify-between w-24 text-xl h-10">

                                            <Button class="bg-gray-300"
                                                @click="decrement(products.item, products.price, qty)">
                                                -
                                            </Button>

                                            <div>
                                                <div class="bg-green-500 p-3 rounded-lg justify-center pb-5">
                                                    0
                                                </div>
                                            </div>

                                            <Button class="bg-gray-300"
                                                @click="increment(products.item, products.price, qty)">
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                 -->
                        <!-- ******************************************** -->
                    </div>

                    <div v-if="total_price != 0" class="text-center font-bold text-lg mt-5">
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
                    </div>
                    <div style="font-size: 1.75rem; font-weight: 700;" class="mt-3 font-semibold text-[#364958]">Other Donation</div>
                    <p class="text-gray-600">Donate via</p>

                    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/phonepay.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">Phone Pay</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/gpay.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">Google Pay</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/bhim.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">Bhim UPI</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/paytm.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">Paytm</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/crditcard.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">cr/dr card</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/banktransfer.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs  text-[#364958]">Bank Transfer</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="cursor-pointer rounded-t-lg pt-4 pb-4">
                                <div class="grid justify-center">
                                    <img src="../../src/assets/Inter/img/giftcard.png" class="w-12 h-12">
                                </div>
                                <div class="text-center pt-2">
                                    <p class="text-xs text-[#364958]">Gift Card</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style="font-size: 1.75rem; font-weight: 700;" class="mt-3 font-semibold text-[#364958]">Donors</div>


                    <div class="flex flex-wrap shadow">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap flex-row">
                                <li class="-mb-px flex-auto text-center">
                                    <a class=" text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(1)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 1, 'text-gray-500': openTab === 1 }">
                                        <i class="fas fa-space-shuttle text-base mr-1"></i> Recent
                                    </a>
                                </li>
                                <li class="-mb-px  flex-auto text-center">
                                    <a class=" text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(2)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 2, 'text-gray-500': openTab === 2 }">
                                        <i class="fas fa-cog text-base mr-1"></i> most generous
                                    </a>
                                </li>
                            </ul>

                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="tab-content tab-space overflow-y-auto h-60">
                                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">

                                            <!-- {{ recent_donation }} -->
                                            <div class="pb-6" v-for="donation in recent_donation">

                                                <div class="grid grid-cols-[200px_minmax(80px,_1fr)_100px]">

                                                    <div>
                                                        <div class="float-left pr-4">
                                                            <!-- <img class="w-12 h-12 rounded-full" :src="donation.donor_image"> -->
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
                                                                class=" text-gray-900 leading-none text-lg font-bold">{{
                                                                    donation.donor_name }}</p>
                                                            <p v-else class="text-gray-900 leading-none text-lg font-bold">
                                                                Anonymous</p>
                                                            <p class="text-gray-600 text-sm">{{ formatDate(donation.date) }}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="grid justify-end">
                                                        <p class="">₹ {{ numberWithCommas(donation.amount) }}</p>
                                                    </div>

                                                </div>

                                                <!-- <div v-if="donation.anonymous != 1" class="flex items-center">
                                                    <Avatar :imageURL="donation.donor_image" :label="donation.donor_name"
                                                    size="lg" class="mr-3" />
                                                    <div class="text-lg flex-auto">
                                                        <p class="text-gray-900 leading-none font-bold">
                                                            {{ donation.donor_name }}</p>

                                                        <p class="text-gray-600">{{ donation.creation }}</p>
                                                    </div>
                                                    <p class="pl-2">₹ {{ donation.amount }}</p>
                                                </div>
                                                <div v-else class="flex items-center">
                                                    <Avatar imageURL="" label="Anonymous" size="lg" class="mr-3" />
                                                    <div class="text-lg flex-auto">
                                                        <p class="text-gray-900 leading-none font-bold">
                                                            Anonymous</p>

                                                        <p class="text-gray-600">{{ donation.creation }}</p>
                                                    </div>
                                                    <p class="pl-2">₹ {{ donation.amount }}</p>
                                                </div> -->

                                                <!-- <div class="block rounded-lg shadow-lg bg-white"> -->
                                                <!-- <div class="flex flex-wrap items-center">
                                                                            <div class="lg:flex lg:w-2/12 xl:w-3/12">
                                                                            <img :src="image" :alt="image"
                                                                                class="rounded-full"/>
                                                                            </div>
                                                                            <div class="lg:w-8/12 xl:w-9/12">
                                                                                <div>
                                                                                    <h4 v-if="donation.anonymous != 1" class="font-bold">{{ donation.donor_name }}</h4>
                                                                                    <h4 v-else class="font-bold">Anonymous</h4>
                                                                                    <p>{{ donation.creation }}</p>
                                                                                </div>
                                                                                <div>
                                                                                    {{ donation.amount }}
                                                                                </div>
                                                                            </div>
                                                                        </div> -->
                                                <!-- <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"> -->
                                                <!-- </div>
                                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"> -->
                                            </div>
                                        </div>
                                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                            <p>
                                                <!-- {{ tab2 }} -->
                                                {{ item_cart }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section class="bg-white dark:bg-gray-900">
                <div>
                    <section class="bg-white dark:bg-gray-900">
                        <div>
                            <section class="text-gray-700">
                                <div class="px-5 py-10">
                                    <div class="mb-8">
                                        <p
                                            class="text-[30px] md:text-[26px] lg:text-[30px] text-[#40b751] font-black text-center title-font mb-4 ">
                                            FAQ
                                        </p>
                                        <p class="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!
                                        </p>
                                    </div>
                                    <div class="flex flex-wrap sm:mx-auto sm:mb-2 mx-auto">
                                        <div class="w-full py-2">
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium cursor-pointer border-2 border-b-1 border-solid border-b-gray-300 text-xl text-[#40b751] list-none bg-gray-100 rounded py-3 px-4">
                                                    What is Donatekart ?</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 font-normal border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] ">
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
                                                        farm-to-table.
                                                    </p>
                                                </span>
                                            </details>
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                    How to claim Tax-Exemption for my contributions on Donatekart?</summary>


                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300">
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
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                    How to Donate ?</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et.</p>
                                                </span>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>
    <Dialog
    :options="{
      title: 'Donation Completed',
      message: `Your donation of ${donated_amount} is successfully completed.`,
      icon: {
        name: 'smile',
        appearance: 'success',
      },
      appearance: 'info',
      size: 'lg',
      actions: [
        {
          label: 'Get 80G Certificate',
          appearance: 'success',
          handler: ({ close }) => {
            this.download_80g(donation_name)
            close() // closes dialog
          },
        },
        {
          label: 'View Profile',
          appearance: 'success',
          handler: ({ close }) => {
            this.view_profile()
            close() // closes dialog
          },
        },
        { label: 'Cancel' },
      ],
    }"
    v-model="showDialog"
  />
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
// import DonationDetail from "../components/DonationDetail.vue";
// import DonationCheckout from "../components/DonationCheckout.vue";


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
        // DonationCheckout,
    },
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
            cookie
        }
    },
    data() {
        return {
            campaign_detail: '',
            openTab: 1,
            recent_donation: '',
            campaign: '',
            tab2: 'this is tab two content',
            a: 70,
            qty: 0,
            date: '',
            item_cart: [],
            total_price: 0,
            anonymous: false,
            showDialog: false,
            donated_amount: '',
            donation_name: ''
        }
    },
    mounted() {
        const name = useRoute();
        this.campaign = name.params.name
        this.get_campaign_donation_detail(name.params.name)
        this.get_recent_donation(name.params.name)
    },
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

        download_80g(){
            return{
                method: 'sadbhavna_donatekart.api.donor.download_80g',
                onSuccess: (res) => {
                // console.log('okey', res)
                let url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${res}&format=80G Certificate for Donation`
                // window.location = url
                window.open(url, "_blank");
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
                },
                onError: (error) => {
                    console.log(error)
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
                    this.showDialog = true

                    // this.$router.push(`/sadbhavna/donation-success-page/${d_amount}`)
                    // alert("your donation is successfull")
                },
                onError: (error) => {
                    // alert("Something Want Wrong!", error)
                    this.$toast({
                        title: "Error",
                        text: error,
                        customIcon: "circle-fail",
                        appearance: "denger",
                    })
                }
            }
        },

    },
    methods: {
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
                        this.campaign_detail = res
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
        donate(total_price, anonymous) {
            if (!this.user.isLoggedIn()) {
                this.$router.push(`/sadbhavna/auto-login`)
                // return
            }
            else {
                // call razor pay api
                // rzp.open(options)
                var options = {
                    "key": "rzp_test_Adc0DsR6E8VV3t", // Enter the Key ID generated from the Dashboard
                    "amount": total_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Crowdfunding",
                    "description": "Test Transaction",
                    "image": "https://crowdfunding.frappe.cloud/assets/sadbhavna_donatekart/frontend/assets/logo.2bd6bc2a.png",
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
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#40b751"
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.on('payment.failed', function (response){
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
                
                
                // this.$router.push(`/sadbhavna/donate/${name}&${price}`)
            }
        },
        set_details_in_doctype_after_donation(total_price, anonymous, payment_id) {
            this.$resources.set_details_in_doctype_after_donation.submit({
                user_id: this.cookie.user_id,
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

        download_80g(donation_name){
            this.$resources.download_80g.submit({
                donor: this.cookie.user_id,
                donation: donation_name,
            })
        },
        view_profile(){
            this.$router.push(`/sadbhavna/profile/${this.cookie.user_id}`)
        },

        increment(item, rate, qty) {
            this.qty += 1
            let qty1 = 0
            this.item_cart.filter(function (elm) {
                if (elm.item == item) {
                    qty1 = elm.qty
                }
                else {
                    qty1 = 0
                }
            });
            let amount = rate * (qty1 + 1)

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
                qty1 = 0
            }
            else {
                this.item_cart.push({ item: item, rate: rate, qty: qty1 + 1, amount: amount })
                this.total_price += rate
                qty1 = 0
            }
        },
        decrement(item, rate, qty) {
            if (qty != 0) {
                this.qty -= 1

                let qty1 = 0
                this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        qty1 = elm.qty
                    }
                    else {
                        qty1 = 0
                    }
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
                }
                else {
                    this.item_cart.push({ item: item, rate: rate, qty: qty1 - 1, amount: amount })
                    this.total_price -= rate
                }
            }
            if (qty == 1) {
                var check = this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        return elm;
                    }
                });
                if (check.length > 0) {
                    let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                    this.item_cart.splice(i, 1)
                }
            }
        },
    }
}
</script>