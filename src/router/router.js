import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
import BlogHome from "../components/blog/BlogHome.vue"
import BlogSingle from "../components/blog/BlogSingle.vue"

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { title: "Home" }, // Example title for the home page
  },
  {
    path: "/about",
    component: About,
    name: "about",
    meta: { title: "About Us" }, // Example title for the about page
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    children: [
      {
        path: "",
        name: "BlogHome",
        component: BlogHome,
        meta: { title: "This blog home" }, // Title for the blog home page
      },
      {
        path: ":id",
        name: "BlogSingle",
        component: BlogSingle,
        meta: { title: "Blog Single" }, // Title for individual blog posts
      },
    ],
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
    meta: { title: "Contact Us" }, // Example title for the contact page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
