import Vue from "vue";
import Router from "vue-router";
import MainPage from "./components/MainPage/MainPage.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/mine",
      name: "mine",
      component: MainPage
    },
    {
      path: "**",
      redirect: '/'
    }
  ]
});
