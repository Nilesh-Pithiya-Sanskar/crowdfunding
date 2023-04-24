<!-- <template>
    <div>test</div>
    <test class="lg:block sm:hidden md:hidden" :data="data" :t="3"></test>
    <test class="block sm:hidden lg:hidden" :data="data" :t="2"></test>
    <test class="block lg:hidden md:hidden" :data="data" :t="1"></test>
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
        <div class="slide w-1/3 px-4" v-for="slide in slides" :key="slide.id">
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

<template>
  <div>Test</div>
</template>

   <script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `My website`,
      description: `My beautiful website`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },
})
</script>