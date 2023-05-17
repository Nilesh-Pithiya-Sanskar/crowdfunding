<!-- <template>
    <pre>{{ xmlContent }}</pre>
  </template>
  
  <script>
  import sitemapContent from '@/assets/sitemap.xml';
  
  export default {
    name: 'Sitemap',
    data() {
      return {
        xmlContent: '',
      };
    },
    mounted() {
      this.xmlContent = sitemapContent;
    },
  };
  </script>
   -->


   <template>
    <div>
      <pre>{{ sitemap }}</pre>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Sitemap',
    data() {
      return {
        sitemap: null,
      };
    },
    mounted() {
    //   axios
    //     .get('/sitemap.xml')
    //     .then((response) => {
    //       this.sitemap = response.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    fetch('/sitemap.xml')
      .then((response) => response.text())
      .then((data) => {
        this.sitemap = data;
      })
      .catch((error) => {
        console.error(error);
      });
    },
  };
  </script>
  


   <!-- <template>
    <div>
      <Sitemap />
    </div>
  </template>
  
  <script>
  import Sitemap from '../pages/sitemap.xml';
  
  export default {
    name: 'MyComponent',
    components: {
      Sitemap,
    },
  };
  </script> -->
  