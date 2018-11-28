
<template>
  <div id="app">
    <div id="logo">
      <router-link to="/"><img align="left" src="./assets/foxycle.png"></router-link>
   </div>
   <nav class="navbar navbar-inverse navbar-expand-sm navcontainer">
      <div class="container navcontainer">
         <button class="navbar-toggler navbar-toggle btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- Left items: Home, Store, Contact -->
            <ul class="navbar-nav mr-auto" id="navleft">
               <li class="nav-item active">
                  <div class="navlink" id="navleft">
                     <button class="navbtn"><router-link to="/">Home</router-link></button>
                  </div>
               </li>
               <li class="nav-item active">
                   <div class="dropdown" id="navleft">
                      <button class="dropbtn"><router-link to="/store">Store</router-link></button>
                      <div class="dropdown-content">
                         <table>
                            <tr>
                               <td><router-link to="/store">Road</router-link></td>
                               <td><router-link to="/store">Mountain</router-link></td>
                               <td><router-link to="/store">Accessories</router-link></td>
                            </tr>
                            <tr>
                               <td><img src="./assets/road-bike.jpg" height="200"></td>
                               <td><img src="./assets/mountain-bike.jpg" height="200"></td>
                               <td><img src="./assets/bike-accessories.jpg" height="200"></td>
                            </tr>
                         </table>
                      </div>
                   </div>
                </li>
                <li class="nav-item active">
                   <div class="navlink" id="navleft">
                      <button class="navbtn"><router-link to="/contact">Contact</router-link></button>
                   </div>
                </li>
                <li class="nav-item active">
                   <div class="navlink" id="navleft">
                      <button class="navbtn"><router-link to="/services">Services</router-link></button>
                   </div>
                </li>
                <li class="nav-item active">
                   <div class="navlink" id="navleft">
                      <button class="navbtn"><router-link to="/account">Account</router-link></button>
                   </div>
                </li>
             </ul>

            <!-- Right items: Login and cart -->
            <ul class="navbar-nav navbar-right" id="navright">
               <li v-if="loginStatus" class="nav-item active">
                  <router-link to="/account"><img src="./assets/user.png"> Account</router-link>
               </li>
               <li v-else class="nav-item active">
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

  <div class="footer">
    <div class="row">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-4">
        <h3>Hours:</h3>
          <p>M-F: 8am - 5pm</p>
          <p>Sat: 10am - 4pm</p>
      </div>
      <div class="col-sm-4">
        <h3>Contact</h3>
        <div class="row">
          <div class="col-lg-4">
            1400 Ramada Drive
          </div>
          <div class="col-lg-4">
            Paso Robles, Ca, 93446
          </div>
          <div class="col-lg-4">(805)-225-5911
          </div>
        </div>
      </div>
      <div class="col-sm-2">
      </div>

    </div>

  </div>

</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/models';
import HelloWorld from '@/components/HelloWorld.vue';
import index from '@/components/index.vue'; // @ is an alias to /src
//import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
  HelloWorld, index,
  },
  })
export default class Home extends Vue {
   loginStatus: boolean = false;
}
</script>

<style scoped lang="scss">
@import '/style.css';

.footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: darkgray;
    color: white;
    text-align: center;
    z-index: 500;
    height:100%;
    margin-top: 20px;
}

body{
   background-color: #FFFDF4 !important;
   padding-bottom: 100px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navleft {
  a {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #ff6600;
    }
  }
}
#navright {
  a {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 1rem;
    font-size: 16px;
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
.navcontainer{
   background-color: #f1f1f1;
}
.navbtn {
    background-color: #f1f1f1;
    color: #2c3e50;
    padding: 8px;
    font-weight: bold;
    font-size: 16px;
    border: none;
}
.dropbtn {
    background-color: #f1f1f1;
    color: #2c3e50;
    padding: 8px;
    font-weight: bold;
    font-size: 16px;
    border: none;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
   background-color: #ddd;
}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #f1f1f1;}
.navlink:hover .navbtn {background-color: #f1f1f1;}

.page-footer{
   position:absolute;
   padding-top: 10rem;
    width:100%;
    bottom:0px;
}


</style>
