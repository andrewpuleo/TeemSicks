<template>
  <div>
    <div class = "register">
        <div class = "logo">
        <img src = "../assets/foxycle.png" alt = "register"
          style = "width:200px; height:100px;padding:5px"/>
        </div>
        <div class = "container1">
          <form class = "needs-validation" style = "padding: 10px">
            <div class = "form-row">
              <div class = "form-col" style = "width: 47.5%; margin-right: 5%">
                <input type="text" class="form-control" id="firstname" v-model="newFirstName" placeholder="First Name" required>
              </div>
              <div class = "form-col" style = "width: 47.5%">
                <input type="text" class="form-control" id="lastname" v-model="newLastName" placeholder="Last Name" required>
              </div>
            </div>
            <div class = "form-row">
              <div class = "form-col" style = "width: 100%">
                <input type="text" class="form-control" id="username" v-model="newUsername" placeholder="User Name" required>
              </div>
            </div>
            <div class = "form-row">
              <div class = "form-col" style = "width: 100%">
                <input type="password" class="form-control" id="password" v-model="newPassword" placeholder="Password" required>
              </div>
            </div>
            <div class = "form-row">
              <div class = "form-col" style = "width: 100%">
                <input type="text" class="form-control" id="phonenumber" v-model="newPhoneNumber" placeholder="Phone" required>
              </div>
            </div>
            <div class = "form-row">
              <div class = "form-col" style = "width: 100%">
                <input type="text" class="form-control" id="email" v-model="newEmailAddress" placeholder="Email" required>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" v-model="status" class="custom-control-input" id="invalidCheck" required>
                <label class="custom-control-label" for="invalidCheck"> <a href ="#" class = "link" id="termsLink" style="color:rgba(252, 92, 0, 0.801)"  v-on:click="show()">Agree to terms and conditions</a></label>
              </div>
            </div>
              <button class="btn btn-primary" id="signUp"  v-on:click="signUp()" type="submit">
              Join Now
              </button>
          </form>
        </div>
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
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { User } from '@/models';

export default class Register extends Vue {
  newFirstName: string = '';
  newLastName: string = '';
  newUsername: string = '';
  newPhoneNumber: string = '';
  newEmailAddress: string = '';
  newPassword: string = '';
  status: boolean = false;

  signUp() {
    axios.post('/api/users', {
      firstName: this.newFirstName,
      lastName: this.newLastName,
      username: this.newUsername,
      email: this.newEmailAddress,
      password: this.newPassword,
    }).then((res) => {
      this.newFirstName = '';
      this.newLastName = '';
      this.newUsername = '';
      this.newEmailAddress = '';
      this.newPassword = '';
    })
    if(this.allFilled())
    {
      this.$router.push('/');
    }
  }

  allFilled()
  {
    if(this.newFirstName.length!=0 &&
       this.newLastName.length!=0 &&
       this.newUsername.length!=0 &&
       this.newEmailAddress.length!=0 &&
       this.newPassword.length!=0 &&
       this.status)
       {
         return true;
       }
      else{
        return false;
      }
  }
}
</script>
 <style scoped>
    .register {
        width: 500px;
        border: 2px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 30px;
        padding: 20px;
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
      margin-top:5px;
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
