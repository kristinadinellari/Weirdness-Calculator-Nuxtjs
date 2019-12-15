import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: '/svg/no-img.svg',
  loading: '/svg/loader.svg',
  attempt: 1
});
