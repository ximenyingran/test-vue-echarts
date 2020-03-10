import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'  // echarts图表
// import 'echarts/theme/temp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'  // 百度地图
import normalize from 'normalize.css'  // 样式

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'xTzUd6pF3hm0S4r8vAFCefepb7HhKlMM'
})
Vue.use(normalize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
