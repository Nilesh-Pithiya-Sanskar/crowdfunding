import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/sadbhavna',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Home Page - BestDeed',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our BestDeed.'
        },
        {
          property: 'og:description',
          content: 'The home page of our BestDeed.'
        }
      ]
    }
  },
  {
    path: '/sadbhavna/login',
    name: 'Login',
    component: () => import('@/pages/auth/Login.vue'),
  },
  {
    path: '/sadbhavna/auto-login',
    name: 'Auto Login',
    component: () => import('@/pages/auth/AutoLogin.vue')
  },
  {
    path: '/sadbhavna/campaign-donation/:name',
    name: 'CampaignDonation',
    component: () => import('@/pages/CampaignDonationPage.vue'),
    // meta: {
    //   title: '',
    //   metaTags: [
    //     {
    //       name: 'asdfasd',
    //       content: 'The home page of our example app.'
    //     },
    //     {
    //       property: 'og:description',
    //       content: 'The home page of our example app1.'
    //     }
    //   ]
    // }
  },
  {
    path: '/sadbhavna/explore-campaigns',
    name: 'ExploreCampaigns',
    component: () => import('@/pages/ExploreCampaigns.vue')
  },
  {
    path: '/sadbhavna/donate/:name&:price',
    name: 'Donate',
    component: () => import('@/pages/Donate.vue')
  },
  {
    path: '/sadbhavna/blog',
    name: 'Blog',
    component: () => import('@/pages/Blog.vue')
  },
  {
    path: '/sadbhavna/blog-post/:name',
    name: 'BlogPost',
    component: () => import('@/pages/BlogPost.vue')
  },
  // {
  //   path: '/sadbhavna/test',
  //   name: 'Test',
  //   component: () => import('@/pages/auth/Test.vue')
  // },
  {
    path: '/sadbhavna/registration',
    name: 'Registration',
    component: () => import('@/pages/auth/Registration.vue')
  },
  {
    path: '/sadbhavna/contact-us',
    name: 'Contact Us',
    component: () => import('@/pages/ContactUs.vue')
  },
  {
    path: '/sadbhavna/profile/:name',
    name: 'Profile',
    component: () => import('@/pages/auth/ProfilePage.vue')
  },
  {
    path: '/sadbhavna/request-campaign',
    name: 'Donation Campaign Request',
    component: () => import('@/pages/DonationCampaignRequest.vue')
  },
  {
    path: '/sadbhavna/donation-success-page/:donation/:name/:email/:item:/campaign',
    name: 'Donation Success Page',
    component: () => import('@/components/DonationSuccessPage.vue')
  },
  {
    path: '/sadbhavna/faq',
    name: 'Faq',
    component: () => import('@/components/Faq.vue')
  },
  {
    path: '/sadbhavna/Verifyotp',
    name: 'Verifyotp',
    component: () => import('@/components/Verifyotp.vue')
  },
  {
    path: '/sadbhavna/otp/:message&:number&:m_type',
    name: 'OTP',
    component: () => import('@/pages/auth/OTP.vue')
  },
  {
    path: '/sadbhavna/facebook',
    name: 'facebook',
    component: () => import('@/pages/facebook.vue')
  },
  {
    path: '/sadbhavna/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('@/pages/PrivacyPolicy1.vue')
  },
  {
    path: '/sadbhavna/terms-of-service',
    name: 'Terms Of Service',
    component: () => import('@/pages/TermsOfService.vue'),
    // meta: {
    //   title: 'terms of service'
    // }
  },
  {
    path: '/sadbhavna/translation',
    name: 'Translation',
    component: () => import('@/pages/Translations.vue')
  },
  {
    path: '/sadbhavna/donation-checkout',
    name: 'Donation Checkout',
    component: () => import('@/components/DonationCheckout.vue')
  },
  {
    path: '/sadbhavna/reset_password/:key&:email',
    name: 'Reset Password',
    component: () => import('@/pages/auth/ResetPassword.vue')
  }
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
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