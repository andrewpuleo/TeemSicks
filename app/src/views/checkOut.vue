<template>
    <div id = "checkOut">
        <div class = "checkOut">
            <div class = "flex-container">
                <div class = "left">
                    <h3 id = "checkOutTitle"> CheckOut </h3>
                    <b-form-group>
                        <b-form-radio-group id="radios2" v-model="data.selected" name="radioSubComponent">
                            <b-form-radio style="margin-right: 100px; color: rgba(252, 92, 0, 0.801); font-size: 110%" value="Delivery"><strong>Delivery </strong></b-form-radio>
                            <b-form-radio  style = "color: rgba(252, 92, 0, 0.801); font-size: 110%" value="Pickup" > <strong> Pickup </strong></b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                        <div v-show="data.selected === 'Delivery'">
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
                                            <input type="text" class="form-control" id="validationCustom01" v-model="data.fullName" placeholder="Full Name" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom02" v-model="data.phoneNumber" placeholder="Phone Number" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom03" v-model="data.addressLine1" placeholder="Address Line 1" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom04" v-model="data.addressLine2" placeholder="Address Line 2" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left: 5px; width: 45%; margin-right:10px">
                                            <input type="text" class="form-control" id="validationCustom05" v-model="data.city" placeholder="City" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px;margin-right:10px; width:30%">
                                            <input type="text" class="form-control" id="validationCustom06" v-model="data.state" placeholder="State/Province" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px; width: 20%">
                                            <input type="number" class="form-control" id="validationCustom07" v-model="data.zip" placeholder="Zip" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom08" v-model="data.country" placeholder="Country/Region" required>
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
                                            <input type="text" class="form-control" id="validationCustom09" v-model="data.owner" placeholder="Owner" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom10" v-model="data.cardNumber" placeholder="Card Number" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left:5px;margin-right:10px; width:20%">
                                            <input type="number" class="form-control" id="validationCustom11" v-model="data.cvv" placeholder="CVV" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-right:10px; margin-top:5px">
                                            <p> Expiration Date </p>
                                        </div>
                                        <div class = "form-col" style = "margin-right:10px; width: 25%">
                                            <input type="month" class="form-control" id="validationCustom12" v-model="data.expirationDate" placeholder="Expiration Date" required>
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
                                <span> <input type="checkbox" value="" v-on:click="copy()" v-model="data.sameAddress" style = "margin-left: 20px; padding: 0"><i style= "color: grey">Same As Shipping Address</i> </span>
                            </p>

                            <div id = "container1" class = "container">
                                <form class = "needs-validation" novaidate style = "padding:10px">
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom13" v-model="data.addressLine1B" placeholder="Address Line 1" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom14" v-model="data.addressLine2B" placeholder="Address Line 2" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row">
                                        <div class = "form-col" style = "margin-left: 5px; width: 45%; margin-right:10px">
                                            <input type="text" class="form-control" id="validationCustom15" v-model="data.cityB" placeholder="City" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px;margin-right:10px; width:30%">
                                            <input type="text" class="form-control" id="validationCustom16" v-model="data.stateB" placeholder="State/Province" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                        <div class = "form-col" style = "margin-left: 5px; width: 20%">
                                            <input type="number" class="form-control" id="validationCustom17" v-model="data.zipB" placeholder="Zip" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1" style = "margin-bottom: 10px">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom18" v-model="data.countryB" placeholder="Country/Region" required>
                                            <div class="valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div v-show="data.selected === 'Pickup'">
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
                                            <input type="text" class="form-control" id="validationCustom19" v-model="data.fullName" placeholder="Full Name" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="text" class="form-control" id="validationCustom20" v-model="data.email" placeholder="EmailAddress" required>
                                            <div class = "valid-feedback">
                                                Looks Good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "form-row-1">
                                        <div class = "form-col">
                                            <input type="number" class="form-control" id="validationCustom21" v-model="data.phoneNumber" placeholder="Phone Number" required>
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
                    TAX ({{ data.vatRate }}%)
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
                    <div v-if="this.data.selected === 'Delivery'">
                        <div style = "display:none"> {{ this.data.statusD = allFilledDelivery()}} </div>
                        <div v-if="this.data.statusD"> 
                            <a>
                                <router-link to="/orderPlaced">
                                    <button class = "confirmB" type="submit" v-on:click="submit()">Confirm!</button>
                                </router-link>
                            </a>
                        </div>
                        <div v-else><button disabled class = "confirmB" type="submit">[Confirm!]</button></div>
                        <div v-if="!this.data.statusD" style = "color:red"><p>You must fillout all the input fields.</p></div>
                    </div>

                    <div v-else-if="this.data.selected === 'Pickup'">
                        <div style = "display:none"> {{ this.data.statusP = allFilledPickUp()}} </div>
                        <div v-if="this.data.statusP"> 
                            <a>
                                <router-link to="/orderPlaced">
                                    <button class = "confirmB" type="submit" v-on:click="submit()">Confirm!</button>
                                </router-link>
                            </a>
                        </div>
                        <div v-else><button disabled class = "confirmB" type="submit">[Confirm!]</button></div>
                        <div v-if="!this.data.statusP" style = "color:red"><p>You must fillout all the input fields.</p></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script >
import Dinero from 'dinero.js';
import { address } from '@/models';
import axios from 'axios';

import { order } from '@/models';


