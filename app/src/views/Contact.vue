<template>

  <div class="contact">
     <div class="top-contact-image">
        <br>
        <br>
        <h1 class="big-white-text"> Contacting Foxycle </h1>

        <div class="row white contact-table" style="font-size:12pt">
            <div class="col" style="border-style:solid; border-color: white;">
               <h1 style="font-size:20pt"> Address </h1>
               <p> 1400 Ramada Dr <br>Paso Robles, CA 93446 </p>
            </div>
            <div class="col" style="border-style: solid solid solid none; border-color: white">
               <h1 style="font-size:20pt"> Phone </h1>
               <p> 805 225 5911 <br> <br></p>
            </div>
            <div class="col" style="border-style: solid solid solid none; border-color: white">
               <h1 style="font-size:20pt"> Hours </h1>
               <storeHours></storeHours>
            </div>
        </div>

     </div>

    <h1 class="foxycle-redorange"> <br>Contact Form</h1>

      <div class="container white-box-grey-border contact-container text-center foxycle-orange">
        <form action="../contact.php">
          <label for="fname" class="form-descriptions">Full Name</label>
          <br>
          <input type="text" id="fname" name="yourname" placeholder="Full Name">
          <br>
          <label for="subject" class="form-descriptions">Subject</label>
          <br>
          <input type="text" id="subject" name="subject" placeholder="Subject">
          <br>
          <label for="email" class="form-descriptions">Email</label>
          <br>
          <input type="text" id="email" name="email" placeholder="Email">
          <br>
          <label for="message" class="form-descriptions">Message</label>
          <br>
          <textarea id="message" name="comments" placeholder="Message"
             style="height:200px"></textarea>
          <br>
          <input type="submit" value="Send it!">
        </form>
      </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import  storeHours  from "@/components/storeHours.vue";

//import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
  storeHours
  },
  })
export default class Contact extends Vue {}
</script>





<style lang="scss">
@import '../style.css';

.top-contact-image{
   background-image: url('../assets/sunset.png');
   background-repeat: no-repeat;
   background-size: cover;
   height: 500px;
}

.contact{
    text-align: center;
    font-size: 20pt;
}

.contact-table{
   padding-top: 5rem;
   padding-left: 3rem;
   padding-right: 3rem;
}

.info-title{
  font-size: 15pt;
  color: rgba(252, 92, 0, 0.801);
}

label.form-descriptions{
  padding-right: 1rem;
  vertical-align: center;
}

/* Style inputs with type="text", select elements and textareas */

input[type=text], select, textarea {

    width: 100%; /* Full width */
    padding: 12px; /* Some padding */
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */

input[type=submit] {
    padding: 12px 20px;
    cursor: pointer;
    background-color: rgba(252, 92, 0, 0.801);
    color: white;
    border-radius: 4px;
    transition-duration: 0.4s;
    border:2px solid rgba(252, 92, 0, 0.801);
}

/* When moving the mouse over the submit button, add a darker green color */

input[type=submit]:hover {
   cursor: pointer;
   color: black;
   border: 2px solid rgba(252, 92, 0, 0.801);
   background-color: white;
}

/* Add a background color and some padding around the form */

.contact-container {
    border-radius: 20px;
    padding: 20px;
}

.pnum{
  color: rgb(241, 63, 9);
  font-size: 25px;
}

input[type=text]:focus, input[type=number]:focus,input[type=month]:focus,
    input[type = password]:focus, input[type = email]:focus,
    textarea:focus {
  outline:none !important;
  border-radius: 4px;
  border:2px solid rgba(252, 92, 0, 0.801);
  -webkit-box-shadow: none;
  box-shadow: none;
}

</style>
