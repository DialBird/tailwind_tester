import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router'
// import VeryHeavy2 from '@/components/VeryHeavy2.vue'
// import { createProvider } from './vue-apollo'
import { v4 as uuidv4 } from 'uuid'

library.add(faUserSecret)

console.log(uuidv4)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('VeryHeavy2', VeryHeavy2)

new Vue({
  render: (h) => h(App),
  // apolloProvider: createProvider(),
  router,
}).$mount('#app')
