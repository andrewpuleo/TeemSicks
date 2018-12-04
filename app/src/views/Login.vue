<template>
  <div>
    <div class = "login">
        <img src = "../assets/foxycle.png" alt = "login"
          style = "width:200px; height:100px;padding:10px"/>
        <div class="error-message" id="error-msg" >
          
        </div>
        <div class = "needs-validation">
          <div class = "form-row-1">
            <div class = "form-col UserName">
              <input type="text" class = "form-control" name="username" id="validationCustom01" v-model="username" placeholder="Username" required/>
            </div>
          </div>
          <div class = "form-row-1">
            <div class = "form-col PassWord">
              <input type="password" class = "form-control" name="password" id="validationCustom02" v-model="password" placeholder="Password" required/>
            </div>
          </div>

          <button id = "loginB" class="btn btn-primary" v-on:click="login()">Login</button>
        </div>
      </div>
       <div class = "signUp">
          <p> Don't have an account? </p>
          <a><router-link to="/register"> Sign Up </router-link></a>
      </div>


  </div>
  
</template>

 <script lang="ts">
 import { User } from '@/models';
 import axios from 'axios';
 import { Component, Prop, Vue } from 'vue-property-decorator';
    export default class Login extends Vue{
        username: string = '';
        password: string = '';
       
        users: User[] = [];
        userData: User|null = null;
        missing: string[] = [];

        invalidLogin = '';
        invalidLoginErr = false;
        
      

      login () {
          axios.post(`/api/users/login`, {
            
          username: this.username,
          password: this.password
        }).then((res) => {
          if(res.status == 200){
            this.$store.commit('login', res.data);
            this.$router.push('/');            
          }
          console.log("res is: ", res)
          
          //console.log("Login response:" , res.status);
          //console.log(this.$store.getters.getIsLoggedIn);
          //console.log(this.$store.getters.getUID);

        }).catch(() => {
          this.loginErrFcn()
          this.invalidLoginErr = true;
          this.invalidLogin = "Invalid Username and Password Combination";
          console.log(this.invalidLogin)
        });
      }

      loginErrFcn(){
        document.getElementById("error-msg").innerHTML = "Invalid Username and Password Combination";

      }
      


        mounted(){
          
        };

        
        
};
</script>
 <style scoped>
    .login {
        width: 300px;
        border: 2px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }
    .UserName input {
      width: 250px;
      margin-top: 20px;
    }
    .PassWord input {
      margin-top: 20px;
      width: 250px;
    }
    a{
      margin-bottom:100px;
      color: rgba(252, 92, 0, 0.801);
    }
    #loginB{
      margin-top: 20px;
      padding: 5px 105px;
      background-color: rgba(252, 92, 0, 0.801);
      color: white;
      border-radius: 4px;
      transition-duration: 0.4s;
      border:2px solid rgba(252, 92, 0, 0.801);
    }
    #loginB:hover{
    cursor: pointer;
    color: black;
    border: 2px solid rgba(252, 92, 0, 0.801);
    background-color: white;
    }
     .signUp {
        width: 300px;
        border: 2px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 20px;
    }
     .signUp p {
      display:inline-block;
      margin: auto;
      padding: 10px;
    }
    .signUp a{
      color: rgba(252, 92, 0, 0.801);
    }

    .error-message{
      color:red;
    }
    .display-error-message{
      display:block!important;
      
    }
    input[type=text]:focus, input[type=number]:focus,input[type=month]:focus,
    input[type = password]:focus, input[type = email]:focus {
    outline:none !important;
    border-radius: 4px;
    border:2px solid rgba(252, 92, 0, 0.801);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
 </style>