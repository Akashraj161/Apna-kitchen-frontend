<template>
  <div>
   
    <div class="loginForm">
      <form @submit.prevent="logIn">
        <h1 class="loginTitle">login</h1>
        <input
          type="text"
          v-model="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="submit" value="login" class="button" />
        <span class="newUserTitle"
          >New to ApnaKitchen?
          <router-link to="/signup">Create account</router-link></span
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginPage",
 
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.post("https://apnakitchen-api.onrender.com/api/login", {
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "home" });
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
.loginForm {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-top: 10px;
  border: 1px solid black;
  width: 450px;
  height: 400px;
}
.loginTitle {
  display: block;
  padding: 20px 25px;
}
.loginForm input {
  display: block;
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
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

.newUserTitle {
  display: block;
  font-size: 20px;
  margin: 20px 25px;
}

.newUserTitle a {
  text-decoration: none;
}
</style>
