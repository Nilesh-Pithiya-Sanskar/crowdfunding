<!-- <template>
<footer class="bg-white dark:bg-gray-900">
<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 bg-green-500 text-white">
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
        <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
                <a href="#" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Careers</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Brand Center</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Blog</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
        <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
                <a href="#" class="hover:underline">Discord Server</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Contact Us</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
        <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Download</h2>
        <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
                <a href="#" class="hover:underline">iOS</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Android</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">Windows</a>
            </li>
            <li class="mb-4">
                <a href="#" class="hover:underline">MacOS</a>
            </li>
        </ul>
    </div>
</div>
<div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
    <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
    </span>
    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            <span class="sr-only">Facebook page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
            <span class="sr-only">Instagram page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            <span class="sr-only">Twitter page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
            <span class="sr-only">GitHub account</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
            <span class="sr-only">Dribbble account</span>
        </a>
    </div>
</div>
</footer>
</template> -->

<template>
  <div class="pt-6 px-6 md:px-10 lg:px-4 pb-4 bg-[#40b751]">
    <footer class="container  w-full  ml-auto mr-auto">
       <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div
        class="grid grid-cols-1 lg:mr-64 sm:gap-auto md-gap:4 lg:gap-auto pb-0 md:pb-10 lg:pb-2 px-0 py-0 ">
        <div class="sm:col-span-2  md:col-span-2 lg:col-auto">
                    <div class="flex  justify-start lg:-mr-[60px]">
          <div class="flex items-center flex-shrink-0">
            <a href="/">
              <img src="../../src/assets/Inter/img/logo256x256.svg"
                class="mb-2 sm:mt-2 lg:mt-0 mr-2 md:mr-2 lg:mr-2 w-18 h-14 md:h-16 lg:h-18 ml-0 lg:ml-0" />
            </a>
            <a href="/"><span class="font-sans text-white font-bold text-[22px] md:text-[28px] lg:text-[30px] md:mr-5">BestDeed</span></a>
          </div></div>
            <p class="text-white  lg:-mr-[60px] dark:text-gray-400">
              {{ $t("We are India's most trusted and transparent crowdfunding platform, with a vision to create a social impact.Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.")}}</p>
            <div class="my-5 pr-4">
              <div class="flex space-x-6 mt-6 md:mt-6 lg:mt-8">
                <a href="https://www.facebook.com/people/BestDeed/100092532564335/" class="text-gray-400 text-white">
                  <img
                    class="w-5 md:w-4 lg:w-4 sm:h-5 md:h-4 lg:h-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="../../src/assets/Inter/img/icon/facebookwhite.svg" />
                  <p class="sr-only">Facebook page</p>
                </a>
                <a href="https://twitter.com/bestdeed" class="text-gray-400 text-white">
                  <img
                    class="w-5 md:w-4 lg:w-4 sm:h-5 md:h-4 lg:h-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="../../src/assets/Inter/img/icon/twitterwhite.svg" />
                  <p class="sr-only">Twitter page</p>
                </a>
                <a href="https://www.instagram.com/bestdeed2023/" class="text-gray-400 text-white">
                  <img
                    class="w-5 md:w-4 lg:w-4 sm:h-5 md:h-4 lg:h-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="../../src/assets/Inter/img/icon/instawhite.svg" />
                  <p class="sr-only">Instagram page</p>
                </a>
                <a href="https://www.linkedin.com/company/bestdeed/" class="text-gray-400 text-white">
                  <img
                    class="w-5 md:w-4 lg:w-4 sm:h-5 md:h-4 lg:h-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="../../src/assets/Inter/img/icon/linkedinwhite.svg" />
                  <p class="sr-only">Linkedin account</p>
                </a>
                <!-- <a href="#" class="text-gray-400 text-white">
                  <img
                    class="w-5 md:w-4 lg:w-4 sm:h-5 md:h-4 lg:h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="../../src/assets/Inter/img/icon/youtubewhite.png" />
                  <p class="sr-only">Youtube</p>
                </a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:-ml-64">
          <div
            class="sm:pl-[0px] lg:pt-4 lg:ml-[72px] pl-[0px] md:pl-[0px] lg:pl-[20px] xl:pl-[30px] pb-0 md:pb-0 sm:pb-10 ">
            <h4 class="font-bold text-white mb-3 sm:mb-4 md:mb-4 lg:mb-6 text-xl pt-3 md:pt-5 lg:pt-0">
              {{ $t('Discover') }}</h4>
            <ul class="text-white">
              <li class="  sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/explore-campaigns">{{ $t('Explore Campaigns') }}</router-link>
              </li>
              <li class=" sm:mb-1  md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/request-campaign">{{ $t('Request A Campaign') }}</router-link>
              </li>
              <li class="  sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/about-us">{{ $t('About Us') }}</router-link>
              </li>
              <li class="  sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/contact-us">{{ $t('Contact Us') }}</router-link>
              </li>
            </ul>
          </div>
          <div class="sm:pl-[20px] learn lg:pt-4 md:pl-[20px] lg:pl-[48px] ">
            <h4 class="font-bold text-white mb-3 md:mb-4 lg:mb-6 text-xl pt-5 md:pt-5 lg:pt-0">
              {{ $t('Learn') }}</h4>
            <ul class="text-white">
              <li class=" sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/how-it-works">{{ $t('How it Works') }}</router-link>
              </li>
              <li class=" sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
                <router-link to="/faq">{{ $t('FAQs') }}</router-link>
              </li>
              <li class="  sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4 ">
                <router-link to="/blog">{{ $t('Blog') }}</router-link>
              </li>
              <li class="  sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4">
              <router-link to="/terms-of-service">{{ $t('Terms of Use') }}</router-link>
              </li>
              <li class=" sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4 ">
              <router-link to="/privacy-policy">{{ $t('Privacy Policy') }}</router-link>
              </li>
            </ul>
          </div>
           <div class="sm:pl-[0px] emailicon lg:pt-4 md:pl-[0px] lg:pl-[60px] ">
            <h4
              class="font-bold text-white mb-3 md:mb-4 lg:mb-6 text-xl -ml-[0px] md:-ml-[0px] lg:-ml-[80px] pt-5 md:pt-5 lg:pt-0">
              {{ $t('Contact Us') }}</h4>
            <div class="text-white lg:-ml-[80px]">
              <a href="https://goo.gl/maps/UcgCrVJMHpx3vd1v9" class="flex mb-2 md:mb-2 lg:mb-4 xl:mb-4">
               <img class="w-5 h-5 mt-1"
                    src="../../src/assets/Inter/img/icon-footer-location.svg" />
                <p class="ml-4"><span>{{ $t('Gondal Road,') }}</span><br>
                  {{$t('Opp Swami Narayan Gurukul, Near D-Mart Service Road,')}} <br>{{$t('Rajkot - 360004')}}</p>
                </a>
              <a href="tel:+91 7043029467" class="flex items-center mb-2 md:mb-2 lg:mb-4 xl:mb-4 ">
                <div><img class="w-4 h-4 " src="../../src/assets/Inter/img/icon-footer-phone.svg" /></div>
                <p class="cursor-pointer ml-4 ">{{ $t('+91 7043029467') }}</p>
              </a>
              <a href="mailto:bestdeed2023@gmail.com" class="flex items-center mb-2 md:mb-2 lg:mb-4 xl:mb-4">
                <div><img class="w-4 h-4 " src="../../src/assets/Inter/img/icon-footer-email.svg" /></div>
                <p class="cursor-pointer ml-4 ">{{ $t('bestdeed2023@gmail.com') }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <section class=" bg-white text-center px-4 pb-1 pt-1 border-t border-white border-opacity-10 border-neutral-100">
    <span class="text-[#40b751] font-[600] text-[16px] ">{{ $t('Manav Seva Charitable Trust &copy; 2023 | All Rights Reserved') }}</span>
  </section>
</template>




<script>
export default {
  name: 'Footer',
  theme: {
    screens: {
      'medium': '758px',
      // => @media (min-width: 1536px) { ... }
    }
  },

  mounted() {
    // console.log("footer load")
  }
}
</script>



<!-- 
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="product in products" :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a :href="product.href">{{ product.name }}</a>
                                  </h3>
                                  <p class="ml-4">{{ product.price }}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="open = false">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
// import { XMarkIcon } from '@heroicons/vue/24/outline'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const open = ref(true)
</script> -->
