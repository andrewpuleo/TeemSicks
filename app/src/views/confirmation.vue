<template>
    <div id = "checkOut">
        <div class = "checkOut">
            <div class = "flex-container">
                <div class = "left">
                  <div class = "flex-container">
                    <p id = "checkOutTitle" style="display:block; margin-bottom: 30px">Please Make Sure This Information is Correct Before Placing Your Order </p>
                    <div class = "smallLeft">  
                      <p id = "infoColL" > <strong> Name </strong></p>
                      <p id = "infoColL" > <strong> Phone </strong></p>
                      <p id = "infoColL" > <strong> Email </strong></p>
                      <p id = "infoColL" > <strong> Card </strong></p>
                      <p id = "infoColL" > <strong> Shipping Address </strong></p>
                      <br>
                      <p id = "infoColL" > <strong> Billing Address </strong></p>
                      <br>
                    </div>
                    <div class = "smallLeft">
                      <p id = "infoColR"> {{data.fullName}} </p>
                      <p id = "infoColR"> {{data.phoneNumber}} </p>
                      <p id = "infoColR"> {{data.email}} </p>
                      <p id = "infoColR"> {{safeCard()}} </p>
                      <p id = "infoColR"> {{data.addressLine1 + " " + data.addressLine2}} </p>
                      <p id = "infoColR"> {{data.city + " " + data.state + " " + data.zip + " " + data.country}} </p> 
                      <p id = "infoColR"> {{data.addressLine1B + " " + data.addressLine2B}} </p>
                      <p id = "infoColR"> {{data.cityB + " " + data.stateB + " " + data.zipB + " " + data.countryB}} </p> 
                    </div>
                  </div>
                   <a>
                    <router-link to="/orderPlaced">
                      <button class = "orderPlaced" type="submit">Place Your Order!</button>
                    </router-link>
                  </a>
                </div>
                    
                <div class = "right">
                    <h1 id = "checkOutTitle"> Your Cart </h1>
                    <ul class="items" style = "padding-left:20px; padding-right:20px">
                        <li :key="item.id" v-for="item in data.items" class="item">
                        <div class="item-preview" style = "text-align: left" >
                            <img :src="item.thumbnail" :alt="item.title" class="item-thumbnail">
                            <div>
                                <h2 class="item-title">{{ item.title }}</h2>
                                <p class="item-description">{{ item.description }}</p>
                                <p class="Total-quantity" style = "margin-bottom: 0rem">
                                    {{ toPrice(item.price).toFormat() }}</p>
                                <p>Qty: <i>{{item.quantity}} </i> </p>
                            </div>
                        </div>
                        <div>
                            <span class="item-price">
                                {{ toPrice(item.price).multiply(item.quantity).toFormat() }}</span>
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
        </div>
    </div>
</template>

<script>
import Dinero from 'dinero.js';

export default {
  name: 'checkOut',
  data() {
    return {
      data: {
        selected:'Delivery',
        email:"xyz@calpoly.edu",
        fullName:"Xyz Xyz",
        phoneNumber:"(123)-123-4567",
        addressLine1:"1 Grand Ave",
        addressLine2:"",
        city: "San Luis Obispo",
        state: "CA",
        zip: "93405",
        country: "United States",
            owner:"Xyz",
            cardNumber:"1234123412341234",
            cvv:"123",
            expirationDate:"11/18",
            addressLine1B:"1 Grand Ave",
            addressLine2B:"",
            cityB:"San Luis Obispo",
            stateB:"CA",
            zipB:"93405",
            countryB:"United States",
        sameAddress: true,
        items: [
          {
            title: 'xyz Road Bike',
            description: 'A very nice bike',
            thumbnail:
              'https://li2.rightinthebox.com/images/384x384/201611/ddkb1479349722841.jpg',
            quantity: 2,
            price: 899.99,
          },
          {
            title: 'xyz Road Bike 2',
            description: 'Another very nice bike',
            thumbnail:
              'https://li4.rightinthebox.com/images/384x384/201605/uzgz1463321418592.jpg',
            quantity: 1,
            price: 999.99,
          },
        ],
        Tax: 10,
      },
    };
  },
  methods: {
    toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) }).setLocale(this.language);
    },
    safeCard(){
      var str = this.data.cardNumber;
      var safeStr = str.replace(str.slice(0, 12), "************");
      return safeStr;
    },
    },
  computed: {
    getTaxAmount() {
      return this.getSubtotal.percentage(this.data.Tax);
    },
    getSubtotal() {
      return this.data.items.reduce(
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

.orderPlaced{
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 5px 80px;
  background-color: rgba(252, 92, 0, 0.801);
  color: white;
  border-radius: 4px;
  transition-duration: 0.4s;
  border: 2px solid rgba(252, 92, 0, 0.801);
  text-align: center;
}

.orderPlaced:hover {
  cursor: pointer;
  color: black;
  border: 2px solid rgba(252, 92, 0, 0.801);
  background-color: white;
}

#infoColL{
  text-align: right;
  padding:0;
  margin: 0;
  margin-right: 10px;
}

#infoColR{
  text-align: left;
  padding:0;
  margin: 0;
  margin-left: 10px;
}

.smallLeft{
    flex: 50%;
    background-color: inherit;
    height:100%;
}

</style>