import Vue from 'vue'
import persianDigit from './filter/persianDigit'

Vue.config.productionTip = false

let VPlugin = {
  install: function () {
    Vue.filter('persianDigit', persianDigit)
  }
}
Vue.use(VPlugin)

export default VPlugin
