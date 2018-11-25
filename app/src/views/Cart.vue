<template>
  <div id="cart">
    <div class="cart">
      <h1 class="title">
        Order
      </h1>
      <div class = "flex-container1" style="border-bottom: 2px solid #ddd; font-weight: bold">
          <div id = "itemContainer1" style= "text-align: left; margin-left:25px">Item</div>
          <div id = "itemContainer2" style = "margin-right:50px">Quantity</div>
          <div id = "itemContainer3" style = "margin-right:15px">Price</div>
      </div>
      <ul class="items">
        <li :key="Item.id" v-for="Item in this.$store.state.itemDisplay.slice(1)" class="item" style="display:flex; flex-wrap: wrap">
        <div class = "flex-container1" style="flex-wrap:wrap">
          <div class="item-preview" id = "itemContainer1">
             <router-link v-bind:to="'/item/'+Item.id">
            <img :src="Item.thumbnail" :alt="Item.title" class="item-thumbnail">
            </router-link>
            <div>
              <h2 class="item-title">{{ Item.title }}</h2>
            </div>
          </div>
          <div id = "itemContainer2">
            <NumberInputSpinner class = "spinner" :min="1" :max="Item.amountInStock" :integerOnly="true" v-model="Item.quantity">
              {{UpdateCartQuantity(Item)}}
            </NumberInputSpinner>
          </div>
          <div id = "itemContainer3">
            <p class="item-price">{{ toPrice(Item.price).toFormat() }}</p>
          </div>
          <div id = "itemContainer4">
            <button id="deleteButton" v-on:click="DeleteItem(Item), printTheCart()"> delete </button>
          </div>
        </div>
        </li>
      </ul>
      <h3 class="cart-line">
        Subtotal
        <span class="cart-price">{{ getSubtotal.toFormat() }}</span>
      </h3>
      <h3 class="cart-line">
        TAX ({{ data.Tax}}%)
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
import NumberInputSpinner from 'vue-number-input-spinner';

export default {
  name: "cart",
  components: {
    NumberInputSpinner,
  },
  data() {
    return {
      data: {
        Tax: 10,
      },
    };
  },
  methods: {
    toPrice(amount, factor = Math.pow(10, 2)) {
      return Dinero({ amount: Math.round(amount * factor) }).setLocale(
        this.language
      );
    },
    DeleteItem(item){
      this.$store.commit('deleteItem', item)
    },
    printTheCart(){
      this.$store.commit('printCart')
    },
    UpdateCartQuantity(item){
      this.$store.commit('updateCartQuantity', item)
    },
  },
  computed: {
    
    getTaxAmount() {
      return this.getSubtotal.percentage(this.data.Tax);
    },
    getSubtotal() {
      return this.$store.state.itemDisplay.reduce(
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
  width: 100%;
  border-bottom: 2px solid rgba(51, 58, 69, 0.1);
}

#itemContainer1 {
  flex: 70%;
}

#itemContainer2 {
  flex: 20%;
  text-align: right;
}

#itemContainer3{
  flex:8%;
  text-align: right;
}

#itemContainer4{
  flex:2%;
  text-align: right;
  margin-left: 10px;
}

#deleteButton{
  color: rgba(252, 92, 0, 0.801);
  margin:0;
  padding:0;
  border: none;
  background: none;
}

#deleteButton:hover{
  color: red;
  cursor: pointer;
  text-decoration: underline;
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

.flex-container1{
  display: flex;
  width: 100%;
}

.spinner{
  margin-top: 17px;
  width: 10rem;
  float:right;
}

.vnis__button{
  background-color: rgba(252, 92, 0, 0.801) !important;
  transition: none !important;
  outline: none !important;
}

.vnis__button:hover{
  cursor: pointer;
  color:black;
  background-color: white !important;
  border: 2px solid rgba(252, 92, 0, 0.801);
}

</style>
