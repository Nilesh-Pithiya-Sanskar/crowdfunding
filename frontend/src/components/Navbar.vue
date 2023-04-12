<template>
  <section
    class=" bg-[#ebf8ec] text-center sm:px-2 md:px-2 lg:px-4 pb-0 pt-2 pb-2 border-t border-white border-opacity-10 border-neutral-100">
    <div class="flex justify-center md:justify-between lg:justify-between">
      <div class="hidden md:flex  ">
        <img class="h-6 w-6" src="../assets/Inter/img/icon/navbar_phone.png">
        <a href="tel:+91 9999999999"
          class="cursor-pointer transition font-medium text-[#40b751]  sm:mr-1 md:mr-2 lg:mr-4 text-[16px]  transition duration-300 rounded  hover:text-[#364958]">
          {{ $t('+91 9999999999') }}</a>
        <img class="h-6 w-6 mr-1" src="../assets/Inter/img/icon/navbar_email.png">
        <a href="mailto:info@bestdeed.org"
          class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] transition duration-300 rounded  hover:text-[#364958]">
          {{ $t('info@bestdeed.org') }}</a>
      </div>

      <div class="flex justify-end">
        <div class="mr-4 md:mr-2 lg:mr-4 menu">
          <a class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'gu' || language == 'en-US'" @click="set_language('hi')">हिंदी </a>
          <a class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'hi' || language == 'en-US'" @click="set_language('gu')"> ગુજરાતી </a>
          <a class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] transition duration-300 rounded  hover:text-[#364958]"
            v-if="language == 'gu' || language == 'hi'" @click="set_language('en-US')"> English</a>
        </div>

        <div class="mr-4 md:mr-2 lg:mr-4">
          <a v-if="this.user.isLoggedIn()" @click="profile()"
            class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">
            {{ $t('Profile') }}
          </a>
        </div>

        <a v-if="this.user.isLoggedIn()" @click="show_logout_dialog()"
          class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">{{
            $t("Logout") }}</a>
        <a v-else @click="this.$router.push(`/sadbhavna/auto-login`)"
          class="cursor-pointer transition font-medium text-[#40b751]  text-[16px] font-[600] ml-0 md:ml-2 lg:ml-2 transition duration-300 rounded  hover:text-[#364958]">{{
            $t('Login / Registration') }}</a>
      </div>
    </div>
  </section>

  <div class="">
    <div class="bg-[#40b751]">
      <nav
        class="px-[20px] md:px-[20px] lg:px-[0px] xl:px-[35px] py-[5px] md:py-[5px] lg:py-[20px] lg:flex lg:justify-between lg:items-center">
        <div class="flex  justify-between">
          <div class="flex items-center flex-shrink-0">
            <a href="/sadbhavna">
              <img src="../../src/assets/Inter/img/logo-1.1.ico"
                class="mb-2 lg:mb-0 sm:mt-2 lg:mt-0 mr-2 w-18 h-14 md:h-16 lg:h-20 ml-0 lg:ml-6" />
            </a>
            <a href="/sadbhavna"><span
                class="font-sans text-white font-bold text-[22px] md:text-[28px] lg:text-[30px] md:mr-5">BestDeed</span></a>
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
          class="fontfamily text-[15px] p-[15px] md:p-[15px] lg:p-[15px] flex-col sm:mt-8 md:mt-2 lg:mt-0 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 lg:mt-0">
          <li>
            <router-link to="/sadbhavna" class="transition font-bold text-white hover:text-black">{{ $t('Home')
            }}</router-link>
          </li>
          <li>
            <a href="#" class="transition font-bold text-white hover:text-black">{{ $t('About') }}</a>
          </li>
          <li>
            <router-link to="/sadbhavna/request-campaign" class="transition font-bold text-white hover:text-black">{{
              $t('Request a Campaign') }}</router-link>
          </li>
          <li>
            <router-link to="/sadbhavna/explore-campaigns" class="transition font-bold text-white hover:text-black">{{
              $t('Explore Campaigns') }}</router-link>
          </li>
          <li>
            <router-link to="/sadbhavna/contact-us" class="transition font-bold text-white hover:text-black">{{
              $t('Contact') }}</router-link>
          </li>
          <li>
            <span class="group relative inline-block">
              <a href="/sadbhavna/blog" class="transition font-bold text-white hover:text-black">{{ $t('Blog') }}</a>
              <!--<ul class="absolute hidden pt-4 group-hover:block">
                <li class=""><a class="whitespace-pre block bg-white py-2 px-8" href="/sadbhavna/blog">Blog</a></li>
                <li class=""><a class="whitespace-pre block bg-white py-2 px-8" href="#">Single - Blog</a></li>
              </ul>-->
            </span>
          </li>
          <!--<li v-if="this.user.isLoggedIn()" @click="profile()"
            class="font-bold text-white hover:text-black cursor-pointer">
            {{ $t('Profile') }}
          </li>-->
          <li>
            <!--<button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'gu' || language == 'en-US'" @click="set_language('hi')">हिंदी</button>
            <button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'hi' || language == 'en-US'" @click="set_language('gu')">ગુજરાતી</button>
            <button class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1" v-if="language == 'gu' || language == 'hi'" @click="set_language('en-US')">English</button>-->


            <!-- <select class="appearance-none border-0 border-gray-300 mt-2 hover:border-[#40b751] rounded w-24 py-2 px-3 text-grey-darker" v-model="language" @change="handleChange($event)">
            <option disabled value="">Please select language</option>
              <option v-for="lang in languages" :value="lang.key" class="bg-green-500">{{ lang.value }}</option>
            </select> -->
          </li>
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
            <button v-else @click="this.$router.push(`/sadbhavna/auto-login`)"
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
    //   this.$router.push(`/sadbhavna/login`)
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
      //   this.$router.push("/sadbhavna")
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
      this.$router.push(`/sadbhavna/profile/${cookie.user_id}`)
    }

  },


}
</script>
