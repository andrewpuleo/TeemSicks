<template>
  <div class="item" id="item">
      <div class="row item-pic" v-bind:style="{'background-image': 'url(' + item.photoUrl + ')', 'background-size': '100%', 'background-repeat': 'no-repeat', 'background-position':'center' } ">
         <div v-if="item.onSale" id="on-sale">
            <img align="right" src="../assets/sale.png"></img>
         </div>
          <!--
              <img src="../assets/rockhopper_image.jpeg">
        -->

        <!--img v-bind:for="item.id" v-bind:src="this.item.photoUrl" -->

     </div>

      <div class="row bottom-info">
         <div class="price">
            <h5 v-if="item.onSale" style=" color:white; font-size: 25px; border-bottom: 2px solid white;}" v-bind:for="item.id"><span style="text-decoration: line-through;">${{item.Price}} </span> ${{item.salePrice}}</h5>
            <h5 v-else style="color:white; font-size: 25px; border-bottom: 2px solid white;}" v-bind:for="item.id">${{item.Price}}</h5>
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

</style>



<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { user } from '@/models';
@Component
export default class UserItem extends Vue {
    @Prop({ default: null })
    item!: product;
    URL = this.item.photoUrl;


}

</script>
