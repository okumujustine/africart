import './index.css'

import Vue from 'vue'
import 'es6-promise/auto'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from "./routers/index"
import store from "./store/index"

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
