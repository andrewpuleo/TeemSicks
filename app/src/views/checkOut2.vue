<template>
    <div id = "checkOut">
        <div class = "checkOut">
            <div class = "flex-container">
                <div class = "left">
                    <h3 id = "checkOutTitle"> CheckOut </h3>
                    <b-form-group>
                        <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                            <b-form-radio style="margin-right: 100px; color: rgba(252, 92, 0, 0.801); font-size: 110%" value="Delivery"><strong>Delivery </strong></b-form-radio>
                            <b-form-radio  style = "color: rgba(252, 92, 0, 0.801); font-size: 110%" value="Pickup" > <strong> Pickup </strong></b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                        <div v-show="selected === 'Delivery'">
                            <template slot="title">
                                <i class = "Tab">Delivery</i>
                            </template>
                            <p class = "warning"> *Delivery is not available for bikes </p>
                            <p style = "color: rgba(252, 92, 0, 0.801); text-align: left; font-size: 110%; margin-bottom: 0"> 
                                Please Enter Your Shipping Address 
                            </p>
                            <div id = "container1" class = "container" style = "margin-bottom: 20px">
                                <form class = "needs-validation" novalidate style = "padding: 10px">
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom01" v-model="fullName" placeholder="Full Name" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom02" v-model="phoneNumber" placeholder="Phone Number" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom03" v-model="addressLine1" placeholder="Address Line 1" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom04" v-model="addressLine2" placeholder="Address Line 2" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left: 5px; width: 45%; margin-right:10px">
                                            <input type="text" class="form-control" id="validationCustom05" v-model="city" placeholder="City" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px;margin-right:10px; width:30%">
                                            <input type="text" class="form-control" id="validationCustom06" v-model="state" placeholder="State/Province" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px; width: 20%">
                                            <input type="number" class="form-control" id="validationCustom07" v-model="zip" placeholder="Zip" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom08" v-model="country" placeholder="Country/Region" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p style = "color: rgba(252, 92, 0, 0.801); text-align: left; font-size: 110%; margin-bottom: 0"> 
                                Please Enter Your Credit/Debit Card Information
                            </p>
                            <div id = "container1" class = "container" style = "margin-bottom: 20px">
                                <form class = "needs-validation" novalidate style = "padding:10px;">
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom09" v-model="owner" placeholder="Owner" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom10" v-model="cardNumber" placeholder="Card Number" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left:5px;margin-right:10px; width:20%">
                                            <input type="number" class="form-control" id="validationCustom11" v-model="cvv" placeholder="CVV" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-right:10px; margin-top:5px">
                                            <p> Expiration Date </p>
                                        </div>
                                        <div class = "form-col" style = "margin-right:10px; width: 25%">
                                            <input type="month" class="form-control" id="validationCustom12" v-model="expirationDate" placeholder="Expiration Date" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class="form-group" id="credit_cards">
                                            <img src="../assets/visa.jpg" id="visa">
                                            <img src="../assets/mastercard.jpg" id="mastercard">
                                            <img src="../assets/amex.jpg" id="amex">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p style = "color: rgba(252, 92, 0, 0.801); text-align: left; font-size: 110%; margin-bottom: 0"> 
                                Please Enter Your Billing Address
                                <span> <input type="checkbox" value="" v-on:click="copy()" v-model="sameAddress" style = "margin-left: 20px; padding: 0"><i style= "color: grey">Same As Shipping Address</i> </span>
                            </p>
                            
                            <div id = "container1" class = "container">
                                <form class = "needs-validation" novaidate style = "padding:10px">
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom13" v-model="addressLine1B" placeholder="Address Line 1" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom14" v-model="addressLine2B" placeholder="Address Line 2" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left: 5px; width: 45%; margin-right:10px">
                                            <input type="text" class="form-control" id="validationCustom15" v-model="cityB" placeholder="City" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px;margin-right:10px; width:30%">
                                            <input type="text" class="form-control" id="validationCustom16" v-model="stateB" placeholder="State/Province" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px; width: 20%">
                                            <input type="number" class="form-control" id="validationCustom17" v-model="zipB" placeholder="Zip" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom18" v-model="countryB" placeholder="Country/Region" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div v-show="selected === 'Pickup'">
                            <template slot="title">
                                <i class = "Tab">Pickup</i>
                            </template>
                            <div id = "container2" class = "container" >
                                <p style = "color: rgba(252, 92, 0, 0.801); text-align: left;margin-bottom:0; margin-left: 10px; margin-top: 40px"> 
                                Please Enter Your Email Address And/Or Phone Number So We Can Notify You When Your Order Is Ready
                            </p>
                            <form class = "needs-validation" novaidate style = "padding:10px; border: 2px solid rgba(199, 196, 194, 0.685); border-radius: 5px">
                                    <div class = "form-row-1" style = "margin-top:0">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom19" v-model="fullName" placeholder="Full Name" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom20" v-model="email" placeholder="EmailAddress" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom21" v-model="phoneNumber" placeholder="Phone Number" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                            </form>
                            <p style = "color: rgba(252, 92, 0, 0.801); margin-bottom: 0; margin-left: 10px; margin-top: 10px"> 
                                <i style = "color:red">1400 Ramada Dr, Paso Robles 93446</i> Is The Address You Want To Jot Down!! <br>
                                
                            </p>
                            </div>
                        </div>
                </div>
                <div class = "right">
                    <h1 id = "checkOutTitle"> Your Cart </h1>
                    <ul class="items" style = "padding-left:20px; padding-right:20px">
                        <li :key="Item.id" v-for="Item in this.$store.state.itemDisplay.slice(1)" class="checkoutItem">
                        <div class="item-preview" style = "text-align: left" >
                            <img :src="Item.thumbnail" :alt="Item.title" class="item-thumbnail">
                            <div>
                                <h2 class="item-title">{{ Item.title }}</h2>
                                <p class="Total-quantity" style = "margin-bottom: 0rem">
                                    {{ toPrice(Item.price).toFormat() }}</p>
                                <p>Qty: <i>{{Item.quantity}} </i> </p>
                            </div>
                        </div>
                        <div>
                            <span class="item-price">
                                {{ toPrice(Item.price).multiply(Item.quantity).toFormat() }}</span>
                        </div>
                        </li>
                    </ul>
                    <h3 id = "c-cart-line" class="cart-line">
                    Subtotal
                    <span class="cart-price">{{ getSubtotal.toFormat() }}</span>
                    </h3>
                    <h3 id = "c-cart-line" class="cart-line">
                    TAX ({{ vatRate }}%)
                    <span class="cart-price">{{ getTaxAmount.toFormat() }}</span>
                    </h3>
                    <h3 id = "c-cart-line" class="cart-line">
                    Total
                    <span class="cart-price cart-total">{{ getTotal.toFormat() }}</span>
                    </h3>
                </div>
            </div>
            <form>
                <div id = "itemContainer4">
            <a>
                <router-link to="/confirmation">
                    <button class = "confirmB" type="submit">Confirm!</button>
                </router-link>
            </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Dinero from 'dinero.js';
