<template>
    <Dialog v-model="showDialog" >
        
        <template #body>

                    <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                        <h1
                            class="text-2xl md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-green-500 text-bold text-center">
                            {{ $t('Donation Checkout') }}
                        </h1>
                        <div class="relative z-0">
                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Name') }}
                                    <span class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="name" type="text" @keyup="nameError = ''" placeholder="Name" required>
                                <p class="text-red-600">{{ $t(nameError) }}</p>
                            </div>
                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                    <span class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="email" type="email" @keyup="emailError = ''" placeholder="Email" required>
                                <p class="text-red-600">{{ $t(emailError) }}</p>
                            </div>

                            <div class="mb-4">
                                <!-- <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                        class="text-red-600">*</span></label> -->
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="phone_number" type="text" @keyup="phoneNumberError = ''"
                                    placeholder="Phone number" required>
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
                                <label for="checkbox" class="text-sm pl-2">{{ $t('Make my donation anonymous') }}</label>
                            </div>

                            <div class="mb-4">
                                <div class="flex justify-center">
                                    <div class="text-[#40b751] text-lg font-bold ml-5">{{ i_qty }} {{ $t('Item(s)') }} |</div>
                                    <div class="text-[#40b751] text-lg font-bold ml-2">₹ {{ numberWithCommas(total_price) }}</div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button
                                    class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                                    type="button" @click="donate(total_price, anonymous)"> {{ $t('Continue To Pay') }}
                                </button>
                            </div>                           
                        </div>
                    </div>    
        </template>
    </Dialog>
</template>
<script>
import { Dialog } from 'frappe-ui'
export default {
    name: "Donation Checkout",
    props: {
        i_qty: {
            type: Number,
            default: 0
        },
        total_price: {
            type: Number,
            default: 0
        },
        // showCheckout:{
        //     type: Boolean,
        //     required: true
        // }
    },
    components: {
        Dialog
    },
    data() {
        return {
            showDialog: true,
            nameError: '',
            emailError: '',
            phoneNumberError: '',
            panError: '',
            pan_number: '',
            error: false,

            email: '',
            name: '',
            phone_number: '',
            anonymous: false,
        }
    },
    methods: {
        donate() {
            var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var phone = /^[6-9]\d{9}$/;
            // var pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
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
            // if (this.pan_number == '') {
            //     this.panError = 'Enter PAN number'
            // }
            // else if (this.pan_number && pan.test(this.pan_number) == false) {
            //     this.panError = 'Enter valid PAN number'
            //     console.log('PAN')
            // }
            else {
                console.log('done')
                this.$emit('donate_checkout', this.anonymous, this.name, this.email, this.phone_number)
                
            }
        },
        numberWithCommas(x) {
            return x.toLocaleString();
        },
    }

}
</script>