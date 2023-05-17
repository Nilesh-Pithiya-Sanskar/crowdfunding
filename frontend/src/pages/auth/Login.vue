<template>
  <Navbar /><section class="flex justify-center gradient-form h-full">
  <div class="container h-full px-8 lg:px-40 py-10">
    <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div class="w-full">
        <div class="block rounded-lg bg-white shadow-lg card-shodow dark:bg-neutral-800">
          <div class="g-0 lg:flex lg:flex-wrap">
            <!-- Left column container-->
            <div class="px-10 py-5 px-4 md:px-0 lg:w-6/12">
              <div class="p-1 md:p-2 lg:p-4">
                <!--Logo-->
                <div class="text-center">
                  <img src="/src/assets/Inter/img/logo-1.1.ico"
                class="mx-auto rounded-full border border-[#40b751] md:mr-2 lg:mr-2 w-18 h-14 md:h-16 lg:h-20 ml-0 lg:ml-6" />
                  <div class="text-[#40b751] text-center mb-3 font-bold text-[30px] md:text-[32px] lg:text-[34px]">
              <small>{{$t('Sign In')}} </small>
            </div>
                </div>

                <form>
 <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-sm font-bold mb-2" htmlFor="grid-password">
                  {{$t('Email')}} <span class="text-red-600">*</span>
                </label>
                <input v-model="email" @keyup="emailError = ''" type="email" @keyup.enter="login"
                  class="placeholder-blueGray-300 appearance-none border-gray-300 text-sm hover:border-[#40b751] focus:text-black focus:font-semibold rounded w-full py-2 px-3"
                  :placeholder="$t('Email')" required />
                <p class="text-red-600">{{ emailError }}</p>
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-sm font-bold mb-2" htmlFor="grid-password">
                  {{$t('Password ')}}<span class="text-red-600">*</span>
                </label>
                <input v-model="password" type="password" @keyup.enter="login"
                  class="placeholder-blueGray-300 appearance-none border-gray-300 text-sm hover:border-[#40b751] focus:text-black focus:font-semibold rounded w-full py-2 px-3 ease-linear transition-all duration-150"
                  :placeholder="$t('Password')" required />
                <p class="text-red-600">{{ passwordError }}</p>

              </div>
              <p class="text-red-600">{{ errorMsg }}</p>
              <div class="text-center mt-6">
                <button style="background-color: #40b751;"
                  class="cursor-pointer border-[#40b751] hover:border-[#40b751] bg-gradient-to-l from-green-400 to-lime-600 hover:bg-transparent text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full ease-linear transition-all duration-150"
                  type="button" @click="login()">
                  {{$t('Sign In')}}
                </button>
               <div @click="forgotPassword()" class="cursor-pointer text-green-500 ">{{$t('Forgot Password?')}}</div>
              </div>


             <div class="flex items-center justify-between">
                    <router-link to="/login" class="text-green-500 text-left">{{$t('Login With Mobile')}}</router-link>
                    <router-link to="/registration" class="text-green-500 text-center border-emerald-600 text-emerald-600 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-sm leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none text-green-500 focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">{{$t('Register')}}</router-link>
                  </div>

                </form>
              </div>
            </div>

            <!-- Right column container with background and description-->
            <div class="flex items-center rounded-b-lg bg-gradient-to-l from-lime-600 to-green-400 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <div class="px-6 py-6 text-white">
                <h4 class="mb-6 text-xl font-semibold">{{$t('Welcome to BestDeed!')}}</h4>
                <p class="text-sm">{{ $t('BestDeed is a leading platform that connects donors with non-profit organizations worldwide. We strive to create a world where everyone has the opportunity to make a positive impact on society. Through our user-friendly website, users can easily discover and donate to a variety of causes, from education to environmental sustainability. We are committed to providing a safe and secure platform for donors and organizations to collaborate and make a meaningful difference in the world. Thank you for choosing BestDeed as your go-to platform for charitable giving.')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- <GoogleLogin :callback="login_with_google">
        </GoogleLogin>

        <button @click="login_with_google1">Login With Google</button>
        <div>{{ isLogin }}</div> -->


      </section>



  <Footer />
</template>

<script>
// import github from "@/assets/Inter/img/github.svg";
// import google from "@/assets/Inter/img/google.svg";
import { decodeCredential } from 'vue3-google-login'

import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";


export default {
  name: "Login",
  components: { Navbar, Footer },
  data() {
    return {
      // github,
      // google,
      password: "",
      error: false,
      passwordError: '',
      emailError: '',
      email: "",
      isLogin: false
    };
  },
  created(){
    document.title = this.$t('Login Now | Trusted and 100% Transparent Online Crowdfunding Platform | BestDeed')
    const linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://bestdeed.org/login-via-mobile"
    document.head.appendChild(link);
    }
    else{
      linkElement.href = "https://bestdeed.org/login-via-mobile"
      document.head.appendChild(linkElement)
    }
  },
  mounted(){
    this.$nextTick(() => this.$refs.email.focus())
  },
  resources: {
    login() {
      return {
        method: "/api/method/login",
        // method: '/api/method/frappe.integrations.oauth2.get_token',
        onSuccess: async () => {
          var route = this.$cookies.get('route');
          console.log("route", route)
          if (route != null) {
            this.$router.go(-2)
            // this.$router.push(route)
          }
          else {
            this.$router.push(`/`);
          }
        },
        onError: (error) => {
          this.$toast({
            title: "Error",
            text: "User Name or Password Incorrect",
            icon: "x-circle",
            appearance: "denger",
            position: "top-center",
          })
          this.email = "";
          this.password = "";
        },
      };
    },
    login_with_google() {
      return {
        method: 'frappe.www.login.login_via_token',
        onSuccess: () => {
          // console.log("okey")
          this.$router.push('/')
        },
        onError: (error) => {
          console.log("error", error)
          this.$toast({
            title: "Error",
            text: 'Something want Wrong!',
            icon: "x-circle",
            appearance: "denger",
            position: "top-center",
          })
        }
      }
    },

    // googleAuthCodeLogin(){
    //   return{
    //     method: '/sadbhavna_donatekart.api.api.login_with_google',
    //     onSuccess: () => {
    //       console.log("okey")
    //     },
    //     onError: (error) => {
    //       console.log("error", error)
    //     }
    //   }
    // }

    forgotPassword(){
      return{
        method: 'sadbhavna_donatekart.api.api.forgot_password',
        onSuccess:(res) => {
          // console.log("susseddd", res)
          if(res=='user not found with this email')
          {
            this.emailError = res
          }
          else{
            // let otp_message = res[0]
            // let number = res[1]
            // let m_type = res[2]
            // this.$router.push(`/otp/${otp_message}&${number}&${m_type}`);
            console.log("mail send")
            this.$toast({
            title: "Mail Sent",
            text: 'forgot password mail is sent open link to set password',
            icon: "right",
            position: "top-center",
            
          })
          }
        },
        onError:(error) =>{
          console.log("error for pass", error)
        }
      }
    }

  },
  methods: {
    login() {
      console.log("email dsfas")
      if (!this.email && !this.password) {
        this.error == true
      }
      else if (this.email == '') {
        // this.email_id == this.error
        this.emailError = 'Please enter email!'
        this.error = true
        console.log('email')
      }
      else if (this.password == '') {
        // this.email_id == this.error
        this.passwordError = 'Please enter password!'
        this.error = true
        console.log('password')
      }
      else {
        this.error == false
        this.$resources.login.submit({
          usr: this.email,
          pwd: this.password,
        });
      }

      // if (this.email == '') {
      //   // this.email_id == this.error
      //   this.errorMsg = 'Please enter email!'
      //   this.error = true
      // }
      // else if (this.password == '') {
      //   // this.email_id == this.error
      //   this.errorMsg = 'Please enter password!'
      //   this.error = true
      // }
      // else {
      // this.error == false
      // this.$resources.login.submit({
      //   usr: this.email,
      //   pwd: this.password,
      // });
      // }

      // axios.get('/api/method/login', {
      //   params: {
      //     usr: this.email,
      //     pwd: this.password
      //   }
      // }).then(function (response){
      //   // console.log("response", response.data['home_page']);
      //   this.$router.push(`/home`)
      // }).catch(function (error){
      //   console.log(error);
      // })
      //   axios.post("/api/method/login",{
      //       usr: email,
      //       pwd: password
      //     }
      //   );
      //   this.$session.start();
      //   this.$session.set("jwt", token);
      //   console.log($session.get('jwt'))
    },


    // async login_with_google(){
    //   const googleUser = await this.$gAuth.signIn();
    //   console.log("Google User", googleUser)
    //   console.log("getId", googleUser.getId())
    // }

    // login_with_google(){
    //   window.location = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Fsadbhavnadonatekart.com%3A8000%2Fapi%2Fmethod%2Ffrappe.www.login.login_via_google&state=eyJzaXRlIjogImh0dHA6Ly9zYWRiaGF2bmFkb25hdGVrYXJ0LmNvbTo4MDAwIiwgInRva2VuIjogIjQ3ZDk5YzFmN2QzNTYwZWJhNGY0MzhiNWFiMjA2ZTlmYmM1ZjlkODA0NjIwZDJhZDhlYmIzMGMyIiwgInJlZGlyZWN0X3RvIjogbnVsbH0%3D&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=615226899593-b4jpeolmo526beqkiqvo1bf7ob06rhpb.apps.googleusercontent.com&service=lso&o2v=1&flowName=GeneralOAuthFlow'
    // }

    login_with_google: (response) => {
      let userData = decodeCredential(response.credential)
      let email = userData.email
      let first_name = userData.family_name
      let last_name = userData.given_name
      let image_url = userData.picture

      let url = `http://sadbhavnadonatekart.com:8080/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${email}&first_name=${first_name}&last_name=${last_name}&image_url=${image_url}`
      fetch(url, {
        method: 'GET'
      })
        .then(response => {
          response.json().then(res => {
            console.log("asdf", res.message)
            console.log("asdf", res)
            let token = res.message
            // this.$router.push('/home')
            window.location = 'http://sadbhavnadonatekart.com:8080/home'
            // this.$resources.login_with_google.submit({
            //   login_token: token
            // })
            // fetch('http://sadbhavnadonatekart.com:8000/api/method/frappe.www.login.login_via_token', {
            //   headers: {
            //     'Authorization': `Bearer ${token}`
            //   }
            // })
            // let url1 = `http://sadbhavnadonatekart.com:8000/api/method/frappe.www.login.login_via_token?login_token=${token}`
            // fetch(url1)
            //   .then(r => r.json())
            //   .then(r => {
            //     console.log(r);
            //   })

          });
        })
        .catch(function (error) {
          log('Request failed', error)
        });

      // this.$resources.login_with_google.submit({
      //   user_data: response
      // })
    },

    forgotPassword(){
      var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.email == ''){
        this.emailError = 'Please enter email'
      }
      else if (email.test(this.email) == false && this.email) {
        this.emailError = 'Please enter valid email'
      }
      else{
          this.$resources.forgotPassword.submit({
          email: this.email
        })
      }

    }
    // login_with_google1(){

    // }
  }
};
</script>


