<template>
    <div id="employee" v-if="this.visitor.userType == 0 || this.visitor.userType == 1">
        <h1>EMPLOYEES ONLY</h1>
        <p>
            This is a secure area
        </p>
        <ProductAdder></ProductAdder>
        <ProductUpdater></ProductUpdater>
        <ProductDeleter></ProductDeleter>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductAdder from '@/components/productAdder.vue';
import ProductDeleter from '@/components/productDeleter.vue';
import ProductUpdater from '@/components/productUpdater.vue';
import axios from 'axios';
import { User } from '@/models';


@Component({ components: { ProductAdder, ProductDeleter, ProductUpdater} })
export default class Employee extends Vue {
   visitor: User = new User();

   mounted() {
      axios.get(`/api/users/${this.$store.getters.getUID}`)
      .then((response) => {
          this.visitor = response.data.user;
      });
   }
}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 10px;
    }
</style>
