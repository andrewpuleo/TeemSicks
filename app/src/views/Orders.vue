<template>
    <div id="account">
        <h1>View All Orders</h1>
        <p>
            Here you can view orders, more details and fufill an order.
        </p>
        <p> To confirm an order is fufilled, it will update when you go onto the page next time. </p>
        <OrdersChart></OrdersChart>
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
