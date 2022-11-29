<template>
    <div>
        <div class="signupForm">
            <form @submit.prevent="signUp">
            <h1 class="loginTitle">SignUp</h1>
            <input type="text" v-model="name" placeholder="UserName" name="username" required>
            <input type="text" v-model="email" placeholder="Email" name="email" required >
            <input type="password" v-model="password" placeholder="Password" name="password" required >
            <input type="password" v-model="confirmPassword" placeholder="Confirm Password" name="confirmPassword" required >
            <input type="submit" value="SignUp" class="button">
            <span class="newUserTitle">Already have an account? <router-link to="/login">Login</router-link></span>
        </form>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'signUp',
    data(){
        return{
            name:'',
            email:'',
            password: '',
            confirmPassword : ''
        }
    },
    methods:{
        async signUp()
        {
           let result =await axios.post("http://localhost:4000/api/signup",{
            
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
           });

           console.log(result);
           if(result.status == 201){
            alert("login successful")
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'home'})
           }
           else{
            alert("login failed")
           }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style scoped>
.signupForm{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding-top: 10px;
    border: 1px solid black;
    width: 450px;
    height: 450px;
   
}
.loginTitle{
    display: block;
    padding:20px 25px

}
.signupForm input {
    display: block;
    width: 400px;
    height: 40px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    
}

.button{
    display: block;
    width: 400px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(181, 181, 240);
    color: #fff;

}

.newUserTitle{
    display: block;
    font-size: 20px;
    margin: 20px 25px;
    
}

.newUserTitle a{
    text-decoration: none;
}
</style>