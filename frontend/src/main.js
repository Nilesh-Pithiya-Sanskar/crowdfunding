import { createApp } from 'vue'
import { FrappeUI, Button } from 'frappe-ui'
import router from './router'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import './index.css'
import { createToast, clearToasts } from "@/utils/toasts"
import axios from 'axios';
import { socketio_port } from "../../../../sites/common_site_config.json"
import "@/assets/Inter/styles/tailwind.css"
// import VueMeta from 'vue-meta'
// import VueMeta from 'vue-meta'


// import { createHead } from '@vueuse/head'
// import { createMetaManager } from 'vue-meta'

// import createMetaManager from 'vue-meta'

// import { createMetaManager, useMeta } from 'vue-meta'

// import { createMetaManager, VueMetaPlugin } from 'vue-meta'


// import { createMetaManager } from "vue-meta";
// import { plugin as vueMetaPlugin } from "vue-meta";


// import GAuth from 'vue3-google-oauth2';
import vue3GoogleLogin from 'vue3-google-login';
import VueSocialSharing from 'vue-social-sharing'

import gu from './assets/i18n/gu.json';
import hi from './assets/i18n/hi.json';
import en from './assets/i18n/en.json';

// import gu from '../../../../sites/gu.json'
// import hi from '../../../../sites/hi.json'
// import en from '../../../../sites/en.json'

// console.log(gu1)


import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: localStorage.getItem('lang') || window.navigator.language,
    messages:{
        en: en,
        gu: gu,
        hi: hi
    }
})

// const meta = VueMeta()
// const head = createHead()
// const metaManager = createMetaManager()


let app = createApp(App)
app.use(VueSocialSharing);

// app.use(VueMeta, {
//   refreshOnceOnNavigation: true
// })
// app.use(head)
// app.use(metaManager)

// app.use(VueMetaPlugin)
// app.use(createMetaManager())

// const metaManager = createMetaManager()
// app.provide('meta', metaManager)

// app.use(VueMetaPlugin, {
//   keyName: 'metaInfo', // optional, default value is 'metaInfo'
//   attribute: 'data-vue-meta', // optional, default value is 'data-vue-meta'
//   ssrAttribute: 'data-vue-meta-server-rendered', // optional, default value is 'data-vue-meta-server-rendered'
//   tagIDKeyName: 'vmid' // optional, default value is 'vmid'
// })

// app.use(vueMetaPlugin);
// app.use(createMetaManager);
// app.use(metaManager)

// app.use(VueMeta, {
//   // optional pluginOptions
//   refreshOnceOnNavigation: true
// })

// app.use(VueMeta)
app.use(i18n)
app.use(router)
app.use(FrappeUI)
app.use(VueCookies)
app.use(FrappeUI, {
  socketio: {
    port: socketio_port,
  },
})

// app.use(GAuth, gauthOption)
app.use(vue3GoogleLogin, {
  // clientId: '615226899593-b4jpeolmo526beqkiqvo1bf7ob06rhpb.apps.googleusercontent.com'
  clientId: '1066491682846-6vikj94cs1bo0jg431chodcuj72d533p.apps.googleusercontent.com'
})

app.component('Button', Button)
app.config.globalProperties.$toast = createToast
app.config.globalProperties.$clearToasts = clearToasts
app.mount('#app')