import gu from './assets/i18n/gu.json';
import hi from './assets/i18n/hi.json';
import en from './assets/i18n/en.json';
import { createI18n } from 'vue-i18n'
import vue from 'vue'

vue.use(VueI18n);

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
    messages:{
        en: en,
        gu: gu,
        hi: hi
    }
})