//resources/js/app.js

import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from './router'
import  AOS  from "aos/dist/aos.js";
import 'aos/dist/aos.css';
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";

AOS.init();

createApp(App)
    .use(Toast)
    .use(router)
    .use(store)
        .mount("#app");

require("./bootstrap");