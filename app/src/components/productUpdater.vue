<template>
   <div style="padding: 4rem;">
      <div id="product-deleter" class="white-box-grey-border">
         <br>
         <h3 class="foxycle-orange"> Update a product: </h3>

         <div class="form" v-if="item == null">
           <div class="field">
             <label class="label">Product ID</label>
             <input class="input" type="text" v-model="updateId"/>
           </div>
           <div class="field">
             <button class="button" v-on:click="findProduct">Find by ID</button>
           </div>
           <br>

         </div>
         <div v-else class="product-found">
            <p class="foxycle-redorange"> Item Successfully Found! <p>
            <div class="row">
               <div class="col">
                  <StoreItem v-bind:key="item.id" v-bind:item="item"></StoreItem>
               </div>
               <div class="col">
                  <br>
                  <p> <b>Reference product id: </b>{{item.id}}</p>
                  <p><b>Product Brand: </b>{{item.Brand}}</p>
                  <p><b>Listed Price: </b>${{item.salePrice}}</p>
               </div>
            </div>
         </div>


      </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import axios from 'axios';
import { product } from '@/models';
import  StoreItem  from "@/components/storeItem.vue";

@Component({ components: { StoreItem } })
export default class ProductUpdater extends Vue {

   updateId!: number = null;
   item!: product = null;

   findProduct() {
      axios.get(`/api/products/${this.updateId}`)
      .then((response) => {
         this.item = response.data.product;
      });
      console.log("our item", this.item);
   }
}

</script>

<style scoped>
@import '../style.css';

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
color: black;
border: 2px solid rgba(252, 92, 0, 0.801);
background-color: white;
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

.product-found{
   background-color: #f1f1f1;
   border-color: red;
   border-width: 1px;
}

</style>
