<template>
    <div id="admin">
        <h1>ADMINISTRATOR ONLY</h1>
        <p>
            This is a secure area
        </p>
        <ProductAdder></ProductAdder>
        <ProductDeleter></ProductDeleter>
        <ProductUpdater></ProductUpdater>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductAdder from '@/components/productAdder.vue';
import ProductDeleter from '@/components/productDeleter.vue';
import ProductUpdater from '@/components/productUpdater.vue';
@Component({ components: { ProductAdder, ProductDeleter, ProductUpdater} })
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
