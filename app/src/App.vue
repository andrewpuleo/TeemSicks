<template>
  <div id="app">
    <div id="logo" class="logo">
      <img align="left" src="./assets/foxycle.png">
   </div>
   <nav class="navbar navbar-expand-md navbar-light bg-light" id="nav">
      <button class="navbar-toggler navbar-toggle btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link to="/">Home</router-link> |
            </li>
            <li class="nav-item active">
               <router-link to="/store">Store</router-link> |
            </li>
            <li class="nav-item active">
               <router-link to="/contact">Contact</router-link> |
            </li>
            <li class="nav-item active">
               <router-link to="/login">Login</router-link>
            </li>
         </ul>
      </div>
   </nav>

    <!-- div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/login">Login</router-link>
   </div -->
    <router-view/>
</div>

</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 1px;
  a {
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #ff6600;
    }
  }
}
#logo {
   height: 6rem;
   padding-left: 2rem;
   padding-top: 1rem;
   padding-bottom: 1rem;
    img{
      height: 6rem;
      text-align: left;
   }
}

</style>
