import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MyFirstComponentI from "./components/MyFirstComponentI.vue"
import About from "./views/About.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },{
      path: "/mine",
      name: "mine",
      component: MyFirstComponentI
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "**",
      redirect: '/'
    }
  ]
});
