<template>
   <div style="padding: 4rem;">
      <div id="product-deleter" class="white-box-grey-border">
         <br>
         <h3 class="foxycle-orange"> Update The Home Alert: </h3>

         <div class="form" >
           <div class="field">
            
            <input class="input" id = "homeAlertUpdater" type="text" v-model="updateDesc" :placeholder="this.desc.description" />
           </div>
           <div class="field">
             <button class="button" id = "homeAlertUpdaterButton" v-on:click="updateMisc">Save</button>
           </div>
           <br>

         </div>
         <div v-if="done == true" class="product-found">
            <p class="foxycle-redorange" style="background-color:white"> Home Alert Successfully Updated! </p>
            
         </div>


      </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import axios from 'axios';
import { misc } from '@/models';

@Component({ components: {  } })
export default class homeAlertUpdater extends Vue {

   updateDesc!: string = null;
   done!: boolean = false;
   desc!: misc = null;


    mounted(){
        axios.get('/api/Misc')
        .then((response) => {
            this.desc = response.data.miscs[0];
        })
    }
   updateMisc() {
      this.desc.description = this.updateDesc;
      axios.put(`/api/Misc/${this.desc.id}`, {...this.desc}).then((res) => {
        this.desc = res.data.description;
        this.$root.$emit('alertUpdaterEmit', res.data) //like this
      })
      this.done = true;
      
   }
}

</script>

<style scoped>
@import '../style.css';

#product-deleter{
   border-radius: 20px;
}

button{
  margin-top: 20px;
  padding: 5px 105px;
  background-color: rgba(252, 92, 0, 0.801);
  color: white;
  border-radius: 4px;
  transition-duration: 0.4s;
  border:2px solid rgba(252, 92, 0, 0.801);
}
button:hover{
cursor: pointer;
color: black;
border: 2px solid rgba(252, 92, 0, 0.801);
background-color: white;
}

label.form-descriptions{

  padding-right: 1rem;
  vertical-align: center;

}

/* Style inputs with type="text", select elements and textareas */
.field{
   padding-left: 4rem;
   padding-right: 4rem;
}
input[type=text], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */

input[type=submit] {
    /*background-color: #4CAF50; */
    padding: 12px 20px;
    cursor: pointer;
    background-color: rgba(252, 92, 0, 0.801);
    color: white;
    border-radius: 4px;
    transition-duration: 0.4s;
    border:2px solid rgba(252, 92, 0, 0.801);
}

/* When moving the mouse over the submit button, add a darker green color */

input[type=submit]:hover {

   cursor: pointer;
   color: black;
   border: 2px solid rgba(252, 92, 0, 0.801);
   background-color: white;
}

.product-found{
   background-color: #f1f1f1;
   border-color: red;
   border-width: 1px;
}

</style>
