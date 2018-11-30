<template>
    <div class="user" id="user">
    <ChangeFirstName
    v-if="firstNameChanged"
    v-bind:oldFirstName="visitor.firstName"
    v-on:close="firstNameChanged = false"/>
    <ChangeLastName
    v-if="lastNameChanged"
    v-bind:oldLastName="visitor.lastName"
    v-on:close="lastNameChanged = false"/>
    <ChangeUserName
    v-if="userNameChanged"
    v-bind:oldUserName="visitor.username"
    v-on:close="userNameChanged = false"/>
    <ChangePassword
    v-if="passwordChanged"
    v-bind:oldPassword="visitor.password"
    v-on:close="passwordChanged = false"/>
    <ChangePhoneNumber
    v-if="phoneNumberChanged"
    v-bind:oldPhoneNumber="visitor.phone"
    v-on:close="phoneNumberChanged = false"/>
    <ChangeEmail
    v-if="emailChanged"
    v-bind:oldEmail="visitor.email"
    v-on:close="emailChanged = false"/>
      <div class="accInfo">
        <div class="row">

            <div class="col account-info-col">
                <div class="accText">
                    <h1 class="accInfoTitle"> <br><br>Account Info<br><br></h1>
                    <table class="table is-fullwidth">
                        <div class="accInfo">
                        <tr>
                            <td>
                                First Name: {{visitor.firstName}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeFirstName()"> Edit First Name </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Last Name: {{visitor.lastName}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td> 
                                <button class="btn-account-info" v-on:click="changeLastName()"> Edit Last Name </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Username: {{visitor.username}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeUserName()"> Edit Username </button><br>
                            </td>
                        <tr>
                        <tr>
                            <td>
                                Password: {{passwordencry}}&nbsp;&nbsp;&nbsp;&nbsp; 
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changePassword()"> Edit Password </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Phone Number: {{visitor.phone}}&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changePhoneNumber()"> Edit Phone Number </button><br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email: {{visitor.email}} &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button class="btn-account-info" v-on:click="changeEmail()"> Edit Email </button><br>
                            </td>
                        </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'bulma';

    .accText{
        text-align: left;
    }
    .accInfo{
        font-size: 15pt;
        color: rgba(68, 67, 62, 0.877);
    }
    .accInfoTitle{
        color:rgba(252, 92, 0, 0.801);
        font-size: 25pt;
        text-align: center;
    }


    .account-info-col{
        margin: auto;
        max-width: 700px;
    }
    .btn-account-info{
      background-color: rgba(252, 92, 0, 0.801);
      color: white;
      font-size: 15px;
      width: 150px;
      border-radius: 4px;
      transition-duration: 0.4s;
      border:2px solid rgba(252, 92, 0, 0.801);
    }
</style>


<script lang="ts">
import { User } from '@/models';

import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import ChangeFirstName from '@/components/changeFirstName.vue';
import ChangeLastName from '@/components/changeLastName.vue';
import ChangeUserName from '@/components/changeUserName.vue';
import ChangePassword from '@/components/changePassword.vue';
import ChangePhoneNumber from '@/components/changePhoneNumber.vue';
import ChangeEmail from '@/components/changeEmail.vue';
import axios from 'axios';

@Component({ components: {ChangeLastName, ChangeFirstName, ChangeUserName, ChangePassword, ChangePhoneNumber, ChangeEmail}})
export default class AccountInfo extends Vue{
    @Prop()
    visitor!: User;

    passwordencry = new String()
    firstNameChanged = false
    lastNameChanged = false
    userNameChanged = false
    passwordChanged = false
    phoneNumberChanged = false
    emailChanged = false
    
    @Watch('visitor.password')
    onPropertyChanged(value: string, oldvalue: string){
        if(this.visitor.password){
            for(let i = 0; i < this.visitor.password.length; i+=1){
            this.passwordencry = this.passwordencry + "*"
            }
        }
        console.log(this.passwordencry);
    }

    changeFirstName(){
        this.firstNameChanged = true;
    }

    changeLastName(){
        this.lastNameChanged = true;
    }

    changeUserName(){
        this.userNameChanged = true;
    }

    changePassword(){
        this.passwordChanged = true;
    }

    changePhoneNumber(){
        this.phoneNumberChanged = true;
    }

    changeEmail(){
        this.emailChanged = true;
    }
}

</script>
