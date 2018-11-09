<template>

  <div class="container-fluid">
    <HomeSlider/>

   <div class="home-info">
   <div class="row">
     <!-- <div class="col-sm-4" id="newcolumn" style="background-color:#FFFDF4;"> -->
     <div class="col info-box" id="newcolumn" ><span class="info-headers"><h2>Our Story</h2></span>
     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat ullamcorper leo id venenatis.
       Fusce interdum nisi a felis tincidunt convallis. In tristique magna sit amet sem ornare venenatis.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
       Pellentesque in rutrum nunc. Nam sodales dolor sed auctor elementum. Suspendisse potenti.</div>
     </div>
     <div class="spacing">
     </div>
     <div class="col info-box" id="newcolumn" ><span class="info-headers"><h2>Our Mission</h2></span>
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat ullamcorper leo id venenatis.
       Fusce interdum nisi a felis tincidunt convallis. In tristique magna sit amet sem ornare venenatis.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
       Pellentesque in rutrum nunc. Nam sodales dolor sed auctor elementum. Suspendisse potenti.</div>
     </div>
   </div>
</div>

<h1> Meet the Staff! </h1>
<br>
<div class="container-fluid headshots">
<div class="row">
 <div class="col">
    <img src="http://4.bp.blogspot.com/-OYbF-VMNom0/TeooKhWAU9I/AAAAAAAADNg/g7l3y-SGyyo/s1600/Sutton-38.jpg">
    <div class="empname">
      <p> Freddy McFarmer </p>
      <div class="job-title">
        Store Manager
      </div>
    </div>
 </div>
 <div class="col">
    <img src="../assets/foxy.png"/>
    <div class="empname">
      <p> Kris Fox </p>
      <div class="job-title">
        <p> Store Owner </p>
      </div>
    </div>
 </div>
 <div class="col">
    <img src="http://de.web.img2.acsta.net/pictures/15/03/16/13/33/012542.jpg">
    <div class="empname">
      <p> Greg Gregory </p>
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
.info-box{
   background-color: white;
   border: 2px solid #CCCCCC;
}
.spacing{
   padding: 1rem;
}
.info-headers{
  color: rgb(241, 63, 9) !important;
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
