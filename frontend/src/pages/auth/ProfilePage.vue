<template>
  <main class="profile-page" v-if="user_data">
    <section class="h-500-px bg-blueGray-200">
      <Navbar />
      <div class="pb-4 bg-blueGray-200">
        <div class="container mx-auto px-4 pt-96">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div v-if="user_data.data.user_image" class="relative">
                    <img :src="user_data.data.user_image"
                      class="shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px" />
                    <!-- <Avatar :imageURL="http://sadbhavnadonatekart.com:8080/files/students.svguser_data.user_image" label="Felix" size="lg" /> -->
                  </div>
                  <div v-else class="relative">
                    <div
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                    </div>
                  </div>
                </div>
                <div class="lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center" v-for="roles in user_data.data.roles">
                  <div class="py-6 px-3 mt-32 sm:mt-0" v-if="roles.role == 'Donor'">
                    <!-- <router-link to="/sadbhavna"
                                        class="bg-green-500  uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded  sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Donate More
                                    </router-link> -->
                    <button v-if="!edit_profile" @click="edit()"
                      class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded lg:ml-0 md:ml-0 sm:ml-32 ease-linear transition-all duration-150"
                      type="button">
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div v-if="user_data" v-for="roles in user_data.data.roles" class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div v-if="roles.role == 'Donor'" class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ donor_count_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">Total Donation Campaign</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ donor_total_donation_amount }}
                      </span>
                      <span class="text-sm text-blueGray-500">Total Donate Amount</span>
                    </div>
                    <!-- <div class="lg:mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            89
                                        </span>
                                        <span class="text-sm text-blueGray-400">Comments</span>
                                    </div> -->
                  </div>
                  <div v-else-if="roles.role == 'Ngo'" class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ campaign_report.total_live_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">Total Live Campaign</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blue-500">
                        {{ campaign_report.total_pending_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">Total Pending Campaign</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-red-500">
                        {{ campaign_report.total_rejected_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">Total Rejected Campaign</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-32">
                <div class="container mx-auto h-full">
                  <div class="w-full bg-grey-lightest">
                    <div class="container mx-auto py-0">
                      <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                        <!-- <div class="py-8 px-10 text-gray-600 text-black text-base text-4xl">Register & Login
                                        </div> -->
                        <form>
                          <div class="">
                            <div v-if="!edit_profile" class="text-center">
                              <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                {{ user_data.data.full_name }}
                              </h3>
                              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <div>{{ user_data.data.email }}</div>
                                <div>{{ user_data.data.phone }}</div>
                              </div>
                            </div>
                            <div v-else class="text-center">
                              <!-- <div class="flex mb-4"> -->
                              <div
                                class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mb-4">
                                <div>
                                  <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First
                                    Name</label>
                                  <input class="appearance-none form-control block border rounded w-full text-grey-darker"
                                    v-model="first_name" placeholder="Your first name" type="text" required />
                                </div>
                                <div>
                                  <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last
                                    Name</label>
                                  <input class="appearance-none border form-control block rounded w-full text-grey-darker"
                                    v-model="last_name" type="text" placeholder="Your last name" required />
                                </div>
                              </div>
                              <!-- </div> -->
                              <!-- <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2"
                                                            for="email">Email
                                                            Address</label>
                                                        <input
                                                            class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                            v-model="email" type="email" placeholder="Your email address"
                                                            required>
                                                    </div> -->
                              <div class="mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="number">Phone
                                  Number <span class="text-red-600">*</span></label>
                                <input
                                  class="appearance-none border form-control block rounded w-full py-2 text-grey-darker"
                                  v-model="phone" type="number" placeholder="Your phone number" required />
                              </div>
                              <!-- <div></div> -->
                              <button @click="save()"
                                class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150"
                                type="button">
                                Save
                              </button>
                              <button @click="cancel()"
                                class="bg-gray-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150"
                                type="button">
                                cancel
                              </button>
                              <!-- <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2"
                                                            for="pan number">Pan
                                                            Number</label>
                                                        <input
                                                            class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                            v-model="pan_number" type="text" placeholder="Your pan number"
                                                            required>
                                                    </div> -->
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            An artist of considerable range, Jenna the name taken by
                                            Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                            performs and records all of his own music, giving it a
                                            warm, intimate feel with a solid groove structure. An
                                            artist of considerable range.
                                        </p>
                                        <a href="javascript:void(0)" class="font-normal text-emerald-500">
                                            Show more
                                        </a>
                                    </div>
                                </div>
                            </div> -->
              <div v-if="user_data" v-for="roles in user_data.data.roles">
                <div v-if="roles.role == 'Donor'">
                  <div v-if="donation_details.data != ''" class="text-center pt-4 text-2xl text-gray-600">
                    Your Donations
                  </div>
                  <div v-if="donation_details.data != ''" class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Campaign Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Amount
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Date
                                </th>
                                <!-- <th scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                      Mode of Payment
                                  </th> -->
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Download 80G Certificate
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="donation in donation_details.data"
                                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ donation.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ donation.amount }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ donation.date }}
                                </td>
                                <!-- <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ donation.mode_of_payment }}</td> -->
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer"
                                  @click="
                                    download_80g(donation.name, donation.date)
                                  ">
                                  Download
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-center font-bold text-gray-500">
                      Donate Item to see Donations and Download Certificate
                    </div>
                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                      <router-link to="/sadbhavna">Click Here To Explore Campaign</router-link>
                    </div>
                  </div>
                </div>
                <!-- if user role is ngo -->
                <div v-else-if="roles.role == 'Ngo'">
                  <!-- {{ campaign_details }} -->
                  <div v-if="campaign_details.data != ''" class="text-center text-2xl text-gray-600">
                    Your Campaign
                  </div>
                  <div v-if="campaign_details.data != ''" class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Campaign Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Campaign Category
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Requested Amount
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Raised Amount
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Start Date
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  End Date
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="campaign in campaign_details"
                                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ campaign.campaign_title }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ campaign.campaign_category }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ campaign.donation_amount }}
                                </td>
                                <td class="text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap">
                                  {{ campaign.raised_amount }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ campaign.start_date }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {{ campaign.end_date }}
                                </td>
                                <!-- <td
                                  class="text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap"
                                >
                                  {{ campaign.status }}
                                </td> -->

                                <td
                                  :class="['text-sm font-bold px-6 py-4 whitespace-nowrap', (campaign.status === 'Live' ? 'text-green-500' : ''), (campaign.status === 'Pending' ? 'text-blue-500' : ''), (campaign.status === 'Rejected' ? 'text-red-500' : ''), (campaign.status === 'Closed' ? 'text-orange-500' : '')]">
                                  {{ campaign.status }}
                                </td>

                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="text-center text-sm leading-normal m-4 text-blue-400 font-bold">
                          <router-link to="/sadbhavna/request-campaign">Request New Campaign</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-center font-bold text-gray-500">
                      You don't have any campaign live yet.
                    </div>
                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                      <router-link to="/sadbhavna/request-campaign">Click Here To Request A New Campaign</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </main>
