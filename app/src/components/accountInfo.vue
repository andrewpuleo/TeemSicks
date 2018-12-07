<template>
    <div class="user" id="user">
    <ChangeFirstName
    v-if="firstNameChanged"
    v-bind:oldFirstName="visitor.firstName"
    @onSuccessFirstName="onSuccessFirstName"
    v-on:close="firstNameChanged = false"/>
    <ChangeLastName
    v-if="lastNameChanged"
    v-bind:oldLastName="visitor.lastName"
    @onSuccessLastName="onSuccessLastName"
    v-on:close="lastNameChanged = false"/>
    <ChangeUserName
    v-if="userNameChanged"
    v-bind:oldUserName="visitor.username"
    @onSuccessUserName="onSuccessUserName"
    v-on:close="userNameChanged = false"/>
    <ChangePassword
    v-if="passwordChanged"
    v-bind:oldPassword="visitor.password"
    @onSuccessPassword="onSuccessPassword"
    v-on:close="passwordChanged = false"/>
    <ChangePhoneNumber
    v-if="phoneNumberChanged"
    v-bind:oldPhoneNumber="visitor.phone"
    @onSuccessPhone="onSuccessPhone"
    v-on:close="phoneNumberChanged = false"/>
    <ChangeEmail
    v-if="emailChanged"
    v-bind:oldEmail="visitor.email"
    @onSuccessEmail="onSuccessEmail"
    v-on:close="emailChanged = false"/>
      <div class="accInfo">
        <div class="row">

            <div class="col account-info-col">
                <div class="accText">
                    <h1 class="accInfoTitle"> <br><br>Account Info<br><br></h1>
                    <table class="table is-fullwidth">
                        <div class="accInfo">
                        <tr>
                            <td>
                                First Name: {{visitor.firstName}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeFirstName()"> Edit First Name </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Last Name: {{visitor.lastName}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td> 
                                <button class="btn-account-info" v-on:click="changeLastName()"> Edit Last Name </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Username: {{visitor.username}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeUserName()" > Edit Username </button><br>
                            </td>
                        <tr>
                        <tr>
                            <td>
                                Password: {{passwordencry}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changePassword()"> Edit Password </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Phone Number: {{visitor.phone}}&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changePhoneNumber()"> Edit Phone Number </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email: {{visitor.email}} &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeEmail()"> Edit Email </button><br>
                            </td>
                        </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <OrderInfo
        v-if="viewOrderInfo"
        v-bind:currentOrderId="this.currentOrderId"
        v-bind:currentProducts="this.currentProducts"
        v-on:close="viewOrderInfo = false"/>
        <h1 class="accInfoTitle"> <br><br>Your Orders<br><br></h1>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">UserID</th>
                <th scope="col">AddressID</th>
                <th scope="col">Details</th>
                <th scope="col">Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" v-bind:key="order.id" v-bind:order="order" v-if="same(order.userId, visitor.id)">
                    <td>{{order.id}}</td>
                    <td>{{order.userId}}</td>
                    <td>{{order.addressId}}</td>
                    <td><button v-on:click="getOrderInfo(), viewOrderInfoModal(order.id)"> More Info </button> </td>
                    <td v-if="checkComplete(order.status)"> Done! </td>
                    <td v-else> In progress </td>

                </tr>

            </tbody>
        </table>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@import 'bulma';

    .accText{
        text-align: left;
    }
    .accInfo{
        font-size: 15pt;
        color: rgba(68, 67, 62, 0.877);
    }
    .accInfoTitle{
        color:rgba(252, 92, 0, 0.801);
        font-size: 25pt;
        text-align: center;
    }


    .account-info-col{
        margin: auto;
        max-width: 700px;
    }
    .btn-account-info{
      background-color: rgba(252, 92, 0, 0.801);
      color: white;
      font-size: 15px;
      width: 150px;
      border-radius: 4px;
      transition-duration: 0.4s;
      border:2px solid rgba(252, 92, 0, 0.801);
    }
</style>


<script lang="ts">
 import { order } from '@/models';
 import { product } from '@/models';
import { orderItem } from '../models/orderItem';
import OrderInfo from '@/components/orderInfo.vue';
import { User } from '@/models';
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import ChangeFirstName from '@/components/changeFirstName.vue';
import ChangeLastName from '@/components/changeLastName.vue';
import ChangeUserName from '@/components/changeUserName.vue';
import ChangePassword from '@/components/changePassword.vue';
import ChangePhoneNumber from '@/components/changePhoneNumber.vue';
import ChangeEmail from '@/components/changeEmail.vue';
import axios from 'axios';

@Component({ components: {ChangeLastName, ChangeFirstName, ChangeUserName, ChangePassword, ChangePhoneNumber, ChangeEmail, OrderInfo}})
export default class AccountInfo extends Vue{
    orders: order[] = [];
        orderItems: orderItem[] = [];
        products: product[] = [];
        orderId: number = null;
        viewOrderInfo = false;
        currentOrderId: number = null;
        currentProducts: product[] = [];
        orderFulls = [];
        order: order;
    
    @Prop()
    visitor!: User;

    passwordencry = new String()
    firstNameChanged = false
    lastNameChanged = false
    userNameChanged = false
    passwordChanged = false
    phoneNumberChanged = false
    emailChanged = false
    
    @Watch('visitor.password')
    onPropertyChanged(value: string, oldvalue: string){
        if(this.visitor.password){
            this.passwordencry = new String();
            for(let i = 0; i < this.visitor.password.length; i+=1){
            this.passwordencry = this.passwordencry + "*"
            }
        }
        console.log(this.passwordencry);
    }
    
    same(id1, id2){
        console.log(id1);
        console.log(id2);
        if(id1 === id2){
            return true;
        }
        return false;
    }

    onSuccessFirstName(data){
        this.visitor.firstName = data;
        console.log(this.visitor.firstName);
    } 

    onSuccessLastName(data){
        this.visitor.lastName = data;
        console.log(this.visitor.lastName);
    } 

    onSuccessUserName(data){
        this.visitor.username = data;
        console.log(this.visitor.username);
    } 

    onSuccessPassword(data){
        this.visitor.password = data;
        this.passwordencry = new String();
        console.log(this.visitor.password.length)
        for(let i = 0; i < this.visitor.password.length; i+=1){
            this.passwordencry = this.passwordencry + "*"
        }
        console.log(this.visitor.password);
    } 
    onSuccessPhone(data){
        this.visitor.phone = data;
        console.log(this.visitor.phone);
    } 
    onSuccessEmail(data){
        this.visitor.email = data;
        console.log(this.visitor.email);
    } 

    changeFirstName(){
        this.firstNameChanged = true;
    }

    changeLastName(){
        this.lastNameChanged = true;
    }

    changeUserName(){
        this.userNameChanged = true;
    }

    changePassword(){
        this.passwordChanged = true;
    }

    changePhoneNumber(){
        this.phoneNumberChanged = true;
    }

    changeEmail(){
        this.emailChanged = true;
    }

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