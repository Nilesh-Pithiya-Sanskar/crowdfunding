import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Donate with 100% Transparency | BestDeed',
      metaTags: [
        {
          name: 'keyword',
          content: 'donation,charity,crowdfunding,fundraising,donate online,donate online to charity,donations for nonprofits,donation websites for nonprofit,donate online india'
        },
        {
          name: 'description',
          content: "BestDeed is India's most trusted and transparent donation platform. It enables donors to reach people in need and donate to the cause directly."
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/bestdeed/login',
    name: 'Login',
    component: () => import('@/pages/auth/Login.vue'),
    meta: {
      title: 'Login now | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "India's top-rated and transparent non-profit platform provides a seamless way for individuals and organizations to donate or raise funds for various charitable causes. By logging in, you can make a significant difference in the lives of people who are in need of support."
        },
      ]
    }
  },
  {
    path: '/bestdeed/auto-login',
    name: 'Auto Login',
    component: () => import('@/pages/auth/AutoLogin.vue'),
    meta: {
      title: 'Login now | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "India's top-rated and transparent non-profit platform provides a seamless way for individuals and organizations to donate or raise funds for various charitable causes. By logging in, you can make a significant difference in the lives of people who are in need of support."
        },
      ]
    }
  },
  {
    path: '/bestdeed/campaign-donation/:name',
    name: 'CampaignDonation',
    component: () => import('@/pages/CampaignDonationPage.vue'),
  },
  {
    path: '/bestdeed/explore-campaigns',
    name: 'ExploreCampaigns',
    component: () => import('@/pages/ExploreCampaigns.vue'),
    meta: {
      title: 'Explore Different Donation Campaigns | BestDeed',
      metaTags: [
        {
          name: 'keyword',
          content: 'explore campaign,donation,charity,crowdfunding,donate online to charity,donations for nonprofits,explore,explore donation campaign'
        },
        {
          name: 'description',
          content: "Bestdeed showcases various charitable causes or fundraising initiatives seeking donations from the public. The page provides information about the cause, its impact, and the fundraising goal, along with updates on the amount of money raised. Donors can contribute to the cause and may also find photos, videos, and testimonials on the page."
        },
      ]
    }
  },
  {
    path: '/bestdeed/donate/:name&:price',
    name: 'Donate',
    component: () => import('@/pages/Donate.vue')
  },
  {
    path: '/bestdeed/blog',
    name: 'Blog',
    component: () => import('@/pages/Blog.vue'),
    meta: {
      title: 'BestDeed Blogs | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "Welcome to our Bestdeed's blog page! Here, we share inspiring stories, useful tips, and valuable insights to help you make a difference in the world. Our team of experts is passionate about fundraising and committed to helping you achieve your goals. So, sit back, grab a cup of coffee, and explore our latest posts to learn how you can make a positive difference in the world."
        },
      ]
    }
  },
  {
    path: '/bestdeed/blog-post/:name',
    name: 'BlogPost',
    component: () => import('@/pages/BlogPost.vue')
  },
  // {
  //   path: '/bestdeed/test',
  //   name: 'Test',
  //   component: () => import('@/pages/auth/Test.vue')
  // },
  {
    path: '/bestdeed/registration',
    name: 'Registration',
    component: () => import('@/pages/auth/Registration.vue')
  },
  {
    path: '/bestdeed/contact-us',
    name: 'Contact Us',
    component: () => import('@/pages/ContactUs.vue'),
    meta: {
      title: 'Contact Us | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "As India's leading transparent crowdfunding platform, we're committed to creating a lasting impact and helping those in need. Whether you have questions about our platform, want to inquire about partnering with us, or simply want to learn more about our mission, our team is here to help. Contact us today and let's work together to make a positive difference in the world."
        },
      ]
    }
  },
  {
    path: '/bestdeed/profile/:name',
    name: 'Profile',
    component: () => import('@/pages/auth/ProfilePage.vue')
  },
  {
    path: '/bestdeed/request-campaign',
    name: 'Donation Campaign Request',
    component: () => import('@/pages/DonationCampaignRequest.vue'),
    meta: {
      title: 'Request a Campaign | BestDeed',
      metaTags: [
        {
          name: 'keyword',
          content: 'donation,charity,crowdfunding,request a campaign for fundraising,donate online to charity,donations for nonprofits,donation websites for nonprofit,request a campaign,ngo request for campaign,individul group request'
        },
        {
          name: 'description',
          content: "Requesting a Donation campaign is now easy with India's most trusted and transparent online donation platform. Create a fundraising campaign to collect funds for any cause with BestDeed"
        },
      ]
    }
  },
  {
    path: '/bestdeed/donation-success-page/:donation/:name/:email/:item:/campaign',
    name: 'Donation Success Page',
    component: () => import('@/components/DonationSuccessPage.vue')
  },
  {
    path: '/bestdeed/faq',
    name: 'Faq',
    component: () => import('@/components/Faq.vue')
  },
  {
    path: '/bestdeed/Verifyotp',
    name: 'Verifyotp',
    component: () => import('@/components/Verifyotp.vue')
  },
  {
    path: '/bestdeed/otp/:message&:number&:m_type',
    name: 'OTP',
    component: () => import('@/pages/auth/OTP.vue')
  },
  {
    path: '/bestdeed/facebook',
    name: 'facebook',
    component: () => import('@/pages/facebook.vue')
  },
  {
    path: '/bestdeed/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('@/pages/PrivacyPolicy1.vue'),
    meta: {
      title: 'Privacy Policy Page | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "Privacy Policy - At BestDeed, we respect your privacy and understand the importance of protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us. We are committed to being transparent and accountable in the way we handle your personal data."
        },
      ]
    }
  },
  {
    path: '/bestdeed/terms-of-service',
    name: 'Terms Of Service',
    component: () => import('@/pages/TermsOfService.vue'),
    meta: {
      title: 'Terms of Use | BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "BestDeed is committed to protecting your privacy, and we have created this terms of use to ensure the security of your personal information. We strive to meet the requirements outlined in our donor privacy policy, which is also included in our terms of service. Please read this policy carefully to understand how we collect, use, and safeguard your information."
        },
      ]
    }
  },
  {
    path: '/bestdeed/about-us',
    name: 'About Us',
    component: () => import('@/pages/AboutUs.vue'),
    meta: {
      title: 'Get to know more about BestDeed',
      metaTags: [
        {
          name: 'description',
          content: "Donate with Purpose - Support NGOs and Their Causes Directly on BestDeed. Enjoy a Transparent Process, Regular Updates, and Dedicated Support from Our Team!"
        },
      ]
    }
  },
  {
    path: '/bestdeed/translation',
    name: 'Translation',
    component: () => import('@/pages/Translations.vue')
  },
  {
    path: '/bestdeed/donation-checkout',
    name: 'Donation Checkout',
    component: () => import('@/components/DonationCheckout.vue')
  },
  {
    path: '/bestdeed/reset_password/:key&:email',
    name: 'Reset Password',
    component: () => import('@/pages/auth/ResetPassword.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: '404 Page Not Found',
    component: () => import('@/pages/PageNotFound.vue')
  }
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, form, savedPosition){
    if (savedPosition){
      return savedPosition
    }
    return { left: 0, top: 0}
  }
})

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`
//   next();
// })

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router