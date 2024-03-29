import {
  createRouter,
  createWebHistory
} from 'vue-router'


const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/pages/Home.vue'),
  meta: {
    title: 'Trusted & 100% Transparent Crowdfunding Platform | BestDeed',
    metaTags: [
      {
        name: 'keyword',
        content: 'donation,charity,crowdfunding,fundraising,donate online,donate online to charity,donations for nonprofits,donation websites for nonprofit,donate online india'
      },
      {
        name: 'description',
        content: "Discover transparent giving on BestDeed, the trusted & 100% transparent global crowdfunding platform. Donate with confidence, and make an impact."
      },
      // {
      //   property: 'og:description',
      //   content: 'The home page of our example app.'
      // }
    ]
  }
},
{
  path: '/login-via-email',
  name: 'Login',
  component: () => import('@/pages/auth/Login.vue'),
  meta: {
    title: 'Login Now | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Login Now on the Most trusted crowdfunding platform in India & donate with a 100% Transparent Online Crowdfunding Platform."
      },
    ]
  }
},
{
  path: '/login',
  name: 'Auto Login',
  component: () => import('@/pages/auth/AutoLogin.vue'),
  meta: {
    title: 'Login Now | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Login Now on the Most trusted crowdfunding platform in India & donate with a 100% Transparent Online Crowdfunding Platform."
      },
    ]
  },
  // children: [{ path: '/login-via-mobile', name: 'Login', component: () => import('@/pages/auth/AutoLogin.vue'), }],
},
{
  path: '/campaign-donation/:name',
  name: 'CampaignDonation',
  component: () => import('@/pages/CampaignDonationPage.vue'),
},
{
  path: '/explore-campaigns',
  name: 'ExploreCampaigns',
  component: () => import('@/pages/ExploreCampaigns.vue'),
  meta: {
    title: 'Support Causes That Matter | Bestdeed',
    metaTags: [
      {
        name: 'keyword',
        content: 'explore campaign,donation,charity,crowdfunding,donate online to charity,donations for nonprofits,explore,explore donation campaign'
      },
      {
        name: 'description',
        content: "Make a difference with BestDeed, the trusted crowdfunding platform. Explore and support charitable causes, & learn about impact, goals, and donation progress."
      },
    ]
  }
},
{
  path: '/donate/:name&:price',
  name: 'Donate',
  component: () => import('@/pages/Donate.vue')
},
{
  path: '/blog',
  name: 'Blog',
  component: () => import('@/pages/Blog.vue'),
  meta: {
    title: 'Discover Inspiring Stories & on BestDeed Blogs | Bestdeed',
    metaTags: [
      {
        name: 'description',
        content: "Explore inspiring stories and expert insights on the BestDeed blog. Get valuable tips to impact and achieve your fundraising goals positively."
      },
    ]
  }
},
{
  path: '/blog-post/:name',
  name: 'BlogPost',
  component: () => import('@/pages/BlogPost.vue')
},
// {
//   path: '/test',
//   name: 'Test',
//   component: () => import('@/pages/auth/Test.vue')
// },
{
  path: '/registration',
  name: 'Registration',
  component: () => import('@/pages/auth/Registration.vue')
},
{
  path: '/contact-us',
  name: 'Contact Us',
  component: () => import('@/pages/ContactUs.vue'),
  meta: {
    title: 'Contact Us | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Connect with us, World's most trusted and transparent crowdfunding platform. We're here to make a lasting impact, answer your queries, and share our mission."
      },
    ]
  }
},
{
  path: '/profile/:name',
  name: 'Profile',
  component: () => import('@/pages/auth/ProfilePage.vue')
},
{
  path: '/request-campaign',
  name: 'Donation Campaign Request',
  component: () => import('@/pages/DonationCampaignRequest.vue'),
  meta: {
    title: 'Request a Campaign for Your Cause | BestDeed',
    metaTags: [
      {
        name: 'keyword',
        content: 'donation,charity,crowdfunding,request a campaign for fundraising,donate online to charity,donations for nonprofits,donation websites for nonprofit,request a campaign,ngo request for campaign,individul group request'
      },
      {
        name: 'description',
        content: "Create impactful campaigns on BestDeed, World trusted and transparent donation platform. Request donations quickly and make a difference with 100% transparency."
      },
    ]
  }
},
{
  path: '/donation-success-page/:donation/:name/:email/:item:/campaign',
  name: 'Donation Success Page',
  component: () => import('@/components/DonationSuccessPage.vue')
},
{
  path: '/faq',
  name: 'Faq',
  component: () => import('@/components/Faq.vue'),
  meta: {
    title: 'Find answers, Learn more-Frequently Asked Questions | Bestdeed',
    metaTags: [
      { 
        name: 'description',
        content: "Find answers to your questions with the Frequently Asked Questions (FAQ) page on Bestdeed. Get information about our platform, donation process, and more."
      },
    ]
  }
},
{
  path: '/Verifyotp',
  name: 'Verifyotp',
  component: () => import('@/components/Verifyotp.vue')
},
{
  path: '/otp/:message&:number&:m_type',
  name: 'OTP',
  component: () => import('@/pages/auth/OTP.vue')
},
{
  path: '/facebook',
  name: 'facebook',
  component: () => import('@/pages/facebook.vue')
},
{
  path: '/privacy-policy',
  name: 'Privacy Policy',
  component: () => import('@/pages/PrivacyPolicy1.vue'),
  meta: {
    title: 'Privacy Policy Page | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Check out BestDeed's transparent and accountable approach to handling your personal information on the Privacy Policy page."
      },
    ]
  }
},
{
  path: '/terms-of-service',
  name: 'Terms Of Service',
  component: () => import('@/pages/TermsOfService.vue'),
  meta: {
    title: 'Terms of Use | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Explore BestDeed's Terms of Use for our trusted and transparent online crowdfunding platform. Discover how we prioritize security to protect your information."
      },
    ]
  }
},
{
  path: '/about-us',
  name: 'About Us',
  component: () => import('@/pages/AboutUs.vue'),
  meta: {
    title: 'About BestDeed & Our Commitment to Supporting NGO | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Discover BestDeed is the platform empowering positive change by supporting NGOs and their causes. Donate with purpose and transparency."
      },
    ]
  }
},
{ 
  path: '/how-it-works',
  name: 'How It Works',
  component: () => import('@/pages/HowItWorks.vue'),
  meta:{
    title: 'How you can Donate & Request a Campaign | BestDeed',
    metaTags: [
      {
        name: 'description',
        content: "Unlock the power of giving on BestDeed. Discover how to donate and request a campaign. Join our trusted platform and make a difference today."
      }
    ]
  }
},
{
  path: '/translation',
  name: 'Translation',
  component: () => import('@/pages/Translations.vue')
},
{
  path: '/donation-checkout',
  name: 'Donation Checkout',
  component: () => import('@/components/DonationCheckout.vue')
},
{
  path: '/reset_password/:key&:email',
  name: 'Reset Password',
  component: () => import('@/pages/auth/ResetPassword.vue')
},
{
  path: '/sitemap',
  name: 'Sitemap',
  component: () => import('@/pages/Sitemap.vue')
},
{ path: '/login-via-mobile', redirect: '/login' },
// {
//   path: '/site',
//   name: 'Sitemap',
//   component: () => import('@/pages/sitemap.xml')
// },
{
  path: '/:pathMatch(.*)*',
  name: '404 Page Not Found',
  component: () => import('@/pages/PageNotFound.vue')
},
]

let router = createRouter({
  history: createWebHistory('/'),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, form, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
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
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

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