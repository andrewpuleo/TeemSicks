<template>
  <div class="store container" style="background-color: inherit">
    <h1>Welcome to the Store</h1>
    <div class="row">
      <div class="col-sm-2 toolbar">
      Narrow Down Your Search
      <StoreToolbar/>
      </div>
      <div class="col-sm-10 store_container">
        
          <StoreItem/>
        
          <StoreItem/>
        
          <StoreItem/>

          <StoreItem/>

          <StoreItem/>

          <StoreItem/>

          <StoreItem/>
        
       
      
      
      </div>
    </div>
  </div>
  
</template>

<script>
import  StoreItem  from "@/components/storeItem.vue";
import  StoreToolbar  from "@/components/storeToolbar.vue";

export default {
  components: {StoreItem, StoreToolbar},
  
}
</script>


<style scoped>
  .store_container {
    display: flex;
    justify-content: space-between;
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
