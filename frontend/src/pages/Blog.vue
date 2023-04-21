<template>
    <Navbar />
    <div class=" container mx-auto h-full px-5 pb-10 pt-4 md:pt-6 lg:pt-6">
        <div>
            <h1 class="text-center text-[27px] md:text-[33px] lg:text-[35px] font-black text-[#40b751] ">
                {{ $t('Blog') }}</h1>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-4 md:mt-10 lg:mt-10">
            <div v-for="data in blogs" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
                <div
                    class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
                    <img class="w-full h-52 cursor-pointer" :src="data.meta_image" alt="" @click="openblog(data.name)">
                    <div class="pt-5 pr-9  md:pr-6 lg:pr-9 pd-7 pl-9 md:pl-6 lg:pl-9 ">

                        <h5 class="font-bold text-[#40b751] text-xl mb-2 truncate cursor-pointer"
                            @click="openblog(data.name)">
                            {{ $t(data.title) }}
                        </h5>
                        <p class="text-black text-base truncate-2-lines-blog h-[50px]">{{ $t(data.blog_intro) }}</p>

                        <p class="pb-4 pt-2 text-gray-700 text-[18px] md:text-[16px] lg:text-[16px] truncate">By: {{
                            $t(data.blogger) }}
                        </p>
                        <!-- <hr> -->
                        <!-- <p class="pb-4">{{ $t(data.blog_category) }}</p> -->
                        <div class="flex justify-between border-t-2 pt-3 border-b-gray-100 mb-6">

                            <!-- <img class="h-5 w-5 " src="../assets/Inter/img/icon/calendar.png"> -->

                            <p class="flex text-[14px] md:text-[12px] lg:text-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6  mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                {{ $t(formatDate(data.published_on)) }}
                            </p>


                            <p class="flex text-[14px] md:text-[12px] lg:text-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {{ $t('2 min read') }}
                            </p>

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
import { inject, provide, ref } from "vue"
export default {
    name: "Blog",
    created() {
        this.get_blogs()
    },
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            blogs: [],
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        },
        get_blogs() {
            let url = '/api/resource/Blog Post?filters={"published": 1}&fields=["*"]';
            axios.get(url).then((response) => {
                console.log("blog", response)
                this.blogs = response.data['data']
            }).catch(function (error) {
                console.log(error);
            })
        },
        openblog(name) {
            this.$router.push(`/bestdeed/blog-post/${name}`)
        },
    },
}
</script>
