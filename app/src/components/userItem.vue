<template>
   <div>
     <div class="employee white-box-grey-border" id="employee">
        <EmployeeInfo v-bind:visitor="employee"/>
     </div>
     <br>
  </div>

</template>

<style scoped>
#employee{
   border-radius: 20px;
}
</style>



<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { User } from '@/models';
import  EmployeeInfo  from "@/components/employeeInfo.vue";

@Component({ components: { EmployeeInfo } })
export default class UserItem extends Vue {
    @Prop({ default: null })
    employee!: User;
}

</script>
