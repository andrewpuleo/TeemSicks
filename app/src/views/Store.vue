<template>
  <div class="store container" style="background-color: inherit">
    <div class="row">
      <div class="col-sm-2 toolbar">
      Narrow Down Your Search
      <StoreToolbar/>
      </div>

      <div class="col store_container">

        <StoreItem v-for="item in items" v-bind:key="item.id" v-bind:item="item"></StoreItem>

      </div>
    </div>
  </div>

</template>

<style scoped>
  .store_container {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
  }

  .toolbar{
    background-color: inherit;
    border-color: #ff6600;
    border-width: 1px;
    border-radius: 20px;
    border-style: solid;
    max-height: 285px;
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ToDo from '@/components/ToDo.vue';
import { product } from '@/models';
import  StoreItem  from "@/components/storeItem.vue";
import  StoreToolbar  from "@/components/storeToolbar.vue";

@Component({ components: { StoreItem, StoreToolbar, } })
export default class Store extends Vue {
  items: product[] = [];
  mounted() {

    axios.get('/api/Products')
      .then((response) => {
        this.items = response.data.products;
        console.log(this.items);
      });
  }
}
</script>
