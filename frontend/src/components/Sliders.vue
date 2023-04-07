<template>
  <div class="slider">
    <!-- <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image" alt="slider image">
        </div>
      </div> -->

    <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
      <div v-for="(data, index) in featured_campaigns" :key="index" class="slide">
        <div class="grid p-[30px] sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <div class="md:col-span-2 lg:col-span-1">
            <img class="h-60 md:h-80 lg:h-56 w-full" :src="data.campain_image" alt="Mountain"
              @click="donate(data.name)">
          </div>
          <div class="fontfamily fontcolor md:col-span-2 lg:col-span-3">
            <button
              class="bg-[#364958] text-base rounded-lg pl-4 pr-4 pt-2 pb-2 text-white mb-2 md:mt-3">{{ $t('Featured') }}</button>
            <h3 v-if="lang == 'gu' && data.campaign_title_gu" class="leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold mb-2">{{ $t(data.campaign_title_gu) }}</h3>
            <h3 v-else-if="lang == 'hi' && data.campaign_title_hi" class="leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold mb-2">{{ $t(data.campaign_title_hi) }}</h3>
            <h3 v-else class="leading-7 text-[20px] md:text-[22px] lg:text-[22px] font-bold mb-2">{{ $t(data.campaign_title) }}</h3>
            <p v-if="lang == 'gu' && data.short_description_gu" class="text-[#364958] mb-[16px] leading-7">
              {{ data.short_description_gu }}
            </p>
            <p v-else-if="lang == 'hi' && data.short_description_hi" class="text-[#364958] mb-[16px] leading-7">
              {{ data.short_description_hi }}
            </p>
            <p v-else class="text-[#364958] mb-[16px] leading-7">
              {{ data.short_description }}
            </p>
            <button class="text-[#40b751] font-bold underline" type="button" @click="donate(data.name)">{{ $t('Donate Now') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AutoSlider',
  props: {
    featured_campaigns: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    lang: {
      type: String,
      required: true
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
      currentSlide.value = (currentSlide.value + 1) % props.featured_campaigns.length;
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
      this.$router.push(`/sadbhavna/campaign-donation/${name}`)
    }
  }
};
</script>
  
<style>
.slider {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-out;
}

.slide {
  flex: 0 0 100%;
}
</style>