import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/sadbhavna',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
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
    component: () => import('@/pages/CampaignDonationPage.vue')
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
  }, {
    path: '/sadbhavna/blog-post/:name',
    name: 'BlogPost',
    component: () => import('@/pages/auth/BlogPost.vue')
  },
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
    path: '/sadbhavna/otp/:message&:number',
    name: 'OTP',
    component: () => import('@/pages/auth/OTP.vue')
  }
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router