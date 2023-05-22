<!-- <template>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <img :src="image.src" alt="slider image" :class="image.class" @click="redirect_to(image.click)">         
          </div>
        </div>
    </div>
  </template>
    
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'AutoSlider',
    props: {
      images: {
        type: Array,
        required: true
      },
      interval: {
        type: Number,
        default: 1000
      },
    },
    setup(props) {
      const currentSlide = ref(0);
      const slideWidth = ref(0);
      let timerId = null;
  
      const updateSlideWidth = () => {
        slideWidth.value = document.querySelector('.slider').offsetWidth;
      };
  
      const nextSlide = () => {
        currentSlide.value = (currentSlide.value + 2) % props.images.length;
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
    computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    changeImage(index) {
      this.currentIndex = index;
    },
    redirect_to(url){
      window.location.href = url
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
  </style> -->



  <template>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <img :src="image.src" alt="slider image" :class="image.class" @click="redirect_to(image.click)">         
          </div>
        </div>
    </div>
  </template>
    
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'AutoSlider',
    props: {
      images: {
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
        currentSlide.value = (currentSlide.value + 1) % (props.images.length / 6);
      } else if (window.innerWidth > 767) {
        currentSlide.value = (currentSlide.value + 1) % (props.images.length / 4);
      } else {
        currentSlide.value = (currentSlide.value + 1) % (props.images.length / 2);
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
        redirect_to(url){
            window.location.href = url
        }
    }
  };
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
    flex-shrink: 0;
    padding: 1rem;
  }
  </style>