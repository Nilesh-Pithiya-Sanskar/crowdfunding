<template>
  <main>
    <Navbar />
    <section>
      <div class="relative bg-center bg-cover w-full h-full banner-image">
        <div class="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div class="ml-4">
            <h1 class="leading-[35px] md:leading-[40px] lg:leading-[50px] font-[800] banner">
              <span v-if="lang == 'gu'">
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">બિન નફાકારક</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">સંસ્થાઓ માટે મોટો </p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">તફાવત બનાવવા માટે</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">નાના પગલાં લેવા!</p>
              </span>
              <span v-else-if="lang == 'hi'">
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">गैर-लाभकारी</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">संगठनों के लिए बड़ा</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">बदलाव लाने के लिए</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">छोटे कदम उठाना!</p>
              </span>
              <span v-else>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">Taking</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">Small Steps to Make</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#40b751]">a Bigger Difference</p>
                <p class="text-[24px] md:text-[34px] lg:text-[46px] text-[#3f4640]">for Nonprofit <br>Organizations!</p>
              </span>
            </h1>
            <p class="font-[600] text-[15px] md:text-[18px] lg:text-[18px]leading-[24px] text-[#3f4640] py-8">
              <span v-if="lang == 'gu'">
                એનજીઓ માટેનું અમારું ક્રાઉડફંડિંગ પ્લેટફોર્મ 100%
                <br>પ્રમાણિકતા અને પારદર્શિતા સાથે ચેરિટી સંસ્થાઓને પ્રોત્સાહિત
                <br>અને સશક્તિકરણ કરવાના માર્ગો બનાવી રહ્યું છે!
              </span>
              <span v-else-if="lang == 'hi'">
                एनजीओ के लिए हमारा क्राउडफंडिंग प्लेटफॉर्म 100%
                <br>प्रामाणिकता और पारदर्शिता के साथ चैरिटी संगठनों को
                <br>प्रोत्साहित करने और उन्हें सशक्त बनाने के तरीके बना रहा है!
              </span>
              <span v-else>
                Our Crowdfunding Platform for NGOs is
                <br>making ways to encourage and empower
                <br>charity organizations with 100% authenticity
                <br>& transparency!
              </span>

            </p>
            <div class="pt-4 pb-10 md:pb-28 lg:pb-36">
              <router-link to="/request-campaign"
                class="bg-[#40b751] px-4 md:px-6 lg:px-6 py-2 md:py-3 lg:py-3 text-white rounded-full text-[12px] lg:text-[18px] hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                <span v-if="lang == 'gu'">
                  <strong>મફતમાં</strong>
                  ફંડ એકઠું કરવાની શરૂઆત કરો
                </span>
                <span v-else-if="lang == 'hi'">
                  <strong>मुफ़्त में </strong>
                  फ़ंडरेज़र शुरू करें</span>
                <span v-else>Start a Fundraiser for <strong>FREE</strong></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full container mx-auto mt-10">

      <div>
        <h2 class="text-[22px] md:text-[28px] lg:text-[33px] pb-10 font-black text-[#40b751] text-center">
          {{ $t('Our Mission') }},
          {{ $t('Vision') }}
          &
          {{ $t('Core Values') }}! </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col justify-center items-center">
          <img src="../assets/Inter/img/mission.png" alt="mission.png" class="max-w-full max-h-full">
          <h3 class="text-[#40b751] text-[21px] md:text-[25px] lg:text-[28px] font-black my-4 whitespace-nowrap">
            {{ $t('Our Mission') }}</h3>
          <p class="text-center px-8 md:px-10 lg:px-16">
            {{ $t('We know that there are many organizations out there that are working hard to make a difference.So, our mission is to create an NGO crowdfunding platform where these NGOs can receive the visibility and support they need to make a real impact.') }}
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="../assets/Inter/img/vision.png" alt="Image 2" class="max-w-full max-h-full">
          <h3 class="text-[#40b751] text-[21px] md:text-[25px] lg:text-[28px] font-black my-4 whitespace-nowrap">
            {{ $t('Our Vision') }}</h3>
          <p class="text-center px-8 md:px-10 lg:px-16">
            {{ $t('Our vision is to create the best donation platform where anyone can make a meaningful impact on the causes they care about. Whether through a direct donation, donating through products, or volunteering with them, we want to make it easy for people to give back to their communities and the world.') }}
          </p>
        </div>
      </div>


    </section>

    <section class="w-full p-1 md:p-4 lg:p-4 mb-5 mt-5 bg-[#ebf8ec]">
      <div class="container mx-auto">
        <div>
          <h2 class="text-[22px] md:text-[28px] lg:text-[33px] font-black text-[#40b751] text-center my-4">
            {{ $t("Our Core Values") }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 container">
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_home_join_us_trusted_platform.svg" alt="Image 1"
                class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Authenticity At The Core!") }}
            </p>
          </div>
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_home_join_us_end-to-end_transparency.svg" alt="Image 2"
                class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("End-To-End Transparency") }}
            </p>
          </div>
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_empowering_ngos.svg" alt="Image 3" class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Empowering NGOs") }}</p>
          </div>
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_home_join_us_easy_process.svg" alt="Image 4"
                class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Streamlining Crowdfunding") }}
            </p>
          </div>
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_driving_through_innovation.svg" alt="Image 5"
                class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Driving Through Innovation") }}
            </p>
          </div>
          <div class="mt-2 mb-8">
            <div class="flex justify-center items-center">
              <img src="../assets/Inter/img/icon_bringing_communities_together.svg" alt="Image 6"
                class="max-w-full max-h-full">
            </div>
            <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">
              {{ $t("Bringing communities together") }}
            </p>
          </div>
        </div>
      </div>

    </section>
    <section class="container mx-auto ">
      <div class="text-center font-bold pb-8">
        <h2 class="text-[22px] md:text-[28px] lg:text-[33px] font-black text-[#40b751] pb-4">
          {{ $t('Our Journey so far & even beyond!') }}</h2>
        <p class="font-semibold text-lg">
          <span v-if="lang == 'gu'">નમ્ર શરૂઆતથી લઈને કાયમી અસર બનાવવા સુધીની </span>
          <span v-else-if="lang == 'hi'">विनम्र शुरुआत से लेकर स्थायी प्रभाव पैदा करने तक,</span>
          <span v-else>From Humble Beginnings to Creating Lasting Impact</span>
        </p>
        <p class="font-semibold text-lg">
          <span v-if="lang == 'gu'">અમારી વાર્તા બદલાતી જીવન અને એનજીઓને સશક્તિકરણ.</span>
          <span v-else-if="lang == 'hi'">बदलते जीवन और एनजीओ को सशक्त बनाने की हमारी कहानी।</span>
          <span v-else>Our Story of Changing Lives & Empowering NGOs.</span>
        </p>
      </div>
    </section>

    <section class="mx-auto container hidden md:block lg:block mt-5">
      <div class="container mx-auto bg-center bg-no-repeat h-full w-full ">
        <div class="object-fixed">
          <img class="" src="../assets/Inter/img/journey.png">
        </div>
        <div class=" grid grid-cols-3 justify-items-center">
          <div class="journey-2015">
            <p class="text-black font-black text-xl">2015</p>
          </div>
          <div class="content-2015">
            <p class="text-[#3f4640] font-[400]">
              {{ $t('Our Founder Vijay started his journey in 2015 with a team of 7 people having the simple motive of giving to the community.') }}
            </p>
          </div>
          <div class="journey-2017">
            <p class="text-black font-black text-xl">2017</p>
          </div>
          <div class="content-2017">
            <p class="text-[#3f4640] font-[400]  ">
              {{ $t('Within 2 years, the team has grown to 20+ who are offering caregiving services to over 200+ elderly people who are working together for noble causes such as volunteering, tree plantation, animal and bird care, etc.') }}
            </p>
          </div>
          <div class="journey-2020">
            <p class="text-black font-black text-xl">2020</p>
          </div>
          <div class="content-2020 ">
            <p class="text-[#3f4640] font-[400]">
              {{ $t('In 2020, the caregivers grew to 40+ individuals offering caregiving services to over 350+ elderly people.') }}
            </p>
          </div>
          <div class="journey-2022">
            <p class="text-black font-black text-xl">2022</p>
          </div>
          <div class="content-2022">
            <p class="text-[#3f4640] font-[400]">
              {{ $t('We saw lots of NGOs willing to offer help but couldn’t because of the lack of funds; that’s when the idea of Best Deed was born.') }}
            </p>
          </div>
          <div class="journey-2023">
            <p class="text-black font-black text-xl">2023</p>
          </div>
          <div class="content-2023  ">
            <p class="text-[#3f4640] font-[400] ">
              {{ $t('To kickstart our idea, we launched Best Deed with 10 NGOs on board in different categories ranging from education, healthcare, animal, children, Women, elderly, etc.') }}
            </p>
          </div>
          <div class="journey-2027">
            <p class="text-black font-black text-xl">2027</p>
          </div>
          <div class="content-2027">
            <p class="text-[#3f4640] font-[400]">
              {{ $t('In the next five years, we aim to onboard 10000+ Non-profit organizations to impact the lives of over 10 MN people.') }}
            </p>
          </div>
        </div>
      </div>
    </section>



    <section class="block md:hidden lg:hidden mt-4">
      <div class="container mx-auto bg-center bg-no-repeat h-full w-full ">
        <div class=" grid grid-cols-1 justify-items-center">
          <div class="object-fixed">
            <img class="h-[1700px]" src="../assets/Inter/img/journey_mobile.png">
          </div>
          <div class="absolute mt-64 ml-56">
            <p class="text-black font-black text-xl">2015</p>
          </div>
          <div class="absolute mt-[300px] mr-10 text-right">
            <p class="text-[#3f4640] font-[400] text-[14px] w-[220px] leading-[22px]">
              {{ $t('Our Founder Vijay started his journey in 2015 with a team of 7 people having the simple motive of giving to the community.') }}

            </p>
          </div>
          <div class="absolute mt-[460px] mr-[150px]">
            <p class="text-black font-black text-xl">2017</p>
          </div>
          <div class="absolute mt-[500px] ml-20 text-left">
            <p class="text-[#3f4640] font-[400] text-[14px]  w-[190px] leading-[22px]">
              {{ $t('Within 2 years, the team has grown to 20+ who are offering caregiving services to over 200+ elderly people who are working together for noble causes such as volunteering, tree plantation, animal and bird care, etc.') }}

            </p>
          </div>
          <div class="absolute mt-[710px] ml-36">
            <p class="text-black font-black text-xl">2020</p>
          </div>
          <div class="absolute mt-[800px] mr-10 text-left">
            <p class="text-[#3f4640] font-[400] text-[14px] w-[220px] text-right leading-[22px]">
              {{ $t('In 2020, the caregivers grew to 40+ individuals offering caregiving services to over 350+ elderly people.') }}

            </p>
          </div>
          <div class="absolute mt-[950px] mr-32">
            <p class="text-black font-black text-xl">2022</p>
          </div>
          <div class="absolute mt-[1030px] ml-16">
            <p class="text-[#3f4640] font-[400] text-[14px] w-[200px] leading-[22px]">
              {{ $t('We saw lots of NGOs willing to offer help but couldn’t because of the lack of funds; that’s when the idea of Best Deed was born.') }}

            </p>
          </div>
          <div class="absolute mt-[1200px] ml-36">
            <p class="text-black font-black text-xl">2023</p>
          </div>
          <div class="absolute mt-[1270px] mr-10 text-right">
            <p class="text-[#3f4640] font-[400] text-[14px] w-[220px] leading-[22px]">
              {{ $t('To kickstart our idea, we launched Best Deed with 10 NGOs on board in different categories ranging from education, healthcare, animal, children, Women, elderly, etc.') }}

            </p>
          </div>
          <div class="absolute mt-[1440px] mr-36">
            <p class="text-black font-black text-xl">2027</p>
          </div>
          <div class="absolute mt-[1530px] ml-16 text-left">
            <p class="text-[#3f4640] font-[400] text-[14px] w-[200px] leading-[22px]">
              {{ $t('In the next five years, we aim to onboard 10000+ Non-profit organizations to impact the lives of over 10 MN people.') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f6fed8] mt-0">
      <div class="text-center container font-bold mx-auto impact-image">
        <h2 class="text-[22px] md:text-[28px] lg:text-[33px] text-[#40b751] font-black pb-2 ">{{ $t('Our Impact') }}</h2>
        <p class="text-center font-semibold text-lg pb-10">
          {{ $t('To impact the lives of 10 Million People in 5 years!') }}
        </p>
        <img src="../assets/Inter/img/10MN.png" alt="10MN.png" />
      </div>
    </section>


    <section class="mx-auto container">
      <div class="my-8">
        <h2 class="text-[22px] md:text-[28px] lg:text-[33px] text-[#40b751] font-black text-center  mb-8">
          {{ $t('Empowering Communities - Here’s How?') }}
        </h2>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  ">

          <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/icon_authenticity_transparency.svg" alt="empowering1.png" class="h-12 w-12 " />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">{{ $t('100% authenticity & transparency') }} </p>
              <p class="text-md">
                {{ $t('Best Deed is a 100% authentic and transparent online crowdfunding donation platform with all the required licenses and permits.Check here!(Add the link) Also, before onboarding NGOs on our crowdfunding site, we thoroughly vet their requirements to ensure their legitimacy.') }}
              </p>
            </div>
          </div>
          <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/home-banner-icon-0.svg" alt="empowering2.png" class="h-12 w-16" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">{{ $t('0% Platform fees') }}</p>
              <p class="text-md">
                {{ $t('Best Deed charges no crowdfunding donation platform fees whether you are a donor contributing to the NGOs or NGOs willing to start a crowdfunding campaign. It is a free crowdfunding site, and we do it for FREE!') }}
              </p>
            </div>
          </div>

          <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/icon_building_an_ecosystem.svg" alt="empowering3.png" class="h-12 w-12" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">{{ $t('Building an ecosystem') }}</p>
              <p class="text-md">
                {{ $t('We are not simply another crowdfunding company; our goal is to build a trustworthy ECOSYSTEM that brings together the greatest campaigns, NGOs, donors, and sponsors on this online crowdfunding donation platform to make an impact.') }}
              </p>
            </div>
          </div>

          <div class="flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/icon_dedicated_help_center.svg" alt="mpowering4.png" class="h-12 w-12" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">{{ $t('Dedicated Help Center') }}</p>
              <p class="text-md">
                {{ $t('Throughout your crowdfunding journey, if you have any questions or require in-depth assistance regarding our fundraising website for individuals, we are here to help. Our dedicated Help Centre is designed to address your concerns with every relevant detail, training, and tool.') }}
              </p>
            </div>
          </div>

        </div>


      </div>
    </section>




    <div id="old-section" class="hidden md:block lg:block">
      <section class="bg-[#40b751]">
        <div class="mx-auto container  text-center">
          <h2 class="font-black text-white text-[22px] md:text-[28px] lg:text-[33px] pt-10 ">
            {{ $t('Meet the Visionaries') }} </h2>
          <p class="font-semibold text-md pt-4 pb-10">{{ $t('Founders of Best Deed Paving the Way!') }}</p>
          <div class="grid grid-cols-3">
            <div class="mb-0">
              <img src="../assets/Inter/img/Vijay.png" alt="Vijay.png" class="mx-auto">
            </div>
            <div class="mb-0">
              <img src="../assets/Inter/img/Dhirendra.png" alt="Dhirendra.png" class="mx-auto md:h-[205px] lg:h-[221px]">
            </div>
            <div class="mb-0">
              <img src="../assets/Inter/img/Rajesh.png" alt="Rajesh.png" class="mx-auto md:h-[205px] lg:h-[221px]">
            </div>
          </div>
        </div>
      </section>

      <section class="lg:h-96 md:h-[460px] mx-auto container text-center">
        <div class="grid grid-cols-3">
          <div>
            <p class="font-bold pt-4 text-md">{{ $t('Vijay Dobariya ') }}</p>
            <p class="pb-6">{{ $t('Founder, Best Deed') }}</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">
              {{ $t("Vijay Dobariya is the founder of Best Deed and has been on this journey of helping people for the last 8 years. He works towards his mission of making this world a better place by giving back to the community with the vision of 'Manavseva is Prabhuseva.' In order to fulfill his mission & vision of helping as many people as he can, he started Best Deed which offers the required visibility and fulfills other necessities of NGOs, that they need to help others.") }}
            </p>
          </div>
          <div>
            <p class="font-bold pt-4 text-md">{{ $t('Dhirendara Kanabar') }}</p>
            <p class="pb-6">{{ $t('Founding Member, Best Deed') }}</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">
              {{ $t("Dhirendara Kanabar is the founding member of Best Deed. He is dedicated to the cause of animal welfare. He has founded an Animal Welfare Organization where he runs his 'Voice for Voiceless' campaign to spread awareness about the problems faced by animals by making impactful videos. He then realized the problem that NGOs face when raising money, products, or volunteers. To solve this problem and to offer much-needed visibility to NGOs, he joined Best Deed.") }}
            </p>
          </div>
          <div>
            <p class="font-bold pt-4 text-md">{{ $t('Rajesh Rupabara') }}</p>
            <p class="pb-6">{{ $t('Founding Member, Best Deed') }}</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">
              {{ $t("Rajesh Rupabara is also contributing as the founder member at Best Deed. He is a Vice President of 'Sadbhavna Vrudhashram, ' where he offers caregiving services to over 500+ old-age citizens. Considering the difficulties he faced while raising the necessities for his old age home in the initial period, he started Best Deed with a vision to help other NGOs in raising funds, products, and even volunteers to ensure hassle-free operations.") }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div id="new-section" class="block md:hidden lg:hidden">
      <section class="bg-[#40b751]">
        <div class="text-center">
          <p class="font-black text-white text-[22px] md:text-[28px] lg:text-[33px] pt-10">
            {{ $t('Meet the Visionaries') }}
          </p>
          <p class="font-semibold text-md pt-4">{{ $t('Founders of Best Deed Paving the Way!') }}</p>
          <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
            <div class="pt-8 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Vijay1.png" alt="Vijay.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <p class="font-bold pt-4 text-md">{{ $t('Vijay Dobariya ') }}</p>
                <p class="pb-2">{{ $t('Founder, Best Deed') }}</p>
                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">
                  {{ $t("Vijay Dobariya is the founder of Best Deed and has been on this journey of helping people for the last 8 years. He works towards his mission of making this world a better place by giving back to the community with the vision of 'Manavseva is Prabhuseva.' In order to fulfill his mission & vision of helping as many people as he can, he started Best Deed which offers the required visibility and fulfills other necessities of NGOs, that they need to help others.") }}
                </p>
              </div>
            </div>
            <div class="pt-4 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Dhirendra1.png" alt="Dhirendra.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <p class="font-bold pt-4 text-md">{{ $t('Dhirendara Kanabar') }}</p>
                <p class="pb-2">{{ $t('Founding Member, Best Deed') }}</p>
                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">
                  {{ $t("Dhirendara Kanabar is the founding member of Best Deed. He is dedicated to the cause of animal welfare. He has founded an Animal Welfare Organization where he runs his 'Voice for Voiceless' campaign to spread awareness about the problems faced by animals by making impactful videos. He then realized the problem that NGOs face when raising money, products, or volunteers. To solve this problem and to offer much-needed visibility to NGOs, he joined Best Deed.") }}
                </p>
              </div>
            </div>
            <div class="pt-4 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Rajesh1.png" alt="Rajesh.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <p class="font-bold pt-4 text-md">{{ $t('Rajesh Rupabara') }}</p>
                <p class="pb-2">{{ $t('Founding Member, Best Deed') }}</p>

                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">
                  {{ $t("Rajesh Rupabara is also contributing as the founder member at Best Deed. He is a Vice President of 'Sadbhavna Vrudhashram,' where he offers caregiving services to over 500+ old-age citizens. Considering the difficulties he faced while raising the necessities for his old age home in the initial period, he started Best Deed with a vision to help other NGOs in raising funds, products, and even volunteers to ensure hassle-free operations.") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="hidden md:block lg:block ">
      <div class="h-full w-full relative bg-center bg-cover hero together-image">
        <div class="mx-auto container">
          <div class="grid sm:grid-cols-1 lg:grid-cols-2 pl-6 lg:pl-0 sm:pb-0 md:pb-16 lg:pb-16">
            <div class="sm:pb-0 md:pb-0 lg:pb-4 sm:pt-0 lg:pt-16">
              <div class="leading-tight pt-0 md:pt-32 lg:pt-32 pb-12">
                <p class="text-[22px] md:text-[28px] lg:text-[32px] text-[#40b751] font-[800]">

                  <span v-if="lang == 'gu'">સાથે મળીને, </span>
                  <span v-else-if="lang == 'hi'">हम सभी</span>
                  <span v-else>Together,</span>
                </p>
                <p class="text-[22px] md:text-[28px] lg:text-[32px] text-[#3f4640] font-[800]">
                  <span v-if="lang == 'gu'">અમે તફાવત કરી </span>
                  <span v-else-if="lang == 'hi'">मिलकर कुछ </span>
                  <span v-else>We can make a</span>
                </p>
                <p class="text-[22px] md:text-[28px] lg:text-[32px] text-[#3f4640] font-[800]">

                  <span v-if="lang == 'gu'">શકીએ છીએ!</span>
                  <span v-else-if="lang == 'hi'">अलग कर सकते हैं!</span>
                  <span v-else>difference!</span>
                </p>
              </div>
              <div class="pb-16">
                <p class="text-[16px] text-[#3f4640] font-[700] pr-0 md:pr-32 lg:pr-32" style="line-height: 26px; ">

                  {{ $t("Join us in our mission to make the world a better place with this online crowdfunding platform - Best Deed. Whether you're an individual looking to make a difference or an NGO needing support, we're here to help") }}
                </p>
              </div>
              <div class="h-16">
                <router-link to="/explore-campaigns" style="font-size: 16px; font-weight: 700;"
                  class="bg-[#40b751] px-6 py-3 text-white rounded-full hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                  {{ $t('Donate now!') }}
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="block md:hidden lg:hidden ">
      <div class=" relative bg-center bg-cover hero together-image-sm">
        <div class="mx-auto container ">
          <div class="grid content-center ">
            <div class="px-4 ">
              <div class="leading-tight mt-16">
                <p class="text-[23px] md:text-[28px] lg:text-[32px] text-[#40b751] font-[800]">
                  {{ $t("Together, We can make a difference!") }}</p>
              </div>
              <div class="pb-6">
                <p class="text-[14px] text-[#3f4640] font-[700] " style="line-height: 20px; ">
                  {{ $t("Join us in our mission to make the world a better place with this online crowdfunding platform - Best Deed. Whether you're an individual looking to make a difference or an NGO needing support, we're here to help") }}
                </p>
              </div>
              <div class="h-10">
                <router-link to="/explore-campaigns" style="font-size: 16px; font-weight: 700;"
                  class="bg-[#40b751] px-6 py-3 text-white rounded-full hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                  {{ $t('Donate now!') }}
                </router-link>
              </div>
            </div>
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
    document.title = this.$t("About BestDeed & Our Commitment to Supporting NGO | BestDeed")
    // this.get_about_data()
    const linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      var link = document.createElement('link');
      link.rel = 'canonical';
      link.href = "https://bestdeed.org/about-us"
      document.head.appendChild(link);
    }
    else {
      linkElement.href = "https://bestdeed.org/about-us"
      document.head.appendChild(linkElement)
    }
  },

  data() {
    return {
      total_campaigns: '',
      total_donations: '',
      total_donors: '',
      total_ngos: '',
      total_live_campaigns: '',
      lang: this.get_language(),
    }
  },

  mounted() {
    this.get_language()
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
    },
    get_language() {
      return this.$cookies.get('lang') || localStorage.getItem('lang')
    },
  }


}
</script>
<style>
.banner {
  padding-top: 80px;
}

