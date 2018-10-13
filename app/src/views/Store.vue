<template>
  <div class="store">
    <HelloWorld msg="This is the Store"/>
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
export default class Login extends Vue {}
</script>
