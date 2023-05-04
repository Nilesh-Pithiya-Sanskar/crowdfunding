<!-- <template>
    <Navbar />

    <div class="container mx-auto h-full mt-10 mb-5 text-[#364958]">
        <h1 class="text-3xl mb-5">Join hands with us to contribute your bit!</h1>
        <h2 class="text-2xl">Best Deed is working with a vision to drive change and help everyone in need!</h2>

        <p class="pb-5">For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps streamline the crowdfunding environment.</p>

        <p class="pb-5">Whether it's your cause or one that you support, we'll assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs efficiently.</p>

        <p class="pb-5">With our one-of-a-kind platform that enables people all around the world to give towards goods required by NGOs, we have revolutionized the crowdfunding sector. We are working hard to change the world by connecting people together to have a lasting influence. We do this with the utmost trust, integrity, and compassion.</p>


        <h2 class="text-xl">Why the  Best Deed? </h2>
        <ul class="list-disc">
            <li>Reliability</li>
            <li>Tech-driven</li>
            <li>Feature-rich</li>
            <li>Trust & Transparency</li>
            <li>Security at the core</li>
            <li>Creativity at peak</li>
        </ul>
        (Design an interactive image like the one below to highlight the above features) 

        How did it all start? 
        It all began in 2015, and since then, we have developed the most reputable crowdfunding platform. The foundation of what we do is the conviction that people are naturally compassionate and willing to assist. By utilizing technology to its fullest, we have been able to create an easy and transparent method for online donations.

        Regardless of their socioeconomic status, anybody in the nation has the ability to start or contribute to a campaign. We are making the best use of online donations since we think they will become "the" means to perform charitable and humanitarian deeds in the next few years.

        The Mission & Vision at  Best Deed! 

        Mission 
        Over the years, we have seen that individuals want to donate but are hesitant to donate money. Instead, they believe in donating products as per their needs. So, Best Deed comes with a solution through which individuals can donate to NGOs, charitable organizations, groups and individuals the product they need through our platform. 

        At Best Deed, we even encourage the individuals to help the ones in need through our platform. They have the chance to volunteer with us in any way possible based on the availability, expertise and location. Volunteering can provide a sense of purpose, fulfillment, and satisfaction, and can also help build skills, networks, and relationships.

        Vision 
        The team at Best Deed works with a vision to promote the feeling of giving and eliminate the hesitancy of donating directly through money. 

        With a unique donating model, the organizations will put up their requirements through the crowdfunding campaign, and individuals can donate at their convenience. 

        Our vision totally aligns with our mission in making proactive steps to encourage individuals and groups in volunteering with us. Through this, we are moving a step ahead in making it easier for people to make a difference in their communities and beyond.

        Core Values 
        Driving the change blended with tech. 
        Keeping the trust and transparency at the peak!
        Pushing the people-centric environment. 
        Making the world a better place to live. 
        Helping the ones in need! 
        Encouraging volunteers to extend helping hands. 



        Here's more about  Best Deed. 
        People-centric organization - We constantly put the needs of the people first. Along with rewards, perks, incentives, and recognition, we strive to adopt compassionate leadership.

        Greater satisfaction - We place great importance on how you feel before, during, and after donating. As a result, the campaign to which you donated will provide you with constant updates on the products' shipment, delivery, and usage as well.

        Passionate people - The process of bringing about transformation calls for an amazing team. We appreciate that some of the most creative and dedicated young leaders are leading our company.

        Top-notch benefits - We ensure that every interaction you have with Best Deed is beneficial, so regardless of whether you want to start a campaign or make a contribution, you are always eligible to receive incredible benefits and points.

        Building an ecosystem - We are not simply another crowdfunding company; rather, our goal is to build a trustworthy ECOSYSTEM that brings together the greatest campaigns, NGOs, donors, nonprofits, and sponsors on this platform to address a variety of issues.

        Life at Best Deed! 
        If you are also one looking forward to making a difference, then Best Deed is the right place for you to get started and grow your career! 
        Find open positions! (add the CTA button) 


        CTA - Join hands with the Best Deed to contribute your bit! 
        Donate now. (Add the CTA button) 


    </div>

    <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default{
    name: 'About Us',
    components: {
    Navbar,
    Footer,
  },
  created(){
        document.title = this.$t("Get to know more about BestDeed")
    }
}
</script> -->



