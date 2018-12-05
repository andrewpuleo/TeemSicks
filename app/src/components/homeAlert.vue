<template>
    <div class="alert" v-if="alertDescription != null">
        <h1 style="color:rgba(252, 92, 0, 0.801)">New Update:</h1>
        <p> {{alertDescription}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { misc } from '@/models';


import axios from 'axios';



@Component
export default class homeAlert extends Vue {
   @Prop({ default: null })

    alertDescription!: misc;

    mounted() {
        this.$root.$on('alertUpdaterEmit', (data, response) => {

            this.updateAlert(data)
        });

        axios.get('/api/Misc')
        .then((response) => {
            this.alertDescription = response.data.miscs[0].description;
            console.log(response.data.miscs[0]);
        });


    }

    updateAlert(data){
        this.alertDescription = data;
    }


}
</script>

<style scoped lang="scss">
@import '../style.css';

.alert {
    margin: auto;
    width: 50%;
    border: 2px solid #CCCCCC;
    padding: 10px;
    margin-top:10px;
    background-color: white;
}
</style>
