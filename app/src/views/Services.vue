<template>
  <div class="services">
    <div class="container-fluid headerimg">
        <div class="row">
            <img src="../assets/bikeservices.png">
            <div class="centered">Service and Repair</div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="text">
                <br>
                <b style="color:rgba(252, 92, 0, 0.801)"> Whether you need a quick tune up, repair
                     for a flat or a complete overhaul
                    to make your bike run and look like new, our experts at Foxycle
                    have you covered!</b>
                    <br>
                <small> We've prepared the chart below to provide a menu of our common bicycle
                    services
                     and repairs. Bring your bike in to discuss your bicycle issues and find out
                     which package or service is appropriate. Most of our
                     repairs can be done within 24-48 hours if not faster. <br> </small>
                <br>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <br>
            <b class="service-title"> SERVICE PACKAGES </b>
            <p class="service-text"> Minor tune-up <br>
                Major tune-up <br>
                Brake overhaul <br>
                Bike overhaul <br>
                Detail Bike<br><br><br> </p>
        </div>
        <div class="col">
            <b class="service-title"> WHEELS </b>
            <p class="service-text"> Flat tire repair <br>
            Replace tire(s) <br>
            Replace broken spoke(s) <br>
            Hub bearing overhaul<br> <br> <br></p>
        </div>
        <div class="col">
            <b class="service-title"> BRAKES </b>
            <p class="service-text"> Replace brake cable(s) <br>
            Replace brake shoes <br>
            Minor brake adjustment <br>
            Major brake adjustment <br>
            Install and adjust new brakes <br><br>
            </p>
        </div>
        <div class="col">
            <b class="service-title"> OTHER SERVICES </b>
            <p class="service-text"> Bike build (from box)<br>
            Replace seat<br>
            Replace seatpost<br>
            Install accessories<br><br> <br>
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <br>
            <b class="service-title"> FRONT END </b>
            <p class="service-text"> Replace handlebars <br>
                Replace stem <br>
                Replace handlebar tape <br>
                Replace handlebar grips<br><br><br><br>
                </p>
        </div>
        <div class="col">
            <b class="service-title"> FRAME AND FORK </b>
            <p class="service-text"> Replace fork <br>
            Rear shock air sleeve<br>
            Derailleaur hanger repair/replace<br>
            Frame prep for assembly<br><br><br> </p>
        </div>
        <div class="col">
            <b class="service-title"> DRIVETRAIN </b>
            <p class="service-text"> Clean and lube <br>
            Complete drivetrain service<br>
            Replace chain <br>
            Adjust/repair derailleaur <br>
            Replace shift cables <br>
            Install/remove pedals <br>
            </p>
        </div>
        <div class="col">
            <b class="service-title"> BEARINGS </b>
            <p class="service-text"> Overhaul headset<br>
            Overhaul hub(s)<br>
            Overhaul pedals<br>
            Replace suspension pivots<br><br><br>
            </p>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
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
    .text{
        font-size: 17pt;
        text-align: center;
    }
    .col{
        margin: auto;
        max-width: 1000px;
    }
    .service-title{
        color:rgba(252, 92, 0, 0.801);
    }

    .service-text{
        color: rgba(68, 67, 62, 0.877)
    }
</style>
