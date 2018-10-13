<template>
  <div class="login">
    <HelloWorld msg="Welcome to Login"/>
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
export default class Home extends Vue {}
</script>
