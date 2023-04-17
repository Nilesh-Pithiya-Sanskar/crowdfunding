<template>
    <Navbar />

    <div class="container mx-auto h-full mt-10 mb-[5rem] text-gray-500 text-center">
        <h2 class="mb-2 text-[50px] font-bold leading-none sm:text-[80px] md:text-[100px]">
            404
        </h2>
        <h4 class="mb-3 text-[22px] font-semibold leading-tight">
        {{$t('Oops! That page can’t be found')}}
        </h4>
        <p class="mb-8 text-lg">
        {{$t('The page you are looking for has gone missing.')}}
        </p>
        <router-link class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm md:px-0 lg:px-6 md:py-0 lg:py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-[16px] md:mr-[8px] lg:mr-[8px]  ease-linear transition-all duration-150"
         to="/bestdeed"> {{ $t('Back To Home') }} </router-link>
  



    </div>

    <Footer />

</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default{
    name: '404 Page Not Found',
    components: {
    Navbar,
    Footer,
  },
  created(){
        document.title = this.$t('Not Found')
    }
}
</script>