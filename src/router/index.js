import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home"
import SingleCell from "@/components/SingleCell"
import Estelle from "@/components/EstellePattern"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/single-cell",
    name: "singleCell",
    component: SingleCell,
  },
  {
    path: "/estelle",
    name: "Estelle",
    component: Estelle,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
