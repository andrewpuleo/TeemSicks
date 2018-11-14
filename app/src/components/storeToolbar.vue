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
        white-space:nowrap;
    }

    .sort_buttons{
      position: relative;
      width: 100%;
      height: 100%;
      white-space: normal;
   }

</style>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class StoreToolbar extends Vue {
}

</script>
