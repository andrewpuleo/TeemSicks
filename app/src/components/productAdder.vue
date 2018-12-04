<template>
   <div style="padding: 4rem;">
      <div id="product-adder" class="white-box-grey-border">
         <br>
         <h3 class="foxycle-orange"> Add New Products: </h3>
         <div class="form">
           <div class="field">
             <label class="label">Product Name</label>
             <input class="input" id="productname" type="text" v-model="newProductName"/>
           </div>
           <div class="field">
             <label class="label">Brand</label>
             <input class="input" id="brand" type="text" v-model="newBrand"/>
           </div>
           <div class="field">
             <input type="checkbox" v-model="newOnSale" class="custom-control-input" id="onSaleCheck">
             <label class="custom-control-label" for="onSaleCheck"> Check this if the item is on sale!</label>
           </div>
           <br>
           <div class="field">
             <label class="label">Price</label>
             <input class="input" id="price" type="number" v-model="newSalePrice"/>
           </div>
           <div v-if="newOnSale" class="field">
             <label class="label">Enter Original Pre-Sale Price</label>
             <input class="input" id="presaleprice" type="number" v-model="newPrice"/>
           </div>
           <div class="field">
             <label class="label">Product Description</label>
             <input class="input" id="productdescription" type="text" v-model="newProductDescription"/>
           </div>
           <div class="field">
             <input type="checkbox" v-model="newInStock" class="custom-control-input" id="inStockCheck">
             <label class="custom-control-label" for="inStockCheck"> Check this if the item is in stock!</label>
           </div>
         <br>
           <div v-if="newInStock" class="field">
             <label class="label">Enter How how many are in stock</label>
             <input class="input" id="stockamount" type="number" v-model="newAmountInStock"/>
           </div>
           <div class="field">
             <label class="label">Color (optional)</label>
             <input class="input" id="color" type="text" v-model="newColor"/>
           </div>
           <div class="field">
             <label class="label">Photo Url</label>
             <input class="input" id="photourl" type="text" v-model="newPhotoUrl"/>
           </div>

           <div class="field">
             <button class="button" id="add" v-on:click="submit">Submit</button>
           </div>
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
export default class ProductAdder extends Vue {

   newProductId: number = 0;
   newProductName: string = '';
   newBrand: string = '';
   newPrice: number = 0;
   newOnSale: boolean = false;
   newSalePrice: number = 0;
   newProductDescription: string = '';
   newInStock: boolean = false;
   newAmountInStock: number = 0;
   newColor: string = '';
   newPhotoUrl: string = '';

   submit() {
    axios.post('/api/products', {
      productId: this.newProductId,
      productName: this.newProductName,
      Brand: this.newBrand,
      Price: this.newPrice,
      onSale: this.newOnSale,
      salePrice: this.newSalePrice,
      productDescription: this.newProductDescription,
      inStock: this.newInStock,
      amountInStock: this.newAmountInStock,
      color: this.newColor,
      photoUrl: this.newPhotoUrl
    }).then((res) => {
      this.newProductName = "";
      this.newBrand = "";
      this.newPrice = 0;
      this.newOnSale = false;
      this.newSalePrice = 0;
      this.newProductDescription = '';
      this.newInStock = false;
      this.newAmountInStock = 0;
      this.newColor = '';
      this.newPhotoUrl = '';
    })
    .catch(error => {
      console.log(error.response)
   });
  }
}

</script>

<style scoped>

#product-adder{
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

</style>
