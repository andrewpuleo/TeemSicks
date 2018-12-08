<template>
    <div class="modal is-active" id="modal-window">
        <div class="modal-background">
        </div>
        <div class="modal-card">
            <div class="modal-content">
                <header class="modal-card-head">
                    <p class="modal-card-title"> Order Info </p>
                </header>
                <section class="modal-card-body">
                    <B> Order ID: </B>
                    <p> {{ currentOrderId }} </p>
                    <B> Product(s) in Order: </B>
                    <p v-for="product in currentProducts" v-bind:key="product.id">
                        {{product.productName}}
                    </p>
                </section>
                <footer class="modal-card-foot">
                    <div class = "button-positions">
                        <button class="button-cancel-changes" data-dismiss="modal-window" v-on:click="$emit('close')">Close </button>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bulma';
@import '../style.css';
.fname-title{
    color: rgb(99, 95, 95)
}
.button-positions{
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
}
.modal{
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.05); /* Black w/ opacity */
}
.modal-content {
    margin: 15% auto; /* 15% from the top and centered */
    width: 80%; /* Could be more or less, depending on screen size */
}
.button-cancel-changes{
    background-color: rgba(136, 131, 128, 0.801);
    color: white;
    font-size: 15px;
    width: 150px;
    border-radius: 4px;
    transition-duration: 0.4s;
    border:2px solid rgba(136, 131, 128, 0.801);
}
.error-message-this{
    color: red;
}


</style>

<script lang="ts">
import { User } from '@/models';
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import axios from 'axios';

@Component({props: ['currentOrderId', 'currentProducts']})
export default class OrderInfo extends Vue{
    input1 = String();
    input2 = String();
    same=true;
    visitor!:User;

    mounted(){
    }
}

</script>
