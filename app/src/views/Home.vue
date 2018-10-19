
  

<template>  
  <div class="container-fluid">
    <div class="home">
      <h1>Welcome to your new home</h1>
    </div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      This bike is "xyz" brand<br>
      Slide #: {{ slide }}<br>
      
    </p>
    <div class="header">
     <h2>About Us</h2>
    </div>

   <div class="row">
     <div id="newcolumn" style="background-color:white;">Who We Are</div>
     <div id="newcolumn" style="background-color:white;">Why We Are</div>
     <div id="newcolumn" style="background-color:white">How We Are</div>
   </div>

   <div class="footer">
     <p>Footer</p>
   </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->


<style lang="scss">
* {
    box-sizing: border-box;
}

.header {
    /*background-image: url(https://s3.insidehook.com/header_bestbike_1460062106.jpg); */
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

#newcolumn{
    border: 30px;
    ont: inherit;
    color: rgb(241, 63, 9);
    float:left;
    width: 33.33%;
    padding: 110px;
    text-align: center;
    height: 500px;
}

.row:after {
    content: "";
    display: table;
    clear: both;

}

.footer {
    background-color: burlywood;
    padding: 20px;
    text-align: center;
}

@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>
