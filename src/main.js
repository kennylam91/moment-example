import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import moment from './plugins/moment.js';
import dayjs from './plugins/day.js'
import constant from './plugins/constant'

Vue.use(moment);
Vue.use(constant);
Vue.use(dayjs);

new Vue({
  render: h => h(App),
}).$mount('#app')