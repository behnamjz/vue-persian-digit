import Vue from 'vue'
import App from './App.vue'
import persianDigit from './filter/persianDigit'

Vue.config.productionTip = false

let VPlugin = {
  install: function () {
    Vue.filter('persianDigit', persianDigit)
  }
}
Vue.use(VPlugin)

export default VPlugin

new Vue({
  render: h => h(App)
}).$mount('#app')
