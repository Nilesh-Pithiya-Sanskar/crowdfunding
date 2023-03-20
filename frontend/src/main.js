import { createApp } from 'vue'
import { FrappeUI, Button } from 'frappe-ui'
import router from './router'
import App from './App.vue'
import './index.css'
import { createToast, clearToasts } from "@/utils/toasts"
import axios from 'axios';
import { socketio_port } from "../../../../sites/common_site_config.json"
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/Inter/styles/tailwind.css"

// import GAuth from 'vue3-google-oauth2';
import vue3GoogleLogin from 'vue3-google-login';
// import GoogleSignInPlugin from "vue3-google-signin"

// import VueSession from "vue-session";


// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueCardStack from "vue-card-stack";
// app.use(VueSession);


// import Razorpay from "razorpay"

// const gauthOption = {
//     // clientId: '615226899593-b4jpeolmo526beqkiqvo1bf7ob06rhpb.apps.googleusercontent.com',
//     clientId: '1066491682846-6vikj94cs1bo0jg431chodcuj72d533p.apps.googleusercontent.com',
//     scope: 'email',
//     prompt: 'consent',
//   }
  // app.use(GoogleSignInPlugin, {
  //   clientId: '615226899593-b4jpeolmo526beqkiqvo1bf7ob06rhpb.apps.googleusercontent.com',
  // });


let app = createApp(App)
app.use(router)
app.use(FrappeUI)
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

// app.use(BootstrapVue)
// app.use(IconsPlugin)
// app.use(Vuetify)
app.component('Button', Button)
app.config.globalProperties.$toast = createToast
app.config.globalProperties.$clearToasts = clearToasts
app.mount('#app')

