<template>
   <div>
   <div class="header">
     <h2>About Us</h2>
   </div>

   <div class="row">
     <div id="newcolumn" style="background-color:white;">Who We Are</div>
     <div id="newcolumn" style="background-color:white;">Why We Are</div>
     <div id="newcolumn" style="background-color:white">How We Are</div>
   </div>

   <div class="footer">
     <p>Footer</p>
   </div>
</div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

.header {
    background-image: url(https://s3.insidehook.com/header_bestbike_1460062106.jpg);
    background-color: #ddd;
    font-weight: bold;
    background-size: cover;
    color: rgb(241, 63, 9);
    padding: 150px;
    text-align: center;
    font-size: 35pt;
    font-family:inherit;
    font-style:oblique;
    height: 400px;
}

#newcolumn{
    border: 30px;
    ont: inherit;
    color: rgb(241, 63, 9);
    float:left;
    width: 33.33%;
    padding: 110px;
    text-align: center;
    height: 500px;
}

.row:after {
    content: "";
    display: table;
    clear: both;

}

.footer {
    background-color: burlywood;
    padding: 20px;
    text-align: center;
}

@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>
