import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import {Button, Dropdown, Icon, Input, List} from 'ant-design-vue'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Icon)
Vue.use(Input)
Vue.use(List)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: {App, Button, Dropdown, Icon, Input, List},
  router,
  store,
  template: '<App/>'
}).$mount('#app')
