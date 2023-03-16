<template>
    <Navbar />

  <div class="container mx-auto mb-[150px]">
<div
          class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[498px] sm:h-0 md:h-0 lg:h-0 xl:h-[485px] sm:w-0 md:w-0 lg:w-0 xl:w-[600px]  sm:right-0 md:right-2 lg:right-2 xl:right-0 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
          style="
            background-image: url('../../src/assets/Inter/img/bg-tree.png');
          ">
        </div>
 <div class="container mx-auto h-full">
        <div class="w-full pt-0 md:pt-5 lg:pt-12" >
            <div class="container py-0">
                <div class="w-5/5 md:w-6/6 lg:w-4/6 mx-auto bg-white">
                    <div class="py-1 md:py-4 lg:py-8 px-4 md:px-6 lg:px-10 text-gray-600 text-gray-600 text-center text-[30px] md:text-[32px] lg:text-[40px]">Register & Login
                    </div>
                    <div class="relative py-4 z-0 px-8">
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2" for="email">Enter WhatsApp Number</label>
                            <input class="appearance-none hover:border-[#40b751] border-gray-600 rounded w-full py-2 px-3 text-grey-darker" v-model="email"
                                type="number" >
                            <span class="text-sm text-gray-400"> An OTP will be sent to this whats app number</span>
                        </div>
                        <div class="mb-4">
                            <button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded" >Login with Whatsapp</button>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5"><p class="text-center mx-4 mb-0">Or</p></div>
                        </div>
                        <div class="mb-4">
                            <button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with SMS</button>
                        </div>
                        <div class="mb-4">
                            <button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Email</button>
                        </div>
                        <div class="mb-4">
                           <button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Facebook</button>
                        </div>
                        <div class="mb-4">
                           <button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Google</button>
                        </div>
                        <div class="mb-4">
                           <div class="flex mb-10 justify-between">
                              <span class="text-gray-600">Forget password? <a class="text-[#40b751]" href="/login.html">Click here</a></span><a class="text-[#40b751]" href="registration.html">Register</a>
                           </div>
                        </div>
                        <div class="mb-4">
                           <span class="block text-gray-600 text-center text-base  mb-2"><a class="text-[#40b751]" href="registration.html">Login </a> &nbsp;via ID Password</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


<!--<button @click="login_with_google">Login With Google</button>
{{ isLogin }}-->




<Footer />
</template>
  
<script>
// import github from "@/assets/Inter/img/github.svg";
// import google from "@/assets/Inter/img/google.svg";
import { decodeCredential } from 'vue3-google-login'

import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
// import { ValidationProvider } from 'vee-validate';


export default {
    name: "Auto Login",
    components: { Navbar, Footer },
    data() {
        return {
            // github,
            // google,
            // password: "",
            // email: "",
            // isLogin: false,
        };
    },
    resources: {
        // login_with_google() {
        //     return {
        //         method: 'frappe.www.login.login_via_token',
        //         onSuccess: () => {
        //             console.log("okey")
        //         },
        //         onError: (error) => {
        //             console.log("error", error)
        //         }
        //     }
        // },
        login_with_whatsapp(){
            return{
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
        login_with_google: (response) => {
            console.log("data", response)
            let userData = decodeCredential(response.credential)
            let email = userData.email
            let first_name = userData.family_name
            let last_name = userData.given_name
            let image_url = userData.picture

            console.log("asdfads", userData)

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
                    });
                })
                .catch(function (error) {
                    log('Request failed', error)
                });
        },
        login_with_whatsapp(){
            this.$resources.login_with_whatsapp.submit({
                phone: this.phone
            })
        }
    }
};
</script>
  
  
  