<template>
      <div>Some text to search for  {{id}}</div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class Item extends Vue {
   @Prop() id!: Number;
}
</script>
