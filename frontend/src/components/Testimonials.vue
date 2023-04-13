<template>
  <section class="bg-[#ebf8ec]">
    <div class="container mx-auto h-full">
      <div class="fontfamily text-center mt-4">
        <h2 class=" text-[24px] md:text-[24px] lg:text-[30px] pt-8 font-black text-[#40b751] mb-0 ">{{ $t('Testimonials')
        }}</h2>
        <!-- <p class="text-[#364958] text-[15px] px-2 font-[400]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet,
          voluptate!</p> -->
      </div>

      <div class="flex border-b-2 ml-4 mr-8 border-b-solid border-gray-200 flex-wrap justify-center mt-5">
        <div class="">
          <ul class="flex mb-0 list-none flex-wrap pt-0  flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] transition ease-in-out delay-100  px-[12px] md:px-[20px] lg:px-[30px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(1)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 1, 'bg-[#40b751] text-white': openTabTestimonials === 1 }">
                <i class="fas fa-space-shuttle text-base mr-1"></i> {{ $t('Celebrities') }}
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] transition ease-in-out delay-100 px-[12px] md:px-[20px] lg:px-[40px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(2)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 2, 'bg-[#40b751] text-white': openTabTestimonials === 2 }">
                <i class="fas fa-cog text-base mr-1"></i> {{ $t('Donors') }}
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] transition ease-in-out delay-100   margintop md:mt-0 lg:mt-0 px-[16px] md:px-[28px] lg:px-[48px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(3)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 3, 'bg-[#40b751] text-white': openTabTestimonials === 3 }">
                <i class="fas fa-cog text-base mr-1"></i> {{ $t('NGOs') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col min-w-0 break-words w-full">
        <div class="flex-auto ">
          <div class="tab-content tab-space">
            <div v-bind:class="{ 'hidden': openTabTestimonials !== 1, 'block': openTabTestimonials === 1 }">

              <div class="slider block sm:hidden lg:hidden">

                <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
                  <div v-for="(index) in featured_campaigns" :key="index" class="slide">
                    <div class="">
                      <div class="pb-16 mt-20 gap-4">
                        <!-- <div class="slider ">
                    <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
                      <div v-for="(index) in featured_campaigns" :key="index" class="slide"> -->
                        <div
                          class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                          <div class="px-4 rounded-lg shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                            <div class="flex flex-wrap justify-center">
                              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="">
                                  <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                                    class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-1">

                              </div>
                            </div>
                            <div class="text-justify mt-0 pb-0">
                              <div class="h-[70px]">
                                <h3
                                  class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                                  Name Tab A1
                                </h3>
                                <div
                                  class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                                  <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                                  Designation
                                </div>
                              </div>
                              <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                                <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                                  "I am proud to support Best Deed and their mission to help people in need through their
                                  unique
                                  crowdfunding platform. The idea of donating through products is innovative and
                                  effective,
                                  and I
                                  have seen firsthand the impact it can have on the lives of those who receive the
                                  support.
                                  Best
                                  Deed is truly making a difference in the world, and I encourage everyone to join me in
                                  supporting this amazing organization."

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- </div>
                    </div>
                  </div> -->




                        <!-- <div class="slider block sm:hidden lg:hidden">
                    <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
                      <div v-for="(index) in featured_campaigns" :key="index" class="slide"> -->
                        <div
                          class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                          <div
                            class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                            <div class="flex flex-wrap justify-center">
                              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="">
                                  <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                                    class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-1">

                              </div>
                            </div>
                            <div class="text-justify mt-0 pb-0">
                              <div class="h-[70px]">
                                <h3
                                  class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                                  Name Tab A2
                                </h3>
                                <div
                                  class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                                  <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                                  Designation
                                </div>
                              </div>
                              <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                                <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                                  "I have been a long-time supporter of Best Deed and their crowdfunding platform is a
                                  great
                                  way
                                  for people to make a tangible difference by supporting products that directly benefit
                                  those in
                                  need. It's inspiring to see the impact that Best Deed has had on so many lives, and I
                                  encourage
                                  everyone to get involved and support this incredible organization."

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- </div>
                    </div>
                  </div> -->


                        <!-- <div class="slider block sm:hidden lg:hidden">
                    <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
                      <div v-for="(index) in featured_campaigns" :key="index" class="slide"> -->
                        <div
                          class="mb-24  md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                          <div
                            class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white   ">
                            <div class="flex flex-wrap justify-center">
                              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="">
                                  <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                                    class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                                </div>
                              </div>
                              <div class="w-full lg:w-4/12 px-4 lg:order-1">

                              </div>
                            </div>
                            <div class="text-justify mt-0 pb-0">
                              <div class="h-[70px]">
                                <h3
                                  class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                                  Name Tab A3
                                </h3>
                                <div
                                  class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                                  <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                                  Designation
                                </div>
                              </div>
                              <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                                <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                                  I recently came to know about Best Deed through my team and it is one of the best
                                  platforms for
                                  helping the ones in need - be it individuals or NGOs. Their platform is incredibly
                                  user-friendly, and the secure payment process ensures that donations are safe and
                                  effective.

                                  Thank you Best Deed for giving me the platform to make a difference.

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- </div>
                    </div>
                  </div> -->



                      </div>


                    </div>

                  </div>
                </div>
              </div>






              <div class="hidden md:block lg:block">
                <div class="pb-16 grid lg:grid-cols-3  md:grid-cols-1  mt-20 gap-4 ">

                  <div
                    class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                    <div class="px-4 rounded-lg shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                      <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                          <div class="">
                            <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                              class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-1">

                        </div>
                      </div>
                      <div class="text-justify mt-0 pb-0">
                        <div class="h-[70px]">
                          <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                            Name Tab 1
                          </h3>
                          <div
                            class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                            <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                            Designation
                          </div>
                        </div>
                        <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                          <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                            "I am proud to support Best Deed and their mission to help people in need through their
                            unique
                            crowdfunding platform. The idea of donating through products is innovative and effective,
                            and I
                            have seen firsthand the impact it can have on the lives of those who receive the support.
                            Best
                            Deed is truly making a difference in the world, and I encourage everyone to join me in
                            supporting this amazing organization."

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                    <div
                      class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                      <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                          <div class="">
                            <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                              class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-1">

                        </div>
                      </div>
                      <div class="text-justify mt-0 pb-0">
                        <div class="h-[70px]">
                          <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                            Name Tab 1
                          </h3>
                          <div
                            class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                            <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                            Designation
                          </div>
                        </div>
                        <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                          <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                            "I have been a long-time supporter of Best Deed and their crowdfunding platform is a great
                            way
                            for people to make a tangible difference by supporting products that directly benefit
                            those in
                            need. It's inspiring to see the impact that Best Deed has had on so many lives, and I
                            encourage
                            everyone to get involved and support this incredible organization."

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="mb-24  md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                    <div
                      class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white   ">
                      <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                          <div class="">
                            <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                              class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                          </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-1">

                        </div>
                      </div>
                      <div class="text-justify mt-0 pb-0">
                        <div class="h-[70px]">
                          <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                            Name Tab 1
                          </h3>
                          <div
                            class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                            <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                            Designation
                          </div>
                        </div>
                        <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                          <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                            I recently came to know about Best Deed through my team and it is one of the best
                            platforms for
                            helping the ones in need - be it individuals or NGOs. Their platform is incredibly
                            user-friendly, and the secure payment process ensures that donations are safe and
                            effective.

                            Thank you Best Deed for giving me the platform to make a difference.

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>

            <div v-bind:class="{ 'hidden': openTabTestimonials !== 2, 'block': openTabTestimonials === 2 }">



              <div class="pb-16 grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 mt-20 gap-4">
                <div
                  class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div class="px-4 rounded-lg shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Kunj Popat') }}
                        </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          {{ $t('Assistant Manager') }}
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "I have always wanted to help those in need, but I never knew how to do it effectively. Best
                          Deed has made it so easy for me to make a contribution through their platform. I love that there
                          is 100% transparency in the whole process and I’m donating and they are donating the products to
                          the ones in need. Thank you, Best Deed!"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Harsh Sanchaniya') }} </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          {{ $t('Developer') }}
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "I recently donated through Best Deed and was blown away by how simple and easy it was. They
                          have listed the products the NGO needs and I know exactly what I was contributing for! I was
                          able to make a donation to a cause I care about. I appreciate the transparency of the platform
                          and knowing exactly where my donation is going." Once, I visited there to volunteer with them
                          and enjoy every bit of my time there.

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="mb-24  md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white   ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Jat Bhatt') }}
                        </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          {{ $t('It Recruiter') }}
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "I was hesitant to donate to a crowdfunding platform at first, but Best Deed has completely
                          changed my mind. The platform is user-friendly and the payment process is also quite secure. I
                          highly recommend Best Deed to anyone looking to make a positive impact."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div v-bind:class="{ 'hidden': openTabTestimonials !== 3, 'block': openTabTestimonials === 3 }">

              <div class="pb-16 grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 mt-20 gap-4">
                <div
                  class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Vallabh Goshala') }}
                        </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          Designation
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "We are so grateful for the products we have received through Best Deed to nurture the lives of
                          mentally retarded childrens at Chitransh. The platform has made it so easy for people to donate
                          and support our cause by offering us the right products. We appreciate the transparency of the
                          platform, and it has been a pleasure to work with their team.
                          Thank you, Best Deed, for helping us fulfill the requirements by donating necessary products!"

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="mb-24 md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Sadbhavna Vrudhashram') }}
                        </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          Designation
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "As an NGO, it can be challenging to find the funding for the necessary items required at
                          Sadbhavna Vrudhashram to fulfill requirements of elderly people. Best Deed has been proved to be
                          a game-changer for us. Their platform has helped us reach a wider audience and receive donations
                          we wouldn't have been able to otherwise.

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="mb-24  md:mb-0 lg:mb-0 flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-4 rounded-lg no-scrollbar overflow-scroll overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white   ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-justify mt-0 pb-0">
                      <div class="h-[70px]">
                        <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                          {{ $t('Bharat Lokhit Seva Samiti by Chinmay') }}
                        </h3>
                        <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                          <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          Designation
                        </div>
                      </div>
                      <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                        <div class=" text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                          "Working with Best Deed has been an excellent experience for our NGO. They have helped us raise
                          funds to fulfill the requirements of our NGO, and we have seen a significant impact on our
                          ability to carry out our mission. The platform is also easy to use, and their team is always
                          available to provide support. We highly recommend Best Deed to other NGOs looking to avail
                          products."

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
  </section>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  name: 'Testimonials',
  props: {
    featured_campaigns: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const currentSlide = ref(0);
    const slideWidth = ref(0);
    let timerId = null;

    const updateSlideWidth = () => {
      slideWidth.value = document.querySelector('.slider').offsetWidth;
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % props.featured_campaigns.length;
    };

    const startAutoPlay = () => {
      timerId = setInterval(nextSlide, props.interval);
    };

    const stopAutoPlay = () => {
      clearInterval(timerId);
    };

    onMounted(() => {
      updateSlideWidth();
      startAutoPlay();
    });

    onUnmounted(() => {
      stopAutoPlay();
    });

    return {
      currentSlide,
      slideWidth,
      updateSlideWidth,
      // openTabTestimonials: 1,
    };
  },
  data() {
    return {
      openTabTestimonials: 1,
    }
  },
  methods: {
    toggleTabsTestimonials: function (tabNumber) {
      this.openTabTestimonials = tabNumber
    },
  }
}
</script>
<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}


.slider {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-out;
}

.slide {
  flex: 0 0 100%;
}
</style>