export default {
  name: 'checkOut',

  data() {


    return {
      data: {
        orders: null,
        order: null,
        address: null,
        price: 0,
        product: null,

        count: -1,
        count2: -1,
        arr: [],

        selected:'Delivery',
        email:"",
        fullName:"",
        phoneNumber:"",
        addressLine1:"",
        addressLine2:"",
        city: "",
        state: "",
        zip: "",
        country: "",
            owner:"",
            cardNumber:"",
            cvv:"",
            expirationDate:"",
            addressLine1B:"",
            addressLine2B:"",
            cityB:"",
            stateB:"",
            zipB:"",
            countryB:"",
        sameAddress: false,
        statusD:false,
        statusP: false,
        Tax: 10,
      },
    };
  },
  mounted (){
    axios.get('/api/Orders')
      .then((response) => {
        this.orders = response.data.orders;

      });
  },



  methods: {
    toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) }).setLocale(this.language);
    },
    submit() {
      //Creates an address in the database
     axios.post('/api/address', {
       street1: this.data.addressLine1,
       street2: this.data.addressLine2,
       city: this.data.city,
       zip: this.data.zip,
       country: this.data.country,
     }).then((res) => {
       this.data.address = res.data;
       this.data.addressLine1 = "",
       this.data.addressLine1 = "",
       this.data.city = "",
       this.data.zip = "",
       this.data.country = ""
     }).then((res) => {
       this.createOrder();
     }).catch(error => {
       console.log(error.response)
    });
},

createOrder(){
    axios.post('/api/orders', {
      userId: this.$store.getters.getUID,
      addressId: this.data.address.id,
      status: "In Progress",
    }).then((res) => {
      this.data.order = res.data;
    }).then ( (res) => {
        for (var key in this.$store.getters.getCart){
          axios.get(`/api/products/${key}`).then((response) => {
              this.data.price = response.data.product.price;
              this.data.product = response.data.product;
              this.data.arr.push(this.data.product)
          }).then((res) => {
            this.data.count++,
            axios.post('/api/orderitem', {

              productId: this.data.arr[this.data.count].id,
              orderid: this.data.order.id,
              quantity: this.$store.getters.getCart[this.data.arr[this.data.count].id],
              price: this.data.price,

            }).then((res) => {
              this.data.count2++,
              axios.put(`/api/products/${this.data.arr[this.data.count2].id}`, {...this.data.arr[this.data.count2], amountInStock: (this.data.arr[this.data.count2].amountInStock - this.$store.getters.getCart[this.data.arr[this.data.count2].id])}).then((res) => {
                this.data.product = res.data;
              });
            });


            //Previous HERE

          }).catch(error => {
            console.log(error.response)
          });

        }
    });
  },
  
  allFilledDelivery()
  {
    if(this.data.fullName.length!=0 &&
       this.data.phoneNumber.length!=0 &&
       this.data.addressLine1.length!=0 &&
       this.data.city.length!=0 &&
       this.data.state.length!=0 &&
       this.data.zip.length!=0 &&
       this.data.country.length!=0 &&
       this.data.owner.length!=0 &&
       this.data.cardNumber.length!=0 &&
       this.data.cvv.length!=0 &&
       this.data.expirationDate.length!=0 &&
       this.data.addressLine1B.length!=0 &&
       this.data.addressLine1.length!=0 &&
       this.data.cityB.length!=0 &&
       this.data.stateB.length!=0 &&
       this.data.zipB.length!=0 &&
       this.data.countryB.length!=0)
       {
         return true;
       }
    else{
        return false;
    }
  },

  allFilledPickUp()
  {
    if(this.data.fullName.length!=0 &&
       this.data.email.length!=0 &&
       this.data.phoneNumber.length!=0)
       {
        return true;
       }
       else{
           return false;
       }
  },

  checkStatus(){
      if(selected === 'Delivery'){
        this.allFilledDelivery();
        if(!this.data.statusP)
        {
            alert("Please");
        }
    }
    else if(selected === 'Pickup'){
        this.allFilledPickUp();
        if(!this.data.statusD)
        {
            alert("please");
            console.log(statusD);
        }
    }
  },

    copy(){
    if (!this.data.sameAddress)
    {
      this.data.addressLine1B = this.data.addressLine1;
      this.data.addressLine2B = this.data.addressLine2;
      this.data.cityB = this.data.city;
      this.data.stateB = this.data.state;
      this.data.zipB = this.data.zip;
      this.data.countryB = this.data.country;
    }
    else{
      this.data.addressLine1B = '';
      this.data.addressLine2B = '';
      this.data.cityB = '';
      this.data.stateB = '';
      this.data.zipB = '';
      this.data.countryB = '';
    }
    },
    },
  computed: {
    getTaxAmount() {
      return this.getSubtotal.percentage(this.data.Tax);
    },
    getSubtotal() {
      return this.$store.state.itemDisplay.reduce(
        (a, b) => a.add(this.toPrice(b.price).multiply(b.quantity)),
        Dinero().setLocale(this.language),
      );
    },
    getTotal() {
      return this.getSubtotal.add(this.getTaxAmount);
    },
  },
};
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

button:disabled,
button[disabled]{
   border-color: darkgrey;
  background-color: grey;
  color: darkgrey;
}
button:disabled:hover,
button[disabled]{
   border-color:darkgrey;
  background-color: grey;
  color: darkgrey;
}
</style>
