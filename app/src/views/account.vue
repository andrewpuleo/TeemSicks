<template>
    <div id="account">
        <h1>Secure Area</h1>
        <p>
            This is a new secure area
        </p>
        <ProductAdder></ProductAdder>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductAdder from '@/components/productAdder.vue';

@Component({ components: { ProductAdder, } })
export default class Account extends Vue {

}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
