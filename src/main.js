import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify'


// import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import homePage from "./components/homePage";
import loginPage from "./components/loginPage";
import addRestaurant from "./components/addRestaurant";
import pagenotFound from "./components/pagenotFound";
import detailsPage from "./components/detailsPage";
import signUp from "./components/signUp";
import newRestaurant from "./components/newRestaurant";
import adminLogin from "./components/adminLogin";
import restaurantDetails from "./components/restaurantDetails";


// Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuetify)

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/addRestaurant",
    component: addRestaurant,
    name:"addRestaurant"
  },
  {
    name: "login",
    path: "/login",
    component: loginPage,
  },
  {
    path: "/signup",
    component: signUp,
  },
  {
    path: "/newRestaurant",
    name: "newRestaurant",
    component: newRestaurant,
  },
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: adminLogin,
  },
  {
    path: "/restaurantDetails",
    name: "restaurantDetails",
    component: restaurantDetails,
  },

  {
    path: "/details/:Pid",
    name: "detailsPage",
    component: detailsPage,
  },
  {
    path: "*",
    component: pagenotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
