<!-- <template>
    <div>test</div>
    <test class="lg:block sm:hidden md:hidden" :data="data" :t="3"></test>
    <test class="block sm:hidden lg:hidden" :data="data" :t="2"></test>
    <test class="block lg:hidden md:hidden" :data="data" :t="1"></test>

    <test class="block" :data="data" ></test>
</template>
<script>
import test from '../pages/auth/Test.vue'
export default{
    name: 'adf',
    components:{test},
    data(){
        return{
            data: [{'name': 'slide1'}, {'name': 'slide2'}, {'name': 'slide3'}, {'name': 'slide4'}, {'name': 'slide5'}, {'name': 'slide6'}]
        }
    }
}
</script> -->


<!-- <template>
    <div class="slider-container">
      <div class="slider flex overflow-x-auto">
        <div class="slide px-4" v-for="slide in slides" :key="slide.id">
          {{ slide.id }}
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          { id: 1, content: 'Slide 1' },
          { id: 2, content: 'Slide 2' },
          { id: 3, content: 'Slide 3' },
          { id: 4, content: 'Slide 4' },
          { id: 5, content: 'Slide 5' },
          { id: 6, content: 'Slide 6' },
        ],
      };
    },
    mounted() {
      const slider = document.querySelector('.slider');
      let isDown = false;
      let startX;
      let scrollLeft;
    
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
    
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
    
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
    
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      });
    },
  };
  </script>
  
  <style>
  .slide {
    min-width: 250px;
  }
  
  .slider {
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .slider::-webkit-scrollbar {
    display:flex
  }
  </style> -->



  <!-- <template>
    <div class="slider">
      <div class="slides" :style="{transform: `translateX(-${translateValue}%)`}">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.imgSrc" :alt="slide.alt" class="slide-image">
          <h2 class="slide-title">{{ slide.title }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          {
            imgSrc: 'https://placeimg.com/640/480/animals',
            alt: 'Animals',
            title: 'Animals'
          },
          {
            imgSrc: 'https://placeimg.com/640/480/architecture',
            alt: 'Architecture',
            title: 'Architecture'
          },
          {
            imgSrc: 'https://placeimg.com/640/480/nature',
            alt: 'Nature',
            title: 'Nature'
          },
          {
            imgSrc: 'https://placeimg.com/640/480/people',
            alt: 'People',
            title: 'People'
          },
          {
            imgSrc: 'https://placeimg.com/640/480/tech',
            alt: 'Tech',
            title: 'Tech'
          }
        ]
      }
    },
    computed: {
      translateValue() {
        return this.currentSlide * (100 / 3);
      }
    },
    methods: {
      nextSlide() {
        if (this.currentSlide < this.slides.length - 3) {
          this.currentSlide++;
        }
      },
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      }
    }
  }
  </script>
  
  <style>
  .slider {
    overflow: hidden;
    width: 100%;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slide {
    width: calc(100% / 3);
    flex-shrink: 0;
    padding: 1rem;
  }
  
  .slide-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.25rem;
  }
  
  .slide-title {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
  }
  </style>
   -->



   <!-- down head in vue3 -->

<!-- <template>
  <div>Test</div>
</template>

   <script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head' -->

<!-- // import { createSSRApp } from 'vue'
// // Vue's server-rendering API is exposed under `vue/server-renderer`.
// import { renderToString } from 'vue/server-renderer'

// const app = createSSRApp({
//   data: () => ({ count: 1 }),
//   template: `<button @click="count++">{{ count }}</button>`
// })

// renderToString(app).then((html) => {
//   console.log(html)
// })


// export default defineComponent({

//   metaInfo: {
//     title: 'My Page Title',
//     meta: [
//       {
//         name: 'description',
//         content: 'This is my page description'
//       },
//       {
//         property: 'og:title',
//         content: 'My Open Graph Title'
//       }
//     ]
//   },
//   setup() {
//     const siteData = reactive({
//       title: `My website`,
//       description: `My beautiful website`,
//     })

//     useHead({
//       // Can be static or computed
//       title: computed(() => siteData.title),
//       meta: [
//         {
//           name: `description`,
//           content: computed(() => siteData.description),
//         },
//       ],
//     })
//   },
// })
// </script> -->

<!-- <template>

</template>
<script>
</script> -->


<!-- <template>
  <div class="image-slider">
    <div class="slider-container">
      <transition name="fade">
        <img :src="currentImage" alt="Slider Image" class="slider-image" />
      </transition>
    </div>
    <div class="button-container">
      <button v-for="(image, index) in images" :key="index" @click="changeImage(index)" :class="{ active: currentIndex === index }">
        {{ index + 1 }}
      </button>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: ['data:image/jpeg;base64,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', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU']
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    changeImage(index) {
      this.currentIndex = index;
    }
  }
};
</script> -->

