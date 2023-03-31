

  <template>
  <div class=" pt-2 pl-2 md:pl-4 lg:pl-[46px] xl:pl-24 pr-2 md:pr-4 lg:pr-[46px] xl:pr-24">
    <div class="rounded-xl bg-[#40b751]">
      <nav class="px-6 md:px-6 lg:px-6 sm:py-2 md:py-8 lg:py-8 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex  justify-between">
          <div class="flex items-center flex-shrink-0">
            <a href="/sadbhavna">
              <img src="../../src/assets/Inter/img/logo.png"
                class="mb-2 lg:mb-0 sm:mt-2 lg:mt-0 sm:mr-0 md:mr-32 lg:mr-32 w-40 lg:w-48 h-16 lg:h-44 ml-0 lg:ml-6" />
            </a>
          </div>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
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
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 lg:space-x-6 md:mt-0">
          <li>
            <router-link to="/sadbhavna" class="transition font-bold text-white hover:text-black">{{ $t('Home') }}</router-link>
          </li>
          <li>
            <a href="#" class="transition font-bold text-white hover:text-black">{{ $t('About') }}</a>
          </li>
          <li>
            <router-link to="/sadbhavna/request-campaign" class="transition font-bold text-white hover:text-black">{{ $t('Request a Campaign') }}</router-link>
          </li>
          <li>
            <router-link to="/sadbhavna/contact-us" class="transition font-bold text-white hover:text-black">{{ $t('Contact') }}</router-link>
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
          <li v-if="this.user.isLoggedIn()" @click="profile()"
            class="font-bold text-white hover:text-black cursor-pointer">
            {{ $t('Profile') }}
          </li>
          <li>
            <select class="appearance-none border-0 border-gray-300 mt-2 hover:border-[#40b751] rounded w-24 py-2 px-3 text-grey-darker" v-model="language" @change="handleChange($event)">
            <!-- <option disabled value="">Please select language</option> -->
              <option v-for="lang in languages" :value="lang.key" class="bg-green-500">{{ lang.value }}</option>
            </select>
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
         
          <li>
            <button v-if="this.user.isLoggedIn()" @click="show_logout_dialog()"
              class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1">{{ $t("Logout") }}</button>
            <button v-else @click="this.$router.push(`/sadbhavna/auto-login`)"
              class="transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1">{{ $t('Login') }}</button>
          </li>

        </ul>
      </nav>
  <Dialog
    :options="{
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
    }"
    v-model="showDialog"
  />
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
  components:{
    Dialog
  },
  data() {
    return {
      showMenu: false,
      showDialog: false,
      language: localStorage.getItem('lang') || window.navigator.language,
      languages: [{'key': 'en-GB', 'value': 'English'}, {'key': 'gu', 'value':'ગુજરાતી'}, {'key':'hi', 'value':'हिंदी'}],
      // languages: ['English', 'ગુજરાતી', 'हिंदी']
      n: window.navigator.language,
      l: localStorage.getItem('lang')
    }
  },
  mounted(){
    
    // l_lang = localStorage.getItem('lang')
    // if(l_lang){
    //   this.language = l_lang
    // } 
    // else{
    //   window.navigator.language
    //   if (n_lang == 'gu'){
    //     this.language = 'ગુજરાતી'
    //   }
    //   else if (n_lang == 'hi'){
    //     this.language = 'हिंदी'
    //   }
    //   else{
    //     this.language = 'English'
    //   }
    // }   
 },
  resources:{
    logout(){
      return{
        method: 'logout',
        onSuccess: (res) => {
          this.$toast({
            title: "Success",
            text: "You successfully logout",
            customIcon: "check",
          })
        // this.$router.push("/sadbhavna")
        this.$router.go();
        },
        onError() {
          console.log("Error")
          this.$toast({
            title: "Error",
            text: 'Somthing want wrong during Logout!',
            customIcon: "circle-fail",
            appearance: "denger",
        })
        }
      }
    }
  },
  methods: {
    handleChange(event){
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
      
    },
    show_logout_dialog(){
      this.showDialog = true
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
  }
}
</script>
