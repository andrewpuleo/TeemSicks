<template>
    <div id="admin">
        <h1>ADMINISTRATOR ONLY</h1>
        <p>
            This is a secure area
        </p>
        <ProductAdder></ProductAdder>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductAdder from '@/components/productAdder.vue';
@Component({ components: { ProductAdder, } })
export default class Admin extends Vue {
}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 10px;
    }
</style>
