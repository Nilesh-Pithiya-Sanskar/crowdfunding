<template>
  <Navbar />
  <div class="container mx-auto h-full mt-10 mb-5 text-[#364958]">
    <h1 class="text-3xl mb-5 font-bold">Terms & Conditions</h1>
    <p class="mb-5">Best Deed operates this Website <a href="https://bestdeed.org/"
        class="text-blue-500">bestdeed.org</a>. These Terms of Use apply to your use of this Website and all
      services provided by us through this Website. Using this Website, you agree to be bound by these Terms of Use. If
      you disagree with these terms, we request you to stop using this website.</p>

    <p class="mb-5">The Best Deed was created using the general crowdfunding paradigm to assist NGOs and other charitable
      organizations in raising in-kind donations through products. The terms and restrictions outlined below tightly
      restrict usage. </p>

    <p class="mb-5">You agree to abide by and be subject to these terms and conditions in addition to our privacy policy
      when you use our Website to browse or make donations. You are not permitted to use this Website in its entirety if
      you disagree with any portion of these Terms of Use. </p>

    <h2 class="text-xl font-bold">Copyright & Intellectual property rights </h2>

    <p class="mb-5">The contents of this Website, including text, graphics, images, and other material, are intended for
      informational purposes only. You may not use this Website for commercial purposes or in any illegal or unethical
      manner.</p>

    <p class="mb-5">The contents of this Website, including all text, graphics, images, logos, and other material, are
      protected by copyright and other intellectual property laws. You may not use any of these materials without the
      express written consent of Charity Name.</p>


    <h2 class="text-xl font-bold">Limitation of Liability</h2>
    <p class="mb-5">The Best Deed shall not be liable for any damages of any kind arising from the use of this Website,
      including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>

    <p class="mb-5">Best Deed does not support or represent any outside parties. In the case that you use a third-party
      website or interact with them through our platform, we will not be held responsible for any actions or inactions on
      their side.</p>

    <p class="mb-5">With regard to every one of the features and Content made available on the Best Deed, we now
      unequivocally exclude all guarantees and assurances of any kind.</p>

    <p class="mb-5">In regards to the Content, usage of the Platform or any Services, any third party complaints, or any
      harm incurred by any person that results from the use of Our Platform. Any consequences—direct or indirect—arising
      from contracts, carelessness, or other causes shall not be our responsibility.</p>

    <p class="mb-5">Any virus assaults, service assaults, and Trojan threats, such as but not limited to loss of earnings
      or income or any other business or financial loss, or for any choice taken or action being taken by any 3rd person
      in dependence upon the Content, whether directly or indirectly.</p>

    <h2 class="text-xl font-bold">Payment details </h2>
    <p class="mb-5">A card payment gateway or suitable payment processing platform is used to handle all legitimate
      credit, debit, and cash cards and other payment tools. These are also subject to the terms and conditions agreed
      upon by the donor and the particular issuing bank and payment instrument granting company.</p>

    <p class="mb-5">To deliver these Services to its Users, all internet banking payments from legitimate bank accounts
      are handled through the gateway offered by the relevant issuing bank. </p>

    <p class="mb-5">This gateway supports payment capabilities. The terms and conditions outlined in the agreement between
      the contributor and the particular issuing bank likewise apply to all such online bank transfers made using the
      payments mechanism.</p>

    <h2 class="text-xl font-bold">Rights to take necessary action </h2>
    <p class="mb-5">Without restricting other options, we have the right to restrict your behavior, instantly delete your
      information, alert other Users to your activities, instantly stop or cancel your registration, ban your use of the
      Website, and limit your engagement.</p>

    <p class="mb-5">Prior to being rehabilitated by us, a User who has been prohibited or banned is not permitted to
      register with us, continue to register with us or use the Website in any way.</p>

    <p class="mb-5">We are entitled to take appropriate legal proceedings, including but not limited to reporting you to
      the proper police or other officials if you violate the Terms of Use or other laws and policies. </p>


    <h2 class="text-xl font-bold">Indemnification</h2>
    <p class="mb-5">In the event that you violate any of these Terms of Use, you undertake to indemnify, hold harmless,
      and defend Best Deed, its officials, managers, personnel, agencies, licensees, and providers from and against any
      claims, costs, liabilities, including reasonable attorneys' costs.</p>

    <h2 class="text-xl font-bold">Return & Refund policy</h2>
    <p class="mb-5">The products will be delivered either at the conclusion of the campaign or once the campaign has
      reached its objective. Vendors ship the goods directly to the recipients, and we pay close attention to the quality
      of the goods. The sum will not be reimbursed after the payment has been made. After the vendor confirms, goods can
      be returned if there was any damage during delivery.</p>

    <h2 class="text-xl font-bold">Changes to Terms of Use:</h2>
    <p class="mb-5">The Best Deed reserves the right to make changes to these Terms of Use at any time. Your continued use
      of this Website following any changes to these Terms of Use constitutes your acceptance of modifications.</p>

    <h2 class="text-xl font-bold">Governing Law:</h2>
    <p class="mb-5">These Terms of Use shall be governed by and construed in accordance with the laws of the state.</p>

    <h2 class="text-xl font-bold">Privacy Policy</h2>
    <p class="mb-5">The Best Deed's Privacy Policy is incorporated into these Terms of Use and governs the collection and
      use of personal information through this Website.</p>

    <h2 class="text-xl font-bold">Contact Information</h2>
    <p class="mb-5">If you have any questions regarding these Terms of Use, please contact us at <a class="text-blue-500"
        href="mailto:bestdeed2023@gmail.com">bestdeed2023@gmail.com</a></p>


  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'Terms Of Service',
  components: {
    Navbar,
    Footer,
  },
  created() {
    document.title = this.$t('Terms of Use | BestDeed')
    const linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      var link = document.createElement('link');
      link.rel = 'canonical';
      link.href = "https://bestdeed.org/terms-of-service"
      document.head.appendChild(link);
    }
    else {
      linkElement.href = "https://bestdeed.org/terms-of-service"
      document.head.appendChild(linkElement)
    }
  }
}
</script>