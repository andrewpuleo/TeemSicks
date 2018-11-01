<template>
    <div>
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

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                src="../assets/slider1.jpg" alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                src="../assets/slider2.jpg" alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                src="../assets/slider3.jpg" alt="image slot">
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

    </div>

</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class HomeSlider extends Vue {
    slide: Number = 0;
    sliding: boolean = false;

    onSlideStart () {
      this.sliding = true;
    }

    onSlideEnd () {
      this.sliding = false;
    }}


    
    
</script>
