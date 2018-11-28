<template>
    <div id="account">

        <div class="container-fluid headerimg">
            <div class="row">
                <img src="../assets/AccountBike.png">
                <div class="centered"> My Account
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div v-if="this.$store.getters.getIsLoggedIn">
                        <AccountInfo v-bind:visitor="visitor"/>
                    </div>
                    <h1 v-else>Nope</h1>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }

    .headerimg img{
        height: 600px;
        width: 100%;
    }
    .centered{
        position: absolute;
        top: 26rem;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 5rem;
    }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ToDo from '@/components/ToDo.vue';
import { User } from '@/models';
import  AccountInfo from "@/components/accountInfo.vue";

@Component({ components: { AccountInfo, } })
export default class Account extends Vue {
  visitor: User = new User();
  mounted() {
    if(this.$store.getters.getIsLoggedIn){
        axios.get(`/api/users/${this.$store.getters.getUID}`)
        .then((response) => {
            this.visitor = response.data.user;
        });
    }
  }
}
</script>

