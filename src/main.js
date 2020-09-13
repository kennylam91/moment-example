import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import moment from './plugins/moment.js';
Vue.use(moment);

new Vue({
  render: h => h(App),
}).$mount('#app')