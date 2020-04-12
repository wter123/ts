import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'


import 'bootstrapvalidator/dist/js/bootstrapValidator.min.js'
import 'bootstrapvalidator/dist/css/bootstrapValidator.min.css'


import axios from 'axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')

Vue.prototype.axios = axios
Vue.use(VueResource)