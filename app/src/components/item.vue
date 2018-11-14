<template>
   <div>
      <!-- div>Some text to search for {{id}}</div -->
      <br>
      <div class="container">
         <div class ="row">
            <div class="col-lg left-item-data">
               <h3 class="item-page-title" v-bind:for="item.id">{{item.productName}}</h3>
               <p> product id </p>
               <div class="image-box">
                  <img v-bind:for="item.id" v-bind:src="item.photoUrl"></img>
               </div>
            </div>
            <div class="col-sm">
               <p> test </p>
               <button> Add To Cart </button>
            </div>
         </div>



      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { product } from '@/models';

@Component
export default class Item extends Vue {
   @Prop() id!: Number;
   item: product = new product();

   mounted() {
      axios.get(`/api/products/${this.id}`)
      .then((response) => {
         this.item = response.data.product;
      });
   }

}
</script>

<style scoped>
.item-page-title{
   font-size: 50px;
}

.left-item-data{
   margin-left: 0px;
   margin.right: 0px;
   position: relative;
}

.image-box{
   background-color: white;
   min-height: 30rem;
   border:1px solid rgba(252, 92, 0, 0.801);
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

</style>
