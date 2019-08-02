import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueNumber from 'vue-number-animation'
import App from './App.vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.config.productionTip = false

Vue.use(vueSmoothScroll)
Vue.use(VueNumber)
Vue.use(VueMasonryPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