import { address } from '@/models';
import axios from 'axios';

import { order } from '@/models';



import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({ components: {  } })
export default class checkOut extends Vue {
  orders: order[] = [];
      

    selected:string = 'Delivery';
    email: string ="";
    fullName:string = "";
    phoneNumber:string = "";
    addressLine1:string = "";
    addressLine2:string = "";
    city: string = "";
    state: string = "";
    zip:  string = "";
    country: string = "";
    owner:string = "";
    cardNumber: number = 0;
    cvv: number = 0;
    expirationDate:string = "";
    addressLine1B:string = "";
    addressLine2B:string = "";
    cityB:string = "";
    stateB:string = "";
    zipB: string = "";
    countryB:string = "";
    sameAddress: false;
    Tax: 10;

  mounted() {

    axios.get('/api/Orders')
      .then((response) => {
        this.orders = response.data.orders;
        console.log(this.orders);
      });
  }


  submit() {

    //axios.post method here
  };


   
    copy(){
    if (!this.sameAddress)
    {
      this.addressLine1B = this.addressLine1;
      this.addressLine2B = this.addressLine2;
      this.cityB = this.city;
      this.stateB = this.state;
      this.zipB = this.zip;
      this.countryB = this.country;
    }
    else{
      this.addressLine1B = '';
      this.addressLine2B = '';
      this.cityB = '';
      this.stateB = '';
      this.zipB = '';
      this.countryB = '';
    }
    };
 toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) }).setLocale(this.language);
    };
    getTaxAmount() {
      return this.getSubtotal.percentage(this.Tax);
    };
    getSubtotal() {
      return this.$store.state.itemDisplay.reduce(
        (a, b) => a.add(this.toPrice(b.price).multiply(b.quantity)),
        Dinero().setLocale(this.language),
      );
    };
    getTotal() {
      return this.getSubtotal.add(this.getTaxAmount);
    };

}




