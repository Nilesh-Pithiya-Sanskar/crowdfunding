<template>
    <Navbar/>
    <main>
        <section class="container mx-auto h-full pb-[48px]">
        <!-- <div class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style=" background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png'); ">
        </div> -->
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-6">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <h1
                        class="text-[20px] md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-gray-600 text-bold text-center">
                        {{ $t('Donation Checkout') }}
                    </h1>
                    <div class="relative z-0">
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Name') }}
                                <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="name" type="text" @keyup="nameError = ''" placeholder="Name" required>
                            <p class="text-red-600">{{ $t(nameError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="email" type="email" @keyup="emailError = ''" placeholder="Address" required>
                            <p class="text-red-600">{{ $t(emailError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="phone_number" type="text" @keyup="phoneNumberError = ''" placeholder="Phone number"
                                required>
                            <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                        </div>

                        <!-- <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="pan_number" type="text" @keyup="panError = ''" placeholder="PAN number" required>
                            <p class="text-red-600">{{ $t(panError) }}</p>
                        </div> -->
                        <div class="mb-4">
                            <input type="checkbox" id="anonymous" v-model="anonymous">
                            <label for="checkbox" class="text-sm pl-2">{{$t('Make my donation anonymous')}}</label>
                        </div>
                        <div class="rounded-2xl w-full h-16 bg-white border-2 border-green-500 flex justify-center items-center text-white text-2xl h-auto" v-if="total_price != 0">
                        <!-- <div class="">asdfasdfasd</div> -->
                            <div class="flex flex-wrap font-bold text-lg mt-5">
                                <div class="flex">
                                    <div class="text-[#40b751] ml-5">{{ i_qty }} {{$t('Item(s)')}} |</div>
                                    <div class="text-[#40b751] ml-2">₹ {{ numberWithCommas(total_price) }}</div>
                                </div>
                                <!-- <div>
                                    <input type="checkbox" id="anonymous" v-model="anonymous">
                                    <label for="checkbox" class="text-sm text-green-500 pl-2">Make my donation anonymous</label>
                                </div> -->
                                <div>
                                    <button
                                        class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                                        type="button" @click="donate(total_price, anonymous)"> {{$t('Continue To Pay')}}
                                    </button>
                                </div>                                
                            </div> 
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    <Footer />
</template>
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default{
    name: 'Donation Checkout',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            phone_number: '',
            phoneNumberError: '',
            pan_number: '',
            panError: '',
            error: false,
            total_price: 9000,
            i_qty: 10,
            anonymous: false

        }
    },
    resources: {
        donate() {
            return {
                method: 'sadbhavna_donatekart',
                onSuccess: (res) => {
                    // this.recent_donation = res
                    if (confirm("your registration is successfully now you can login") == true) {
                        this.$router.push(`/sadbhavna/login`)
                    } else {
                        this.$router.go(-1)
                    }
                },
                onError: (error) => {
                    this.$toast({
                        title: "Error",
                        text: error,
                        customIcon: "circle-fail",
                        appearance: "denger",
                    })
                    console.log(error)
                }
            }
        }
    },
    methods:{
        donate() {
            var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var phone = /^[6-9]\d{9}$/;
            var pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            if (this.name == '') {
                this.nameError = 'Enter your name'
            }
            if (this.email == '') {
                this.emailError = 'Enter email'
            }
            else if (email.test(this.email) == false && this.email) {
                this.emailError = 'Enter valid email'
                console.log('email')
            }
            if (this.phone_number == '') {
                this.phoneNumberError = 'Enter phone'
            }
            else if (this.phone_number && phone.test(this.phone_number) == false) {
                this.phoneNumberError = 'Enter valid phone number'
                console.log('phone')
            }
            if (this.pan_number == '') {
                this.panError = 'Enter PAN number'
            }
            else if (this.pan_number && pan.test(this.pan_number) == false) {
                this.panError = 'Enter valid PAN number'
                console.log('PAN')
            }
            else {
                console.log('done')
                this.$resources.donate.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    phone_number: this.phone_number,
                    pan_number: this.pan_number
                })

            }
        },
        numberWithCommas(x) {
            return x.toLocaleString();
        },
    }
    
}
</script>