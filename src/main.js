import Vue from 'vue'
import App from './App.vue'
import VuePreview from 'vue-preview'

Vue.config.productionTip = false
Vue.use(VuePreview)

new Vue({
  render: h => h(App)
}).$mount('#app')
