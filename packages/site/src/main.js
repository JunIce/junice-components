import Vue from 'vue'
import App from './App.vue'
import Comps from "@junice/vue2"
import "@junice/vue2/dist/rj_12.vue.lib.css"


Vue.use(Comps)

new Vue({
    render: h => h(App)
}).$mount("#app")