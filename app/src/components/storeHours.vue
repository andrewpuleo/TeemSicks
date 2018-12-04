<template>
    <div>
        <p> {{this.weekdays}}</p>
        <p> {{this.weekends}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { misc } from '@/models';


import axios from 'axios';

  

@Component
export default class storeHours extends Vue {
   @Prop({ default: null })

    weekdays= new String();
    weekends= new String();

    mounted() {
        this.$root.$on('hoursUpdaterEmit', (data, response) => {
            
            this.updateHours(data)
        });
        
        axios.get('/api/Misc')
        .then((response) => {
            this.weekdays = response.data.miscs[1].description;
            this.weekends = response.data.miscs[2].description;
        });
    }
    updateHours(arr){
        console.log("here", arr);
        window.setTimeout(1000);
        this.weekdays = arr[0];
        this.weekends =  arr[1];
        
    }

    
    
    
}
</script>
