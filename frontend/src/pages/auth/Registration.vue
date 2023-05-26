<template>
    <Navbar />
    <section>
        <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
            <div class="z-0 ">
                <img class="w-full h-auto object-cover bg-left">
            </div>
            <div class="z-10 col-span-2 layout">
                <div class="pb-[43px]">
                    <div class="w-0 w-full md:w-[150px] lg:w-[350px] mx-auto bg-white">
                        <h1
                            class="text-[25px] md:text-[30px] lg:text-[36px] font-bold py-4  text-[#40b751] text-bold text-center">
                            {{ $t('Donor Registration') }}
                        </h1>
                        <div class="relative z-0">
                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                                <div class="mr-2 mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('First Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="first_name" @keyup="firstNameError = ''" type="text"
                                        :placeholder="$t('Enter First Name')" required ref="first_name">
                                    <p class="text-red-600">{{ $t(firstNameError) }}</p>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('Last Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="last_name" @keyup="firstNameError = ''" type="text"
                                        :placeholder="$t('Enter Last Name')" required>
                                    <p class="text-red-600">{{ $t(lastNameError) }}</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                    <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="email" type="email" @keyup="emailError = ''" :placeholder="$t('Enter Email')"
                                    required>
                                <p class="text-red-600">{{ $t(emailError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Password') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="password" type="password" @keyup="passwordError = ''"
                                    :placeholder="$t('Enter Password')" required>
                                <p class="text-red-600">{{ $t(passwordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Confirm Password') }}
                                    <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="conform_password" type="password" @keyup="confirmPasswordError = ''"
                                    :placeholder="$t('Enter Confirm Password')" required>
                                <p class="text-red-600">{{ $t(confirmPasswordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="phone_number" type="tel" @keyup="phoneNumberError = ''"
                                    :placeholder="$t('Enter Phone Number')" required>
                                <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="pan_number" type="text" @keyup="panError = ''"
                                    :placeholder="$t('Enter PAN Number')" required>
                                <p class="text-red-600">{{ $t(panError) }}</p>
                            </div>
                            <div class="flex items-center justify-between mt-8">
                                <button
                                    class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                    type="submit" @click="register()">
                                    {{ $t('Register') }}
                                </button>
                            </div>
                            <span class="block text-gray-600 text-base"> {{ $t('Already have an account?') }}
                                <router-link to="/login" class="text-[#40b751]">{{ $t('Sign In') }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid content-end z-0 ">
                <img class="w-full h-auto object-cover bg-right">
            </div>
        </div>
    </section>
    <!-- <section class="hidden md:block lg:block">
        <div class="grid grid-cols-4">
            <div class="z-0 ">
                <img class="w-full h-auto object-cover" src="../../assets/Inter/img/bg-left.png">
            </div>
            <div class="col-span-2">
                <div class="pb-[43px]">
                    <div class="w-0 md:w-full lg:w-4/6 mx-auto bg-white">
                        <h1
                            class="text-[20px] md:text-[30px] lg:text-[36px] font-bold py-4  text-[#40b751] text-bold text-center">
                            {{ $t('Donor Registration') }}
                        </h1>
                        <div class="relative z-0">
                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                                <div class="mr-2 mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('First Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="first_name" @keyup="firstNameError = ''" type="text"
                                        placeholder="Enter First Name" required ref="first_name">
                                    <p class="text-red-600">{{ $t(firstNameError) }}</p>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('Last Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="last_name" @keyup="firstNameError = ''" type="text"
                                        placeholder="Enter Last Name" required>
                                    <p class="text-red-600">{{ $t(lastNameError) }}</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                    <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="email" type="email" @keyup="emailError = ''" placeholder="Enter Email"
                                    required>
                                <p class="text-red-600">{{ $t(emailError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Password') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="password" type="password" @keyup="passwordError = ''"
                                    placeholder="Enter Password" required>
                                <p class="text-red-600">{{ $t(passwordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Confirm Password') }}
                                    <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="conform_password" type="password" @keyup="confirmPasswordError = ''"
                                    placeholder="Enter Confirm Password" required>
                                <p class="text-red-600">{{ $t(confirmPasswordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="phone_number" type="tel" @keyup="phoneNumberError = ''"
                                    placeholder="Enter Phone Number" required>
                                <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="pan_number" type="text" @keyup="panError = ''" placeholder="Enter PAN Number"
                                    required>
                                <p class="text-red-600">{{ $t(panError) }}</p>
                            </div>
                            <div class="flex items-center justify-between mt-8">
                                <button
                                    class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                    type="submit" @click="register()">
                                    {{ $t('Register') }}
                                </button>
                            </div>
                            <span class="block text-gray-600 text-base"> {{ $t('Already have an account?') }}
                                <router-link to="/login" class="text-[#40b751]">{{ $t('Sign In') }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid content-end z-0 ">
                <img class="w-full h-auto object-cover" src="../../assets/Inter/img/bg-right.png">
            </div>
        </div>
    </section> -->
    <!-- <div class="block md:hidden lg:hidden">
        <div class="container mx-auto h-full pb-[48px]">
            <div class="w-full sm:pt-0 md:pt-5 lg:pt-6">
                <div class="container mx-auto py-0">
                    <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                        <div
                            class="text-[25px] md:text-[30px] lg:text-[36px] font-bold py-4 px-2 text-[#40b751] text-bold text-center">
                            {{ $t('Donor Registration') }}
                        </div>
                        <div class="relative z-0">
                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                                <div class="mr-2 mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('First Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="first_name" @keyup="firstNameError = ''" type="text"
                                        placeholder="Enter First Name" required ref="first_name">
                                    <p class="text-red-600">{{ $t(firstNameError) }}</p>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-base  mb-2">{{ $t('Last Name') }} <span
                                            class="text-red-600">*</span></label>
                                    <input
                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                        v-model="last_name" @keyup="firstNameError = ''" type="text"
                                        placeholder="Enter Last Name" required>
                                    <p class="text-red-600">{{ $t(lastNameError) }}</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                    <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="email" type="email" @keyup="emailError = ''" placeholder="Enter Email"
                                    required>
                                <p class="text-red-600">{{ $t(emailError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Password') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="password" type="password" @keyup="passwordError = ''"
                                    placeholder="Enter Password" required>
                                <p class="text-red-600">{{ $t(passwordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Confirm Password') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="conform_password" type="password" @keyup="confirmPasswordError = ''"
                                    placeholder="Enter Confirm Password" required>
                                <p class="text-red-600">{{ $t(confirmPasswordError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="phone_number" type="tel" @keyup="phoneNumberError = ''"
                                    placeholder="Enter Phone Number" required>
                                <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="pan_number" type="text" @keyup="panError = ''" placeholder="Enter PAN Number"
                                    required>
                                <p class="text-red-600">{{ $t(panError) }}</p>
                            </div>
                            <div class="flex items-center justify-between mt-8">
                                <button
                                    class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                    type="submit" @click="register()">
                                    {{ $t('Register') }}
                                </button>
                            </div>
                            <span class="block text-gray-600 text-base  mb-2"> {{ $t('Already have an account?') }}
                                <router-link to="/login" class="text-[#40b751]">{{ $t('Sign In') }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="container mx-auto h-full pb-[48px]">
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-6">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <h1
                        class="text-[20px] md:text-[30px] lg:text-[36px] font-bold py-8 px-10 text-[#40b751] text-bold text-center">
                        {{ $t('Donor Registration') }}
                    </h1>
                    <div class="relative z-0">
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            <div class="mr-2 mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('First Name') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="first_name" @keyup="firstNameError = ''" type="text"
                                    placeholder="Enter First Name" required ref="first_name">
                                <p class="text-red-600">{{ $t(firstNameError) }}</p>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">{{ $t('Last Name') }} <span
                                        class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                    v-model="last_name" @keyup="firstNameError = ''" type="text"
                                    placeholder="Enter Last Name" required>
                                <p class="text-red-600">{{ $t(lastNameError) }}</p>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Email') }}
                                <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="email" type="email" @keyup="emailError = ''" placeholder="Enter Email" required>
                            <p class="text-red-600">{{ $t(emailError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Password') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="password" type="password" @keyup="passwordError = ''" placeholder="Enter Password"
                                required>
                            <p class="text-red-600">{{ $t(passwordError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Confirm Password') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="conform_password" type="password" @keyup="confirmPasswordError = ''"
                                placeholder="Enter Confirm Password" required>
                            <p class="text-red-600">{{ $t(confirmPasswordError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('Phone Number') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="phone_number" type="tel" @keyup="phoneNumberError = ''"
                                placeholder="Enter Phone Number" required>
                            <p class="text-red-600">{{ $t(phoneNumberError) }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">{{ $t('PAN Number') }} <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 focus:text-black focus:font-semibold"
                                v-model="pan_number" type="text" @keyup="panError = ''" placeholder="Enter PAN Number"
                                required>
                            <p class="text-red-600">{{ $t(panError) }}</p>
                        </div>
                        <div class="flex items-center justify-between mt-8">
                            <button
                                class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                type="submit" @click="register()">
                                {{ $t('Register') }}
                            </button>
                        </div>
                        <span class="block text-gray-600 text-base  mb-2"> {{ $t('Already have an account?') }} <router-link
                                to="/login" class="text-[#40b751]">{{ $t('Sign In') }}</router-link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" pl-96 ">
        <div class="imageresponsive absolute  bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:w-0 md:w-0 lg:w-0 xl:w-96  bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style=" background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png'); ">
        </div>
    </div> -->
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
            last_name: '',
            lastNameError: '',
            first_name: '',
            firstNameError: '',
            last_name: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            conform_password: '',
            confirmPasswordError: '',
            phone_number: '',
            phoneNumberError: '',
            pan_number: '',
            panError: '',
            error: false,

        }
    },
    created() {
        document.title = this.$t('Register | BestDeed')
        const linkElement = document.querySelector('link[rel="canonical"]');
        if (!linkElement) {
            var link = document.createElement('link');
            link.rel = 'canonical';
            link.href = "https://bestdeed.org/registration"
            document.head.appendChild(link);
        }
        else {
            linkElement.href = "https://bestdeed.org/registration"
            document.head.appendChild(linkElement)
        }
    },
    mounted() {
        this.$nextTick(() => this.$refs.first_name.focus())
    },
    resources: {
        register() {
            return {
                method: 'sadbhavna_donatekart.api.api.register',
                onSuccess: (res) => {
                    console.log("res", res)
                    if (res == 'This email is already registered') {
                        this.emailError = this.$t('This email is already registered')
                    }
                    else if (res == 'This phone number is already registered') {
                        this.phoneNumberError = this.$t('This phone number is already registered')
                    }
                    else {
                        if (confirm("your registration is successfully now you can login") == true) {
                            this.$router.push(`/login`)
                        } else {
                            this.$router.go(-1)
                        }
                    }
                },
                onError: (error) => {
                    this.$toast({
                        title: "Error",
                        text: error,
                        icon: "x-circle",
                        appearance: "denger",
                        position: "top-center",
                    })
                    console.log(error)
                }
            }
        }
    },
    methods: {

        // validPassword: function (password) {
        //     var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        //     return re.test(password);
        // },
        // validEmail: function (email) {
        //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(email);
        // },

        // validPhone: function (phone_number) {
        //     var re = /^[6-9][0-9]{9}$/;
        //     return re.test(phone_number);
        // },
        // validName: function (first_name) {
        //     var re = /^[A-Za-z]+$/;
        //     return re.test(first_name)
        // },
        // validPAN: function (pan_number) {
        //     var re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        //     return re.test(pan_number)
        // },
        register() {
            var pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var phone = /^[6-9]\d{9}$/;
            var pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            // if (!this.first_name && !this.email && !this.password && !this.conform_password && !this.phone_number && !this.pan_number) {
            //     this.firstNameError = 'Enter firstname!'
            //     this.emailError = 'Enter email!'
            //     this.passwordError = 'Enter password'
            //     this.confirmPasswordError = 'Your password is not match!'
            //     this.phoneNumberError = 'Enter phone!'
            //     this.panError = 'Enter PAN number'
            //     // this.error == true
            //     // return true;
            // }
            if (this.first_name == '') {
                this.firstNameError = this.$t('Enter first name')
            }
            if (this.last_name == '') {
                this.lastNameError = this.$t('Enter last name')
            }
            if (this.email == '') {
                this.emailError = this.$t('Enter email')
            }
            else if (email.test(this.email) == false && this.email) {
                this.emailError = this.$t('Enter valid email')
                console.log('email')
            }
            if (this.password == '') {
                this.passwordError = this.$t('Enter password')
            }
            else if (this.password && pw.test(this.password) == false) {
                this.passwordError = this.$t('Enter strong password, minimum eight characters, at least one letter, one number and one special character')
                console.log('pw')
            }
            if (this.conform_password == '') {
                this.confirmPasswordError = this.$t('Enter confirm password')
            }
            if (this.conform_password != this.password) {
                this.confirmPasswordError = this.$t('Your password is not match')
            }
            if (this.phone_number == '') {
                this.phoneNumberError = this.$t('Enter phone number')
            }
            else if (this.phone_number && phone.test(this.phone_number) == false) {
                this.phoneNumberError = this.$t('Enter valid phone number')
                console.log('phone')
            }
            if (this.pan_number == '') {
                this.panError = this.$t('Enter PAN number')
            }
            else if (this.pan_number && pan.test(this.pan_number) == false) {
                this.panError = this.$t('Enter valid PAN number')
                console.log('PAN')
            }
            else {
                console.log('done')
                this.$resources.register.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    phone_number: this.phone_number,
                    pan_number: this.pan_number
                })

            }

            // }
            // if (!this.first_name && !this.email && !this.password && !this.conform_password && !this.phone_number && !this.pan_number) {
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.emailError = 'Enter valid email!'
            //     this.passwordError = 'Enter strong password, minimum eight characters, at least one letter, one number and one special character!'
            //     this.confirmPasswordError = 'Your password is not match!'
            //     this.phoneNumberError = 'Enter valid phone number!'
            //     this.panError = 'Enter valid PAN number'
            //     this.error == true
            //     // return true;
            // }
            // else if (this.first_name == '' || !this.validName(this.first_name)) {
            //     // this.first_name == this.error
            //     this.firstNameError = 'Enter valid firstname!'
            //     this.error = true
            //     console.log('firstname')
            // }
            // else if (this.email == '' || !this.validEmail(this.email)) {
            //     // this.email_id == this.error
            //     this.emailError = 'Enter valid email!'
            //     this.error = true
            //     console.log('email')
            // }
            // else if (this.password == '' || !this.validPassword(this.password)) {
            //     // this.subject == this.error
            //     this.passwordError = 'Enter strong password, minimum eight characters, at least one letter, one number and one special character!'
            //     this.error = true
            //     console.log('password')
            // }
            // else if (this.conform_password == '' || this.conform_password != this.password) {
            //     // this.subject == this.error
            //     this.confirmPasswordError = 'Your password is not match!'
            //     this.error = true
            //     console.log('con_pw')
            // }
            // else if (this.phone_number == '' || !this.validPhone(this.phone_number)) {
            //     // this.subject == this.error
            //     this.phoneNumberError = 'Enter valid phone number!'
            //     this.error = true
            //     console.log('phone')
            // }
            // else if (this.pan_number == '' || !this.validPAN(this.pan_number)) {
            //     // this.subject == this.error
            //     this.panError = 'Enter valid PAN number'
            //     this.error = true
            //     console.log('pan')
            // }
            // else {
            //     console.log('done')
            //     this.$resources.register.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         phone_number: this.phone_number,
            //         pan_number: this.pan_number
            //     })
            //     this.error == false


            // }


            // if (this.first_name == '') {
            //     this.firstNameError = 'Invalid first name!'
            // }

            // if (this.email == '') {
            //     this.emailError = 'Invalid email!'
            // }

            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'Invalid email!'
            // }

            // if (this.phone_number == '') {
            //     this.phoneNumberError = 'Invalid password!'
            // }

            // if (this.password == '') {
            //     this.passwordError = 'Invalid password!'
            // }

            // if (this.conform_password == '') {
            //     this.confirmPasswordError = 'Invalid confirm password!'
            // }
            // else if (this.password == this.conform_password) {
            //     this.$resources.register.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         phone_number: this.phone_number,
            //         pan_number: this.pan_number
            //     })
            // }

            // if (this.password == this.conform_password) {
            //     this.$resources.register.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         phone_number: this.phone_number,
            //         pan_number: this.pan_number
            //     })
            // }
            // else {
            //     // alert("Your password is not match")
            //     this.$toast({
            //         title: "Error",
            //         text: "Your password is not match",
            //         customIcon: "circle-fail",
            //         appearance: "denger",
            //     })
            //     this.password = ''
            //     this.conform_password = ''
            // }
        }
    }
}
</script>
<style>
.bg-left {
    content: url('../../assets/Inter/img/bg-left.png');
}

@media (max-width:767px) {
    .bg-left {
        display: none;
    }
}

.bg-right {
    content: url('../../assets/Inter/img/bg-right.png');
}

@media (max-width:767px) {
    .bg-right {
        display: none;
    }
}

@media (max-width:1681px) and (min-width:1287px) {
    .layout {
        padding-left: 100px;
        padding-right: 100px;
    }
}

@media (min-width:1682px) {
    .layout {
        padding-left: 180px;
        padding-right: 180px;
    }
}

@media (max-width:767px) {
    .layout {
        padding-left: 150px;
        padding-right: 150px;

    }
}

@media (max-width:654px) {
    .layout {
        padding-left: 100px;
        padding-right: 100px;

    }
}


@media (max-width:512px) {
    .layout {
        padding-left: 70px;
        padding-right: 70px;

    }
}

@media (max-width:444px) {
    .layout {
        padding-left: 20px;
        padding-right: 20px;

    }
}
</style>