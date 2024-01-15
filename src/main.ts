import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import "animate.css";
import vhCheck from "vh-check";
vhCheck();

const app = createApp(App);

app.use(router);
app.mount("#app");