</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
}

.right {
  flex: 40%;
  height: 100%;
}

#container1{
    border: 2px solid rgba(199, 196, 194, 0.685);
    border-radius: 5px;
}

.left {
  flex: 60%;
  height: auto;
  background-color:inherit;
  height: 100%;
}



.form-row-1{
    width:100%;
    margin-top:10px;
}

input[type=text]:focus, input[type=number]:focus,input[type=month]:focus,
    input[type = password]:focus, input[type = email]:focus {
  outline:none !important;
  border-radius: 4px;
  border:2px solid rgba(252, 92, 0, 0.801);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-row{
    margin-top:10px;
}

#visa, #mastercard, #amex{
    margin-top: 5px;
    height:30px;
}

#checkOutTitle {
  padding-top: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  text-transform: uppercase;
  font-size: 110%;
  font-weight: bold;
  color: rgba(252, 92, 0, 0.801);
}
.warning {
    display: flex;
  text-align: left;
  color: red;
}

.confirmB {
  margin-right: 50px;
  margin-top: 10px;
  padding: 5px 40px;
  background-color: rgba(252, 92, 0, 0.801);
  color: white;
  border-radius: 4px;
  transition-duration: 0.4s;
  border: 2px solid rgba(252, 92, 0, 0.801);
  text-align: center;
}
.confirmB:hover {
  cursor: pointer;
  color: black;
  border: 2px solid rgba(252, 92, 0, 0.801);
  background-color: white;
}


#c-cart-line {
  padding-right: 20px;
  padding-left: 20px;
}

.warning {
  text-align: left;
  margin-left: 15px;
  font-weight: bold;
  font-style: italic;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color:rgba(252, 92, 0, 0.801);
}

.checkoutItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  border-bottom: 2px solid rgba(51, 58, 69, 0.1);
}

.items {
  margin: 0;
  padding: 0;
  list-style: none;
}
.cart {
  background: #fff;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  color: #333a45;
  border-radius: 3px;
  padding: 30px;
  margin-right: 20px;
  margin-left: 20px;
}
.cart-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  font-size: inherit;
  font-weight: normal;
  color: rgba(51, 58, 69, 0.8);
}
.cart-price {
  color: #333a45;
}
.cart-total {
  font-size: 130%;
}

.item-preview {
  display: flex;
  align-items: center;
}
.item-thumbnail {
  width: 100px;
  max-height: 75px;
  padding: 0px;
  margin-right: 20px;
  border-radius: 10px;
}
.item-title {
  margin: 0 0 10px 0;
  font-size: inherit;
}
.item-description {
  margin: 0;
  color: rgba(51, 58, 69, 0.6);
}
.item-quantity {
  max-width: 100px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 12px;
  font-size: inherit;
  color: black;
  border-radius: 4px;
  border:2px solid rgb(190, 190, 190);
  text-align: center;
}

.item-quantity:focus{
  outline:none;
  border:2px solid rgba(252, 92, 0, 0.801);
  border-radius: 4px;
}
.item-price {
  margin-top: 25px;
}

#itemContainer4{
  flex:2%;
  text-align: right;
  margin-left: 10px;
}
</style>
