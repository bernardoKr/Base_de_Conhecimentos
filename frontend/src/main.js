import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

//Temporario
require("axios").defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkJlcm5hcmRvIiwiZW1haWwiOiJCZXJuYXJkb19rcmFAaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyNzExODk5LCJleHAiOjE2NDI5NzEwOTl9.IhpCH1KIQN5gqSZgnWjwCfvnh44M5IEz7NK_Dap3QQQ'



new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
