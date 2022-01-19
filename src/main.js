import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import "./assets/grid-defs.css"
import "./assets/typography.css"
import router from "./router"

createApp(App).use(router).mount("#app")