</template>
<!-- <template>
    <main class="profile-page" v-if="user_data">
        <section class="relative block h-500-px bg-blueGray-200">
            <Navbar />
        </section>

        <section class="relative py-16 bg-blueGray-200">
            <div class="container mx-auto px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div v-if="user_data.data.user_image" class="relative">
                                    <img :src="user_data.data.user_image"
                                        class="shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px" />
                                   
                                </div>
                                <div v-else class="relative">
                                    <div
                                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center" v-for="roles in user_data.data.roles">
                                <div class="py-6 px-3 mt-32 sm:mt-0" v-if="roles.role == 'Donor'">
                                    
                                    <button v-if="!edit_profile" @click="edit()"
                                        class="bg-green-500  uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded  sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div v-if="user_data" v-for="roles in user_data.data.roles"
                                class="w-full lg:w-4/12 px-4 lg:order-1">
                                <div v-if="roles.role == 'Donor'" class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                                            {{ donor_count_campaign }}
                                        </span>
                                        <span class="text-sm text-blueGray-500">Total Donation Campaign</span>
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                                            {{ donor_total_donation_amount }}
                                        </span>
                                        <span class="text-sm text-blueGray-500">Total Donate Amount</span>
                                    </div>
                                    
                                </div>
                                <div v-else-if="roles.role == 'Ngo'" class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                                            {{ campaign_report.total_live_campaign }}
                                        </span>
                                        <span class="text-sm text-blueGray-500">Total Live Campaign</span>
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blue-500">
                                            {{ campaign_report.total_pending_campaign }}
                                        </span>
                                        <span class="text-sm text-blueGray-500">Total Pending Campaign</span>
                                    </div>
                                    <div class="lg:mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-red-500">
                                            {{ campaign_report.total_rejected_campaign }}
                                        </span>
                                        <span class="text-sm text-blueGray-500">Total Rejected Campaign</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12">
                            <div class="container mx-auto h-full">
                                <div class="w-full sm:pt-0 md:pt-5 lg:pt-12 bg-grey-lightest">
                                    <div class="container mx-auto py-0">
                                        <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                                           
                                            <div class="py-4 px-8">
                                                <div v-if="!edit_profile" class="text-center">
                                                    <h3
                                                        class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                                        {{ user_data.data.full_name }}
                                                    </h3>
                                                    <div
                                                        class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                        <div>{{ user_data.data.email }}</div>
                                                        <div>{{ user_data.data.phone }}</div>
                                                    </div>
                                                </div>
                                                <div v-else class="text-center">
                                                    <div class="flex mb-4">
                                                        <div class="w-1/2 mr-1">
                                                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                                                for="first_name">First
                                                                Name</label>
                                                            <input
                                                                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                                v-model="first_name" placeholder="Your first name"
                                                                type="text" required>
                                                        </div>
                                                        <div class="w-1/2 ml-1">
                                                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                                                for="last_name">Last
                                                                Name</label>
                                                            <input
                                                                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                                v-model="last_name" type="text" placeholder="Your last name"
                                                                required>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2"
                                                            for="number">Phone
                                                            Number</label>
                                                        <input
                                                            class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                            v-model="phone" type="number" placeholder="Your phone number"
                                                            required>
                                                    </div>

                                                    <button @click="save()"
                                                        class="bg-green-500  uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded  sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                        type="button">
                                                        Save
                                                    </button>
                                                    <button @click="cancel()"
                                                        class="bg-gray-500  uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded  sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                        type="button">
                                                        cancel
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div v-if="user_data" v-for="roles in user_data.data.roles">
                            <div v-if="roles.role == 'Donor'">
                                <div v-if="donation_details.data != ''" class="text-center text-2xl text-gray-600">Your
                                    Donations</div>
                                <div v-if="donation_details.data != ''" class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full">
                                                    <thead class="bg-white border-b">
                                                        <tr>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Campaign Name
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Amount
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Date
                                                            </th>
                                                            
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Download 80G Certificate
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="donation in donation_details.data"
                                                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ donation.name }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ donation.amount }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ donation.date }}</td>
                                                            
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer"
                                                                @click="download_80g(donation.name, donation.date)">
                                                                Download</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="text-center font-bold text-gray-500"> Donate Item to see Donations and
                                        Download Certificate </div>
                                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                                        <router-link to="/sadbhavna">Click Here To Explore Campaign</router-link>
                                    </div>
                                </div>
                            </div>
                           
                            <div v-else-if="roles.role == 'Ngo'">
                                
                                <div v-if="campaign_details.data != ''" class="text-center text-2xl text-gray-600">Your
                                    Campaign</div>
                                <div v-if="campaign_details.data != ''" class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full">
                                                    <thead class="bg-white border-b">
                                                        <tr>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Campaign Name
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Campaign Category
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Requested Amount
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Raised Amount
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Start Date
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                End Date
                                                            </th>
                                                            <th scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="campaign in campaign_details"
                                                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.campaign_title }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.campaign_category }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.donation_amount }}</td>
                                                            <td
                                                                class="text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.raised_amount }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.start_date }}</td>
                                                            <td
                                                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.end_date }}</td>
                                                            <td
                                                                class="text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap">
                                                                {{ campaign.status }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="text-center text-sm leading-normal m-4 text-blue-400 font-bold">
                                                <router-link to="/sadbhavna/request-campaign">Request New
                                                    Campaign</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="text-center font-bold text-gray-500">
                                        You don't have any campaign live yet.
                                    </div>
                                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                                        <router-link to="/sadbhavna/request-campaign">Click Here To Request A New
                                            Campaign</router-link>
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
</template> -->
<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import { ref } from 'vue'
import { Avatar } from 'frappe-ui'
// import { toast } from 'frappe-ui'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'Login',
  components: { Navbar, Footer },
  data() {
    return {
      user_data: '',
      donation_details: '',
      donor: '',
      campaign_details: '',
      donor_total_donation_amount: 0,
      donor_count_campaign: 0,
      campaign_report: '',
      edit_profile: false,
      email: '',
      phone: '',
      first_name: '',
      last_name: '',
      pan_number: '',
    }
  },
  mounted() {
    const name = useRoute()
    this.get_user_detail(name.params.name)
    this.get_donation_details(name.params.name)
    this.get_campaign_details(name.params.name)
    this.get_details_of_donor_donations(name.params.name)
    this.get_details_of_ngo_campaigns(name.params.name)
    this.donor = name.params.name
  },
  computed: {},
  resources: {
    download_80g() {
      return {
        method: 'sadbhavna_donatekart.api.donor.download_80g',
        onSuccess: (res) => {
          console.log('okey', res)
          let url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${res}&format=80G Certificate for Donation`
          window.location = url
        },
        onError: (error) => {
          console.log('somthing want wrong!', error)
        },
      }
    },
    get_details_of_donor_donations() {
      return {
        method: 'sadbhavna_donatekart.api.donor.get_details_of_donor_donations',
        onSuccess: (res) => {
          // console.log("success", res)
          this.donor_count_campaign = res[0]
          this.donor_total_donation_amount = res[1]
        },
        onError: (error) => {
          console.log('error', error)
        },
      }
    },
    get_details_of_ngo_campaigns() {
      return {
        method:
          'sadbhavna_donatekart.api.campaign.get_details_of_ngo_campaigns',
        onSuccess: (res) => {
          this.campaign_report = res[0]
        },
        onError: (error) => {
          console.log('error', error)
        },
      }
    },
    update_donor() {
      return {
        method: 'sadbhavna_donatekart.api.donor.update_donor',
        onSuccess: (res) => {
          this.$toast({
            title: 'Profile Updated',
            text: 'Your Profile is successfully updated.',
            customIcon: 'check',
          })
          this.$router.go(-1)

        },
        onError: (error) => {
          console.log('error', error)
          this.$toast({
            title: 'Error',
            text: error,
            customIcon: 'circle-fail',
            appearance: 'denger',
          })
        },
      }
    },
  },
  methods: {
    get_user_detail(name) {
      let url = '/api/resource/User/' + name
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          response.json().then((res) => {
            this.user_data = res
            this.email = res.data.email
            this.phone = res.data.phone
            this.first_name = res.data.first_name
            this.last_name = res.data.last_name
            this.pan_number = ''
            // var fullname = res.data.fullname
            // var space = fullname.indexOf(" ");
            // this.first_name = fullname.substring(0, space);
            // this.last_name = fullname.substring(space + 1);

            // console.log("role", res)
          })
        })
        .catch((err) => {
          console.error(err)
        })
    },
    get_donation_details(name) {
      let url = `/api/resource/Donation?filters={"email": "${name}"}&fields=["*"]`
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          response.json().then((res) => {
            this.donation_details = res
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    download_80g(donation, date) {
      this.$resources.download_80g.submit({
        donation: donation,
        date: date,
        donor: this.donor,
      })
    },
    get_campaign_details(name) {
      let url = `/api/resource/NGO?filters={"email": "${name}"}&fields=["name"]`
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          response.json().then((res) => {
            let ngo = res.data[0].name
            let url = `/api/resource/Donation Campaign?filters={"ngo": "${ngo}"}&fields=["*"]`
            fetch(url, {
              method: 'GET',
            }).then((response) => {
              response.json().then((res) => {
                this.campaign_details = res.data
              })
            })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    get_details_of_donor_donations(name) {
      this.$resources.get_details_of_donor_donations.submit({
        donor: name,
      })
    },
    get_details_of_ngo_campaigns(name) {
      this.$resources.get_details_of_ngo_campaigns.submit({
        ngo: name,
      })
    },
    edit() {
      this.edit_profile = true
    },
    save() {
      this.edit_profile = false
      this.$resources.update_donor.submit({
        first_name: this.first_name,
        last_name: this.last_name,
        // email: this.email,
        phone: this.phone,
        old_email: this.donor,
        pan_number: this.pan_number,
      })
    },
    cancel() {
      this.edit_profile = false
    },
  },
}
</script>
