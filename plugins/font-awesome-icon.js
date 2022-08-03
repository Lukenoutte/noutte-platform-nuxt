import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faMagnifyingGlass, faHouse, faArrowTrendUp, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faMagnifyingGlass, faHouse, faArrowTrendUp, faHeart)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})