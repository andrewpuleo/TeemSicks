<template>
    <div class="item">
        hello
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
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class StoreItem extends Vue {
    
}   
    
</script>
