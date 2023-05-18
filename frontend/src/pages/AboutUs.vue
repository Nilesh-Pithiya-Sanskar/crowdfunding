<template>
  <main>
    <Navbar />
    <section>
      <div class="hero">
        <div class="w-full h-full relative  bg-center bg-cover">
          <div class="lg:!py-32 py-10 ">
            <div class="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 card-space mb-32 mt-0">
              <div class="">
                <div class="leading-[50px] font-[800]">
                  <p class="text-[46px] text-[#3f4640]">{{ $t('Taking') }}</p>
                  <p class="text-[46px] text-[#40b751]">Small Steps to Make</p>
                  <p class="text-[46px] text-[#40b751]">a Bigger Difference</p>
                  <p class="text-[46px] text-[#3f4640]">for Nonprofit <br>Organizations!</p>
                </div>
                <p class="mb-5 mt-5 font-[600] text-[18px] leading-[24px] text-[#3f4640]">Our Crowdfunding
                  Platform
                  for NGOs is
                  <br>making ways to
                  encourage
                  and
                  empower
                  <br>charity organizations with 100% authenticity <br>& transparency!
                </p>
                <div class="mt-16">
                  <router-link to="/request-campaign"
                    class="bg-[#40b751] px-6 py-3 text-white rounded-full text-[18px] hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                    Start a Fundraiser for <strong>FREE</strong></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="w-full container mx-auto mt-10">

      <div>
        <h3 class="text-3xl pb-10 font-black text-[#40b751] text-center">{{ $t('Our Mission') }},
          {{ $t('Vision') }}
          &
          {{ $t('Core Values') }}! </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col justify-center items-center">
          <img src="../assets/Inter/img/mission.png" alt="Image 1" class="max-w-full max-h-full">
          <div class="text-[#40b751] text-2xl font-black my-4">Our Mission</div>
          <p class="text-center px-8 md:px-10 lg:px-16">We know that there are many organizations out there
            that
            are
            working hard
            to
            make a
            difference. So,
            our
            mission is to create an NGO crowdfunding platform where these NGOs can receive the
            visibility and
            support they
            need to make a real impact.</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="../assets/Inter/img/vision.png" alt="Image 2" class="max-w-full max-h-full">
          <div class="text-[#40b751] text-2xl font-black my-4">Our Vision</div>
          <p class="text-center px-8 md:px-10 lg:px-16">Our vision is to create the best donation platform where
            anyone can make a
            meaningful
            impact on the
            causes
            they care about. Whether through a direct donation, donating through products, or
            volunteering with
            them, we
            want to make it easy for people to give back to their communities and the world.</p>
        </div>
      </div>


    </section>

    <section class="w-full container mx-auto mt-10 pt-10 pb-10 mb-10">
      <div>
        <h3 class="text-3xl font-black text-[#40b751] text-center my-5">Our Core Values</h3>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 container">
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 1.png" alt="Image 1" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Authenticity at the core!") }}
          </p>
        </div>
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 2.png" alt="Image 2" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("End-to-End Transparency") }}
          </p>
        </div>
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 3.png" alt="Image 3" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Empowering NGOs") }}</p>
        </div>
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 4.png" alt="Image 4" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Streamlining Crowdfunding") }}
          </p>
        </div>
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 5.png" alt="Image 5" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">{{ $t("Driving through Innovation") }}
          </p>
        </div>
        <div class="mt-2 mb-8">
          <div class="flex justify-center items-center">
            <img src="../assets/Inter/img/Vector Smart 6.png" alt="Image 6" class="max-w-full max-h-full">
          </div>
          <p class="text-center text-[#3f4640] font-[700] text-[18px] pt-2">
            {{ $t("Bringing communities together") }}
          </p>
        </div>
      </div>

    </section>
    <!-- <section class="mx-auto container mt-5">
            <div class="text-center font-bold">
                <h3 class="text-3xl font-black text-[#40b751] pb-4">Our Journey so far & even beyond!</h3>
                <p class="font-semibold text-lg">From Humble Beginnings to Creating Lasting Impact</p>
                <p class="font-semibold text-lg">Our Story of Changing Lives & Empowering NGOs.</p>
            </div>
            <div class="pt-28 relative">
                <img src="../assets/Inter/img/journey.png" class="h-full w-full">
                <div class="absolute -top-[220px] -left-[415px]  w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2015</p>
                </div>
                <div class="absolute -top-[80px] -left-[330px] w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[220px] leading-[22px]">Our Founder Vijay
                        started
                        his journey
                        in
                        2015
                        with
                        a team of
                        7
                        people having the simple motive of giving to the community.</p>
                </div>
                <div class="absolute -top-[300px] -left-[130px] w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2017</p>
                </div>
                <div class="absolute -top-[180px] -left-[20px] w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[262px] leading-[22px]">
                        Within 2 years, the team has grown to 20+ who are offering caregiving services to over 200+ elderly
                        people who are working together for noble causes such as volunteering, tree plantation, animal and
                        bird care, etc.
                    </p>
                </div>
                <div class="absolute -top-[230px] left-[405px] w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2020</p>
                </div>
                <div class="absolute -top-[100px] left-72 w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[262px] text-right leading-[22px]">
                        In 2020, the caregivers grew to 40+ individuals offering caregiving services to over 350+ elderly
                        people.
                    </p>
                </div>
                <div class="absolute top-28 left-[300px] w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2022</p>
                </div>
                <div class="absolute top-52 left-[410px] w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[262px] leading-[22px]">
                        We saw lots of NGOs willing to offer help but couldn’t because of the lack of funds; that’s when the
                        idea of Best Deed was born.
                    </p>
                </div>
                <div class="absolute top-40 -left-[45px] w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2023</p>
                </div>
                <div class="absolute top-64 left-16 w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[262px] leading-[22px]">
                        To kickstart our idea, we launched Best Deed with 10 NGOs on board in different categories ranging
                        from education, healthcare, animal, children, Women, elderly, etc.
                    </p>
                </div>
                <div class="absolute top-60 -left-[390px] w-full h-full flex items-center justify-center">
                    <p class="text-black font-black text-xl">2027</p>
                </div>
                <div class="absolute top-[330px] -left-[280px] w-full h-full flex items-center justify-center">
                    <p class="text-[#3f4640] font-[400] text-[14px] h-[156px] w-[262px] leading-[22px]">
                        In the next five years, we aim to onboard 10000+ Non-profit organizations to impact the lives of
                        over 10 MN people.
                    </p>
                </div>
            </div>
        </section> -->


    <section class="bg-[#f6fed8] mt-0">
      <div class="text-center container font-bold mx-auto p-16">
        <h3 class="text-3xl text-[#40b751] font-black pb-2 ">Our Impact</h3>
        <p class="text-center font-semibold text-lg pb-16">To impact the lives of 10 Million People in 5 years!</p>
        <img src="../assets/Inter/img/10MN.png" />
      </div>
    </section>


    <section class="mx-auto container">
      <div class="my-8">
        <h3 class="text-3xl text-[#40b751] font-black text-center  mb-10">Empowering Communities - Here’s How?
        </h3>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  ">

          <div class="grid justify-items-center flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/empowering1.png" class="h-12 w-12 " />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">100% authenticity & transparency </p>
              <p class="text-md">Best Deed is a 100% authentic and transparent online crowdfunding
                donation platform with all
                the required licenses and permits. Check here! (Add the link) Also, before onboarding NGOs
                on our crowdfunding site, we thoroughly vet their requirements to ensure their legitimacy.
              </p>
            </div>
          </div>
          <div class="grid justify-items-center flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/empowering2.png" class="h-12 w-12" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">0% Platform fees</p>
              <p class="text-md">Best Deed charges no crowdfunding donation platform fees whether you are a
                donor
                contributing to the NGOs or NGOs willing to start a crowdfunding campaign. It is a free
                crowdfunding site, and we do it for FREE! </p>
            </div>
          </div>

          <div class="grid justify-items-center flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/empowering3.png" class="h-12 w-12" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">Building an ecosystem</p>
              <p class="text-md">We are not simply another crowdfunding company; our goal is to build a
                trustworthy ECOSYSTEM
                that brings together the greatest campaigns, NGOs, donors, and sponsors on this online
                crowdfunding donation platform to make an impact.</p>
            </div>
          </div>

          <div class="grid justify-items-center flex-none md:flex md:flex-auto  lg:flex lg:flex-auto my-2 mx-4">
            <img src="../assets/Inter/img/empowering4.png" class="h-12 w-12" />
            <div class="sm:ml-0 md:ml-4 lg:ml-5">
              <p class="font-bold text-lg">Dedicated Help Center</p>
              <p class="text-md">Throughout your crowdfunding journey, if you have any questions or require
                in-depth
                assistance regarding our fundraising website for individuals, we are here to help. Our
                dedicated Help Centre is designed to address your concerns with every relevant detail,
                training, and tool. </p>
            </div>
          </div>

        </div>


      </div>
    </section>




    <div id="old-section" class="hidden md:block lg:block">
      <section class="bg-[#40b751]">
        <div class="mx-auto container  text-center">
          <h1 class="font-black text-white text-3xl pt-10 "> Meet the Visionaries </h1>
          <p class="font-semibold text-md pt-4 pb-10">Founders of Best Deed Paving the Way!</p>
          <div class="grid grid-cols-3">
            <div class="mb-0">
              <img src="../assets/Inter/img/Vijay.png" class="mx-auto">
            </div>
            <div class="mb-0">
              <img src="../assets/Inter/img/Dhirendra.png" class="mx-auto md:h-[205px] lg:h-[221px]">
            </div>
            <div class="mb-0">
              <img src="../assets/Inter/img/Rajesh.png" class="mx-auto md:h-[205px] lg:h-[221px]">
            </div>
          </div>
        </div>
      </section>

      <section class="lg:h-96 md:h-[460px] mx-auto container text-center">
        <div class="grid grid-cols-3">
          <div>
            <h3 class="font-bold pt-4 text-md">Vijay Dobariya </h3>
            <p class="pb-6">Founder, Best Deed</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">Vijay Dobariya is the
              founder of Best
              Deed and has been on this journey of helping
              people for the last 8 years. He works towards his mission of making this world a better place by
              giving back to the community with the vision of "Manavseva is Prabhuseva." In order to fulfill
              his
              mission & vision of helping as many people as he can, he started Best Deed which offers the
              required
              visibility and fulfills other necessities of NGOs, that they need to help others. </p>
          </div>
          <div>
            <h3 class="font-bold pt-4 text-md">Dhirendara Kanabar</h3>
            <p class="pb-6">Founding Member, Best Deed</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">Dhirendara Kanabar is
              the founding
              member
              of Best Deed. He is dedicated to the cause of
              animal welfare. He has founded an Animal Welfare Organization where he runs his "Voice for
              Voiceless" campaign to spread awareness about the problems faced by animals by making impactful
              videos. He then realized the problem that NGOs face when raising money, products, or volunteers.
              To
              solve this problem and to offer much-needed visibility to NGOs, he joined Best Deed. </p>
          </div>
          <div>
            <h3 class="font-bold pt-4 text-md">Rajesh Rupabara</h3>
            <p class="pb-6">Founding Member, Best Deed</p>
            <p class="px-4 lg:w-[360px] md:w-[270px] h-[270px] text-[15px] text-[#3f4640]">Rajesh Rupabara is
              also contributing
              as
              the founder
              member at Best
              Deed.
              He is a Vice
              President of "Sadbhavna Vrudhashram," where he offers caregiving services to over 500+ old-age
              citizens. Considering the difficulties he faced while raising the necessities for his old age
              home
              in the initial period, he started Best Deed with a vision to help other NGOs in raising funds,
              products, and even volunteers to ensure hassle-free operations. </p>
          </div>
        </div>
      </section>
    </div>

    <div id="new-section" class="block md:hidden lg:hidden">
      <section class="bg-[#40b751]">
        <div class="text-center">
          <h1 class="font-black text-white text-3xl pt-10"> Meet the Visionaries </h1>
          <p class="font-semibold text-md pt-4">Founders of Best Deed Paving the Way!</p>
          <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
            <div class="pt-8 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Vijay.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <h3 class="font-bold pt-4 text-md">Vijay Dobariya</h3>
                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">Vijay Dobariya is the founder of
                  Best
                  Deed and has been on this journey of helping
                  people for the last 8 years. He works towards his mission of making this world a better
                  place by
                  giving back to the community with the vision of "Manavseva is Prabhuseva." In order to
                  fulfill his
                  mission & vision of helping as many people as he can, he started Best Deed which offers
                  the
                  required
                  visibility and fulfills other necessities of NGOs, that they need to help others.</p>
              </div>
            </div>
            <div class="pt-4 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Dhirendra.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <h3 class="font-bold pt-4 text-md">Dhirendra Kanabar</h3>
                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">Dhirendra Kanabar is the founding
                  member
                  of Best Deed. He is dedicated to the cause of
                  animal welfare. He has founded an Animal Welfare Organization where he runs his "Voice
                  for
                  Voiceless" campaign to spread awareness about the problems faced by animals by making
                  impactful
                  videos. He then realized the problem that NGOs face when raising money, products, or
                  volunteers. To
                  solve this problem and to offer much-needed visibility to NGOs, he joined Best Deed.</p>
              </div>
            </div>
            <div class="pt-4 md:pt-0 bg-[#40b751]">
              <img src="../assets/Inter/img/Rajesh.png" class="mx-auto bg-[#40b751]">
              <div class="bg-white px-4 py-4">
                <h3 class="font-bold pt-4 text-md">Rajesh Rupabara</h3>
                <p class="pb-6 px-4 md:px-0 text-[15px] text-[#3f4640]">Rajesh Rupabara is also contributing
                  as
                  the founder
                  member at Best
                  Deed. He is a Vice
                  President of "Sadbhavna Vrudhashram," where he offers caregiving services to over 500+
                  old-age
                  citizens. Considering the difficulties he faced while raising the necessities for his
                  old
                  age home
                  in the initial period, he started Best Deed with a vision to help other NGOs in raising
                  funds,
                  products, and even volunteers to ensure hassle-free operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="" style="background-image: url('https://bestdeed.org/files/together_background.png')">
      <div class="mx-auto container">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 pl-6 lg:pl-0">
          <div class="pb-32 pt-16">
            <div class="leading-tight pt-10 pb-8">
              <p class="text-[32px] text-[#40b751] font-[800]"> Together,</p>
              <p class="text-[32px] text-[#3f4640] font-[800]">We can make a</p>
              <p class="text-[32px] text-[#3f4640] font-[800]">difference!</p>
            </div>
            <div>
              <p class="w-[358px] h-[150px] text-[16px] text-[#3f4640] font-[700]" style="line-height: 26px; ">
                <!-- <p class="sm:w-[0px] md:lg:w-[0px] lg:w-[358px] sm:h-[0px] md:lg:h-[0px] lg:h-[150px] text-[16px] text-[#3f4640] font-[700]"
                                    style="line-height: 26px; "> -->
                Join us in our mission to make the world a better place with this online crowdfunding
                platform - Best
                Deed. Whether you're an individual looking to make a difference or an NGO needing support,
                we're here to
                help
              </p>
            </div>
            <div class="py-4">
              <router-link to="" style="font-size: 16px; font-weight: 700;"
                class="bg-[#40b751] px-6 py-3 text-white rounded-full hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                Donate now!
              </router-link>
            </div>
          </div>
        </div>
        <div class="relative hidden md:hidden lg:block">
          <img src="../assets/Inter/img/together.png"
            class="h-[500px] w-[900px] absolute -top-[500px] left-80 opacity-on-small">
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
    document.title = this.$t("Empowering Positive Change - Learn About BestDeed and Our Commitment to Supporting NGOs and Their Causes | BestDeed")
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
<style>
.bg-image {
  position: relative;
  background-image: url('https://bestdeed.org/files/BG%20copy.png');
  background-size: cover;
}

/* .bg-image {

    background-image: url('https://bestdeed.org/files/BG%20copy.png');
    background-size: cover;
} */

.hero {
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://bestdeed.org/files/BG%20copy.png');
  background-size: cover;
  background-position: center;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  /* background-color: rgba(255, 248, 248, 0.63); */
  background-position: center;

}

@media (max-width: 1008px) {
  .hero {
    position: relative;
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://bestdeed.org/files/BG%20copy.png');
    background-size: cover;
    background-position: center;
  }

  .hero::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(255, 248, 248, 0.63);
    background-position: center;

  }
}

@media (max-width: 580px) and (max-width: 249px) {
  .hero {
    position: relative;
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://bestdeed.org/files/BG%20copy.png');
    background-size: cover;
    background-position: center;
  }

  .hero::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(255, 248, 248, 0.63);
    background-position: center;

  }
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