<!-- <style scoped>
.image-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slider-container {
  position: relative;
  width: 500px;
  height: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-container {
  margin-top: 20px;
}

button {
  border: none;
  background-color: transparent;
  padding: 5px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
}

button.active {
  font-weight: bold;
}
</style> -->



<!-- <template> -->
  <!-- <slider class="lg:block sm:hidden md:hidden" :images="images"></slider>
  <slider class="block sm:hidden lg:hidden" :images="images"></slider>
  <slider class="block lg:hidden md:hidden" :images="images" ></slider> -->
  <!-- <slider class="block" :images="images"></slider> -->
<!-- </template> -->
<!-- <script>
import slider from '../components/FeaturedIn.vue'
export default {
  components: { slider },
  data() {
    return {
      images: [
        {"class":"hover:cursor-pointer h-40 w-40", "src":"https://bestdeed.org/files/product-500x500.webp", "click":'https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/'},
        {"class":"w-40 h-40 hover:cursor-pointer", "src":"https://bestdeed.org/files/cow-field-cattle-feed-with-calcium-mineral-mixture-vitamines-500x500.webp", "click":'https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html'},
        {"class":"hover:cursor-pointer h-40 w-40", "src":"https://bestdeed.org//files/Roushya460.jpg", "click":'https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/'},
        {"class":"w-40 h-40 hover:cursor-pointer", "src":"https://bestdeed.org/files/resize.webp", "click":'https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html'},
        {"class":"hover:cursor-pointer h-40 w-40", "src":"https://bestdeed.org/files/Sadbhavna2022-project (5).webp", "click":'https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/'},
        {"class":"w-40 h-40 hover:cursor-pointer", "src":"https://bestdeed.org/files/artofhelping-1025product.webp", "click":'https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html'},
        {"class":"hover:cursor-pointer h-40 w-40", "src":"https://bestdeed.org/files/Animal5.webp", "click":'https://cmogujarat.gov.in/en/photo-gallery/cm-shri-vijaybhai-rupani-inaugurated-pipaliya-bhawan-sadbhavna-vriddhashram-in-rajkot/'},
        {"class":"w-40 h-40 hover:cursor-pointer", "src":"https://bestdeed.org/files/Disaster Relief.jpg", "click":'https://www.divyabhaskar.co.in/dvb-original/news/rajkot-sadbhavana-old-age-home-opened-school-bull-and-treat-as-a-family-mamber-129038474.html'}
      ]
    }
  }
}
</script> -->


<template>
  <div class="bg-image bg-cover bg-center h-screen" style="background-image: url('https://bestdeed.org/files/BG.png');">
  <div class="flex items-center justify-center container lg:h-screen md:h-screen mx-auto pt-[2rem] md:pt-[3rem] lg:pt-[6rem] xl:pt-[10rem] pb-[2rem] md:pb-[3rem] lg:pb-[5rem]">
    <!-- <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"> -->
      <div class="flex flex-wrap">
      <div class="sm:12/12 md:w-6/12 lg:w-6/12 mb-5 ml-5 md:ml-0 lg:ml-0">
        <div
          class="text-[#40b751] font-black text-[36px] md:text-[40px] lg:text-[44px] [text-shadow:2px 2px 2px #c9c9c9]">
          BestDeed
        </div>
        <h1
          class="[text-shadow:2px 2px 2px #c9c9c9] leading-[32px] md:leading-[40px] lg:leading-[46px] text-gray-600 font-bold text-[24px] md:text-[28px] lg:text-[38px]">
          Most trusted crowd <br>funding platform of india.</h1>

        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center gap-5 md:gap-6 lg:gap-5 mt-8 md:mt-16 lg:mt-16 mb-4 md:mb-4 lg:mb-4 md:mb-8 lg:mb-8 sm:mr-auto md:mr-24 lg:mr-24">
          <div class="flex items-center">
            <!-- <div><img src="https://bestdeed.org/assets/sadbhavna_donatekart/frontend/assets/0.png" class="h-20" alt="asdf" /></div> -->
            <img src="../../src/assets/Inter/img/0.png" alt="0" title="0 fees" class="h-10 md:h-10 lg:h-12 w-18 md:w-14 lg:w-16" />
            <div
              class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Platform</div>
              <div class="-mt-2">Fees</div>
            </div>
          </div>
          <div class="flex items-center">
            <img src="../../src/assets/Inter/img/100.png" alt="100%" title="Transparency" class="max h-22 md:h-22 lg:h-22 w-28 md:w-22 lg:w-32" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Donate With</div>
              <div class="-mt-2">Transparency</div>
            </div>
          </div><div class="flex items-center">
            <img src="../../src/assets/Inter/img/layer.png" class="h-12 md:h-14 lg:h-20 w-12 md:w-10 lg:w-12" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Verified</div>
              <div class="-mt-2">NGOs</div>
            </div>
          </div>
          <div class="flex items-center">
            <img src="../../src/assets/Inter/img/ellipse.png" class="h-10 md:h-22 lg:h-22 w-12 md:w-20 lg:w-32" />
            <div class="[text-shadow:2px 2px 2px #c9c9c9] text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] ml-2">
              <div>Tax</div>
              <div class="-mt-2">Exemption</div>
            </div>
          </div>
        </div>
        <p
          class="[text-shadow:2px 2px 2px #c9c9c9] leading-[46px] mb-2 text-[#3f4640] font-bold text-[18px] md:text-[20px] lg:text-[22px] break-keep">
          Your help goes a long way!</p>
        <router-link to="/explore-campaigns"
          class="bg-[#40b751] px-6 py-3 text-white rounded-full text-[18px] hover:bg-white hover:border-[#40b751] hover:border hover:text-[#40b751] shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          Support an NGOs </router-link>
      </div>

      <div class="sm:12/12 md:w-5/12 lg:w-5/12 items-center mt-5 md:mt-10 lg:mt-0 ml-10">
        <img src="../../src/assets/Inter/img/rightside.png"
          class="" />
      </div>
    </div>
  </div>
</div>

</template>