<template>
    <Navbar />

    <section class="flex justify-center gradient-form h-full">
  <div class="container h-full px-8 md:px-14 lg:px-24 xl:px-48 py-10">
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
              <small>{{$t('Login')}} </small>
            </div>
                </div>
                         <div class="relative ">
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base mb-2" for="phone">
                                    {{ $t('Enter Your Number') }}
                                </label>
                                <input @keyup="error = ''"
                                    :class="'appearance-none hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker border', error == '' ? 'border-red-600' : 'border-red-600'"
                                    v-model="phone" ref="number" type="number">

                                <div v-if="error" class="text-red-500">{{ error }}</div>
                                <span v-if="phone && !error" class="text-sm text-gray-400"> {{ $t('An OTP will be sent to')
                                }}
                                    {{ phone }}</span>

                            </div>
                            <div class="mb-4 grid md:grid-cols-2 sm:grid-cols-1">
                                <button
                                    class="appearance-none border-gray-600 rounded mb-5 py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded"
                                    @click="login_with_whatsapp()">{{ $t('Login with Whatsapp') }}</button>

                                <button
                                    class="appearance-none border-gray-600 sm:ml-0 md:ml-2 lg:ml-2 mb-5  rounded py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded"
                                    @click="login_with_sms()">
                                    {{ $t('Login With SMS') }}</button>

                            </div>
                            <div class="mb-4">
                                <div
                                    class="flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5">
                                    <p class="text-center mx-4 mb-0">Or</p>
                                </div>
                            </div></div>
                            <div class="mb-4 grid md:grid-cols-2 sm:grid-cols-1">

                                <div class="text-center">
                                    <GoogleLogin :callback="login_with_google">
                                    </GoogleLogin>
                                </div>

                                <button class="fb-login-button" data-button-type="" data-use-continue-as="true"
                                    data-width="" data-hight="" @click="checkLoginState()">
                                    Login with Facebook
                                </button>
                            </div>
                             <span class="block text-gray-600 text-center text-base mb-2"><a class="text-[#40b751]"
                                    href="/sadbhavna/login">{{ $t('Login Via Email') }}</a></span>
 <span class="block text-gray-600  text-center text-base  mb-2"> {{ $t('New to BestDeed?') }} <router-link
                                to="/sadbhavna/registration" class="font-bold text-[#40b751]">{{ $t('Register now') }}</router-link></span>
              </div>
            </div>

            <!-- Right column container with background and description-->
           <div class="flex items-center rounded-b-lg bg-gradient-to-l from-lime-600 to-green-400 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 class="mb-6 text-xl font-semibold">We are more than just a company</h4>
                <p class="text-sm">{{ $t('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!--<div class=" pl-96 ">
        <div class="imageresponsive absolute  bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:w-0 md:w-0 lg:w-0 xl:w-96  bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style=" background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png'); ">
        </div>
    </div>-->
    <Footer />
</template>
  
<script>
// import github from "@/assets/Inter/img/github.svg";
// import google from "@/assets/Inter/img/google.svg";
import { decodeCredential } from 'vue3-google-login';
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
    name: "Auto Login",
    components: { Navbar, Footer },

    data() {
        return {
            phone: '',
            // github,
            // google,
            // password: "",
            email: "",
            error: "",
            // isLogin: false,
        };
    },
    mounted() {
        document.title = this.$t('Login now | BestDeed')
        this.$nextTick(() => this.$refs.number.focus())
        // 203313835661247
        // 1616534218770661
        // 875989810135839
        FB.init({
            appId: '1616534218770661',
            cookie: true,
            xfbml: true,
            version: 'v13.0'
        });
    },
    resources: {
        login_with_whatsapp() {
            return {
                method: 'sadbhavna_donatekart.api.api.login_with_whatsapp',
                onSuccess: (res) => {
                    console.log("okey", res)
                    let otp_message = res[0]
                    let number = res[1]
                    let m_type = res[2]
                    this.$router.push(`/sadbhavna/otp/${otp_message}&${number}&${m_type}`);
                },
                onError: (error) => {
                    console.log("error", error)
                }
            }
        },
        login_with_sms() {
            return {
                method: 'sadbhavna_donatekart.api.api.login_with_sms',
                onSuccess: (res) => {
                    console.log("okey", res)
                    let otp_message = res[0]
                    let number = res[1]
                    let m_type = res[2]
                    this.$router.push(`/sadbhavna/otp/${otp_message}&${number}&${m_type}`);
                },
                onError: (error) => {
                    console.log("error", error)
                }
            }
        },
        login_with_google(){
            return{
                method: 'sadbhavna_donatekart.api.api.login_with_google',
                onSuccess: (res) => {
                    this.$toast({
                        title: 'Login Success',
                        text: 'You are successfully login to our platform',
                        icon: 'check',
                        position: "top-center",
                    })
                    this.$router.push(`/sadbhavna`);

                    },
                onError: (error) => {
                    console.log('error', error)
                    this.$toast({
                        title: 'Error',
                        text: error,
                        icon: 'x-circle',
                        appearance: 'denger',
                        position: "top-center",
                    })
                },
            }
        }
    },
    methods: {
        login_with_google(response) {
            // console.log("data", response)
            let userData = decodeCredential(response.credential)
            let email = userData.email
            let first_name = userData.family_name
            let last_name = userData.given_name
            let image_url = userData.picture

            this.$resources.login_with_google.submit({
                email: email,
                first_name: first_name,
                last_name: last_name,
                image_url: image_url
            })

            // console.log("asdfads", userData)

            // let url = `https://crowdfunding.frappe.cloud/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${email}&first_name=${first_name}&last_name=${last_name}&image_url=${image_url}`
            // fetch(url, {
            //     method: 'POST'
            // })
            //     .then(response => {
            //         response.json().then(res => {
            //             var route = this.$cookies.get('route');
            //             if (route != null) {
            //                 this.$router.go(-1)
            //                 // this.$router.push(route)
            //             }
            //             else {
            //                 this.$router.push(`/sadbhavna`);
            //                 this.$router.push(`/sadbhavna`);
            //             }
            //             // console.log("asdf", res.message)
            //             // console.log("asdf", res)
            //             // let token = res.message
            //             // this.$router.push('/home')
            //             // window.location = 'https://crowdfunding.frappe.cloud/sadbhavna'
            //             // https://crowdfunding.frappe.cloud/
            //         });
            //     })
            //     .catch(function (error) {
            //         log('Request failed', error)
            //     });
        },
        login_with_whatsapp() {
            var re = /^[6-9][0-9]{9}$/;
            if (this.phone == '') {
                this.error = 'Please enter mobile number for login with Whatsapp'
            }
            else if (re.test(this.phone) == false) {
                this.error = 'Please enter 10 digit mobile number'
            }
            else {
                this.error = ''
                this.$resources.login_with_whatsapp.submit({
                    phone: this.phone
                })
            }
        },
        login_with_sms() {
            var re = /^[6-9][0-9]{9}$/;
            if (this.phone == '') {
                this.error = 'Please enter mobile number for login with SMS'
            }
            else if (re.test(this.phone) == false) {
                this.error = 'Please enter 10 digit mobile number'
            }
            else {
                this.$resources.login_with_sms.submit({
                    phone: this.phone
                })
            }
        },
        checkLoginState() {
            console.log("fb called")
            FB.getLoginStatus(function (response) {
                console.log("login state response", response)
                if (response.status === 'connected') {
                    // User is logged in with Facebook, so you can retrieve user information here
                    FB.api('/me', function (userInfo) {
                        console.log('UserInfo:', userInfo);
                    });
                    // FB.api(
                    //     '/me',
                    //     'GET',
                    //     {"fields":"id,email,picture,gender,first_name,last_name,name"},
                    //     function(response) {
                    //         console.log("fb data", response)
                    //     }
                    // );
                } else {
                    // User is not logged in with Facebook, or user did not grant permission to your app
                    console.log('User is not logged in with Facebook');
                }
            });
        }
    }
};
</script>