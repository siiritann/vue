import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // libra mis teeb get ja post päringuid


Vue.config.productionTip = false
Vue.prototype.$http = axios // vue klass, kõik mis sinna paned on globaalselt kõik olemas, saad kasutada igal pool

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
