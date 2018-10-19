
<template>
    <div class="your-class">
        <div><img align="left" src="../assets/logo.png"></div>
        <div><img align="left" src="../assets/foxycle.png"></div>
        <div><img align="left" src="../assets/foxycle.png"></div>
    </div>
</template>

<script lang="javascript">
    $(document).ready(function(){
        $('.your-class').slick({
            slidesToShow:1,
            dots: true,
            adaptiveHeight: true
        });
    });
</script>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class indexSlider extends Vue {
  @Prop() private msg!: string;
}
</script>

	