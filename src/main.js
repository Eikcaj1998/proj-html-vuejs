import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faCloud} from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-regular-svg-icons'

library.add(faLightbulb,faCloud,faPencil,faComment,faArrowUp)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
