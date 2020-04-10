import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.axios = Axios;

Vue.directive('theme', {
  bind(el, binding) {
    if (binding.value === `wide`) {
      el.style.maxWidth = '1200px'
    } else if (binding.value === `narrow`) {
      el.style.maxWidth = '600px'
    }
    if (binding.arg === "column") {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
