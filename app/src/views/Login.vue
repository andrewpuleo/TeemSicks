<template>
  <div>
    <div class = "login">
        <img src = "../assets/foxycle.png" alt = "login"
          style = "width:200px; height:100px;padding:10px"/>
         <div class = "UserName">
          <input type="text" name="username" v-model="input.username" placeholder="Username"/>
        </div>
         <div class = "PassWord">
          <input type="password" name="password" v-model="input.password" placeholder="Password"/>
        </div>
         <a :href = "website.forgotPass"> Forgot Your Password? </a>
        <button type="button" v-on:click="login()">Login</button>
      </div>
       <div class = "signUp">
          <p> Don't have an account? </p>
          <a><router-link to="/register"> Sign Up </router-link></a>
      </div>
  </div>
  
</template>
 <script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                website: {
                  forgotPass: "https://github.com/CSC307Fall2018/TeemSicks",
                  signUp: "https://github.com/CSC307Fall2018/TeemSicks"
                },
                sample: {
                  username: "mwuchen",
                  password: "b"
                },
            };
        },
        methods: {
            login() {
            },
        },
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