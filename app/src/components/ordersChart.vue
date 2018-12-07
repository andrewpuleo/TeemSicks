<template>
    <div class="container">
        <OrderInfo
        v-if="viewOrderInfo"
        v-bind:currentOrderId="this.currentOrderId"
        v-bind:currentProducts="this.currentProducts"
        v-on:close="viewOrderInfo = false"/>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">UserID</th>
                <th scope="col">AddressID</th>
                <th scope="col">Details</th>
                <th scope="col">Finish</th>
                <th scope="col">Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" v-bind:key="order.id" v-bind:order="order">
                    <td>{{order.id}}</td>
                    <td>{{order.userId}}</td>
                    <td>{{order.addressId}}</td>
                    <td><button v-on:click="getOrderInfo(), viewOrderInfoModal(order.id)"> More Info </button> </td>
                    <td><button v-on:click="fufillOrder(order)"> Fufill Order </button></td>
                    <td v-if="checkComplete(order.status)"> Done! </td>
                    <td v-else>  </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>


<script lang="ts">
 import { order } from '@/models';
 import { product } from '@/models';
 import axios from 'axios';
 import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { orderItem } from '../models/orderItem';
import OrderInfo from '@/components/orderInfo.vue';

@Component({components: {OrderInfo}})
    export default class OrdersChart extends Vue{
        orders: order[] = [];
        orderItems: orderItem[] = [];
        products: product[] = [];
        orderId: number = null;
        viewOrderInfo = false;
        currentOrderId: number = null;
        currentProducts: product[] = [];
        orderFulls = [];
        order: order;

        mounted(){
            axios.get('/api/orders')
            .then((response) => {
              console.log(response)
                this.orders = response.data.orders;
                console.log("orders" , this.orders);
            });
            axios.get(`/api/orderitem`)
            .then((response) => {
                this.orderItems = response.data.orderitems;
                console.log("order items", this.orderItems);
            });
            console.log("our order", this.orderItems);
            axios.get(`/api/products`)
            .then((response) => {
                this.products = response.data.products;
            });
        };


        fufillOrder(order){
            //axios.put goes here to change status to "complete"
            axios.put(`/api/orders/${order.id}`, {...this.order,  status: "Complete"}).then((res) => {
                this.order = res.data;
            })

        }

        checkComplete(status){
            if(status === "Complete"){
                return true;
            }
            return false;
        }

        getOrderInfo(){
            this.orderFulls = [];
            for(let i = 0; i < this.orders.length; i++){
                console.log(this.orders[i]);
                var fullOrder = {
                    orderId: this.orders[i].id,
                    userId: this.orders[i].userId,
                    addressID: this.orders[i].addressId,
                    products: this.orderItems.filter(orderItem => {
                        return orderItem.orderid === this.orders[i].id
                    }).map(orderItem => this.products.find(product => product.id === orderItem.productId))
                };
                this.orderFulls.push(fullOrder);
            }
        }

        viewOrderInfoModal(id){
            this.currentProducts = [];
            for(let i = 0; i < this.orderFulls.length; i++){
                if(id === this.orderFulls[i].orderId){
                    this.currentProducts = this.orderFulls[i].products;
                    this.currentOrderId = id;
                }
            }
            this.viewOrderInfo  = true
        }

    };

</script>
