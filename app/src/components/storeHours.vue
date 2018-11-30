<template>
    <div>
        <p> {{weekdays}}</p>
        <p> {{weekends}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { misc } from '@/models';


import axios from 'axios';

  

@Component
export default class storeHours extends Vue {
   @Prop({ default: null })

    weekdays!: misc;
    weekends!: misc;

    mounted() {

        axios.get('/api/Misc')
        .then((response) => {
            this.weekdays = response.data.miscs[1].description;
            this.weekends = response.data.miscs[2].description;
            console.log(response.data.miscs[1]);
        });
    }
    
    
}
</script>
