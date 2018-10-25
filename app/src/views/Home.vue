


<template>

  <div class="container-fluid">
    <div class="home">
      <h1>Welcome to Foxycle</h1>
    </div>
    <HomeSlider/>
    <div class="header">
    </div>

   <div class="row">
     <div class="col-sm-4" id="newcolumn" style="background-color:#FFFDF4;">Who We Are</div>
     <div class="col-sm-4" id="newcolumn" style="background-color:#FFFDF4;">Why We Are</div>
     <div class="col-sm-4" id="newcolumn" style="background-color:#FFFDF4">How We Are</div>
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

.header {
    background-color: #ddd;
    font-weight: bold;
    background-size: cover;
    color: rgb(241, 63, 9);
    padding: 150px;
    text-align: center;
    font-size: 35pt;
    font-family:inherit;
    font-style:oblique;
    height: 400px;
}

.newcolumn{
    border: 30px;
    font: inherit;
    color: rgb(241, 63, 9);
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

@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}
