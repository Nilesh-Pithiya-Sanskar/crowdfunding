<template>
    <Navbar />
    <div class="container mx-auto h-full">
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-12 bg-grey-lightest">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <div class="py-8 px-10 text-gray-600 text-black text-center text-4xl">{{$t('Verify your contact detail')}}
                    </div>
                    <div class="py-4 px-8">
                        <div class="mb-7">
                            <span class="block text-gray-600 text-base  mb-2">{{ message }}</span>
                            <!-- <span class="text-sm text-gray-400"> Whats app Number : {{ message.number }}</span> -->
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base mb-2" for="email">{{$t('Enter OTP')}}</label>
                            <input  @keyup="otp_message = ''" class="appearance-none border-gray-300 rounded w-full py-2 px-3 text-grey-darker"
                                v-model="otp" type="number" ref="otp">                                
                            <span class="block text-red-600 text-base mb-2">{{ otp_message }}</span>
                        </div>
                        <div class="mb-4 flex flex-wrap justify-between">
                            <!-- <button v-if="countDown == 0"
                                class="appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded"
                                @click="resend_otp()"
                                >Resend OTP</button>
                            <button v-else
                                class="appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded"
                                @click="verify_otp()"
                                >{{$t('Verify OTP')}}</button>
                            <span v-if="countDown != 0">{{ countDown }}</span> -->

                            <button
                                class="appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded"
                                @click="verify_otp()"
                                >{{$t('Verify OTP')}}</button>
                        </div>
                        
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <Dialog v-model="showDialog" >        
        <template #body>
            <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                <h1
                    class="text-2xl md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-green-500 text-bold text-center">
                    {{ $t('Reset Password') }}
                    {{ email }}
                </h1>
                <div class="relative z-0">
                    <div class="mb-4">
                        <input
                            class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                            v-model="password" type="text" @keyup="passwordError = ''" placeholder="Password" required>
                        <p class="text-red-600">{{ $t(passwordError) }}</p>
                    </div>    
                    <div class="mb-4">
                        <input
                            class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                            v-model="re_password" type="text" @keyup="re_passwordError = ''" placeholder="Re-Password" required>
                        <p class="text-red-600">{{ $t(re_passwordError) }}</p>
                    </div>                        
                    <div class="text-center">
                        <button
                            class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                            type="button" @click="resetPassword()"> {{ $t('Set Password') }}
                        </button>
                    </div>                 
                </div>
            </div>
        </template>
    </Dialog>
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { useRoute } from 'vue-router';
import { Dialog } from 'frappe-ui';
export default {
    name: 'OTP',
    components: {
        Navbar,
        Footer,
        Dialog
    },
    data(){
        return{
            message: '',
            number: '',
            otp: '',
            m_type: '',
            
            otp_message: '',
            password: '',
            re_password: '',
            passwordError: '',
            re_passwordError: '',
            email: '',
            showDialog: false,
            countDown: 600
        }
    },
    created () {
            this.countDownTimer()
            const linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://bestdeed.org/otp"
    document.head.appendChild(link);
    }
    else{
      linkElement.href = "https://bestdeed.org/otp"
      document.head.appendChild(linkElement)
    }
        },
    mounted(){
        const name = useRoute();
        document.title = this.$t('OTP | BestDeed')
        this.$nextTick(() => this.$refs.otp.focus())
        this.message = name.params.message
        this.number = name.params.number
        this.m_type = name.params.m_type
        console.log("message", this.message)
        // this.number = name.params.message.number
    },
    resources:{
        verify_otp(){
            return{
                method: 'sadbhavna_donatekart.api.api.verify_otp',
                onSuccess: (res) => {
                    if(res[0]=='failed')
                    {
                        this.otp_message = 'OTP is not match'
                    }
                    else if(res[0] == 'pass'){
                        this.email = res[1]
                        this.showDialog = true
                    }
                    else{
                        var route = this.$cookies.get('route');
                        console.log("route", route)
                        if (route != null){
                            this.$router.go(-2)
                            // this.$router.push(route)
                        }
                        else{
                            this.$router.push(`/`);
                        }
                    }
                    // console.log("verified", res)
                    // this.$router.push('/bestdeed')
                },
                onError: (error) => {
                    console.log("error", error)
                }
            }
        },

        resetPassword(){
            return {
                method: 'sadbhavna_donatekart.api.api.reset_password',
                onSuccess: (res) => {
                    console.log("okey")
                    this.countDownTimer()
                },
                onError: (error) =>{
                    console.log("error")
                }
            }
        },
        login_with_whatsapp(){
            return{
                method: 'sadbhavna_donatekart.api.api.login_with_whatsapp',
                onSuccess: (res) => {
                    console.log("okey")
                    this.countDownTimer()
                },
                onError: (error) =>{
                    console.log("error")
                }
            }
        },
        login_with_sms(){
            return{
                method: 'sadbhavna_donatekart.api.api.login_with_sms',
                onSuccess: (res) => {
                    console.log("okey")
                },
                onError: (error) =>{
                    console.log("error")
                }
            }
        }
        
    },

    methods:{
        verify_otp(){
            if(this.number == ''){
                this.otp_message = 'Please enter OTP'
            }
            else{
            this.$resources.verify_otp.submit({
                number:this.number,
                otp: this.otp,
                m_type: this.m_type
            })
        }
        },
        resetPassword(){
            this.$resources.resetPassword.submit({
                email: this.email,
                password: this.password
            })
        },

        countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            },
        resend_otp(){
            if(this.m_type == 'whatsapp'){
                this.$resources.login_with_whatsapp.submit({
                    phone: this.number
                })
            }
            else if(this.m_type == 'sms'){
                this.$resources.login_with_sms.submit({
                    phone: this.number
                })
            }
        }
    }

}
</script>