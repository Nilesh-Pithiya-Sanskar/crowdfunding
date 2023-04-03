<template>
    <Navbar />
    <div class="container mx-auto">
        <div v-if="openTab == 1"
            class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[542px] sm:w-0 md:w-0 lg:w-0 xl:w-96  sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style="
                                                                                                                                                                                                        background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png');
                                                                                                                                                                                                      ">
        </div>
        <div v-if="openTab == 2"
            class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[300px] sm:h-0 md:h-0 lg:h-0 xl:h-[535px] sm:w-0 md:w-0 lg:w-0 xl:w-96  sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style="
                                                                                                                                                                                                        background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png');
                                                                                                                                                                                                      ">
        </div>
        <div class="container mx-auto h-full">

            <div class="w-full pt-[28px]">
                <div class="container mx-auto py-0">
                    <div class="w-6/6 lg:w:4/6 mx-auto bg-white">
                        <div
                            class="text-[24px] md:text-[30px] lg:text-[36px] px-10 text-[#40b751] font-bold text-center">
                            Campaign Request
                        </div>
                        <div class="relative z-0">
                            <div class=" sm:py-2 md:py-4 lg:py-8 ">
                                <ul
                                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  flex  mb-0 flex-wrap pt-4 ml-10 mr-11 pb-4 flex-row">
                                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a class="mb-3 md:mb-0 lg:mb-0 cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block "
                                            v-on:click="toggleTabs(1)"
                                            v-bind:class="{ 'text-[#40b751] bg-white': openTab !== 1, 'text-white bg-[#40b751]': openTab === 1 }">
                                            NGO
                                        </a>
                                    </li>
                                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a class="cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                            v-on:click="toggleTabs(2)"
                                            v-bind:class="{ 'text-[#40b751] bg-white': openTab !== 2, 'text-white bg-[#40b751]': openTab === 2 }">
                                            Individual Group
                                        </a>
                                    </li>
                                </ul>
                                <div class="px-4 py-2 flex-auto">
                                    <div class="tab-content tab-space">
                                        <div v-if="openTab == 1" class="py-4 px-8">
                                            <div class="mb-4">
                                                <label class="block text-gray-600 text-base  mb-2" for="email">Full
                                                    Name <span class="text-red-600">*</span></label>
                                                <input
                                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                    placeholder="Enter Full Name" v-model="full_name" type="text">
                                                <p class="text-red-600">{{ fullNameError }}</p>
                                            </div>
                                            <div 
                                                class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                <div class="mb-4">
                                                    <label class="block text-gray-600 text-base  mb-2">Organisation
                                                        Name <span class="text-red-600">*</span></label>

                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker"
                                                        type="text" placeholder="Enter Organisation Name" v-model="organisation_name">
                                                    <p class="text-red-600">{{ organizationNameError }}</p>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="block text-gray-600 text-base  mb-2">Organisation
                                                        Website</label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text" placeholder="Enter Organisation Website" v-model="organisation_website">
                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Phone <span
                                                            class="text-red-600">*</span></label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text" placeholder="Enter Phone Number" v-model="phone">
                                                    <p class="text-red-600">{{ phoneError }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Email <span
                                                            class="text-red-600">*</span></label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="email" placeholder="Enter Email" v-model="email">
                                                    <p class="text-red-600">{{ emailError }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Social Media
                                                        Page</label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text" placeholder="Enter Social Media Page" v-model="social_media_page">

                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Campaign
                                                        Story <span class="text-red-600">*</span></label>
                                                    <textarea id="comment" rows="4" v-model="campaign_story"
                                                        class="hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300  focus:ring-0 dark:text-white dark:placeholder-gray-600" placeholder="Enter Campaign Story"></textarea>
                                                    <p class="text-red-600">{{ campaignStoryError }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Beneficiary
                                                        Group <span class="text-red-600">*</span></label>
                                                    <textarea id="comment" rows="4" v-model="beneficiary_group"
                                                        class="hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300  focus:ring-0 dark:text-white dark:placeholder-gray-600" placeholder="Enter Beneficiary Group"></textarea>

                                                    <p class="text-red-600">{{ beneficiaryGroupError }}</p>
                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                                                <button
                                                   class="appearance-none border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751]  tracking-wide  border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded"
                                                    @click="request_campaign()">Campaign Request</button>
                                                <button
                                                   class="cursor-pointer grid sm:place-content-center md:place-content-end lg:place-content-end appearance-non pr-2 text-[#aaa]  py-2 tracking-wide font-bold text-xl rounded"
                                                    @click="request_campaign()">Reset Form</button>
                                            </div>
                                        </div>
                                        <div v-if="openTab == 2" class="py-4 px-8">
                                            <div class="mb-4">
                                                <label class="block text-gray-600 text-base  mb-2" for="email">Full
                                                    Name <span class="text-red-600">*</span></label>
                                                <input
                                                    class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                    v-model="full_nameindividualgroup" placeholder="Enter Full Name" type="text">
                                                <p class="text-red-600">{{ fullNameErrorindividualgroup }}</p>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Phone <span
                                                            class="text-red-600">*</span></label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text" placeholder="Enter Phone Number" v-model="phoneindividualgroup">
                                                    <p class="text-red-600">{{ phoneErrorindividualgroup }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Email <span
                                                            class="text-red-600">*</span></label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="email" placeholder="Enter Email" v-model="emailindividualgroup">
                                                    <p class="text-red-600">{{ emailErrorindividualgroup }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Social Media
                                                        Page</label>
                                                    <input
                                                        class="appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text" placeholder="Enter Social Media Page" v-model="social_media_pageindividualgroup">

                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Campaign
                                                        Story <span class="text-red-600">*</span></label>
                                                    <textarea id="comment" rows="4" v-model="campaign_storyindividualgroup"
                                                        class="hover:border-[#40b751] placeholder-gray-400 w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300  focus:ring-0 dark:text-white dark:placeholder-gray-600" placeholder="Enter Campaign Story"></textarea>
                                                    <p class="text-red-600">{{ campaignStoryErrorindividualgroup }}</p>
                                                </div>
                                                <div class="mb-6">
                                                    <label class="block text-gray-600 text-base  mb-2">Beneficiary
                                                        Group <span class="text-red-600">*</span></label>
                                                    <textarea id="comment" rows="4" v-model="beneficiary_groupindividualgroup"
                                                        class="hover:border-[#40b751] placeholder-gray-400 w-full py-2 px-3 text-gray-900 bg-white border-1 border-gray-300  focus:ring-0 dark:text-white dark:placeholder-gray-600" placeholder="Enter Beneficiary Group"></textarea>

                                                    <p class="text-red-600">{{ beneficiaryGroupErrorindividualgroup }}</p>
                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                                                <button
                                                   class="appearance-none border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751]  tracking-wide  border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded"
                                                    @click="request_campaign()">Campaign Request</button>
                                                <button
                                                   class="cursor-pointer grid sm:place-content-center md:place-content-end lg:place-content-end appearance-non pr-2 text-[#aaa]  py-2 tracking-wide font-bold text-xl rounded"
                                                    @click="request_campaign()">Reset Form</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
   
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Donation Campaign Request",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            openTab: 1,
            full_name: '',
            full_nameindividualgroup: '',
            fullNameError: '',
            fullNameErrorindividualgroup: '',
            campaign_type: '',
            organisation_name: '',
            organizationNameError: '',
            organisation_website: '',
            email: '',
            emailindividualgroup: '',
            emailError: '',
            emailErrorindividualgroup: '',
            phone: '',
            phoneindividualgroup: '',
            phoneError: '',
            phoneErrorindividualgroup: '',
            error: false,
            campaign_story: '',
            campaign_storyindividualgroup: '', 	
            campaignStoryError: '',
            campaignStoryErrorindividualgroup: '',
            social_media_page: '',
            social_media_pageindividualgroup: '',
            beneficiary_group: '',
            beneficiary_groupindividualgroup: '',
            beneficiaryGroupError: '',
            beneficiaryGroupErrorindividualgroup: ''
        }
    },
    // watch: {
    //     email(value) {
    //         this.email = value;
    //         this.request_campaign(value);
    //     }
    // },
    resources: {
        request_campaign() {
            return {
                method: 'sadbhavna_donatekart.api.campaign.request_campaign',
                onSuccess: (res) => {
                    // this.recent_donation = res
                    // this.$toast({
                    //     title: "Success",
                    //     text: "Your Request is successfully sent to sadbhavna donatekart",
                    //     customIcon: "check",
                    // })
                    // this.$router.go();
                    if (confirm("Your Request is successfully sent to sadbhavna donatekart") == true) {
                        this.$router.push(`/sadbhavna`)
                    } else {
                        this.$router.go(-1)
                    }
                },
                onError: (error) => {
                    console.log(error)
                    this.$toast({
                        title: "Error",
                        text: error,
                        customIcon: "circle-fail",
                        appearance: "denger",
                    })
                }
            }
        }
    },

    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
            this.tab = this.tabNumber
        },
        validPassword: function (password) {
            var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            return re.test(password);
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validPhone: function (phone_number) {
            var re = /^[6-9][0-9]{9}$/;
            return re.test(phone_number);
        },
        validName: function (full_name) {
            var re = /^[a-zA-Z\\s]*$/;
            return re.test(full_name)
        },
        request_campaign(email, phone) {
            // console.log("opentab", this.openTab)
            if (this.openTab == 1) {
                this.campaign_type = 'NGO'
                {
                    if (!this.full_name && !this.organisation_name && !this.phone && !this.email && !this.campaign_story && !this.beneficiary_group) {
                        this.fullNameError = 'Please enter Fullname!'
                        this.organizationNameError = 'Please enter organization name!'
                        this.phoneError = 'Please enter phone number!'
                        this.emailError = 'Please enter email!'
                        this.campaignStoryError = 'Please enter campaign story!'
                        this.beneficiaryGroupError = 'Please enter beneficiary group!'
                        this.error == true
                        // return true;
                    }
                    else if (this.full_name == '') {
                        // this.first_name == this.error
                        this.fullNameError = 'Enter valid fullname!'
                        this.error = true
                        console.log('full name')
                    }

                    else if (this.organisation_name == '') {
                        // this.first_name == this.error
                        this.organizationNameError = 'Enter valid organization name!'
                        this.error = true
                        console.log('organization name')
                    }
                    else if (this.phone == '' || !this.validPhone(this.phone)) {
                        // this.first_name == this.error
                        this.phoneError = 'Enter valid phone number!'
                        this.error = true
                        console.log('phone')
                    }
                    else if (this.email == '' || !this.validEmail(this.email)) {
                        // this.first_name == this.error
                        this.emailError = 'Enter valid email!'
                        this.error = true
                        console.log('email')
                    }
                    else if (this.campaign_story == '') {
                        // this.first_name == this.error
                        this.campaignStoryError = 'Enter campaign story!'
                        this.error = true
                        console.log('campaign_story')
                    }
                    else if (this.beneficiary_group == '') {
                        // this.first_name == this.error
                        this.beneficiaryGroupError = 'Enter beneficiary group!'
                        this.error = true
                        console.log('beneficiary_group')
                    }
                    else {
                        console.log('done')
                        this.$resources.request_campaign.submit({
                            full_name: this.full_name,
                            campaign_type: this.campaign_type,
                            organisation_name: this.organisation_name,
                            organisation_website: this.organisation_website,
                            email: this.email,
                            phone: this.phone,
                            campaign_story: this.campaign_story,
                            social_media_page: this.social_media_page,
                            beneficiary_group: this.beneficiary_group
                        })
                        this.error == false

                    }
                    // if (this.full_name == '') {
                    //     this.fullNameError = 'Invalid full name!'
                    //     // console.log("invalid")
                    // }
                    // if (this.organisation_name == '') {
                    //     this.organizationNameError = 'Invalid organization name!'
                    // }
                    // if (this.email == '') {
                    //     this.emailError = 'Invalid email!'
                    // }

                    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    //     this.emailError = ''
                    // } else {
                    //     this.emailError = 'Invalid email!'
                    // }
                    // if (this.phone == '') {
                    //     this.phoneError = 'Invalid phone number!'
                    // }

                    // if (/^[6-9]\d{9}$/.test(phone)) {
                    //     this.phoneError = ''
                    //     console.log("valid")
                    // } else {
                    //     this.phoneError = 'Invalid phone number!'
                    //     console.log("invalid")
                    // }


                    // if (this.campaign_story == '') {
                    //     this.campaignStoryError = 'Invalid campaign story!'
                    // }
                    // if (this.beneficiary_group == '') {
                    //     this.beneficiaryGroupError = 'Invalid beneficiary group!'
                    // }

                    // else {
                    //     alert("Registration successfully")
                    // }
                }
            }
            else {
                this.campaign_type = 'Indivisual/Group'
                {
                    if (!this.full_name && !this.phone && !this.email && !this.campaign_story && !this.beneficiary_group) {
                        this.fullNameErrorindividualgroup = 'Please enter Fullname!'
                        this.phoneErrorindividualgroup = 'Please enter phone number!'
                        this.emailErrorindividualgroup = 'Please enter email!'
                        this.campaignStoryErrorindividualgroup = 'Please enter campaign story!'
                        this.beneficiaryGroupErrorindividualgroup = 'Please enter beneficiary group!'
                        this.error == true
                        // return true;
                    }
                    else if (this.full_name == '') {
                        // this.first_name == this.error
                        this.fullNameError = 'Enter valid fullname!'
                        this.error = true
                        console.log('full name')
                    }
                    else if (this.phone == '' || !this.validPhone(this.phone_number)) {
                        // this.first_name == this.error
                        this.phoneError = 'Enter valid phone number!'
                        this.error = true
                        console.log('phone')
                    }
                    else if (this.email == '' || !this.validEmail(this.email)) {
                        // this.first_name == this.error
                        this.emailError = 'Enter valid email!'
                        this.error = true
                        console.log('email')
                    }
                    else if (this.campaign_story == '') {
                        // this.first_name == this.error
                        this.campaignStoryError = 'Enter campaign story!'
                        this.error = true
                        console.log('campaign_story')
                    }
                    else if (this.beneficiary_group == '') {
                        // this.first_name == this.error
                        this.beneficiaryGroupError = 'Enter beneficiary group!'
                        this.error = true
                        console.log('beneficiary_group')
                    }
                    else {
                        console.log('done')
                        this.$resources.request_campaign.submit({
                            full_name: this.full_name,
                            campaign_type: this.campaign_type,
                            // organisation_name: this.organisation_name,
                            // organisation_website: this.organisation_website,
                            email: this.email,
                            phone: this.phone,
                            campaign_story: this.campaign_story,
                            social_media_page: this.social_media_page,
                            beneficiary_group: this.beneficiary_group
                        })
                        this.error == false

                    }
                    // if (this.full_name == '') {
                    //     this.fullNameError = 'Invalid full name!'
                    //     // console.log("invalid")
                    // }
                    // if (this.email == '') {
                    //     this.emailError = 'Invalid email!'
                    // }

                    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    //     this.emailError = ''
                    // } else {
                    //     this.emailError = 'Invalid email!'
                    // }

                    // if (/^[6-9][0-9]{9}$/.test(phone)) {
                    //     this.phoneError = ''
                    // } else {
                    //     this.phoneError = 'Invalid phone number!'
                    // }




                    // if (this.phone == '') {
                    //     this.phoneError = 'Invalid phone number!'
                    // }
                    // if (this.campaign_story == '') {
                    //     this.campaignStoryError = 'Invalid campaign story!'
                    // }
                    // if (this.beneficiary_group == '') {
                    //     this.beneficiaryGroupError = 'Invalid beneficiary group!'
                    // }

                    // else {
                    //     alert("Registration successfully")
                    // }
                }
            }
            // this.$resources.request_campaign.submit({
            //     full_name: this.full_name,
            //     campaign_type: this.campaign_type,
            //     organisation_name: this.organisation_name,
            //     organisation_website: this.organisation_website,
            //     email: this.email,
            //     phone: this.phone,
            //     campaign_story: this.campaign_story,
            //     social_media_page: this.social_media_page,
            //     beneficiary_group: this.beneficiary_group
            // })

        }
    }
}
</script>