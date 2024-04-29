import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/blog",
    component: Blog,
    name: "blog",
  },

  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
