<template>
    <div class="bg-gray-100">
        <Navbar />
        <!-- <div class="top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover"
        style="background-image: url('../../src/assets/Inter/img/explore-campaign.jpg') ">
        <Navbar />
        <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <p class="text-[30px] md:text-[30px] lg:text-[48px] sm:pr-10 md:pr-20 lg:pr-12 xl:pr-16  mb-32 text-center md:text-center md:text-base lg:text-left pt-20 font-medium text-[#364958] leading-none"
                style="text-shadow:3px 6px 6px #c9c9c9;">
                Join hands with <span class="text-[#40b751]">Sadbhavna Campaigns</span> to help needy.</p>
        </div>
    </div> -->
        <!-- <p>Blog</p> -->
        <div class="container mx-auto mt-20 pb-24">
            <div class="bg-white">

                <!-- <div v-if="blog_detail">

                    <div class=" pt-16 pl-32 md:pl-32 sm:pl-8  pr-32 pb-32">
                        <p style="font-size: 3rem;" class="text-black font-bold pb-4 grid justify-items-left">{{
                            blog_detail.data.title }}
                        </p>
                        <img class="object-fill w-full pb-10" :src="blog_detail.data.meta_image">

                        <p style="font-size: 2rem;" class="grid justify-items-left">{{ blog_detail.data.blog_intro }}</p>
                        <p class="text-base grid justify-items-left">{{ blog_detail.data.content_md }}</p>

                    </div>

                </div> -->
                <div v-if="blog_detail">
                    <p style="font-size: 3rem;" class="text-black font-bold pt-8 pl-8">{{
                        blog_detail.data.title }}
                    </p>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
                        <div class="pl-8 md:pl-8 sm:pl-4 pr-8 md:pr-8 sm:pr-4 pt-8 md:pt-8 sm:pt-4">

                            <img class="object-fill w-full pb-10" :src="blog_detail.data.meta_image">
                        </div>
                        <div class="pl-8 pr-8 md:pr-8 sm:pr-4 lg:pt-4 md:pt-4 sm:pt-0 pb-8 md:pb-8 sm:pb-4">
                            <p style="font-size: 2rem;" class="grid justify-items-left pb-2">{{ blog_detail.data.blog_intro
                            }}
                            </p>
                            <p class="text-base grid justify-items-left">{{ blog_detail.data.content_md }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { useRoute } from 'vue-router';
import { inject } from 'vue';

export default {
    name: "Blog Post",
    components: {

        Navbar,
        Footer

    },
    setup() {
        const user = inject("user")
        return {
            user
        }
    },
    data() {
        return {
            blog_detail: '',
            blog: '',
            campaign: '',
            campaign_detail: '',
        }
    },
    mounted() {
        const name = useRoute();
        this.blog = name.params.name
        this.get_blog_detail(name.params.name)
        this.campaign = name.params.name
        this.get_campaign_donation_detail(name.params.name)

    },
    methods: {
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
        get_blog_detail(name) {
            let url = "/api/resource/Blog Post/" + name
            fetch(url, {
                method: 'GET',
            })
                .then(response => {
                    response.json().then(res => {
                        this.blog_detail = res
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        },
    }
}
</script>