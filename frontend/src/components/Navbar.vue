<template>
  <section class=" bg-[#ebf8ec] text-center  border-t border-white border-opacity-10 border-neutral-100">
    <div class="flex justify-center md:justify-between lg:justify-between xl:px-[35px]">
      <div class="hidden md:flex  ">

        <div class="menubar flex items-center">
          <img src="../assets/Inter/img/icon/navbar_phone.png">
          <a href="tel:+91 9999999999"
            class="cursor-pointer transition font-medium text-black  sm:mr-1 md:mr-2 lg:mr-4 text-[14px]  transition duration-300 rounded  hover:text-[#364958]">
            {{ $t('+91 9999999999') }}</a>
          <img class="mr-1" src="../assets/Inter/img/icon/navbar_email.png">
          <a href="mailto:info@bestdeed.org"
            class="cursor-pointer transition font-medium text-black  text-[14px] transition duration-300 rounded  hover:text-[#364958]">
            {{ $t('info@bestdeed.org') }}</a>
        </div>
        <!-- <div class="social-icons hidden md:hidden lg:flex items-center ">
          <i class="fa fa-hand-right"></i>
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-1" fill="#000000" viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-1" fill="#000000"
            viewBox="0 0 24 24">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr1" fill="#000000"
            viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-1" fill="#000000"
            viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-1" fill="#000000"
            viewBox="0 0 24 24">
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fill-rule="evenodd" clip-rule="evenodd" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer mr-1" fill="#000000"
            viewBox="0 0 24 24">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div> -->
      </div>

      <div class="flex justify-end items-center">
        <div class="mr-4 md:mr-2 lg:mr-4 menu">
          <a class="cursor-pointer transition font-medium text-black text-[14px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'gu' || language == 'en-US'" @click="set_language('hi')">हिंदी </a>
          <a class="cursor-pointer transition font-medium text-black text-[18px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'hi' || language == 'en-US'" @click="set_language('gu')"> ગુજરાતી </a>
          <a class="cursor-pointer transition font-medium text-black text-[14px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'gu' || language == 'hi'" @click="set_language('en-US')"> English</a>
        </div>

        <div class="mr-4 md:mr-2 lg:mr-4">
          <a v-if="this.user.isLoggedIn()" @click="profile()"
            class="opacity-6 cursor-pointer transition font-medium text-[#000000]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">
            {{ $t('My Account') }}
          </a>
        </div>

        <a v-if="this.user.isLoggedIn()" @click="show_logout_dialog()"
          class="opacity-6 cursor-pointer transition font-medium text-[#000000]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">{{
            $t("Logout") }}</a>
        <a v-else @click="this.$router.push(`/auto-login`)"
          class="opacity-6 cursor-pointer transition font-medium text-[#000000]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">{{
            $t('Login / Registration') }}</a>
      </div>
    </div>
  </section>

  <div class="header-bottom">
    <div class="bg-[#40b751]">
      <nav
        class="px-[10px] md:px-[20px] lg:px-[0px] xl:px-[35px] py-[5px] md:py-[10px] lg:py-[16px] lg:flex lg:justify-between lg:items-center">
        <div class="flex  justify-between">
          <div class="flex items-center flex-shrink-0">
            <a href="/">
              <img src="../../src/assets/Inter/img/logo-1.1.ico"
                class="mb-2 lg:mb-0 sm:mt-2 lg:mt-0 mr-2 w-16" />
            </a>
            <a href="/"><span
                class="font-sans text-white font-bold text-[22px] md:text-[28px] lg:text-[28px] md:mr-5">BestDeed</span></a>
          </div>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="pr-[20px] md:pr-[20px] lg:pr-[5px] flex lg:hidden">
            <button type="button" class="text-white hover:text-white focus:outline-none focus:text-white">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z ">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="fontfamily p-[15px] md:p-[15px] lg:px-0 lg:py-[15px] flex-col sm:mt-8 md:mt-2 lg:mt-0 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 lg:mt-0">
          <li>
            <router-link to="/" class="transition font-bold text-white hover:text-black">{{ $t('Home')
            }}</router-link>
          </li>
          <li>
            <a href="#" class="transition font-bold text-white text-[18px]">{{ $t('About') }}</a>
          </li>
          <li>
            <router-link to="/request-campaign" class="transition font-bold text-white text-[18px]">{{
              $t('Request a Campaign') }}</router-link>
          </li>
          <li>
            <router-link to="/explore-campaigns" class="transition font-bold text-white text-[18px]">{{
              $t('Explore Campaigns') }}</router-link>
          </li>
          <li>
            <router-link to="/contact-us" class="transition font-bold text-white text-[18px]">{{
              $t('Contact') }}</router-link>
          </li>
          <li>
            <span class="group relative inline-block">
              <router-link to="/blog" class="transition font-bold text-white text-[18px]">{{ $t('Blog') }}</router-link>
              <!--<ul class="absolute hidden pt-4 group-hover:block">
                <li class=""><a class="whitespace-pre block bg-white py-2 px-8" href="/blog">Blog</a></li>
                <li class=""><a class="whitespace-pre block bg-white py-2 px-8" href="#">Single - Blog</a></li>
              </ul>-->
            </span>
          </li>
          <!--<li v-if="this.user.isLoggedIn()" @click="profile()"
            class="font-bold text-white hover:text-black cursor-pointer">
            {{ $t('Profile') }}
          </li>-->
           <!--<li>
           <button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'gu' || language == 'en-US'" @click="set_language('hi')">हिंदी</button>
            <button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'hi' || language == 'en-US'" @click="set_language('gu')">ગુજરાતી</button>
            <button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'gu' || language == 'hi'" @click="set_language('en-US')">English</button>-->


            <!-- <select class="appearance-none border-0 border-gray-300 mt-2 hover:border-[#40b751] rounded w-24 py-2 px-3 text-grey-darker" v-model="language" @change="handleChange($event)">
            <option disabled value="">Please select language</option>
              <option v-for="lang in languages" :value="lang.key" class="bg-green-500">{{ lang.value }}</option>
            </select> 
          </li>-->
          <!--<li>  
            <span class="group lg:inline-block">
              <a href="#" class="font-bold text-white hover:text-black">Page</a>
              <ul class="absolute hidden pt-4 group-hover:block">
                <li class=""><a class="whitespace-pre block bg-white py-2 px-10" href="#">Elements</a></li>
                <li class=""><a class="whitespace-pre block bg-white py-2 px-10" href="#">Cause</a></li>
              </ul>
            </span>
          </li>-->

          <!-- <li>
            <button v-if="this.user.isLoggedIn()" @click="show_logout_dialog()"
              class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1">{{ $t("Logout") }}</button>
            <button v-else @click="this.$router.push(`/auto-login`)"
              class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1">{{ $t('Login') }}</button>
          </li>-->

        </ul>
      </nav>
      <Dialog :options="{
        title: $t('Logout'),
        message: $t('Are you sure want to logout?'),
        // icon: {
        //   name: 'alert-triangle',
        //   appearance: 'warning',
        // },
        size: 'sm',
        actions: [
          {
            label: $t('Confirm'),
            appearance: 'success',
            handler: ({ close }) => {
              this.logout()
              close() // closes dialog
            },
          },
          { label: $t('Cancel') },
        ],
      }" v-model="showDialog" />

      <!-- <Dialog v-model="showLanguageDialog" >        
        <template #body>
          <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
              <h1
                  class="text-2xl md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-green-500 text-bold text-center">
                  {{ $t('Select Your Language') }}
              </h1>
              <div class="relative z-0 flex flex-wrap">
                <button
                      class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                      type="button" @click="set_language('gu')"> {{$t('ગુજરાતી')}}
                </button>
                <button
                      class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                      type="button" @click="set_language('hi')"> {{$t('हिंदी')}}
                </button>
                <button
                      class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                      type="button" @click="set_language('en-US')"> {{$t('English')}}
                </button>
              </div>
          </div>    
        </template>
    </Dialog> -->
      <Dialog v-model="showLanguageDialog">
        <template #body>
          <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
            <h1
              class="text-[25px] md:text-[30px] lg:text-[36px] font-semibold py-4  text-green-500 text-bold text-center">
              {{ $t('Select Your Language') }}
            </h1>
            <div class=" grid justify-items-center">
              <div>
                <button
                  class="mb-2  w-32 font-black rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:outline hover:outline-1 uppercase text-sm  py-2 shadow hover:bg-white hover:text-[#40b751] hover:border-green-600  ease-linear transition-all duration-150"
                  type="button" @click="set_language('gu')"> {{ $t('ગુજરાતી') }}
                </button>
              </div>
              <div>
                <button
                  class="mb-2  w-32 font-black rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:outline hover:outline-1 uppercase text-sm py-2 shadow hover:bg-white hover:text-[#40b751] hover:border-green-600   ease-linear transition-all duration-150"
                  type="button" @click="set_language('hi')"> {{ $t('हिंदी') }}
                </button>
              </div>
              <div>
                <button
                  class="mb-5  w-32 font-black rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:outline hover:outline-1  uppercase text-sm  py-2  hover:bg-white hover:text-[#40b751]   hover:border-[#40b751] ease-linear transition-all duration-150"
                  type="button" @click="set_language('en-US')"> {{ $t('English') }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { inject, ref } from "vue";
import { Dialog } from 'frappe-ui'

export default {
  name: "Navbar",
  setup() {
    const user = inject("user")
    return {
      user,
    }
  },
  components: {
    Dialog
  },
  data() {
    return {
      showMenu: false,
      showDialog: false,
      showLanguageDialog: false,
      language: this.get_language(),
      languages: [{ 'key': 'en-US', 'value': 'English' }, { 'key': 'gu', 'value': 'ગુજરાતી' }, { 'key': 'hi', 'value': 'हिंदी' }],
      // languages: ['English', 'ગુજરાતી', 'हिंदी']
      // n: window.navigator.language,
      // l: localStorage.getItem('lang')
    }
  },

  created() {
    console.log("language", this.get_language())
    if (this.get_language() == null) {
      this.showLanguageDialog = true
    }

  },

  mounted() {
    if (!this.user.isLoggedIn()) {
      // this.$router.push({
      // 	name: "DeskLogin",
      // 	query: { route: this.$route.path },
      // })
      return
    }
    // else{
    //   this.$router.push(`/login`)
    // }
    // if (!this.user.has_desk_access) {
    // 	this.$router.push({ path: "/home" })
    // 	return
    // }
  },

  resources: {
    logout() {
      return {
        method: 'logout',
        onSuccess: (res) => {
          this.$toast({
            title: "Success",
            text: "You successfully logout",
            icon: "check",
            position: "top-center",
          })
          this.$router.push("/")
          window.location.reload()
        },
        onError() {
          console.log("Error")
          this.$toast({
            title: "Error",
            text: 'Somthing want wrong during Logout!',
            icon: "x-circle",
            appearance: "denger",
            position: "top-center",
          })
        }
      }
    }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();

    },
    show_logout_dialog() {
      this.showDialog = true
    },
    set_language(l) {
      this.$cookies.set('lang', l);
      localStorage.setItem('lang', l);
      window.location.reload();
    },
    get_language() {
      return this.$cookies.get('lang') || localStorage.getItem('lang')
    },
    logout() {
      // axios.get('/api/method/logout').then((res) => {
      //   this.$router.push("/bestdeed")
      // }).catch(function (error) {
      //   console.log("not okey")
      // })
      this.$resources.logout.submit()
    },

    profile() {
      const cookie = Object.fromEntries(
        document.cookie
          .split("; ")
          .map((part) => part.split("="))
          .map((d) => [d[0], decodeURIComponent(d[1])])
      )
      this.$router.push(`/profile/${cookie.user_id}`)
    }

  },


}
</script>