<template>
  <main>
    <section class="top-0 w-full h-3/6 bg-center bg-right bg-transparent bg-cover mb-10"
      style="background-image: url('https://crowdfunding.frappe.cloud/files/explore-campaign.jpg')">
      <Navbar />
      <div class="bg-overlay lg:!py-24 py-10">
        <!-- <div v-if="lang == 'hi'"
                    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4">
                    <p
                        class="text-[24px] md:text-[28px] lg:text-[34px] text-center font-bold text-[#364958] leading-normal">
                        जरूरतमंदों की मदद करने के लिए
                        <span class="text-[#40b751]">बेस्टडीड अभियान</span>
                        से हाथ मिलाओ।
                    </p>
                </div>
                <div v-else-if="lang == 'gu'"
                    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-4">
                    <p
                        class="text-[24px] md:text-[28px] lg:text-[34px] text-center font-bold text-[#364958] leading-normal">
                        જરૂરિયાતમંદોને મદદ કરવા
                        <span class="text-[#40b751]">બેસ્ટડીડ ઝુંબેશ</span>
                        સાથે હાથ જોડો.
                    </p>
                </div> -->
        <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 card-space mb-2">
          <p class="text-[24px] md:text-[28px] lg:text-[34px] text-center font-bold text-[#364958] leading-normal">
            Join hands with us to contribute your bit!
          </p>
        </div>
        <div class="text-center text-[20px]">Best Deed is working with a vision to drive change and help everyone in need!
        </div>
      </div>
    </section>


    <section class="container mx-auto h-full">
      <!-- <h2 class="text-center text-3xl mt-8 mb-8 font-bold text-[#364958]">{{ $t('About us') }}</h2>
      <img class="text-center w-full h-[20rem]" src="../assets/Inter/img/crowdfunding-money-business-bulb-graphic-260nw-480471112.webp">
      <p class="text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and
        desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps
        streamline the crowdfunding environment.</p>

      <p class="text-lg leading-relaxed text-slate-500 mt-5">Whether it's your cause or one that you support, we'll
        assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs
        efficiently.</p>

      <p class="text-lg leading-relaxed text-slate-500 mt-5">With our one-of-a-kind platform that enables people all
        around the world to give towards goods required by NGOs, we have revolutionized the crowdfunding sector. We are
        working hard to change the world by connecting people together to have a lasting influence. We do this with the
        utmost trust, integrity, and compassion.</p> -->

        <div class="mb-2">
        <h2 class="text-3xl mt-8 mb-3 font-bold text-[#364958]">{{ $t('About Us') }}</h2>
        <div class="flex flex-wrap">

          <div class="w-full lg:w-6/12 md:w-6/12 sm:12/12 mr-auto">
            <div class="">
              <p class="text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and
                desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps
                streamline the crowdfunding environment.</p>

              <p class="text-lg leading-relaxed text-slate-500 mt-5">Whether it's your cause or one that you support, we'll
                assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs
                efficiently.</p>

              <p class="text-lg leading-relaxed text-slate-500 mt-5">With our one-of-a-kind platform that enables people all
                around the world to give towards goods required by NGOs, we have revolutionized the crowdfunding sector. We are
                working hard to change the world by connecting people together to have a lasting influence. We do this with the
                utmost trust, integrity, and compassion.</p>
            </div>
          </div>

          <div class="w-full lg:w-5/12 md:w-5/12 sm:12/12 ml-auto mr-auto h-auto w-auto">
            <img alt="..." class="max-w-full rounded-lg shadow-lg lg:h-[25rem] w-full mt-2" src="../assets/Inter/img/Nonprofit-Crowdfunding-Platforms_Feature.jpg">
          </div>
          
        </div>
      </div>

    </section>


    <section class="bg-[#ebf8ec] pt-5 pb-5 mt-10">
      <div class="container mx-auto h-full">
        <div class="mt-10 mb-5">
          <h2 class="text-center text-3xl mt-8 font-bold text-[#364958]">{{ $t('How did it all start?') }}
          </h2>
        </div>

        <!-- <div class="w-full mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src="../assets/Inter/img/istockphoto-1248915720-612x612.jpg">
                </div> -->
        <div class="text-lg leading-relaxed text-slate-500 mb-10">It all began in 2023, and since then, we have developed
          the most reputable crowdfunding platform. The foundation of what we do is the conviction that people are
          naturally compassionate and willing to assist. By utilizing technology to its fullest, we have been able to
          create an easy and transparent method for online donations.

          Regardless of their socioeconomic status, anybody in the nation has the ability to start or contribute to a
          campaign. We are making the best use of online donations since we think they will become "the" means to perform
          charitable and humanitarian deeds in the next few years.
        </div>
      </div>
    </section>

    <!-- <section>
            <div class="text-center text-3xl text-slate-500 mt-8 font-bold">Why the  Best Deed?</div>
        </section> -->
    <!-- 
        <section class="container mx-auto">
            <div class="card-shodow p-5 rounded-[6px] mt-6">
                <div>

                </div>
            </div>
        </section> -->

    <!-- <section class="container mx-auto">
            <div class="text-center text-3xl text-slate-500 mt-8 font-bold">Here's more about  Best Deed.</div>
            <div class="w-full mr-auto px-4">
                <div class="md:pr-12">
                    <h3 class="text-3xl font-semibold sm:mt-5">A growing company</h3>
                    <p class="mt-4 text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps streamline the crowdfunding environment.</p>
                </div>
            </div>
            <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4 card-shodow p-5 rounded-[6px]">
                    <h3 class="text-3xl font-semibold sm:mt-5">A growing company</h3>
                    <p class="mt-4 text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps streamline the crowdfunding environment.</p>
                </div>
                <div class="w-full md:w-4/12 mr-auto px-4 card-shodow p-5 rounded-[6px]">
                    <h3 class="text-3xl font-semibold sm:mt-5">A growing company</h3>
                    <p class="mt-4 text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps streamline the crowdfunding environment.</p>
                
                </div>
                <div class="w-full md:w-4/12 mr-auto px-4 card-shodow p-5 rounded-[6px]">
                    <h3 class="text-3xl font-semibold sm:mt-5">A growing company</h3>
                    <p class="mt-4 text-lg leading-relaxed text-slate-500">For individuals who believe in the importance of contributing and desire to be part of the transformation they want to see, Best Deed works with a distinctive approach and helps streamline the crowdfunding environment.</p>
                
                </div>
            </div>
        </section> -->


    <!-- <section class="container mx-auto h-full">
      <div class="text-center mt-10 mb-5">
        <h2 class="text-center text-3xl text-[#364958] mt-8 font-bold">{{ $t('Why the  Best Deed?') }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/4750782.avif" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12 mt-3">
            <p class="text-[16px] font-black mt-2">{{ $t('Reliability') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">          
        <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/1264284.avif" />
            
            
          <div class="lg:w-9/12 xl:w-9/12 mt-3">
            <p class="text-[16px] font-black mt-2">{{ $t('Tech-driven') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">

            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/402116.avif" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-4">{{ $t('Feature-rich') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/4751838.avif" />
          </div>
         
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2">{{ $t('Trust & Transparency') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/1977296.avif" />
          </div>
         
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2">{{ $t('Security at the core') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
              src="../../src/assets/Inter/img/317143.avif" />
          </div>
         
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2">{{ $t('Creativity at peak') }}</p>
          </div>
        </div>

        </div>
    </section> -->


    <!-- <section class="container mx-auto h-full">
      <div class="text-center mt-10 mb-5">
        <h2 class="text-center text-3xl text-[#364958] mt-8 font-bold">{{ $t('The Mission & Vision at  Best Deed!') }}
        </h2>
      </div>
    </section> -->



    <section class="pb-10">
      <div class="container mx-auto px-4">
        <div class="text-center text-3xl text-[#364958] mt-8 font-bold">Here's more about Best Deed.</div>
        <div class="flex flex-wrap">

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/partners.png" alt="organization" />
                </div>
                <h6 class="text-xl font-semibold">People-centric organization</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  We constantly put the needs of the people first. Along with rewards, perks, incentives, and recognition,
                  we strive to adopt compassionate leadership.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/rate.png" alt="" />
                </div>
                <h6 class="text-xl font-semibold">Greater satisfaction</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  We place great importance on how you feel before, during, and after donating. As a result, the campaign
                  to which you donated will provide you with constant updates on the products' shipment, delivery, and
                  usage as well.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/passion.png" alt="" />
                </div>
                <h6 class="text-xl font-semibold">Passionate people</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  The process of bringing about transformation calls for an amazing team. We appreciate that some of the
                  most creative and dedicated young leaders are leading our company.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/benefits.png" alt="" />
                </div>
                <h6 class="text-xl font-semibold">Top-notch benefits</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  We ensure that every interaction you have with Best Deed is beneficial, so regardless of whether you
                  want to start a campaign or make a contribution, you are always eligible to receive incredible benefits
                  and points.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/ecosystem.png" alt="" />
                </div>
                <h6 class="text-xl font-semibold">Building an ecosystem</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  We are not simply another crowdfunding company; rather, our goal is to build a trustworthy ECOSYSTEM
                  that brings together the greatest campaigns, NGOs, donors, nonprofits, and sponsors on this platform to
                  address a variety of issues.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:pt-12 pt-6 w-full lg:w-4/12 md:w-6/12 sm:w-3/12 px-4">
            <div
              class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg lg:h-[23rem] md:h-[25rem] sm:h-[18rem]">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                  <img src="../assets/Inter/img/award.png" alt="" />
                </div>
                <h6 class="text-xl font-semibold">Awarded Agency</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts.
                  A paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>



    <section class="bg-blueGray-100 pt-5">
      <div class="container mx-auto h-full">
        <div class="text-center mb-5">
          <h2 class="text-center text-3xl text-[#364958] mt-8 font-bold">{{ $t('Core Values') }}
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <div class="">
              <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/1238733.avif" />
            </div>
            <div class="lg:w-9/12 xl:w-9/12 mt-5">
              <p class="text-[16px] font-black">{{ $t('Driving the change blended with tech.') }}</p>
            </div>
          </div>

          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/1545955.avif" />
            <!-- <div class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] ml-8 md:ml-0 lg:ml-0 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div> -->

            <div class="lg:w-9/12 xl:w-9/12 mt-5">
              <p class="text-[16px] font-black">{{ $t('Keeping the trust and transparency at the peak!') }}</p>
            </div>
          </div>

          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <div class="">
              <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/1306033.avif" />
            </div>
            <!-- <div class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] ml-8 md:ml-0 lg:ml-0 pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div> -->
            <div class="lg:w-9/12 xl:w-9/12 mt-5">
              <p class="text-[16px] font-black">{{ $t('Helping the ones in need!') }}</p>
            </div>
          </div>

          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <div class="">
              <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/2112822.avif" />
            </div>
            <!-- <div class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] ml-8 md:ml-0 lg:ml-0 pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div> -->
            <div class="lg:w-9/12 xl:w-9/12 mt-5">
              <p class="text-[16px] font-black">{{ $t('Making the world a better place to live.') }}</p>
            </div>
          </div>

          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <div class="">
              <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/3392072.avif" />
            </div>
            <div class="lg:w-9/12 xl:w-9/12 mt-5">
              <p class="text-[16px] font-black">{{ $t('Pushing the people-centric environment.') }}</p>
            </div>
          </div>

          <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
            <div class="">
              <img class="h-20 w-20 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/3469599.avif" />
            </div>
            <!-- <div class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] ml-8 md:ml-0 lg:ml-0 pt-2">

            </div> -->
            <div class="lg:w-9/12 xl:w-9/12">
              <p class="text-[16px] font-black mt-5">{{ $t('Encouraging volunteers to extend helping hands.') }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section class="container mx-auto ">
      <div class="mb-2">
        <h2 class="ml-4 text-3xl mt-8 mb-3 font-bold text-[#364958]">{{ $t('Mission') }}</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4 h-auto w-20">
            <img alt="..." class="max-w-full rounded-lg shadow-lg h-[18rem] w-full" src="../assets/Inter/img/images_mission(1).png">
          </div>
          <div class="w-full md:w-8/12 mr-auto px-4">
            <div class="md:pr-12">
              <p class="text-lg text-slate-500">Over the years, we have seen that individuals want to
                donate but are hesitant to donate money. Instead, they believe in donating products as per their needs.
                So,
                Best Deed comes with a solution through which individuals can donate to NGOs, charitable organizations,
                groups and individuals the product they need through our platform. </p>
              <p class="mt-4 text-lg text-slate-500">At Best Deed, we even encourage the individuals to help
                the ones in need through our platform. They have the chance to volunteer with us in any way possible based
                on the availability, expertise and location. Volunteering can provide a sense of purpose, fulfillment, and
                satisfaction, and can also help build skills, networks, and relationships.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="items-center flex flex-wrap mt-12">
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                  <p class="mt-4 text-lg leading-relaxed text-slate-500">Whether it's your cause or one that you support, we'll assemble communities, pertinent partners, cutting-edge tools, and resources to meet your product needs efficiently.</p>
              </div>
          </div>
          <div class="w-full md:w-4/12 mr-auto px-4">
              <img alt="..." class="max-w-full rounded-lg shadow-lg" src="../assets/Inter/img/istockphoto-1248915720-612x612.jpg">
          </div>
      </div> -->
      <div class="mt-2">
        <h2 class="ml-4 text-3xl mt-8 font-bold text-[#364958]">{{ $t('Vision') }}</h2>
        <div class="items-center flex flex-wrap">

          <div class="w-full md:w-8/12 px-4">
            <div class="md:pr-12">
              <p class="mt-4 text-lg leading-relaxed text-slate-500">The team at Best Deed works with a vision to promote
                the feeling of giving and eliminate the hesitancy of donating directly through money. </p>
              <p class="mt-4 text-lg leading-relaxed text-slate-500">With a unique donating model, the organizations will
                put up their requirements through the crowdfunding campaign, and individuals can donate at their
                convenience.</p>
              <p class="mt-4 text-lg leading-relaxed text-slate-500">Our vision totally aligns with our mission in making
                proactive steps to encourage individuals and groups in volunteering with us. Through this, we are moving a
                step ahead in making it easier for people to make a difference in their communities and beyond.</p>
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg h-[18rem] w-full" src="../assets/Inter/img/vision.jpeg">
          </div>
        </div>
      </div>

    </section>


    <section class="bg-[#ebf8ec] pt-10 pb-10 mt-10 mb-10">
      <div class="flex flex-wrap justify-between container mx-auto h-full">

        <div>
          <div
            class="ml-5 font-bold text-2xl p-3 w-14 h-14 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full bg-indigo-100">
            <div>{{ total_donors }}</div>
          </div>
          <div class="font-bold text-lg">Total Donors</div>
        </div>

        <div>
          <div
            class="ml-5 font-bold text-2xl p-3 w-14 h-14 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full bg-indigo-100">
            <div>{{ total_ngos }}</div>
          </div>
          <div class="font-bold text-lg">Total Ngos</div>
        </div>


        <div>
          <div
            class="ml-10 font-bold text-2xl p-3 w-14 h-14 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full bg-indigo-100">
            <div>{{ total_donations }}</div>
          </div>
          <div class="font-bold text-lg">Total Donations</div>
        </div>


        <div>
          <div
            class="ml-10 font-bold text-2xl p-3 w-14 h-14 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full bg-indigo-100">
            <div>{{ total_campaigns }}</div>
          </div>
          <div class="font-bold text-lg">Total Campaigns</div>
        </div>

        <div>
          <div
            class="ml-14 font-bold text-2xl p-3 w-14 h-14 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full bg-indigo-100">
            <div>{{ total_live_campaigns }}</div>
          </div>
          <div class="font-bold text-lg">Total Live Campaigns</div>
        </div>

      </div>
    </section>


    <section class="container mx-auto h-full">
      <div class="text-center mt-10 mb-5">
        <h2 class="text-center text-3xl text-[#364958] mt-8 font-bold">{{ $t('Why the Best Deed?') }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/4750782.avif" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12 mt-3">
            <p class="text-[16px] font-black mt-5 ml-3">{{ $t('Reliability') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/technology.png" />


          <div class="lg:w-9/12 xl:w-9/12 mt-3">
            <p class="text-[16px] font-black mt-4 ml-1">{{ $t('Tech-driven') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">

            <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/features.png" />
          </div>
          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-6 ml-2">{{ $t('Feature-rich') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/4751838.avif" />
          </div>

          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2 ml-3">{{ $t('Trust & Transparency') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/1977296.avif" />
          </div>

          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2">{{ $t('Security at the core') }}</p>
          </div>
        </div>

        <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
          <div class="">
            <img class="h-16 w-16 mr-3 ml-8 md:ml-0 lg:ml-0 pt-2" src="../../src/assets/Inter/img/317143.avif" />
          </div>

          <div class="lg:w-9/12 xl:w-9/12">
            <p class="text-[16px] font-black mt-2">{{ $t('Creativity at peak') }}</p>
          </div>
        </div>

      </div>
    </section>




  </main>
  <Footer />
</template>


<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'About Us',
  components: {
    Navbar,
    Footer,
  },

  created() {
    document.title = this.$t("Get to know more about BestDeed")
    this.get_about_data()
  },

  data() {
    return {
      total_campaigns: '',
      total_donations: '',
      total_donors: '',
      total_ngos: '',
      total_live_campaigns: '',
    }
  },

  resources: {
    get_about_data() {
      return {
        method: "sadbhavna_donatekart.api.api.get_about_data",
        onSuccess: (res) => {
          this.total_campaigns = res[0]
          this.total_donations = res[1]
          this.total_donors = res[2]
          this.total_ngos = res[3]
          this.total_live_campaigns = res[4]
        },
        onError() {
          console.log("Error")
        }

      }
    }
  },

  methods: {
    get_about_data() {
      this.$resources.get_about_data.submit()
    }
  }


}
</script>