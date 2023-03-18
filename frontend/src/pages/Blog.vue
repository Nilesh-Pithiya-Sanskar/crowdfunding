<template>
    <Navbar />
    <br><br>

    <div class="container mx-auto h-full">

        <!-- CAMPAIGNS -->
        <!-- <div>
            <h1 style="font-size: 3rem" class="text-center">Campaign</h1>
        </div> -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            <div v-for="data in campaigns">
                <div class="pb-5 md:pb-10 lg:pb-10 pt-5 md:pt-4 lg:pt-10 px-32">
                    <div
                        class="max-w-[580px] md:max-w-[350px] lg:max-w-[350px] lg:max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full h-40 cursor-pointer" :src="data.campain_image" alt="Mountain"
                            @click="donate(data.name)">
                        <div class="pt-9 pr-9 pd-7 pl-9 ">
                            <div class="font-medium text-[#40b751] text-xl mb-2 truncate">Help us to Send Food{{
                                data.short_description
                            }}</div>
                            <div>{{ data.campaign_title }}</div>
                            <p class="text-gray-700 text-base truncate">
                                By: {{ data.ngo }}
                                <!-- <div class="w-full bg-gray-200 rounded h-[16px] dark:bg-gray-700 mt-6 mb-6 ">
                                <div v-if="data.raised_amount"
                                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                                    :style="{ width: data.raised_amount * 100 / data.donation_amount + '%' }"> {{
                                        data.raised_amount * 100 /
                                        data.donation_amount }}%</div>
                            </div> -->
                                <!-- <div
                                class="flex border-b-2 border-b-gray-100  justify-between mt-6 mb-6 pb-6 text-sm font-bold">
                                <span>Raised: {{ data.raised_amount }}</span><span>Goal: {{ data.donation_amount }}</span>
                            </div> -->
                            </p>
                        </div>
                        <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-7 pl-9 flex justify-between">
                            <button class="text-[#40b751] text-base">Share</button>
                            <button
                                class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="opencampaign(data.name)"> donate now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CAMPAIGNS /-->


        <!-- BLOG -->

        <div>
            <h1 style="font-size: 3rem" class="text-center">Blog</h1>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            <div v-for="data in blogs">
                <div class="pb-5 md:pb-10 lg:pb-10 pt-5 md:pt-4 lg:pt-10 grid ">
                    <div
                        class="max-w-[580px] md:max-w-[350px] lg:max-w-[350px] lg:max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full h-40 cursor-pointer" :src="data.meta_image" alt="">
                        <div class="pt-9 pr-9 pd-7 pl-9 ">
                            <div class="font-medium text-[#40b751] text-xl mb-2 truncate">{{ data.title }}
                            </div>

                            <p class="text-gray-700 text-base truncate pb-4">{{ data.blog_intro }}

                                <!-- <div class="w-full bg-gray-200 rounded h-[16px] dark:bg-gray-700 mt-6 mb-6 ">
                                <div v-if="data.raised_amount"
                                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md"
                                    :style="{ width: data.raised_amount * 100 / data.donation_amount + '%' }"> {{
                                        data.raised_amount * 100 /
                                        data.donation_amount }}%</div>
                            </div>
                            <div
                                class="flex border-b-2 border-b-gray-100  justify-between mt-6 mb-6 pb-6 text-sm font-bold">
                                <span>Raised: {{ data.raised_amount }}</span><span>Goal: {{ data.donation_amount }}</span>
                            </div> -->
                            </p>
                        </div>
                        <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-7 pl-9 flex justify-between">
                            <!-- <button class="text-[#40b751] text-base">Share</button> -->
                            <button
                                class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="openblog(data.name)"> Open </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BLOG /-->

        <!-- DONOR -->


        <!-- <div>
            <h1 style="font-size: 3rem" class="text-center">Donor</h1>
        </div>
        <div v-for="data in donors">
            <div>
                <p style="font-size: 1rem" class="text-center">{{ data.donor_name }}</p>
                <p style="font-size: 1rem" class="text-center">{{ data.email }}</p>
                <p style="font-size: 1rem" class="text-center">{{ data.mobile }}</p>
            </div>

        </div> -->

        <!-- DONOR /-->
    </div>
    <Footer />
</template>


<script>
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { inject, provide, ref } from "vue"
export default {
    name: "Blog",
    created() {
        this.get_blogs()
        // this.get_campaigns()
        // this.get_donors()
    },
    components: {

        Navbar,
        Footer

    },
    data() {
        return {
            blogs: [],
            campaigns: [],
            // donors: []
        }
    },
    methods: {
        get_campaigns(category) {
            let url = ''
            if (category == null) {
                url = '/api/resource/Donation Campaign?filters={"published": 1}&fields=["name", "campain_image", "campaign_title", "is_featured","donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]'

            }
            else {
                url = `/api/resource/Donation%20Campaign?filters=[["Donation Campaign","campaign_category","=","${category}"],["Donation Campaign","published","=",1]]&fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]`

            }

            axios.get(url).then((response) => {
                console.log("campaign", response)
                this.campaigns = response.data['data']
            }).catch(function (error) {
                console.log(error);
            })
        },
        get_blogs() {

            let url = '/api/resource/Blog Post?filters={"published": 1}&fields=["name", "title", "meta_image", "blog_category", "blog_intro", "content_md"]';



            axios.get(url).then((response) => {
                console.log("blog", response)
                this.blogs = response.data['data']
            }).catch(function (error) {
                console.log(error);
            })
        },
        openblog(name) {

            this.$router.push(`/sadbhavna/blog-post/${name}`)
        },
        opencampaign(name) {
            this.$router.push(`/sadbhavna/campaign-donation/${name}`)
        }

        // get_donors() {
        //     let url = '';
        //     url = 'http://sd.test:8080/api/resource/Donor?filters={"donor_type": "Default"}&fields=["donor_name", "email", "mobile"]';
        //     console.log("donor data");


        //     axios.get(url).then((response) => {
        //         console.log("donor", response)
        //         this.donors = response.data['data']
        //     }).catch(function (error) {
        //         console.log(error);
        //     })
        // }



        // get_campaign_details(name) {
        //     let url = `/api/resource/NGO?filters={"email": "${name}"}&fields=["name"]`
        //     fetch(url, {
        //         method: 'GET',
        //     })
        //         .then((response) => {
        //             response.json().then((res) => {
        //                 let ngo = res.data[0].name
        //                 let url = `/api/resource/Donation Campaign?filters={"ngo": "${ngo}"}&fields=["*"]`
        //                 fetch(url, {
        //                     method: 'GET',
        //                 }).then((response) => {
        //                     response.json().then((res) => {
        //                         this.campaign_details = res.data
        //                     })
        //                 })
        //             })
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        // },
    },
}
</script>
