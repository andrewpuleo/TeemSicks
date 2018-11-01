<template>
    <div class="tools">
        <div class="sort">
            Sort
            <div class="sort_buttons">
                <button type="button" class="btn btn-primary">Low $ -> High $</button>
                <button type="button" class="btn btn-primary">High $ -> Low $</button>
                <button type="button" class="btn btn-primary">Newest</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .tools{
        border-top-width: 1px;
        border-top-color: #ff6600;
    }

</style>



<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class StoreToolbar extends Vue {
}   
    
</script>
