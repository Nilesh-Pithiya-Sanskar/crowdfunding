<template>
    <Navbar />

    <div class="container mx-auto mb-[150px]">
        <div class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[498px] sm:h-0 md:h-0 lg:h-0 xl:h-[485px] sm:w-0 md:w-0 lg:w-0 xl:w-[600px]  sm:right-0 md:right-2 lg:right-2 xl:right-0 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style="background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png');">
        </div>
        <div class="container mx-auto h-full">
            <div class="w-full pt-0 md:pt-5 lg:pt-12">
                <div class="container py-0">
                    <div class="w-5/5 md:w-6/6 lg:w-4/6 mx-auto bg-white">
                        <div
                            class="py-1 md:py-4 lg:py-8 px-4 md:px-6 lg:px-10 text-gray-600 text-gray-600 text-center text-[30px] md:text-[32px] lg:text-[40px]">
                            Register & Login
                        </div>
                        <div class="relative py-4 z-0 px-8">
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2" for="email">Enter WhatsApp Number</label>
                                <input
                                    class="appearance-none hover:border-[#40b751] border-gray-600 rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="phone" type="number">
                                <span class="text-sm text-gray-400"> An OTP will be sent to {{ phone }} whatsapp number</span>
                            </div>
                            <div class="mb-4">
                                <button
                                    class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded"
                                    @click="login_with_whatsapp()">Login with Whatsapp</button>
                            </div>
                            <div class="mb-4">
                                <div
                                    class="flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5">
                                    <p class="text-center mx-4 mb-0">Or</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <button
                                    class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login
                                    with SMS</button>
                            </div>
                            <div class="mb-4">
                                <button
                                    class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login
                                    with Email</button>
                            </div>
                            <div class="mb-4">
                                <button
                                    class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login
                                    with Facebook</button>
                            </div>
                            <!-- <GoogleLogin :callback="login_with_google" class="w-full">
                            <div class="mb-4">
                                <button
                                    class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login
                                    with Google</button>
                            </div>
                        </GoogleLogin> -->
                            <div class="mb-4">
                                <GoogleLogin :callback="login_with_google">
                                </GoogleLogin>
                            </div>

                            <div class="mb-4">
                                <div class="flex mb-10 justify-between">
                                    <span class="text-gray-600">Forget password? 
                                        <a class="text-[#40b751]" href="/sadbhavna/login">Click here</a>
                                    </span>
                                    <a class="text-[#40b751]"
                                        href="/sadbhavna/registration">Register</a>
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="block text-gray-600 text-center text-base mb-2"><a class="text-[#40b751]"
                                        href="/sadbhavna/login">Login </a> &nbsp;via ID Password</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fb-login-button" data-size="medium" data-button-type="login_with_facebook" data-autologout-link="false" data-use-continue-as="true" @click="loginWithFacebook"></div>



    <!-- <GoogleLogin :callback="login_with_google" class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded" prompt auto-login/> -->
    <!--<button @click="login_with_google">Login With Google</button>
{{ isLogin }}-->
<!-- <facebook-login
    appId="1616534218770661"
    @loggedIn="handleLogin"
    @loginFailed="handleLoginFailed"
>
</facebook-login> -->
<!-- <div>-----------------------------------</div> -->
    <!-- <facebook-login class="button"
      appId="1616534218770661"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login> -->

<!-- <button :on-click="onLogin()"></button> -->

    <!-- <facebook-login class="button"
      appId="1616534218770661"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login> -->
    
<!-- <div>-----------------------------------</div> -->
    <Footer />
</template>
  
<script>
// import github from "@/assets/Inter/img/github.svg";
// import google from "@/assets/Inter/img/google.svg";
import { decodeCredential } from 'vue3-google-login';
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

import facebookLogin from 'facebook-login-vuejs';


export default {
    name: "Auto Login",
    components: { Navbar, Footer, facebookLogin},

    data() {
        return {
            phone: '',
            // github,
            // google,
            // password: "",
            email: "",
            // isLogin: false,

            // idImage, loginImage, mailImage, faceImage,
        };
    },
    mounted(){
        FB.init({
            appId            : '1616534218770661',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v16.0'
        })
    },
    resources: {
        // login_with_google() {
        //     return {
        //         method: 'frappe.https://www.login.login_via_token',
        //         onSuccess: () => {
        //             console.log("okey")
        //         },
        //         onError: (error) => {
        //             console.log("error", error)
        //         }
        //     }
        // },
        login_with_whatsapp() {
            return {
                method: 'sadbhavna_donatekart.api.api.login_with_whatsapp',
                onSuccess: (res) => {
                    console.log("okey", res)
                    let otp_message = res[0]
                    let number = res[1]
                    this.$router.push(`/sadbhavna/otp/${otp_message}&${number}`);
                },
                onError: (error) => {
                    console.log("error", error)
                }
            }
        }
    },
    methods: {

        loginwithFacebook(){
            FB.login(response => {
                if(response.authResponse){
                    FB.api('/me', {fields: 'name, email'}, response => {
                        console.log("response", response)
                    })
                }
                else{
                    console.log("cancelled")
                }
            }, {scope: 'public_profile, email'});
        },


        // handleLogin(response) {
        //     console.log("User Successfully Logged In" , response)
        // },
        // handleLoginFailed() {
        //     console.log("User Cancelled or Abort the Login")
        // },


        getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn("data api",userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    },


        
        login_with_google: (response) => {
            // console.log("data", response)
            let userData = decodeCredential(response.credential)
            let email = userData.email
            let first_name = userData.family_name
            let last_name = userData.given_name
            let image_url = userData.picture

            // console.log("asdfads", userData)

            let url = `https://crowdfunding.frappe.cloud/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${email}&first_name=${first_name}&last_name=${last_name}&image_url=${image_url}`
            fetch(url, {
                method: 'GET'
            })
                .then(response => {
                    response.json().then(res => {
                        // console.log("asdf", res.message)
                        // console.log("asdf", res)
                        let token = res.message
                        // this.$router.push('/home')
                        window.location = 'https://crowdfunding.frappe.cloud/sadbhavna'
                        // https://crowdfunding.frappe.cloud/
                    });
                })
                .catch(function (error) {
                    log('Request failed', error)
                });
        },
        login_with_whatsapp() {
            this.$resources.login_with_whatsapp.submit({
                phone: this.phone
            })
        }
    }
};
</script>
  
  
  