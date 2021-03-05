import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font/icon_font/iconfont.css'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$http = axios
Vue.prototype.$moment = moment
axios.defaults.baseURL = 'http://127.0.0.1:8000'

// 重复路由报错解决




// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
