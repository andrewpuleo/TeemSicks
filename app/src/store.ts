import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: -1,
    isLoggedIn: false,
    //cart: []
    cart: Object(),
    itemDisplay: [{
      title: "",
      description: "",
      price: 0,
      quantity: 0,
      thumbnail: "",
      id:0,
      amountInStock: 0,
    }]
  },
  getters: {
    getIsLoggedIn: state => {
      return state.isLoggedIn
    },
    getUID: state => {
      return state.uid
    },
    getCart: state => {
      return state.cart
    }
  },
  mutations: {
    login (state, id) {
      state.uid = id,
      state.isLoggedIn = true
      console.log("id is: ", id)

    },

    logout (state) {
      state.uid = -1,
      state.isLoggedIn = false
    },

    addToCart (state, item) {
      if(!(item.id in state.cart)){
      Vue.set(state.cart, item.id, 1)
      }
      else{
          if(state.cart[item.id] === item.amountInStock){}
          else{
            state.cart[item.id]+=1
          }
      }
    },

    addToItem (state, item) {
      if(state.cart[item.id]>1)
      {
        var indexOfItem = state.itemDisplay.findIndex(Object => Object.title == item.productName);
        if(state.cart[item.id] === item.amountInStock){
          state.itemDisplay[indexOfItem].quantity = item.amountInStock;
        }
        else{
          state.itemDisplay[indexOfItem].quantity+=1;
        }
      }
      else{
      state.itemDisplay.push({
        title : item.productName,
        price : item.Price,
        quantity: state.cart[item.id],
        thumbnail: item.photoUrl,
        description: item.productDescription,
        id: item.id,
        amountInStock: item.amountInStock
      })
    }
    },
    updateCartQuantity(state, item){
      state.cart[item.id] = item.quantity;
    },

    deleteItem (state, item) {
        Vue.delete(state.cart, item.id);
        var indexOfItem = state.itemDisplay.findIndex(Object => Object.title == item.title);
        if(indexOfItem > -1)
        {
          state.itemDisplay.splice(indexOfItem, 1)
        }
  },

    printCart (state) {
      for(var key in state.cart)
      {
        console.log(state.cart[key])
      }
    },

  },
  actions: {

  },
});
