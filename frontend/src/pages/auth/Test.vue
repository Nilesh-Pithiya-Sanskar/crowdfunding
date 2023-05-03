<template>
  <div class="slider">
    <!-- <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image" alt="slider image">
        </div>
      </div> -->
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
          <!-- <div class="grid slide sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-4 category-tab-content"> -->
              <div v-for="d in data" class="slide xs:w-full sm:w-full md:w-1/2 lg:w-1/3">
                  <!-- {{ d.name }} -->
                  <ul class="flex mb-4 list-none pt-3 pb-0 overflow-x-scroll overflow-y-hidden custom-scrollbar scrollbar-thin">

                      <li class="mb-2 break-words pr-4">
                      <div class="px-4 rounded-lg shadow-lg  bg-white mb-6 mt-12  w-[360px] ">
                          <div class="flex flex-wrap justify-center">
                          <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                              <div class="relative">
                              <img alt="..." src="../../assets/Inter/img/kunj.png"
                                  class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                              </div>
                          </div>
                          <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                              <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0"> </div>
                          </div>
                          <div class="w-full lg:w-4/12 px-4 lg:order-1"> </div>
                          </div>
                          <div class="text-justify ">
                          <h3 class="text-[18px] md:text-[20px] lg:text-[20px] leading-7  font-semibold text-gray-600 ">
                              {{ d.name }}
                          </h3>
                          <div class="text-[14px] md:text-[14px] lg:text-[16px] leading-3  text-[#364958] text-opacity-60 ">
                              <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                          {{ $t( 'Assistant Manager')}}
                          </div>
                          <div class="h-[250px] no-scrollbar overflow-scroll overflow-x-hidden mb-6 mt-4">
                              <div class="text-[16px] md:text-[16px] lg:text-[16px] leading-7  text-blueGray-600 ">
                              {{ $t('I have always wanted to help those in need, but I never knew how to do it effectively. Best Deed has made it so easy for me to make a contribution through their platform. I love that there is 100% transparency in the whole process and I’m donating and they are donating the products to the ones in need. Thank you, Best Deed!')}}

                              </div>
                          </div>
                          </div>
                      </div>
                      </li>
                  </ul>


              </div>
          <!-- </div> -->
      </div>

  </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AutoSlider',
  props: {
    data: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  setup(props) {
    const currentSlide = ref(0);
    const slideWidth = ref(0);
    let timerId = null;

    const updateSlideWidth = () => {
      slideWidth.value = document.querySelector('.slider').offsetWidth;
    };

    const nextSlide = () => {
      if (window.innerWidth > 1024) {
      currentSlide.value = (currentSlide.value + 1) % (props.data.length / 3);
    } else if (window.innerWidth > 767) {
      currentSlide.value = (currentSlide.value + 1) % (props.data.length / 2);
    } else {
      currentSlide.value = (currentSlide.value + 1) % (props.data.length / 1);
    }
      };

    const startAutoPlay = () => {
      timerId = setInterval(nextSlide, props.interval);
    };

    const stopAutoPlay = () => {
      clearInterval(timerId);
    };

    onMounted(() => {
      updateSlideWidth();
      startAutoPlay();
    });

    onUnmounted(() => {
      stopAutoPlay();
    });

    return {
      currentSlide,
      slideWidth,
      updateSlideWidth
    };
  },
  methods: {
    donate(name) {
      this.$router.push(`/campaign-donation/${name}`)
    }
  }
};
</script>
  
<style>
/* .slider {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-out;
}

.slide {
  flex: 0 0 100%;
} */

.slider {
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex-shrink: 0;
  padding: 1rem;
}
</style>