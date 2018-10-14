<template>
  <div class="cart">
    <HelloWorld msg="Welcome to your cart"/>
    <index/>
    <div class="container">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import index from '@/components/index.vue'; // @ is an alias to /src

@Component({
  components: {
  HelloWorld, index,
  },
  })
export default class Cart extends Vue {}
</script>
