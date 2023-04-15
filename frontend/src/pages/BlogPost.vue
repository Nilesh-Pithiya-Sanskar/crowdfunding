<template>
    <div class="bg-white">
        <Navbar />
        <div class="container mx-auto mt-4 p-4 pb-16">
            <div class="">
                <div v-if="blog_detail">
                    <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6  mr-1 flex">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <p class=" text-center text-[14px] md:text-[12px] lg:text-[16px]">

                            {{
                                $t(formatDate(blog_detail.data.published_on)) }}
                        </p>
                    </div>

                    <h1
                        class="text-center text-[25px] md:text-[30px] lg:text-[30px]  uppercase pt-2 pb-4 text-[#40b751] font-black ">
                        {{ $t(blog_detail.data.title) }}
                    </h1>
                    <div>
                        <img class="object-fill w-full pb-2" :src="blog_detail.data.meta_image">
                    </div>
                    <!-- <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-1 pb-4">
                        <div class="pt-1">
                            <div class="flex">
                                <img class="h-5 w-5 " src="../assets/Inter/img/icon/calendar.png">
                                <p class="pl-2 font-bold">{{ $t(formatDate(blog_detail.data.published_on)) }}</p>
                            </div>
                        </div>
                        <div class="grid lg:justify-items-end md:justify-items-end sm:justify-items-start pt-1">
                            <div class="flex">
                                <img class="h-5 w-5 " src="../assets/Inter/img/icon/user.png">
                                <p class="pl-2 font-bold ">{{ $t(blog_detail.data.blogger) }}</p>
                            </div>
                        </div>
                    </div> -->
                    <div class="flex justify-center">
                        <img src="../assets/Inter/img/icon/clock.png" class="h-5 w-5 mr-1 flex">

                        <p class=" text-[14px] md:text-[12px] lg:text-[16px] mb-1">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> -->
                            {{ $t('2 min read') }}
                        </p>
                    </div>
                    <div class="text-justify pt-2">
                        <h4 class="pb-4 font-black text-[15px] md:text-[19px] lg:text-[19px]">
                            {{ $t(blog_detail.data.blog_intro) }}
                        </h4>
                    </div>
                    <p class="pb-4 text-justify">{{ $t(blog_detail.data.content_md) }}</p>
                    <p class="font-bold pb-4">By: {{ $t(blog_detail.data.blogger) }}</p>
                    <hr>
                    <p class="pt-2 font-bold">{{ $t('SHARE ARTICLE') }}</p>
                    <div class="flex flex-wrap pt-3 justify-between">
                        <div class="flex flex-wrap lg:pt-0 md:pt-0 sm:pt-2">
                            <div
                                class="bg-blue-700 rounded-full h-10 w-10 sm:ml-0 pt-2 pb-1 pl-2 pr-1 hover:cursor-pointer">
                                <ShareNetwork network="facebook" :url="url" :title="blog_detail.data.title"
                                    :description="blog_detail.data.blog_intro">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="#ffffff" stroke="currentColor" stroke-width="0" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </ShareNetwork>
                            </div>
                            <div class="bg-sky-400 rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2 pr-1 hover:cursor-pointer">
                                <ShareNetwork network="Twitter" :url="url" :title="blog_detail.data.title">
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
                                <ShareNetwork network="WhatsApp" :url="url" :title="blog_detail.data.title"
                                    :description="blog_detail.data.blog_intro">
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
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from 'vue-router';
import { Dialog } from 'frappe-ui'
import { inject } from 'vue';

export default {
    name: "Blog Post",
    components: {
        Navbar,
        Footer,
        Dialog,
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
            url: window.location.href
        }
    },
    mounted() {
        const name = useRoute();
        this.blog = name.params.name
        this.get_blog_detail(name.params.name)
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        },
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
        get_blog_detail(name) {
            let url = "/api/resource/Blog Post/" + name
            fetch(url, {
                method: 'GET',
            })
                .then(response => {
                    response.json().then(res => {
                        this.blog_detail = res

                        document.title = res.data.title + " | " + 'BestDeed'
                        var meta = document.createElement('meta');
                        meta.name = 'keywords';
                        meta.content = "donation,charity,crowdfunding,fundraising,donate online,donate online to charity,donations for nonprofits,donation websites for nonprofit,donate online india";
                        document.head.appendChild(meta);

                        var meta = document.createElement('meta');
                        meta.name = "description";
                        meta.content = res.data.blog_intro
                        document.head.appendChild(meta);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:type');
                        meta1.content = 'Website';
                        document.head.appendChild(meta1);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:title');
                        meta1.content = res.data.title;
                        document.head.appendChild(meta1);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:description');
                        meta1.content = res.data.blog_intro;
                        document.head.appendChild(meta1);

                        var meta1 = document.createElement('meta');
                        meta1.setAttribute('property', 'og:image');
                        meta1.content = window.origin + res.data.meta_image;
                        document.head.appendChild(meta1);
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        },
    }
}
</script>