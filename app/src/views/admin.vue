<template>
    <div id="admin">
        <h1>ADMINISTRATOR ONLY</h1>
        <br>

        <div class="col admin_container">
           <h2> List of employees: </h2>
            <UserItem v-for="employee in users" v-bind:key="employee.id" v-bind:employee="employee" v-if="employee.userType == 1"></UserItem>

       </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { User } from '@/models';
import  UserItem  from "@/components/userItem.vue";


@Component({ components: {UserItem,} })
export default class Admin extends Vue {
   users: User[] = [];
   tempUsers: User[] = [];

   //optional: use later?
   sortVal1: number = 0;
   sortVal2: number = 0;

   mounted() {

     axios.get('/api/Users')
       .then((response) => {
         this.users = response.data.users;
         console.log("Users: ",this.users);
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
