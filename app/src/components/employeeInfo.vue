<template>
    <div class="user" id="user">
      <div class="accInfo">
        <div class="row">
            <div class="col account-info-col">
                <div class="accText">
                    <table class="table is-fullwidth">
                        <div class="accInfo">
                        <tr>
                            <td>
                                Name: {{visitor.firstName}} {{visitor.lastName}}&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                Username: {{visitor.username}}&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <tr>
                        <tr>
                            <td>
                                Phone Number: {{visitor.phone}}&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                Email: {{visitor.email}} &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
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

import {Component, Prop, Vue} from 'vue-property-decorator';
import axios from 'axios';

@Component({ components: {}})
export default class EmployeeInfo extends Vue{
    @Prop()
    visitor!: User;
}

</script>
