<template>
    <div id="account">
        <div class="container-fluid">
            <div class="row top-account-image">
                <h1 class="centered big-white-text">My Account</h1>
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
    @import '../style.css';
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
    .top-account-image{
        background-image: url('../assets/AccountBike.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: 500px;
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
