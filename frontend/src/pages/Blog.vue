<template>
    <Navbar />
    <div class=" container mx-auto h-full px-5 pb-10 pt-4 md:pt-6 lg:pt-6">
        <div>
            <h1 class="text-center text-[27px] md:text-[33px] lg:text-[35px] font-black text-[#40b751]">{{ $t('Blog') }}</h1>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-4 md:mt-10 lg:mt-10">
            <div v-for="data in blogs" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
                <div
                    class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
                    <img class="w-full h-52 cursor-pointer" :src="data.meta_image" alt="" @click="openblog(data.name)">
                    <div class="pt-9 pr-9  md:pr-6 lg:pr-9 pd-7 pl-9 md:pl-6 lg:pl-9 ">

                        <h5 class="font-bold text-[#40b751] text-xl mb-2 truncate cursor-pointer"
                            @click="openblog(data.name)">
                            {{ $t(data.title) }}
                        </h5>
                        <p class="text-gray-700 text-base truncate pb-2">{{ $t(data.blog_intro) }}</p>
                        <p class="pb-4">{{ $t(data.blog_category) }}</p>
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
            this.$router.push(`/sadbhavna/blog-post/${name}`)
        },
    },
}
</script>
