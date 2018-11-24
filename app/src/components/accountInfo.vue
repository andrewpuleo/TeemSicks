<template>
  <div class="user" id="user">
      <div class="accInfo">
        <div class="row">
            <!--h v-bind:for="visitor.userName"> User Name: ${{visitor.userName}} </h-->
            <h v-bind:for="visitor.id">${{visitor.userName}} </h>
        </div>
      </div>
  </div>
</template>

<!--template>
  <div class="item" id="item">
     <router-link v-bind:to="'/item/'+item.id">
      <div class="row item-pic" v-bind:style="{'background-image': 'url(' + item.photoUrl + ')', 'background-size': '100%', 'background-repeat': 'no-repeat', 'background-position':'center' } ">
          <!--
              <img src="../assets/rockhopper_image.jpeg">
        -->

        <!--img v-bind:for="item.id" v-bind:src="this.item.photoUrl" -->

     <!--/div>
   </router-link>

      <div class="row bottom-info">
         <div class="price">
            <h5 style="color:white; font-size: 25px; border-bottom: 2px solid white;}" v-bind:for="item.id">${{item.salePrice}}</h5>
         </div>
         <div class="product-name">
            <h3 v-bind:for="item.id">{{item.productName}}</h3>
         </div>
         <!--div class="col">
            <button type="button" class="btn btn-primary" style="font-size: 12px">Add To Cart</button>
         </div -->
      <!--/div>
  </div>
</template>

<style scoped>



</style-->


<script lang="ts">

import { Component, Vue, Prop} from 'vue-property-decorator';
import axios from 'axios';
import { User } from '../models/user';
@Component
export default class AccountInfo extends Vue {
    @Prop({ default: null })
    visitor: User = new User();

    mounted(){
        axios.get('/api/users/${this.$store.getters.getUID}')
        .then((response) => {
            this.visitor = response.data.user;
        });
        console.log("our user", this.visitor);
    }
}

</script>
