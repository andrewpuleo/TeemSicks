<template>
   <div>
      <!-- div>Some text to search for {{id}}</div -->
      <br>
      <div class="container-fluid item-full-view">
         <div class ="row">
            <div class="col left-item-data">
               <h3 class="item-page-title" v-bind:for="item.id">{{item.productName}}</h3>
               <p> Reference product id: {{item.id}}</p>
               <div class="image-box" v-bind:style="{'background-image': 'url(' + item.photoUrl + ')', 'background-size': '100%', 'background-repeat': 'no-repeat', 'background-position':'center' } ">
                  <!-- img v-bind:for="item.id" v-bind:src="item.photoUrl"></img -->
               </div>
            </div>
            <div class="col right-item-data">
               <h3> About The Product: </h3>
               <p>{{item.productDescription}}</p>
               <h3> Brand: </h3>
               <p>{{item.Brand}}</p>
               <br>
               <p>Listed Price: ${{item.salePrice}}</p>
               <button v-on:click="showAddedMessage(), AddToCart(), AddToItem()"> Add To Cart </button>
               <div id="addedMessege">Added {{item.productName}} To The Cart!</div>
               <div id="dupItemInCart"> {{this.$store.state.cart[item.id]}}x {{item.productName}} in the Cart! </div>
               <div id="reachedLimit"> We do not have enough in stock! </div>
            </div>
         </div>



      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { product } from '@/models';
import { mapMutations } from 'vuex';

@Component
export default class Item extends Vue {
   @Prop() id!: Number;
   item: product = new product();
   
   mounted() {
      axios.get(`/api/products/${this.id}`)
      .then((response) => {
         this.item = response.data.product;
      });
      console.log("our item", this.item);
   }
   AddToCart() {
         this.$store.commit('addToCart', this.item);
         console.log(this.$store.state.cart[this.item.id]);
         //this.$store.commit('printCart');
   }
   AddToItem() {
      this.$store.commit('addToItem', this.item);
   }

   showAddedMessage() {
      if(!(this.item.id in this.$store.state.cart)){
      var x = document.getElementById("addedMessege");
      }
      else{
         if(this.$store.state.cart[this.item.id] === this.item.amountInStock)
         {
            var x = document.getElementById("reachedLimit");
         }
         else{
            var x = document.getElementById("dupItemInCart");
         }
      }
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }
}

</script>

<style scoped>
.item-full-view{
   padding-left: 3rem;
   padding-right: 3rem;
}

.item-page-title{
   font-size: 50px;
   color: rgba(252, 92, 0, 0.801);
}

.left-item-data{
   margin-left: 0px;
   margin-right: 0px;
   position: relative;
}

.image-box{
   background-color: white;
   min-height: 30rem;
   border:1px solid rgba(252, 92, 0, 0.801);
}

button{
  margin-top: 20px;
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

.image-box img{
   vertical-align:middle;
   text-align:center;
}

.right-item-data{
   padding-top: 8rem;
}

#addedMessege, #dupItemInCart, #reachedLimit {
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


#addedMessege.show, #dupItemInCart.show, #reachedLimit.show {
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
