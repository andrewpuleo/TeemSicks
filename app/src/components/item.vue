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

</style>
