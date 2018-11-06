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
                <b> Whether you need a quick tune up, repair for a flat or a complete overhaul
                    to make your bike run and look like new, our experts at Foxycle
                    have you covered! <br> </b>
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
            <b> SERVICE PACKAGES </b>
            <p> Minor tune-up <br>
                Major tune-up <br>
                Brake overhaul <br>
                Bike overhaul <br>
                Detail Bike<br><br><br> </p>
        </div>
        <div class="col">
            <b> WHEELS </b>
            <p> Flat tire repair <br>
            Replace tire(s) <br>
            Replace broken spoke(s) <br>
            Hub bearing overhaul<br> <br> <br></p>
        </div>
        <div class="col">
            <b> BRAKES </b>
            <p> Replace brake cable(s) <br>
            Replace brake shoes <br>
            Minor brake adjustment <br>
            Major brake adjustment <br>
            Install and adjust new brakes <br><br>
            </p>
        </div>
        <div class="col">
            <b> OTHER SERVICES </b>
            <p> Bike build (from box)<br>
            Replace seat<br>
            Replace seatpost<br>
            Install accessories<br><br> <br>
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <br>
            <b> FRONT END </b>
            <p> Replace handlebars <br>
                Replace stem <br>
                Replace handlebar tape <br>
                Replace handlebar grips<br><br><br>
                </p>
        </div>
        <div class="col">
            <b> FRAME AND FORK </b>
            <p> Replace fork <br>
            Rear shock air sleeve<br>
            Derailleaur hanger repair/replace<br>
            Frame prep for assembly<br><br><br> </p>
        </div>
        <div class="col">
            <b> DRIVETRAIN </b>
            <p> Clean and lube <br>
            Complete drivetrain service<br>
            Replace chain <br>
            Adjust/repair derailleaur <br>
            Replace shift cables <br>
            Install/remove pedals <br>
            </p>
        </div>
        <div class="col">
            <b> BEARINGS </b>
            <p> Overhaul headset<br>
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
        top: 45%;
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
</style>
