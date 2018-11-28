<template>
  <div class="user" id="user">
      <div class="accInfo">
        <div class="row">
            <div class="col">
                <h1 class="accInfoTitle"> <br><br>Account Info </h1>
                <p class="accInfo">
                    First Name: {{visitor.firstName}} <br>
                    Last Name: {{visitor.lastName}} <br>
                    Username: {{visitor.username}} <br>
                    Password: {{visitor.password}} <br>
                    Phone Number: {{visitor.phone}} <br>
                    Email: {{visitor.email}}
                </p>
            </div>
            <div class="col">
                <h1 class="accInfoTitle"> Orders </h1>
                <p class="accInfo">
                    Current Orders: <br>
                    Previous Orders: <br>
                </p>
            </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
    .accInfo{
        font-size: 15pt;
        text-align: left;
    }
    .col{
        margin: auto;
        max-width: 1000px;
    }
</style>


<script lang="ts">
import { User } from '@/models';
import {Component, Prop, Vue} from 'vue-property-decorator';
@Component
export default class AccountInfo extends Vue{
    @Prop()
    visitor!: User;
};
</script>
