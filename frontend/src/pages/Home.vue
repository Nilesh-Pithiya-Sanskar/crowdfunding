
<template>
  <!-- Header-->

  <div class="bg-no-repeat  bg-cover bg-center "
    style="background-image: url('https://crowdfunding.frappe.cloud/files/Frame1.jpg')">

    <Navbar />
    <div class="container mx-auto h-full">
      <div class="grid lg:grid-cols-2 pb-10 m-10">

        <div class="lg:pt-52 sm:pt-4 pr-0 lg:pr-10 tracking-wide">
          <p style="text-shadow:3px 6px 6px #c9c9c9;"
            class="text-[#40b751] font-sans text-center lg:text-left font-semibold leading-none text-[28px] md:text-[32px] lg:text-[43px] [text-shadow:3px 6px 6px #c9c9c9]">
            Donate with
            <span class="text-gray-700">100% Transparency</span>
            on
            <span class="text-gray-700">most trusted</span>
            crowd funding platform of India.
          </p>
        </div>
        <div class="md:pl-32 lg:pl-0 pl-0 lg:pt-0 pt-8 pb-4 lg:pb-16 grid justify-items-center">
          <img src="../../src/assets/Inter/img/map2.png" class="h-96 md:h-96 lg:h-full w-96 md:w-96 lg:w-full" />
        </div>
      </div>
    </div>
  </div>

  <!----------------------------------------->


  <div class="container mx-auto h-full sm:p-4 lg:p-16 -mt-16 lg:-mt-36 pl-4 lg:pl-0 pr-4 lg:pr-0">
  <!-- <div class="bg-white rounded-xl product-shodow">
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

    <div class="bg-white rounded-xl drop-shadow-xl">
      <Sliders :featured_campaigns="featured_campaigns" :interval="3000" />
    </div>

    <!-- Categories -->
    <div class="text-center mt-10">
      <h2 class="text-3xl font-bold text-[#40b751] mb-2">Categories</h2>
      <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p>
    </div>

    <div class="flex mt-3 border-b sm:mr-4 lg:mr-12 ">
      <div class="overflow-x-auto">
        <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-hidden ">
          <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
            <div
              class="font-bold px-10 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(1)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

              <div class="grid justify-items-center" v-if="openTab !== 1">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/grid(2).png" />
                <p class="pl-2 pr-2">All</p>
              </div>
              <div class="grid justify-items-center" v-else="openTab === 1">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/grid.png" />
                <p class="pl-2 pr-2">All</p>
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
            <div
              class="font-bold px-8 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(2)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

              <div class="grid justify-items-center" v-if="openTab !== 2">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/paw(1).png" />Animal
              </div>
              <div class="grid justify-items-center" v-else="openTab === 2">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/paw.png" />Animal
              </div>


            </div>
          </li>

          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
            <div
              class="font-bold px-6 py-2 cursor-pointer  hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(3)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 3, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 3 }">

              <div class="grid justify-items-center" v-if="openTab !== 3">
                <img class="h-8 w-8 " src="../../src/assets/Inter/img/icon/mortarboard(1).png" />Education
              </div>
              <div class="grid justify-items-center" v-else="openTab === 3">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/mortarboard.png" />Education
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Children Campaign')">
            <div
              class="font-bold px-8 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(4)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 4, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 4 }">

              <div class="grid justify-items-center" v-if="openTab !== 4">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/children(1).png" />Children
              </div>
              <div class="grid justify-items-center" v-else="openTab === 4">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/children.png" />Children
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
            <div
              class="font-bold px-8 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(5)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

              <div class="grid justify-items-center" v-if="openTab !== 5">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/healthcare(1).png" />Medical
              </div>
              <div class="grid justify-items-center" v-else="openTab === 5">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/healthcare.png" />Medical
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
            <div
              class="font-bold px-8 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(6)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

              <div class="grid justify-items-center" v-if="openTab !== 6">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/supplies(1).png" />Hunger
              </div>
              <div class="grid justify-items-center" v-else="openTab === 6">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/supplies.png" />Hunger
              </div>

            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religiouse Campaign')">
            <div
              class="font-bold px-5 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(7)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

              <div class="grid justify-items-center" v-if="openTab !== 7">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/pray(1).png" />Religiouse
              </div>
              <div class="grid justify-items-center" v-else="openTab === 7">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/pray.png" />Religiouse
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
            <div
              class="font-bold px-6 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(8)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 8, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 8 }">

              <div class="grid justify-items-center" v-if="openTab !== 8">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/disability(1).png" />Disability
              </div>
              <div class="grid justify-items-center" v-else="openTab === 8">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/disability.png" />Disability
              </div>


            </div>
          </li>
          <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
            <div
              class="font-bold px-9 py-2 cursor-pointer hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
              v-on:click="toggleTabs(9)"
              v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

              <div class="grid justify-items-center" v-if="openTab !== 9">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/old-man(1).png" />Elder
              </div>
              <div class="grid justify-items-center" v-else="openTab === 9">
                <img class="h-8 w-8" src="../../src/assets/Inter/img/icon/old-man.png" />Elder
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--Cards-->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-10">
      <div v-for="index in campaignToShow">
        <div v-if="index < campaigns.length" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
          <div class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
            <img class="w-full h-52 cursor-pointer" :src="campaigns[index].campain_image" alt="Mountain"
              @click="donate(campaigns[index].name)">
            <div class="pt-9 pr-9  md:pr-6 lg:pr-9 pd-7 pl-9 md:pl-6 lg:pl-9 ">
              <div class="font-medium text-[#40b751] text-xl mb-2 truncate-2-lines">{{ campaigns[index].campaign_title }}
              </div>
              <p class="text-gray-700 text-base truncate">
                By: {{ campaigns[index].ngo }}
              <div class="w-full bg-gray-200 rounded h-[16px] dark:bg-gray-700 mt-6 mb-6 ">
                <div v-if="campaigns[index].raised_amount"
                  class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                  :style="{
                    width: campaigns[index].raised_amount * 100 / campaigns[index].donation_amount + '%'
                  }">
                  {{ (campaigns[index].raised_amount * 100 / campaigns[index].donation_amount).toFixed(2) }}%</div>
              </div>
              <div
                class="flex border-b-2 border-b-gray-100  justify-between mt-6 mb-6 pb-6 text-[14px] md:text-[12px] lg:text-[14px] font-bold">
                <span>Raised: {{ numberWithCommas(campaigns[index].raised_amount) }}</span><span>Goal: {{
                  numberWithCommas(campaigns[index].donation_amount) }}</span>
              </div>
              </p>
            </div>
            <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-7 pl-9 flex justify-between">
              <button class="text-[#40b751] text-base">Share</button>
              <button
                class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" @click="donate(campaigns[index].name)"> donate now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="campaignToShow < campaigns.length || campaigns.length > campaignToShow" class="text-center">
      <button
        class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-3 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" @click="campaignToShow += 6">Show More</button>
    </div>
  </div>


  <!--Testimonials-->

  <Testimonials />

  <!--Featured In-->

  <div class="container mx-auto h-full">
    <div class="text-center mt-10">
      <h2 class="text-[24px] md:text-[24px] lg:text-[30px] font-bold text-[#40b751] mb-[20px]">Featured in</h2>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/protection.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Protection</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/mask.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Prevention</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/sanitizer.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Treatments</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px] ">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/virus.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Symptoms</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

    </div>
  </div>

  <!--Awards-->

  <div class="bg-[#f5f3ff]">
    <div class="container mx-auto h-full">

      <div class="text-center mt-10">
        <h2 class="text-3xl font-bold text-[#40b751] pt-12">Awards</h2>
      </div>
      <div class="pb-16">
        <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 justify-items-center text-center">
          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96 "
              src="../../src/assets/Inter/img/nationalbusinessawards.jpeg">
            <div>
              <p class="text-[#364958] font-medium text-[20px]">National Business Excellence And</p>
              <p class="text-[#364958] font-medium text-[20px]"> Achievers Award</p>
              <p class="text-[#364958] font-medium pt-2">2021</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/bsinhchennailogo.jpg">
            <div>
              <p class="text-[#364958] font-medium text-[20px]">Top Ten Startups In Hyderabad</p>
              <p class="text-[#364958] font-medium pt-2">2020</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/socialenterpriceaward.jpg">
            <div>
              <p class="text-[#364958] font-medium text-[20px]">Social Enterprise Challenge Award</p>
              <p class="text-[#364958] font-medium pt-2">2018</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/NASSCOM.jpg">
            <div>
              <p class="text-[#364958] font-medium text-[20px]">NASSCOM Social Innovation Award</p>
              <p class="text-[#364958] font-medium pt-2">2018</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/indianextress.png">
            <div>
              <p class="text-[#364958] font-medium text-[20px]">Indian Express 40 Under 40</p>
              <p class="text-[#364958] font-medium pt-2">2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
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
      featured_campaigns: []
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
    }
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
        category: category
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
