<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap');

/*@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;1,300&display=swap');*/
</style>
<template>
  <div>
    <!-- <h1>{{ $meta.title }}</h1> -->
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
    <Toasts />
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import { call } from 'frappe-ui'
import { Toasts } from '@/utils/toasts'

// import Footer from './components/Footer.vue'
// import Navbar from './components/Navbar.vue'

// import VueCardStack from "vue-card-stack";

export default {
  name: 'App',
  components: {
    Toasts,
    // Footer,
    // Navbar
  },
  metaInfo() {
        return { 
            title: "Epiloge - Build your network in your field of interest",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    },
  setup() {
    const user = ref({})
    provide('user', user)
    return { user }
  },
  mounted() {
    window.addEventListener('online', () => {
      this.$clearToasts()
      this.$toast({
        title: "You're online now",
        icon: 'wifi',
        iconClasses: 'stroke-green-600',
        appearance: 'success',
        position: 'bottom-right',
      })
    })
    window.addEventListener('offline', () => {
      this.$toast({
        title: "You're offline now",
        icon: 'wifi-off',
        iconClasses: 'stroke-red-600',
        appearance: 'danger',
        fixed: true,
        position: 'bottom-right',
      })
    })
    this.user = {
      isLoggedIn: () => {
        const cookie = Object.fromEntries(
          document.cookie
            .split('; ')
            .map((part) => part.split('='))
            .map((d) => [d[0], decodeURIComponent(d[1])])
        )
        return cookie.user_id && cookie.user_id !== 'Guest'
      },
    }
  },
}
</script>
