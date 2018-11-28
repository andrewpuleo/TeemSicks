<template>
  <div>
    <h1> ADMIN POWERRR </h1>
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

export default class Admin extends Vue {}
</script>
