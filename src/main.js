import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.axios = Axios;

//Custom Directives
Vue.directive('rainbow', {
  // bind takes 3 arguments: element, binding, virtualNode
  bind: function (el) {
    el.style.color = `#${Math.random().toString(16).slice(2, 8)}`;
  }
});

Vue.directive('theme', {
  bind(el, binding) {
    if (binding.value === `wide`) {
      el.style.maxWidth = '1200px'
    } else if (binding.value === `narrow`) {
      el.style.maxWidth = '600px'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
