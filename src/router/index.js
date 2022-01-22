import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home"
import Doodle from "@/components/Doodle"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/single-cell",
    name: "SingleCell",
    component: Doodle,
  },
  {
    path: "/estelle",
    name: "Estelle",
    component: Doodle,
  },
  {
    path: "/multi-cell",
    name: "MultiCell",
    component: Doodle,
  },
  {
    path: "/stroke",
    name: "Stroke",
    component: Doodle,
  },
  {
    path: "/playing-card",
    name: "PlayingCard",
    component: Doodle,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