@media (max-width: 1366px) and (max-width: 768px) {
  .banner {
    padding-top: 128px;
  }
}

@media (max-width: 767px) {
  .banner {
    padding-top: 32px;
  }
}

.impact-image {
  padding: 80px;
}

@media (max-width: 1278px) {
  .impact-image {
    padding: 40px;
  }

}

@media (max-width: 414px) {
  .impact-image {
    padding: 20px;
  }
}

.bg-image {
  position: relative;
  background-image: url('https://bestdeed.org/files/BG%20copy.png');
  background-size: cover;
}

.banner-image {
  background-image: url('https://bestdeed.org/files/BG%20copy.png');
}

@media (max-width:630px) {
  .banner-image {
    background-image: url('https://bestdeed.org/files/BG_about1.png');
    height: auto;
    width: auto;
  }
}

.together-image-sm {
  background-image: url('https://bestdeed.org/files/together_layer1.png');
  height: auto;
  width: auto;
}


.together-image {
  background-image: url('https://bestdeed.org/files/together_layer.png');
}

@media (max-width: 1018px) {
  .together-image {
    background-image: url('https://bestdeed.org/files/together_layer1.png');
  }
}

.journey-2015 {
  position: absolute;
  margin-top: -540px;
  margin-right: 760px;
}

