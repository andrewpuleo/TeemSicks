<template>
  <div class="item" id="item">
     <router-link v-bind:to="'/item/'+item.id">
      <div class="row item-pic" v-bind:style="{'background-image': 'url(' + item.photoUrl + ')', 'background-size': '100%', 'background-repeat': 'no-repeat', 'background-position':'center' } ">
         <div v-if="item.onSale" id="on-sale">
            <img align="right" src="../assets/sale.png"></img>
         </div>
          <!--
              <img src="../assets/rockhopper_image.jpeg">
        -->

        <!--img v-bind:for="item.id" v-bind:src="this.item.photoUrl" -->

     </div>
   </router-link>

      <div class="row bottom-info">
         <div class="price">
            <h5 v-if="item.onSale" style=" color:white; font-size: 25px; border-bottom: 2px solid white;}" v-bind:for="item.id"><span style="text-decoration: line-through;">${{item.Price}} </span> ${{item.salePrice}}</h5>
            <h5 v-else style="color:white; font-size: 25px; border-bottom: 2px solid white;}" v-bind:for="item.id">${{item.salePrice}}</h5>
         </div>
         <div class="product-name">
            <h3 v-bind:for="item.id">{{item.productName}}</h3>
         </div>
         <!--div class="col">
            <button type="button" class="btn btn-primary" style="font-size: 12px">Add To Cart</button>
         </div -->
      </div>
  </div>
</template>

<style scoped>

#item:hover {opacity: 0.7;}

#on-sale img{
   position: absolute;
    right: 0px;
   height: 80px;
   width: 80px;

}
.item {
   position: relative;
  background-color: white;
  width: 200px;
  height: 200px;
  padding: 0 1rem;
  margin: 1rem 1rem;
  border:1px solid rgba(252, 92, 0, 0.801);
}

.price{
   width: 100%;
   text-align: left;
}

.bottom-info{
   background-color: rgba(252, 92, 0, 0.801);
   position: absolute;
    bottom: 0px;
    width: 100%;
}

.item-pic > img{
    max-width: 75%;
    max-height: 75%;
}
.item-pic{
   position: relative;
    height:100%;
}

button{
   width: 5rem;
  background-color: white;
  color: black;
  border-radius: 4px;
  transition-duration: 0.4s;
  border:2px solid rgba(252, 92, 0, 0.801);
}
button:hover{
cursor: pointer;
color: black;
border: 2px solid rgba(252, 92, 0, 0.801);
background-color: rgba(252, 92, 0, 0.801);
}

@media(max-width: 992px){
    .item{
        width:250px;
        height:250px;
    }
}

@media(max-width: 768px){
    .item{
        width:100%;
        height:250px;
    }
}

@media(min-width: 1200px){
    .item{
        width:270px;
        height:270px;
    }
}

</style>



<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { product } from '@/models';
@Component
export default class StoreItem extends Vue {
    @Prop({ default: null })
    item!: product;
    URL = this.item.photoUrl;


}

</script>
