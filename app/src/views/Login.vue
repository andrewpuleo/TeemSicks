<template>
  <div>
    <div class = "login">
        <img src = "../assets/foxycle.png" alt = "login"
          style = "width:200px; height:100px;padding:10px"/>
        <form class = "needs-validation">
          <div class = "form-row-1">
            <div class = "form-col UserName">
              <input type="text" class = "form-control" name="username" id="validationCustom01" v-model="username" placeholder="Username" required/>
            </div>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
          <div class = "form-row-1">
            <div class = "form-col PassWord">
              <input type="password" class = "form-control" name="password" id="validationCustom02" v-model="password" placeholder="Password" required/>
            </div>
          </div>
          
          <button type="submit" class = "btn btn-primary" v-on:click="login()">Login</button>
        </form>
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

        

      login() {
        axios.get('/api/users')
          .then((response) => {
            this.users = response.data.users;
            console.log(this.users);
          });
        // axios.post('/api/users', {
        // username: this.username,
        // password: this.password,
        
        // }).then((res) => {
        //   this.username = '';
        //   this.password = '';
        // })
      };

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
    button{
      margin-top: 20px;
      padding: 5px 105px;
      background-color: rgba(252, 92, 0, 0.801);
      color: white;
      border-radius: 4px;
      transition-duration: 0.4s;
      border:2px solid rgba(252, 92, 0, 0.801);
    }
    button:hover{
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
 </style>