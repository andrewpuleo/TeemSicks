<template>
    <div class = "orderContainer">
    <img class = "orderBackground" src="../assets/sunset2.jpg">
    <p class = "orderStatement"> Your Order Has Been Placed! </p>
    </div>
</template>

<style>
.orderContainer{
    position: relative;
}
.orderStatement{
    color: white; 
    font-size: 300%;
    font: bold;
    padding: 50px;
    border: 3px solid rgba(255, 255, 255, 0.685);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.orderBackground{
    width: 100%;
}

</style>