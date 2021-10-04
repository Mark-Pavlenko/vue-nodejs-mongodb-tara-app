import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vSelect from 'vue-select'
import VueSessionStorage from "vue-sessionstorage";

// import style
import 'swiper/css/swiper.css'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueSessionStorage);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
