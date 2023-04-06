<template>
    <Navbar/>
    <div class="container mx-auto h-full pb-[48px]">
        <!-- <div class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style=" background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png'); ">
        </div> -->
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-6">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <h1
                        class="text-[20px] md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-gray-600 text-bold text-center">
                        {{ $t('Reset Password') }}
                    </h1>
                    <div class="relative z-0">
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Password') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="password" type="password" @keyup="passwordError = ''" placeholder="Password"
                                required>
                            <p class="text-red-600">{{ $t(passwordError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Confirm Password') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="conform_password" type="password" @keyup="confirmPasswordError = ''"
                                placeholder="Confirm password" required>
                            <p class="text-red-600">{{ $t(confirmPasswordError) }}</p>
                        </div>
                        <div class="flex items-center justify-between mt-8">
                            <button
                                class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                type="submit" @click="resetPassword()">
                                {{ $t('Set Password') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" pl-96 ">
        <div class="imageresponsive absolute  bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:h-0 md:h-0 lg:h-0 xl:h-[430px] sm:w-0 md:w-0 lg:w-0 xl:w-96  bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style=" background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png'); ">
        </div>
    </div>
    <Footer />
</template>
<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { useRoute } from 'vue-router';
export default{
    name: "Reset Password",
    components:{
        Navbar,
        Footer,
    },
    created(){
        const name = useRoute();
        this.email = name.params.email,
        this.key = name.params.key
    },
    data(){
        return{
            email: '',
            key: '',
            password: '',
            confirm_password: '',
            passwordError: '',
            confirmPasswordError: '',
        }
    },
    resources:{
        resetPassword(){
            return {
                method: 'sadbhavna_donatekart.api.api.reset_password',
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
        resetPassword(){
            this.$resources.resetPassword.submit({
                email: this.email,
                password: this.password,
                key: this.key
            })
        }
    }

}

</script>