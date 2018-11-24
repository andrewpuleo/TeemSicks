<template>
    <div id="account">
        <h1>View All Orders</h1>
        <p>
            Here you can view orders, and edit a given record by clicking on it in the table.
        </p>
        <OrdersChart/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import OrdersChart from '@/components/ordersChart.vue';
@Component({ components: { OrdersChart } })
export default class Orders extends Vue {

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
