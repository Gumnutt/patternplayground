import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import "./assets/grid-defs.css"
import "./assets/typography.css"
import router from "./router"
import VueClickAway from "vue3-click-away"

createApp(App).use(router).use(VueClickAway).mount("#app")
