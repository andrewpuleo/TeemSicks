<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">UserID</th>
                <th scope="col">AddressID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" v-bind:key="order.id" v-bind:order="order">

                    <td>{{order.id}}</td>
                    <td>{{order.userId}}</td>
                    <td>{{order.addressId}}</td>

                </tr>

            </tbody>
        </table>
    </div>
</template>



<script lang="ts">
 import { order } from '@/models';
 import { product } from '@/models';
 import axios from 'axios';
 import { Component, Prop, Vue } from 'vue-property-decorator';
 @Component
    export default class OrdersChart extends Vue{
        orders: order[] = [];

        mounted(){
            axios.get('/api/Orders')
            .then((response) => {
              console.log(response)
                this.orders = response.data.orders;
                console.log(this.orders);
            });

        };
    };
</script>