.content-2015 {
  position: absolute;
  margin-top: -480px;
  margin-right: 550px;
  font-size: 14px;
  line-height: 22px;
  width: 232px;
}

.journey-2017 {
  position: absolute;
  margin-top: -610px;
  margin-right: 220px;
}

.content-2017 {
  position: absolute;
  margin-top: -550px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  width: 300px;
}

.journey-2020 {
  position: absolute;
  margin-top: -550px;
  margin-left: 700px;
}

.content-2020 {
  position: absolute;
  margin-top: -500px;
  margin-left: 520px;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  width: 220px;
}

.journey-2022 {
  position: absolute;
  margin-top: -310px;
  margin-left: 530px;
}

.content-2022 {
  position: absolute;
  margin-top: -250px;
  margin-left: 690px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  width: 240px;
}

.journey-2023 {
  position: absolute;
  margin-top: -275px;
  margin-right: 70px;
}

.content-2023 {
  position: absolute;
  margin-top: -220px;
  margin-left: 100px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  width: 232px;
}

.journey-2027 {
  position: absolute;
  margin-top: -205px;
  margin-right: 670px;
}

.content-2027 {
  position: absolute;
  margin-top: -150px;
  margin-right: 500px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  width: 200px;
}

@media (max-width: 1276px) {
  .journey-2015 {
    position: absolute;
    margin-top: -570px;
    margin-right: 760px;
  }

  .content-2015 {
    position: absolute;
    margin-top: -510px;
    margin-right: 550px;
    font-size: 14px;
    line-height: 22px;
    width: 232px;
  }

  .journey-2017 {
    position: absolute;
    margin-top: -650px;
    margin-right: 220px;
  }

  .content-2017 {
    position: absolute;
    margin-top: -600px;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    width: 300px;

  }

  .journey-2020 {
    position: absolute;
    margin-top: -580px;
    margin-left: 750px;
  }

  .content-2020 {
    position: absolute;
    margin-top: -520px;
    margin-left: 550px;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    width: 220px;

  }

  .journey-2022 {
    position: absolute;
    margin-top: -325px;
    margin-left: 560px;
  }

  .content-2022 {
    position: absolute;
    margin-top: -270px;
    margin-left: 720px;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    width: 240px;

  }

  .journey-2023 {
    position: absolute;
    margin-top: -290px;
    margin-right: 70px;
  }

  .content-2023 {
    position: absolute;
    margin-top: -230px;
    margin-left: 100px;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    width: 232px;

  }

  .journey-2027 {
    position: absolute;
    margin-top: -220px;
    margin-right: 700px;
  }

  .content-2027 {
    position: absolute;
    margin-top: -160px;
    margin-right: 550px;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    width: 200px;

  }
}

