<template>
    <Navbar />
    <div class="container mx-auto h-full pb-[48px]">
        <div

          class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
          style="
            background-image: url('../../src/assets/Inter/img/bg-tree.png');
          ">
        </div>
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-12">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <div class="text-[20px] md:text-[30px] lg:text-[36px] py-8 px-10 text-gray-600 text-bold text-center">Donor Registration
                    </div>
                    <div class="relative z-0 py-4 px-8">
                        <div class="flex mb-4">
                            <div class="w-1/2 mr-1">
                                <label class="block text-gray-600 text-base  mb-2">First
                                    Name</label>
                                <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="first_name" type="text" required>
                            </div>
                            <div class="w-1/2 ml-1">
                                <label class="block text-gray-600 text-base  mb-2">Last
                                    Name</label>
                                <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="last_name" type="text" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Email
                                Address</label>
                            <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="email" type="email" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Password</label>
                            <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="password" type="password" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Confirm
                                Password</label>
                            <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="conform_password" type="password" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Phone
                                Number</label>
                            <input class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="phone_number" type="number" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Pan
                                Number</label>
                            <input class="appearance-none border-gray-300  ho ver:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="pan_number" type="text" required>
                        </div>
                        <div class="flex items-center justify-between mt-8">
                            <button
                                class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                type="submit" @click="register()">
                                Register
                            </button>
                        </div>
                        <span class="block text-gray-600 text-base  mb-2"> Already have an account? <router-link to="/sadbhavna/login" class="text-[#40b751]">Sign In</router-link></span>
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
    methods: {
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