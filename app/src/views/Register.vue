<template>
  <div>
    <div class = "register">
        <div class = "logo">
        <img src = "../assets/foxycle.png" alt = "register"
          style = "width:200px; height:100px;padding:10px"/>
        </div>
        <div class = "container1">
          <div class = "FirstName">
            <input type="text" name="FirstName" v-model="FirstName" placeholder="First Name"/>
          </div>
           <div class = "LastName">
            <input type="text" name="LastName" v-model="LastName" placeholder="Last Name"/>
          </div>
        </div>
        <div class = "UserName">
          <input type="text" name="UserName" v-model="UserName" placeholder="Username"/>
        </div>
         <div class = "EmailAddress">
          <input type="email" name="EmailAddress" 
            v-model="EmailAddress" placeholder="Email Address"/>
        </div>
         <div class = "PassWord">
          <input type="password" name="PassWord" v-model="PassWord" placeholder="Password"/>
        </div>
         <div class = "container2"> 
          <div>
            <label><input type="checkbox" style = "
                width: 13px;
                height: 13px;
                vertical-align: bottom;
                position: relative;
                top: -5px;
                *overflow: hidden"> I agree to the <a href ="#" class = "link" id="termsLink" style="color:rgba(252, 92, 0, 0.801)"  v-on:click="show()">terms of use </a></label>
          </div>
        </div>
        
        <button type="button" v-on:click="signUp()">Join Now</button>
    </div>
    <modal id = "termsPage" name = "hello">
          <p>VERY BAD THINGS THAT YOU CANNOT DO</p>
          <p>We want you to like us, we do. But the internet is dangerous, and we don’t like danger spilling over onto our website. So while some of this may seem OBVIOUS, we have to tell you because sometimes its good to be reminded.  So when using our site we expect the following:
            Don’t Spam, or use this site to sell your crap without our permission.  This isn’t the classified section of the newspaper;
            Don’t give us viruses or try and hack your way into our computers;
            Don’t post comments on our blog that are useless;
            Don’t be a robot.  Robots are evil.  That means don’t use auto posters that are meant to leave things like “You blog has great informashuns!  Thank you! Best content 2007! I my wife tell me about your site, I say I no believe but she write…you best Site!” with anchor text to your crappy site about “Best Los Angeles Dog Groomers”.  Seriously….don’t.
            Don’t be a jerkface. </p>
          </modal>
  </div>
</template>
 <script>
    export default {
        name: 'Register',
        data() {
            return {
              FirstName: "",
              LastName: "",
              UserName: "",
              EmailAddress: "",
              PassWord: "",
              website: {
                termsOfUse: "https://github.com/CSC307Fall2018/TeemSicks"
              },
            }
        },
        methods: {
            signUp() {
                   
            },
            show(){
              this.$modal.show('hello');
            },
            hide(){
              this.$modal.hide('hello');
            },
            check(){
             }
  },
};
</script>
 <style scoped>
    .register {
        width: 500px;
        border: 2px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }
     .register *{
      margin:auto;
      margin-top: 10px;
      width: 290px;
    }
     .logo{
      margin:auto;
    }
     .container1 {
      margin:auto;
      width: 300px;
      display:flex;
      justify-content:space-between;
    }
     .container1 *{
      width: 140px;
    }
     label {
      display: block;
      padding-top: 1px;
      padding-left: 15px;
      text-indent: -15px;
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
    #termsPage{
      text-align: right;
      margin:auto;
      overflow-y: auto;
    }
</style>