import Vue, { createApp } from "@vue/compat";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./vuex/store";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);

const app = createApp(App);

app.use(store);

app.mount("#app");