@media (max-width: 1022px) {
  .journey-2015 {
    position: absolute;
    margin-top: -440px;
    margin-right: 600px;
  }

  .content-2015 {
    position: absolute;
    margin-top: -380px;
    margin-right: 450px;
    font-size: 12px;
    line-height: 16px;
    width: 200px;
  }

  .journey-2017 {
    position: absolute;
    margin-top: -490px;
    margin-right: 180px;
  }

  .content-2017 {
    position: absolute;
    margin-top: -445px;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    width: 260px;

  }

  .journey-2020 {
    position: absolute;
    margin-top: -450px;
    margin-left: 550px;
  }

  .content-2020 {
    position: absolute;
    margin-top: -390px;
    margin-left: 460px;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    width: 160px;

  }

  .journey-2022 {
    position: absolute;
    margin-top: -255px;
    margin-left: 420px;
  }

  .content-2022 {
    position: absolute;
    margin-top: -200px;
    margin-left: 580px;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    width: 200px;

  }

  .journey-2023 {
    position: absolute;
    margin-top: -220px;
    margin-right: 70px;
  }

  .content-2023 {
    position: absolute;
    margin-top: -170px;
    margin-left: 100px;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    width: 210px;

  }

  .journey-2027 {
    position: absolute;
    margin-top: -170px;
    margin-right: 530px;
  }

  .content-2027 {
    position: absolute;
    margin-top: -110px;
    margin-right: 380px;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    width: 200px;

  }
}




.hero {
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  background-color: rgba(255, 248, 248, 0.63);
  background-position: center;

}



#wrapper {
  width: 680px;
  display: table;
  margin: auto;
}

#wrapper>div {
  display: inline-block;
}
</style>