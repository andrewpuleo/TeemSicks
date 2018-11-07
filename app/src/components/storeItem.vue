

<template>
  <div class="item" v-bind:style="{ 'background-image': 'url(' + item.photoUrl + ')' }">
      <div class="item-name">
        <h3 v-bind:for="item.id">{{item.productName}}</h3>
      </div>
      <div class="item-pic">
          <!--
              <img src="../assets/rockhopper_image.jpeg">
        -->

        <img v-bind:for="item.id" v-bind:src="this.item.photoUrl">

      </div>
      <div>
          <h5  v-bind:for="item.id">${{item.salePrice}}</h5>
      </div>
      <button type="button" class="btn btn-primary">Add To Cart</button>
  </div>
</template>

<style scoped>
.item {
  background-color: grey;
  border-radius: 10%;
  width: 200px;
  height: 200px;
  padding: 0 1rem;
  margin: 1rem 1rem;
}

.item-pic > img{
    max-width: 75%;
    max-height: 75%;
}
.item-pic{
    height:40%;
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
