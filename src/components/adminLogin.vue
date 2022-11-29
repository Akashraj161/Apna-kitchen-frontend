<template>
  <div>
    
    <div class="loginForm">
      <form @submit.prevent="logIn">
        <h1 class="loginTitle">Admin Login</h1>
        <div class="form-floating mb-3 col-md-4 offset-md-4">
          <input
            type="text"
            v-model="email"
            class="form-control"
            name="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Admin User Name</label>
        </div>
        <div class="form-floating mb-3 col-md-4 offset-md-4">
          <input
            type="password"
            v-model="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <input type="submit" value="login" class="button" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "adminLogin",
 
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.post("https://apnakitchen-api.onrender.com/api/adminlogin", {
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "addRestaurant" });
      } else {
        alert("login failed");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.loginTitle {
  text-align: center;
  padding: 20px 0px 40px 0px;
}
.button {
  display: block;
  width: 400px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(181, 181, 240);
  color: #fff;
}
</style>
