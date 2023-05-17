<template>
  <main class="profile-page" v-if="user_data">
    <section class="h-500-px bg-blueGray-200">
      <Navbar />
      <div class="pb-4 bg-blueGray-200">
        <div class="container mx-auto px-4 pt-96">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">

              <div class="grid grid-cols-3">
                <div></div>
                <div>

                  <div class="grid justify-items-center profile">
                    <div v-if="user_data.data.user_image" class="relative">
                      <img :src="user_data.data.user_image"
                        class="shadow-xl rounded-full h-48 align-middle border-none absolute -m-16 -ml-20 lg:-ml-40 max-w-200-px" />

                      <div class="shadow-xl rounded-full align-middle border-none absolute ml-12 mt-24 lg:ml-20">
                        <FileUploader @success="(file) => upload_image(file.file_url)">
                          <template v-slot="{
                            openFileSelector,
                          }">
                            <svg @click="openFileSelector" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </template>
                        </FileUploader>
                      </div>
                    </div>
                    <div v-else class="relative">
                      <div>
                        <img src="https://crowdfunding.frappe.cloud/files/default_profile.jpeg"
                          class="shadow-xl rounded-full h-48 align-middle border-2 border-solid border-gray-300 absolute -m-16 -ml-20 lg:-ml-40 max-w-200-px" />
                        <div class="shadow-xl rounded-full align-middle border-none absolute ml-12 mt-24 lg:ml-20">
                          <FileUploader @success="(file) => upload_image(file.file_url)">
                            <template v-slot="{
                              openFileSelector,
                            }">
                              <svg @click="openFileSelector" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </template>
                          </FileUploader>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div></div>
              </div>

              <div class=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center p-16 md:p-8 lg:p-8">

                <div class="">
                  <div v-if="user_data" v-for="roles in user_data.data.roles" class="">

                    <div v-if="roles.role == 'Donor'" class="flex justify-center">
                      <div class="w-28  text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ donor_count_campaign }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Donation Campaign') }}</span>
                      </div>
                      <div class=" w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ donor_total_donation_amount }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Donate Amount') }}</span>
                      </div>
                    </div>


                    <div v-else-if="roles.role == 'Ngo'" class="">
                      <!-- <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ campaign_report.total_live_campaign }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Live Campaign') }}</span>
                      </div>
                      <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blue-500">
                          {{ campaign_report.total_pending_campaign }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Pending Campaign') }}</span>
                      </div>
                      <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-red-500">
                          {{ campaign_report.total_rejected_campaign }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Rejected Campaign') }}</span>
                      </div> -->
                    </div>

                  </div>
                </div>

                <div></div>


                <div>
                  <div v-if="user_data" v-for="roles in user_data.data.roles" class="">

                    <div v-if="roles.role == 'Donor'" class="flex justify-center ">
                      <!-- <div class="w-28  text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ donor_count_campaign }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Donation Campaign') }}</span>
                      </div>
                      <div class=" w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ donor_total_donation_amount }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Donate Amount') }}</span>
                      </div> -->
                    </div>


                    <div v-else-if="roles.role == 'Ngo'" class="flex justify-center">
                      <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                          {{ campaign_report.total_live_campaign || 0 }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Live Campaign') }}</span>
                      </div>
                      <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blue-500">
                          {{ campaign_report.total_pending_campaign || 0 }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Pending Campaign') }}</span>
                      </div>
                      <div class="w-28 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-red-500">
                          {{ campaign_report.total_rejected_campaign || 0 }}
                        </span>
                        <span class="text-sm text-blueGray-500">{{ $t('Total Rejected Campaign') }}</span>
                      </div>
                    </div>



                  </div>
                </div>



                <!-- <div class="grid justify-items-center ">

                  <div class="" v-for="roles in user_data.data.roles">
                    <div class="mt-4 sm:mt-2 " v-if="roles.role == 'Donor'">

                      <button v-if="!edit_profile" @click="edit()"
                        class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded ease-linear transition-all duration-150"
                        type="button">
                        {{ $t('Edit Profile') }}
                      </button>
                    </div>
                  </div>
                </div> -->


              </div>

              <div class="flex flex-wrap justify-center">
                <!-- <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div v-if="user_data.data.user_image" class="relative">
                    <img :src="user_data.data.user_image"
                      class="shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px" />
                      
                      <div class="shadow-xl rounded-full align-middle border-none absolute ml-12 mt-16 lg:ml-16">
                        <FileUploader @success="(file) => upload_image(file.file_url)">
                          <template
                            v-slot="{
                              openFileSelector,
                            }">
                              <svg @click="openFileSelector" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          </template>
                        </FileUploader>               
                      </div> -->

                <!-- <Avatar :imageURL="http://sadbhavnadonatekart.com:8080/files/students.svguser_data.user_image" label="Felix" size="lg" /> -->
                <!-- </div>
                  <div v-else class="relative">
                    <div>
                      <img src="https://crowdfunding.frappe.cloud/files/default_profile.jpeg" class="shadow-xl rounded-full h-40 align-middle border-2 border-solid border-gray-300 absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px" />
                      <div class="shadow-xl rounded-full align-middle border-none absolute ml-12 mt-16 lg:ml-16">
                        <FileUploader @success="(file) => upload_image(file.file_url)">
                          <template
                            v-slot="{
                              openFileSelector,
                            }">
                              <svg @click="openFileSelector" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          </template>
                        </FileUploader>               
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center" v-for="roles in user_data.data.roles">
                  <div class="py-6 px-3 mt-32 sm:mt-0" v-if="roles.role == 'Donor'"> -->
                <!-- <router-link to="/bestdeed"
                                        class="bg-green-500  uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded  sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Donate More
                                    </router-link> -->
                <!-- <button v-if="!edit_profile" @click="edit()"
                      class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded lg:ml-0 md:ml-0 sm:ml-32 ease-linear transition-all duration-150"
                      type="button">
                      {{$t('Edit Profile')}}
                    </button>
                  </div>
                </div> -->

                <!-- <div v-if="user_data" v-for="roles in user_data.data.roles" class="w-full lg:w-4/12 px-4 lg:order-1"> -->

                <!-- <div v-if="roles.role == 'Donor'" class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ donor_count_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">{{$t('Total Donation Campaign')}}</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ donor_total_donation_amount }}
                      </span>
                      <span class="text-sm text-blueGray-500">{{$t('Total Donate Amount')}}</span>
                    </div> -->
                <!-- <div class="lg:mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            89
                                        </span>
                                        <span class="text-sm text-blueGray-400">Comments</span>
                                    </div> -->
                <!-- </div> -->


                <!-- <div v-else-if="roles.role == 'Ngo'" class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-green-500">
                        {{ campaign_report.total_live_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">{{$t('Total Live Campaign')}}</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blue-500">
                        {{ campaign_report.total_pending_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">{{$t('Total Pending Campaign')}}</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-red-500">
                        {{ campaign_report.total_rejected_campaign }}
                      </span>
                      <span class="text-sm text-blueGray-500">{{$t('Total Rejected Campaign')}}</span>
                    </div>
                  </div> -->



                <!-- </div> -->
              </div>
              <div class="mt-10">
                <div class="container mx-auto h-full">
                  <div class="w-full bg-grey-lightest">
                    <div class="container mx-auto py-0">
                      <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                        <!-- <div class="py-8 px-10 text-gray-600 text-black text-base text-4xl">Register & Login
                                        </div> -->
                        <form>
                          <div class="">
                            <div v-if="!edit_profile" class="text-center">
                              <h3 class="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
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
                                class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0">
                                <div>
                                  <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">
                                    {{ $t('First Name') }}</label>
                                  <input class="appearance-none form-control block border rounded w-full text-grey-darker"
                                    v-model="first_name" placeholder="Your first name" type="text" required />
                                </div>
                                <div>
                                  <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">
                                    {{ $t('Last Name') }}</label>
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
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="number">
                                  {{ $t('Phone Number') }} <span class="text-red-600">*</span></label>
                                <input
                                  class="appearance-none border form-control block rounded w-full py-2 text-grey-darker"
                                  v-model="phone" type="number" placeholder="Your phone number" required />
                              </div>
                              <div class="mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="pan number">
                                  {{ $t('Pan Number') }}</label>
                                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                  v-model="pan_number" ref="pan" type="text" @keyup="errorPancard = ''"
                                  placeholder="Your pan number" required>
                                <p class="text-red-600">{{ $t(errorPancard) }}</p>
                              </div>
                              <div class="mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="number">
                                  {{ $t('Set New Password') }} <span class="text-red-600"></span></label>
                                <input
                                  class="appearance-none border form-control block rounded w-full py-2 text-grey-darker"
                                  type="password" v-model="password" @keyup="errorMessagePassword = ''"
                                  placeholder="Enter New Password" />
                                <p class="text-red-600">{{ $t(errorMessagePassword) }}</p>
                              </div>
                              <div v-if="password != ''" class="mb-4 lg:mr-8 sm:ml-0 lg:ml-8 sm:ml-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="number">
                                  {{ $t('Confirm Password') }} <span class="text-red-600">*</span></label>
                                <input
                                  class="appearance-none border form-control block rounded w-full py-2 text-grey-darker"
                                  type="password" v-model="confirmPassword" @keyup="errorMessageConfirmPassword = ''"
                                  placeholder="Enter Again Password" required />
                                <p class="text-red-600">{{ $t(errorMessageConfirmPassword) }}</p>
                              </div>

                              <!-- <div></div> -->
                              <button @click="save()"
                                class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150"
                                type="button">
                                {{ $t('Save') }}
                              </button>
                              <button @click="cancel()"
                                class="bg-gray-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded mr-2 mb-4 ease-linear transition-all duration-150"
                                type="button">
                                {{ $t('cancel') }}
                              </button>

                            </div>
                            <div class="grid justify-items-center " v-for="roles in user_data.data.roles">
                              <div class="mt-4 sm:mt-2 " v-if="roles.role == 'Donor'">

                                <button v-if="!edit_profile" @click="edit()"
                                  class="bg-green-500 uppercase text-white font-bold hover:bg-white hover:text-green-500 hover:outline hover:outline-1 hover:outline-offset-1 shadow text-xs px-4 py-2 rounded ease-linear transition-all duration-150"
                                  type="button">
                                  {{ $t('Edit Profile') }}
                                </button>
                              </div>
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
                  <div v-if="donation_details != ''" class="text-center pt-4 text-2xl text-gray-600">
                    {{ $t('Your Donations') }}
                  </div>
                  <div v-if="donation_details != ''" class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Campaign Name') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Amount') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Date') }}
                                </th>
                                <!-- <th scope="col"
                                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                      Mode of Payment
                                  </th> -->
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Download 80G Certificate') }}
                                </th>
                              </tr>
                            </thead>
                            <tbody v-for="index in donationToShow">
                              <!-- <div >         -->
                                <tr v-if="index - 1 < totalDonation"
                                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td class="text-sm text-gray-900 font-light px-6 py-4">
                                    {{ donation_details[index - 1].name }}
                                  </td>
                                  <td class="text-sm text-gray-900 font-light px-6 py-4">
                                    {{ donation_details[index - 1].amount }}
                                  </td>
                                  <td class="text-sm text-gray-900 font-light px-6 py-4">
                                    {{ formattedDate(donation_details[index - 1].date) }}
                                  </td>
                                  <!-- <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {{ donation.mode_of_payment }}</td> -->
                                  <td class="text-sm text-gray-900 font-light px-6 py-4 cursor-pointer" @click="
                                    download_80g(donation_details[index - 1].name, donation_details[index - 1].date)">
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> -->
                                    {{ $t('Download') }}
                                  </td>
                                </tr>
                              <!-- </div> -->
                            </tbody>
                          </table>
                          <div v-if="donationToShow < totalDonation || totalDonation > donationToShow" class="text-center">
                              <button
                                class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="donationToShow += 6">{{ $t('Show More') }}</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-center font-bold text-gray-500">
                      {{ $t('Donate Item to see Donations and Download Certificate') }}
                    </div>
                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                      <router-link to="/bestdeed">{{ $t('Click Here To Explore Campaign') }}</router-link>
                    </div>
                  </div>
                </div>
                <!-- if user role is ngo -->
                <div v-else-if="roles.role == 'Ngo'">
                  <!-- {{ campaign_details }} -->
                  <div v-if="campaign_details != ''" class="text-center text-2xl text-gray-600">
                    {{ $t('Your Campaign') }}
                  </div>
                  <div v-if="campaign_details != ''" class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Campaign Name') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Campaign Category') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Requested Amount') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Raised Amount') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Start Date') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('End Date') }}
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                  {{ $t('Status') }}
                                </th>
                              </tr>
                            </thead>
                            <tbody v-for="index in campaignToShow">
                                <tr v-if="index - 1 < totalCampaign"
                                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="text-sm text-gray-900 font-light px-6 py-4">
                                  {{ campaign_details[index - 1].campaign_title }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4">
                                  {{ campaign_details[index - 1].campaign_category }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4">
                                  {{ campaign_details[index - 1].donation_amount }}
                                </td>
                                <td class="text-sm text-green-500 font-bold px-6 py-4">
                                  {{campaign_details[index - 1].raised_amount }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4">
                                  {{ formattedDate(campaign_details[index - 1].start_date) }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4">
                                  {{ formattedDate(campaign_details[index - 1].end_date) }}
                                </td>
                                <!-- <td
                                  class="text-sm text-green-500 font-bold px-6 py-4 whitespace-nowrap"
                                >
                                  {{ campaign.status }}
                                </td> -->

                                <td
                                  :class="['text-sm font-bold px-6 py-4', (campaign_details[index - 1].status === 'Live' ? 'text-green-500' : ''), (campaign_details[index - 1].status === 'Pending' ? 'text-blue-500' : ''), (campaign_details[index - 1].status === 'Rejected' ? 'text-red-500' : ''), (campaign_details[index - 1].status === 'Closed' ? 'text-orange-500' : '')]">
                                  {{ campaign_details[index - 1].status }}
                                </td>

                              </tr>
                            </tbody>
                          </table>
                          <div v-if="campaign_details != '' && campaignToShow < totalCampaign || totalCampaign > campaignToShow" class="text-center">
                              <button
                                class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="campaignToShow += 6">{{ $t('Show More') }}</button>
                            </div>
                        </div>
                        <div class="text-center text-sm leading-normal m-4 text-blue-400 font-bold">
                          <router-link to="/request-campaign">{{ $t('Request New Campaign') }}</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-center font-bold text-gray-500">
                      {{ $t(`You don't have any campaign live yet.`) }}
                    </div>
                    <div class="text-center text-sm leading-normal mt-2 mb-5 text-blue-400 font-bold">
                      <router-link to="/request-campaign">
                        {{ $t('Click Here To Request A New Campaign') }}</router-link>
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

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import { ref, inject } from 'vue'
import { Avatar, FileUploader } from 'frappe-ui'
// import { toast } from 'frappe-ui'
import { useRoute } from 'vue-router'
// import axios from 'axios'
import moment from 'moment';


export default {
  name: 'Login',
  components: { Navbar, Footer, FileUploader },
  setup() {
    const user = inject("user")
    return {
      user,
    }
  },
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
      date: '',
      first_name: '',
      last_name: '',
      pan_number: '',
      errorPancard: '',
      password: '',
      confirmPassword: '',
      errorMessagePassword: '',
      errorMessageConfirmPassword: '',

      donationToShow: 6,
      totalDonation: 0,

      campaignToShow: 6,
      totalCampaign: 0
    }
  },
  created() {
    if (!this.user.isLoggedIn()) {
      this.$router.push('/')
    }
  },
  mounted() {
    const name = useRoute()
    document.title = this.$t('Profile') + '-' + name.params.name + '|' + this.$t('BestDeed')
    const linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = "https://bestdeed.org/profile"
    document.head.appendChild(link);
    }
    else{
      linkElement.href = "https://bestdeed.org/profile"
      document.head.appendChild(linkElement)
    }
    this.get_user_detail(name.params.name)
    this.get_user_pan(name.params.name)
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
          if (res == 'Please set pan number in your profile') {
            this.$toast({
              title: 'Please add Pan Number',
              text: 'please add pan number in edit profile to get 80g certificate',
              icon: 'x-circle',
              appearance: 'denger',
              position: "top-center",
            })
            this.edit_profile = true
            this.$nextTick(() => this.$refs.pan.focus())
          }
          else {
            let url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${res}&format=BestDeed 80g Certificate`
            // window.location = url
            window.open(url, "_blank");
          }
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
            icon: 'check',
            position: "top-center",
          })
          this.$router.go(-1)

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
    },
    set_image() {
      return {
        method: 'sadbhavna_donatekart.api.donor.set_image',
        onSuccess: (res) => {
          this.$toast({
            title: 'Profile Picture Updated',
            text: 'Your Profile Picture is successfully updated.',
            icon: 'check',
            position: "top-center",
          })
          this.$router.go()
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
    },

    get_donation_details(){
      return{
        method: 'sadbhavna_donatekart.api.donor.get_donation_details',
        onSuccess: (res) => {
          this.donation_details = res
          this.totalDonation = res.length
      //       // this.totalDonation = res.length
        },
        onError: (error) => {
          
        },

      }
    },

    get_campaign_details(){
      return{
        method: 'sadbhavna_donatekart.api.campaign.get_campaign_details',
        onSuccess: (res) => {
          console.log("res", res)
          this.campaign_details = res
          this.totalCampaign = res.length
        },
        onError: (error) => {

        }
      }
    }




  },
  methods: {
    formattedDate(date) {
      var dateObj = moment(date, 'YYYY-MM-DD');
      var formattedDate = dateObj.format('DD-MM-YYYY');
      return formattedDate;
    },

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
            // this.pan_number = ''
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
    get_user_pan(name) {
      let url = `/api/resource/Donor?filters={"email": "${name}"}&fields=["pan_number"]`
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          console.log("response", response)
          response.json().then((res) => {
            this.pan_number = res.data[0]['pan_number']
          })
        })
        .catch((err) => {
          console.error(err)
        })
    },
    download_80g(donation, date) {
      if (this.pan_number == null) {
        this.$toast({
          title: 'Please add Pan Number',
          text: 'please add pan number in edit profile to get 80g certificate',
          icon: 'x-circle',
          appearance: 'denger',
          position: "top-center",
        })
        this.edit_profile = true
        this.$nextTick(() => this.$refs.pan.focus())
      }
      else {
        this.$resources.download_80g.submit({
          donation: donation,
          date: date,
          donor: this.donor,
          // pan_number: this.pan_number
        })
      }
    },

    get_donation_details(name) {
      // let url = `/api/resource/Donation?filters={"email": "${name}"}&fields=["*"]&limit_page_length=100`
      // fetch(url, {
      //   method: 'GET',
      // })
      //   .then((response) => {
      //     response.json().then((res) => {
      //       this.donation_details = res
      //       this.totalDonation = res.data.length
      //       // this.totalDonation = res.length
      //     })
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })

      this.$resources.get_donation_details.submit({
        email: name,
        page_length: 100
      })
    },
    
    get_campaign_details(name) {
      // let url = `/api/resource/NGO?filters={"email": "${name}"}&fields=["name"]`
      // fetch(url, {
      //   method: 'GET',
      // })
      //   .then((response) => {
      //     response.json().then((res) => {
      //       let ngo = res.data[0].name
      //       let url = `/api/resource/Donation Campaign?filters={"ngo": "${ngo}"}&fields=["*"]`
      //       fetch(url, {
      //         method: 'GET',
      //       }).then((response) => {
      //         response.json().then((res) => {
      //           this.campaign_details = res.data
      //           this.totalCampaign = res.data.length
      //         })
      //       })
      //     })
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      this.$resources.get_campaign_details.submit({
        email: name,
        page_length: 100
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

      var pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      var pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (this.password != '') {
        if (pw.test(this.password) == false) {
          this.errorMessagePassword = 'Enter strong password, minimum eight characters, at least one letter, one number and one special character'
        }
        if (this.confirmPassword == '') {
          this.errorMessageConfirmPassword = 'Enter confirm password'
        }
        if (this.password !== this.confirmPassword) {
          this.errorMessageConfirmPassword = 'Confirm Password must be same of password';
          return true;
        }
      }
      if (this.pan_number != '') {
        if (this.pan_number && pan.test(this.pan_number) == false) {
          this.errorPancard = 'Enter valid PAN number'
        }
        else {
          this.edit_profile = false
          this.$resources.update_donor.submit({
            first_name: this.first_name,
            last_name: this.last_name,
            // email: this.email,
            phone: this.phone,
            old_email: this.donor,
            password: this.password != '' ? this.password : '',
            pan_number: this.pan_number,
          })
        }
      }
      else {
        this.edit_profile = false
        this.$resources.update_donor.submit({
          first_name: this.first_name,
          last_name: this.last_name,
          // email: this.email,
          phone: this.phone,
          old_email: this.donor,
          password: this.password != '' ? this.password : '',
          pan_number: this.pan_number,
        })
      }
    },
    cancel() {
      this.edit_profile = false
    },
    upload_image(url) {
      alert('clicked', url)
      console.log("url", url)
      this.$resources.set_image.submit({
        name: this.donor,
        user_image: url
      })
    }
  },
}
</script>
