import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import "./plugins/element.js";
import Router from "vue-router";
import axios from 'axios';
import VueAMap from 'vue-amap';//高德地图


VueAMap.initAMapApiLoader({
  key: '620069ed8a9bb90077dbcc699c0d087c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-flash'
Vue.use(VideoPlayer)
Vue.use(VueAMap);
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};