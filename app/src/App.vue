<template>
  <div id="app">
    <div id="logo">
      <router-link to="/"><img align="left" src="./assets/foxycle.png"></router-link>
   </div>
   <nav class="navbar navbar-inverse navbar-expand-sm navbar-light bg-light">
      <div class="container">
         <button class="navbar-toggler navbar-toggle btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- Left items: Home, Store, Contact -->
            <ul class="navbar-nav mr-auto" id="navleft">
               <li class="nav-item active">
                  <router-link to="/">Home</router-link> |
               </li>
               <li class="nav-item active">
                  <router-link to="/store">Store</router-link> |
               </li>
               <li class="nav-item active">
                  <router-link to="/contact">Contact</router-link>
               </li>
            </ul>

            <!-- Right items: Login and cart -->
            <ul class="navbar-nav navbar-right" id="navright">
               <li class="nav-item active">
                  <router-link to="/login"><img src="./assets/user.png"> Login</router-link>
               </li>
               <li class="nav-item active">
                  <router-link to="/cart"><img src="./assets/cart.png">Cart</router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
    <router-view/>
</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import index from '@/components/index.vue'; // @ is an alias to /src
//import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
  HelloWorld, index,
  },
  })
export default class Home extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navleft {
  padding: 4px;
  a {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #ff6600;
    }
  }
}
#navright {
  padding: 0px;
  a {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 1rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #ff6600;
    }
  }
  img{
     height: 1rem;
     padding-left: 2rem;
     height: 1.5rem;
     text-align: right;
 }
}
#logo {
   height: 6rem;
   padding-left: 2rem;
    img{
      height: 6rem;
      text-align: left;
   }
}

</style>
