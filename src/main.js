import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faCloud} from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-regular-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import{faTwitter} from '@fortawesome/free-brands-svg-icons'
import{faPinterest} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
import{faLinkedin} from '@fortawesome/free-brands-svg-icons'




library.add(faLightbulb,faCloud,faPencil,faComment,faArrowUp,faBookmark,faTwitter,faPinterest,faFacebook,faLinkedin)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
