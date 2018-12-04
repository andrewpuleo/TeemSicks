<template>
   <div style="padding: 4rem;">
      <div id="product-deleter" class="white-box-grey-border">
         <br>
         <h3 class="foxycle-orange"> Delete a product: </h3>
         <div class="form">


           <div class="field">
             <label class="label">Product ID</label>
             <input class="input" type="text" v-model="deleteId"/>
           </div>
           <div class="field">
             <button class="button" v-on:click="submitDelete()">Delete (!)</button>
           </div>
           <div id="myMessage">Deleted the item</div>
           <br>

         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import axios from 'axios';
import { product } from '@/models';

@Component
export default class ProductDeleter extends Vue {

   deleteId!: number = null;

   submitDelete() {
      if(this.deleteId != null){
         axios.delete(`/api/products/${this.deleteId}`).then((res) => {
           this.deleteId = null;
        })
        .catch(error => {
          console.log(error)
       });
      }
      var x = document.getElementById("myMessage");
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }

}

</script>

<style scoped>

#product-deleter{
   border-radius: 20px;
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
color: white;
border: 5px solid black;
background-color: red;
}

label.form-descriptions{

  padding-right: 1rem;
  vertical-align: center;

}

/* Style inputs with type="text", select elements and textareas */
.field{
   padding-left: 4rem;
   padding-right: 4rem;
}
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
    /*background-color: #4CAF50; */
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
