import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
