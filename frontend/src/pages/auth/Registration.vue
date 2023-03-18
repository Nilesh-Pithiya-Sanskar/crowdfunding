<template>
    <Navbar />
    <div class="container mx-auto h-full pb-[48px]">
        <div class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[585px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style="
                                                                                                                                                                                                    background-image: url('../../src/assets/Inter/img/bg-tree.png');
                                                                                                                                                                                                  ">
        </div>
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-12">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <div class="text-[30px] md:text-[30px] lg:text-[36px] py-8 text-gray-600 text-bold text-center">
                        Donor Registration
                    </div>
                    <div class="relative z-0 ">
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            <div class="mr-2">
                                <label class="block text-gray-600 text-base  mb-2">First
                                    Name <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="first_name" type="text" required>
                            </div>
                            <div>
                                <label class="block text-gray-600 text-base  mb-2">Last
                                    Name</label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="last_name" type="text" required>
                            </div>
                        </div>
                        <!-- <div class="flex mb-4">
                            <div class="w-1/2 mr-1">
                                <label class="block text-gray-600 text-base  mb-2">First
                                    Name</label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="first_name" type="text" required>
                            </div>
                            <div class="w-1/2 ml-1">
                                <label class="block text-gray-600 text-base  mb-2">Last
                                    Name</label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="last_name" type="text" required>
                            </div>
                        </div> -->
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Email
                                Address <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model.trim="email" type="email" required>
                            <p class="text-red-600">{{ emailErrorMessage }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Password <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="password" type="password" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Confirm
                                Password <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="conform_password" type="password" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Phone
                                Number <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="phone_number" type="text" required>
                            <p class="text-red-600">{{ phoneErrorMessage }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Pan
                                Number <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  ho ver:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="pan_number" type="text" required>
                        </div>
                        <div class="flex items-center justify-between mt-8">
                            <button
                                class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                type="submit" @click="register()">
                                Register
                            </button>
                        </div>
                        <span class="block text-gray-600 text-base  mb-2"> Already have an account? <router-link
                                to="/sadbhavna/login" class="text-[#40b751]">Sign In</router-link></span>
                        <!-- <a href="/sadbhavna/login">Already have an account? Sign In</a> -->

                        <!-- <p class="text-grey text-xs mt-1"></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
export default {
    name: 'Registration',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            conform_password: '',
            phone_number: '',
            pan_number: ''
        }
    },
    resources: {
        register() {
            return {
                method: 'sadbhavna_donatekart.api.api.register',
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
    watch: {
        email(value) {
            this.email = value;
            this.validateEmail(value);
        },
        phone_number(value) {
            this.phone_number = value;
            this.validatePhoneNumber(value);
        }
    },
    methods: {
        // validateFullname() {
        //     if (this.full_name === '') {
        //         this.fullnameValidity = 'Invalid';
        //     } else {
        //         this.fullnameValidity = 'Valid';
        //     }
        // },
        validateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.emailErrorMessage = ''
            } else {
                this.emailErrorMessage = 'Please enter valid email'
            }
        },
        validatePhoneNumber(phone_number) {
            if (/^[6-9][0-9]{9}$/.test(phone_number)) {
                this.phoneErrorMessage = ''
            } else {
                this.phoneErrorMessage = 'Please enter valid pnone number'
            }
        },
        register() {
            if (this.password == this.conform_password) {
                this.$resources.register.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    phone_number: this.phone_number,
                    pan_number: this.pan_number
                })
            }
            else {
                // alert("Your password is not match")
                this.$toast({
                    title: "Error",
                    text: "Your password is not match",
                    customIcon: "circle-fail",
                    appearance: "denger",
                })
                this.password = ''
                this.conform_password = ''
            }
        }
    }
}
</script>