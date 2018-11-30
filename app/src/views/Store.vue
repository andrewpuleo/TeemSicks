<template>
  <div class="store container" style="background-color: inherit">
     <br>
     <br>
    <div class="row">

      <div class="col-sm-2 toolbar white-box-grey-border">
      <h3 style="font-size: 20px"><b>Narrow Down Your Search</b></h3>


      <div class="tools">
        <div class="sort">
            
            <div class="sort_buttons">
                <button type="button" class="btn btn-primary" v-on:click="LowHigh()">Low $ -> High $</button>
                <button type="button" class="btn btn-primary" v-on:click="HighLow()">High $ -> Low $</button>
                <button type="button" class="btn btn-primary" v-on:click="Sale()">On Sale</button>
                <button type="button" class="btn btn-primary" v-on:click="ViewAll()">View All</button>
                <button type="button" class="btn btn-primary" v-on:click="Newest()">Newest</button>
                <button type="button" class="btn btn-primary" v-on:click="Road()">Road Bikes</button>
                <button type="button" class="btn btn-primary" v-on:click="Mountain()">Mountain Bikes</button>
                <button type="button" class="btn btn-primary" v-on:click="Accessories()">Accessories</button>
            </div>
        </div>
      </div>


      </div>

      <div class="col store_container">

        <StoreItem v-for="item in items" v-bind:key="item.id" v-bind:item="item"></StoreItem>

      </div>
    </div>
  </div>

</template>

<style scoped>

  .tools{
    white-space:nowrap;
  }

  .sort_buttons{
    position: relative;
    width: 100%;
    height: 100%;
    white-space: normal;
  }
  .store_container {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
  }


  .toolbar{
    padding-top: 1rem;
    border-radius: 20px;
    min-width: 160px;
    height: fit-content;
  }

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ToDo from '@/components/ToDo.vue';
import { product } from '@/models';
import  StoreItem  from "@/components/storeItem.vue";

@Component({ components: { StoreItem } })
export default class Store extends Vue {
  items: product[] = [];
  allItems: product[] = [];
  tempItems: product[] = [];
  sortVal1: number = 0;
  sortVal2: number = 0;

  mounted() {

    axios.get('/api/Products')
      .then((response) => {
        this.items = response.data.products;
        this.allItems = response.data.products;
        console.log(this.items);
      });
  }

  Sale(){
    
    this.allItems.forEach(element => {
      if(element.onSale != 0){
        this.tempItems.push(element);
      }
      
    });
    this.items=this.tempItems;
    this.tempItems=[]
    this.items.sort()
  }

  Road(){
    
    this.allItems.forEach(element => {
      if(element.productId == 1){
        this.tempItems.push(element);
      }
      
    });
    this.items=this.tempItems;
    this.tempItems=[]
    this.items.sort()
  }

  Mountain(){
    
    this.allItems.forEach(element => {
      if(element.productId == 2){
        this.tempItems.push(element);
      }
      
    });
    this.items=this.tempItems;
    this.tempItems=[]
    this.items.sort()
  }

  Accessories(){
    
    this.allItems.forEach(element => {
      if(element.productId == 0){
        this.tempItems.push(element);
      }
      
    });
    this.items=this.tempItems;
    this.tempItems=[]
    this.items.sort()
  }


  LowHigh(){
    this.items = this.allItems.sort(this.compareLowHigh);
  }

  HighLow(){
    this.items = this.allItems.sort(this.compareHighLow);
  }

  compareLowHigh(item1,item2){
    this.sortVal1 = item1.Price;
    this.sortVal2 = item2.Price;

    if(item1.onSale){
      this.sortVal1 = item1.salePrice
    }

    if(item2.onSale){
      this.sortVal2 = item2.salePrice
    }

    if (this.sortVal1 < this.sortVal2){
      return -1
    }else if(this.sortVal1 > this.sortVal2){
      return 1;
    }
    return 0;
  }

  compareHighLow(item1,item2){
    this.sortVal1 = item1.Price;
    this.sortVal2 = item2.Price;

    if(item1.onSale){
      this.sortVal1 = item1.salePrice
    }

    if(item2.onSale){
      this.sortVal2 = item2.salePrice
    }

    if (this.sortVal1 < this.sortVal2){
      return 1
    }else if(this.sortVal1 > this.sortVal2){
      return -1;
    }
    return 0;
  }
    
  ViewAll(){
    axios.get('/api/Products')
      .then((response) => {
        this.items = response.data.products;
      });
  }

  Newest(){
    this.items = this.allItems.sort(this.compareNewest);
  }

  compareNewest(item1,item2){
    if (item1.updatedAt < item2.updatedAt){
      return 1
    }else if(item1.updatedAt > item2.updatedAt){
      return -1;
    }
    return 0;
  }

}
</script>
