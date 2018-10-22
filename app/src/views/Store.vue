<template>
  <div class="store container">
    <h1>Welcome to the Store</h1>
    <div class="row">
      <div class="col-sm-2">
      yeet
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
export default {
  components: {StoreItem},
  
}
</script>


<style scoped>
.store_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
