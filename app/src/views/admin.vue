<template>
    <div id="admin" v-if="this.visitor.userType == 0">
        <h1>ADMINISTRATOR ONLY</h1>
        <br>

        <div class="col admin_container">
           <h2> List of employees: </h2>
           <p> (New employees can be added at the bottom) </p>
            <UserItem class = "employees" v-for="employee in users" v-bind:key="employee.id" v-bind:employee="employee" v-if="employee.userType == 1"></UserItem>
            <br>
            <h2> Add new employees: </h2>

            <div class = "register">
                <div class = "container1">
                  <form class = "needs-validation" style = "padding: 10px">
                    <div class = "form-row">
                      <div class = "form-col" style = "width: 47.5%; margin-right: 5%">
                        <input type="text" class="form-control" id="validationCustom04" v-model="newFirstName" placeholder="First Name" required>
                      </div>
                      <div class = "form-col" style = "width: 47.5%">
                        <input type="text" class="form-control" id="validationCustom05" v-model="newLastName" placeholder="Last Name" required>
                      </div>
                    </div>
                    <div class = "form-row">
                      <div class = "form-col" style = "width: 100%">
                        <input type="text" class="form-control" id="validationCustom04" v-model="newUsername" placeholder="User Name" required>
                      </div>
                    </div>
                    <div class = "form-row">
                      <div class = "form-col" style = "width: 100%">
                        <input type="password" class="form-control" id="validationCustom04" v-model="newPassword" placeholder="Password" required>
                      </div>
                    </div>
                    <div class = "form-row">
                      <div class = "form-col" style = "width: 100%">
                        <input type="text" class="form-control" id="validationCustom04" v-model="newPhoneNumber" placeholder="Phone" required>
                      </div>
                    </div>
                    <div class = "form-row">
                      <div class = "form-col" style = "width: 100%">
                        <input type="text" class="form-control" id="validationCustom04" v-model="newEmailAddress" placeholder="Email" required>
                      </div>
                    </div>
                    <div class="form-group">
                    </div>
                      <button class="btn btn-primary"  v-on:click="signUp()" type="submit">
                      Add Employee
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

            <div id="myMessage">Employee sucessfully TERMINATED !!</div>

       </div>


    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { User } from '@/models';
import  UserItem  from "@/components/userItem.vue";


@Component({ components: {UserItem,} })

export default class Admin extends Vue {
   users: User[] = [];
   tempUsers: User[] = [];
   visitor: User = new User();


   //optional: use later?
   sortVal1: number = 0;
   sortVal2: number = 0;

   newFirstName: string = '';
   newLastName: string = '';
   newUsername: string = '';
   newPhoneNumber: string = '';
   newEmailAddress: string = '';
   newPassword: string = '';
   status: boolean = true;

   mounted() {
      axios.get(`/api/users/${this.$store.getters.getUID}`)
     .then((response) => {
         this.visitor = response.data.user;
     });

     axios.get('/api/Users')
       .then((response) => {
         this.users = response.data.users;
         console.log("Users: ",this.users);
       });
   }

   signUp() {
     axios.post('/api/users', {
      userType: 1,
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
      this.$router.push('/admin');
     }
     var x = document.getElementById("myMessage");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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
    #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 10px;
    }

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

    #myMessage {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%;
        bottom: 30px;
    }


    #myMessage.show {
        visibility: visible;
       -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
       animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }


    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
</style>
