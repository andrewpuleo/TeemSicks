<template>
  <div id="cart">
    <div class="cart">
      <h1 class="title">
        Order
      </h1>
      <div class="table-responsive">
      <table class = "order-table">
        <tr>
          <th id = "item col">item</th>
          <th id = "quantitiy col">quantity</th>
          <th id = "price col">price</th>
        </tr>
      </table>
      </div>
      <ul class="items">
        <li :key="item.id" v-for="item in data.items" class="item">
          <div class="item-preview">
            <img :src="item.thumbnail" :alt="item.title" class="item-thumbnail">
            <div>
              <h2 class="item-title">{{ item.title }}</h2>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </div>
          <div>
            <input type="text" class="item-quantity" v-model="item.quantity">
            <span class="item-price">{{ toPrice(item.price).toFormat() }}</span>
          </div>
        </li>
      </ul>
      <h3 class="cart-line">
        Subtotal
        <span class="cart-price">{{ getSubtotal.toFormat() }}</span>
      </h3>
      <h3 class="cart-line">
        TAX ({{ data.vatRate }}%)
        <span class="cart-price">{{ getTaxAmount.toFormat() }}</span>
      </h3>
    
      <h3 class="cart-line">
        Total
        <span class="cart-price cart-total">{{ getTotal.toFormat() }}</span>
      </h3>

      <a>
        <router-link to="/checkOut">
          <button class = "checkoutB" type="button">Checkout!</button>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import Dinero from "dinero.js";

export default {
  name: "cart",
  data() {
    return {
      data: {
        items: [{
        "title": "Cart Item 1",
        "description": "xyz Road Bike",
        "thumbnail": "https://li2.rightinthebox.com/images/384x384/201611/ddkb1479349722841.jpg",
        "quantity": 1,
        "price": 899.99
      },
      {
        "title": "Cart Item 2",
        "description": "xyz Road Bike 2",
        "thumbnail": "https://li4.rightinthebox.com/images/384x384/201605/uzgz1463321418592.jpg",
        "quantity": 1,
        "price": 999.99
      },],
        Tax: 10
      },
    };
  },
  methods: {
    toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) }).setLocale(
        this.language
      );
    }
  },
  computed: {
    
    getTaxAmount() {
      return this.getSubtotal.percentage(this.data.Tax);
    },
    getSubtotal() {
      return this.data.items.reduce(
        (a, b) => a.add(this.toPrice(b.price).multiply(b.quantity)),
        Dinero().setLocale(this.language)
      );
    },
    getTotal() {
      return this.getSubtotal.add(this.getTaxAmount);
    }
  },
};
</script>

<style>

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  text-transform: uppercase;
  font-size: 110%;
  font-weight: bold;
  color: rgba(252, 92, 0, 0.801);
}
.order-table>tr>:nth-child(3){
  padding: 0px 0px 0px 0px;
}
.order-table>tr>:nth-child(1){
  padding: 0px 175px 0px 25px;
}
.order-table>tr>:nth-child(2){
  padding: 0px 50px 0px 1000px;
}

.order-table>tr{
  border-bottom: 2px solid #ddd;
}
.order-table{
  width: 100%;
}

.language {
  margin: 0 2px;
  font-size: 60%;
  color: rgba(#333a45, 0.6);
  text-decoration: underline;
  cursor: pointer;
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

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 2px solid rgba(51, 58, 69, 0.1);
}
.item-preview {
  display: flex;
  align-items: center;
}
.item-thumbnail {
  max-width: 100px;
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
  margin-left: 20px;
}

.checkoutB{
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 5px 40px;
      background-color: rgba(252, 92, 0, 0.801);
      color: white;
      border-radius: 4px;
      transition-duration: 0.4s;
      border:2px solid rgba(252, 92, 0, 0.801);
      text-align: center;
      float: right;
    }
    .checkoutB:hover{
    cursor: pointer;
    color: black;
    border: 2px solid rgba(252, 92, 0, 0.801);
    background-color: white;
    }


</style>
