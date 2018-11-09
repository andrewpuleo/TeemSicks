<template>

  <div class="contact">
    <div class="container-fluid headerimg">
        <div class="row">
            <img src="../assets/sunset.png">
            <div class="page-title">
              <h>Contacting Foxycle</h>
              <br>
              <br>
              <div class="row" style="font-size:12pt">
                <div class="col" style="border-style:solid">
                  <h style="font-size:20pt"> Phone </h>
                  <p> 805 FOXYCLE <br> <br></p>
                </div>
                <div class="col" style="border-style: solid solid solid none">
                  <h style="font-size:20pt"> Address </h>
                  <p> 1234 Foothill Dr, San Luis Obispo 93405 </p>
                </div>
                <div class="col" style="border-style: solid solid solid none">
                  <h style="font-size:20pt"> Hours </h>
                  <p> 8 am - 5 pm
                  <br>
                  Monday - Saturday
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>

    <h1> <br>Contact Form</h1>

      <div class="container contact-container text-center">

        <form action="../contact.php">

          <label for="fname" class="form-descriptions">Full Name</label>

          <br>

          <input type="text" id="fname" name="yourname" placeholder="Full Name">

          <br>

          <label for="subject" class="form-descriptions">Subject</label>

          <br>

          <input type="text" id="subject" name="subject" placeholder="Subject">

          <br>

          <label for="email" class="form-descriptions">Email</label>

          <br>

          <input type="text" id="email" name="email" placeholder="Email">

          <br>

          <label for="message" class="form-descriptions">Message</label>

          <br>

          <textarea id="message" name="comments" placeholder="Message"

             style="height:200px"></textarea>

          <br>

          <input type="submit" value="Send it!">

        </form>

      </div>

  </div>

</template>

<style lang="scss">

.contact{

    color: rgba(252, 92, 0, 0.801);

    text-align: center;

    font-size: 20pt;

}

.contact-info{
  border-style:solid;
  border-color: white;
}

.headerimg img{
  height: 600px;
  width: 100%;
}

.page-title{
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5rem;
}

.info-title{
  font-size: 15pt;
  color: rgba(252, 92, 0, 0.801);
}



label.form-descriptions{

  padding-right: 1rem;

  vertical-align: center;

}

/* Style inputs with type="text", select elements and textareas */

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

    //background-color: #4CAF50;

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

/* Add a background color and some padding around the form */

.contact-container {

    border-radius: 5px;

    background-color: #f2f2f2;

    padding: 20px;

}

.pnum{

  color: rgb(241, 63, 9);

  font-size: 25px;

}

.hours{

  color: rgb(241, 63, 9);

  font-size: 25px;

}

.info{

  color: rgb(241, 63, 9);

}
</style>
