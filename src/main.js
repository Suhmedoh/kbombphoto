import Vue from 'vue'
import App from './App.vue'
import VuePictureSwipe from 'vue-picture-swipe'
import lightbox from 'vlightbox';
Vue.use(lightbox);
Vue.component('vue-picture-swipe', VuePictureSwipe)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
