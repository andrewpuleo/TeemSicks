<template>
   <div>
     <div class="employee white-box-grey-border" id="employee">
        <br>
         <h3 style="font-size: 20px;"class="accInfoTitle foxycle-orange"> Employee's id number: {{employee.id}}<br><br></h3>
         <button class="button" v-on:click="submitEmployeeDelete()">Delete Employee (!)</button>
        <EmployeeInfo v-bind:visitor="employee"/>
        <div id="myMessage">Employee sucessfully TERMINATED !!</div>
     </div>
     <br>
  </div>

</template>

<style scoped>
#employee{
   border-radius: 20px;
}

button{
  padding: 5px 105px;
  background-color: rgba(252, 92, 0, 0.801);
  color: white;
  border-radius: 4px;
  transition-duration: 0.4s;
  border:2px solid rgba(252, 92, 0, 0.801);
}
button:hover{
cursor: pointer;
color: white;
border: 5px solid black;
background-color: red;
}

#myMessage {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
}


#myMessage.show {
    visibility: visible;
   -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
   animation: fadein 0.5s, fadeout 0.5s 2.5s;
}


@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

</style>



<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { User } from '@/models';
import  EmployeeInfo  from "@/components/employeeInfo.vue";
import axios from 'axios';


@Component({ components: { EmployeeInfo } })
export default class UserItem extends Vue {
    @Prop({ default: null })
    employee!: User;

    submitEmployeeDelete() {
         axios.delete(`/api/Users/${this.employee.id}`).then((res) => {
        })
        .catch(error => {
          console.log(error)
       });
      var x = document.getElementById("myMessage");
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
     this.$router.push('/admin');

  }
}

</script>
