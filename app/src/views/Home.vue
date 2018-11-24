<template>

  <div class="container-fluid">
    <HomeSlider/>

   <div class="home-info">
   <div class="row">
     <!-- <div class="col-sm-4" id="newcolumn" style="background-color:#FFFDF4;"> -->
     <div class="col white-box-grey-border" id="newcolumn" ><span class="info-headers"><h2 class="foxycle-orange">Our Story</h2></span>
     <div>Our founder, Kris Fox, has always had a passion for biking. He has been repairing the bikes of friends and colleagues for as long as he can remember.
     It wasn't until 2003 that he knew he wanted to turn his passion into a local business. And that's when Foxycle was born!
     The first location started in his garage, but now today we have a main location right in the heart of San Luis Obispo and a large inventory of the greatest bikes in the world.</div><br>
     </div>
     <div class="spacing">
     </div>
     <div class="col white-box-grey-border" id="newcolumn" ><span class="info-headers"><h2 class="foxycle-orange">Our Mission</h2></span>
       <div>Foxycle aims to put a bike in the hands of every bike-less person in the greater San Luis Obispo area.
       It is important to us that everyone gets their dream bike, not just any bike. We will help you on every step of your bike journey and ensure the decision you make is well educated.
    Whether you end up with one of our road bikes or mountain bikes, we are here for you and here to help with any service needs that come up in the future. Welcome to the Foxycle family.</div><br>
     </div>
   </div>
</div>

<h1 class="foxycle-redorange"> Meet the Staff! </h1>
<br>
<div class="container-fluid headshots">
<div class="row">
 <div class="col">
    <img src="http://4.bp.blogspot.com/-OYbF-VMNom0/TeooKhWAU9I/AAAAAAAADNg/g7l3y-SGyyo/s1600/Sutton-38.jpg">
    <div class="empname">
      <h3 class="foxycle-orange"> Freddy McFarmer </h3>
      <div class="job-title">
        Store Manager
      </div>
    </div>
 </div>
 <div class="col">
    <img src="../assets/foxy2.png"/>
    <div class="empname">
      <h3 class="foxycle-orange"> Kris Fox </h3>
      <div class="job-title">
        <p> Store Owner </p>
      </div>
    </div>
 </div>
 <div class="col">
    <img src="http://de.web.img2.acsta.net/pictures/15/03/16/13/33/012542.jpg">
    <div class="empname">
      <h3 class="foxycle-orange"> Greg Gregory </h3>
      <div class="job-title">
        <p> Sales Associate </p>
      </div>
    </div>
 </div>
</div>
</div>

</div>



</template>

<script>

import  HomeSlider  from "@/components/homeSlider";
export default {
  components: {HomeSlider},
  }
</script>

<style lang="scss">
@import '../style.css';

* {
    box-sizing: border-box;
}
.newcolumn{
    border: 30px;
    font: inherit;
    float:left;
    width: 33.33%;
    padding: 110px;
    text-align: center;
    height: 500px;
    padding-bottom: 10rem;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
.home-info{
padding-top: 3rem;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 3rem;
}

.spacing{
   padding: 1rem;
}

.job-title{
  font-size: 8 pt;
}
.headshots img{
  width: 300px;
  height: 400px;
}
.empname{
  color: black;
}
@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>
