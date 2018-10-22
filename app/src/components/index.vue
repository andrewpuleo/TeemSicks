<template>
<div class="container">
<p> Hello World </p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class index extends Vue {
  @Prop() private msg!: string;
}
</script>
