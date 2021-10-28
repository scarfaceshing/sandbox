import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import Vuetify from "./plugins/vuetify";
import "./plugins/axios";
import "@mdi/font/css/materialdesignicons.css";

const app = new Vue({
    router,
    vuetify: Vuetify,
    render: (h) => h(App),
}).$mount("#app");
