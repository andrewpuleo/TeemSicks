<template>
  <div class="contact">
    <div class="storeinfo">
            <h1><span class="info"><br>Store Info</span></h1>
            <p>
              <span class="hours">Hours:</span> 8 am - 5 pm Sunday - Saturday</p>
            <p>
              <span class="pnum">Phone Number:</span> (805)FOXYCLE</p>
            <br>
    </div>
    <h1> <br>Contacting Foxycle</h1>
      <div class="container text-center">
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
      <br>
      <h1> <br>Meet the Staff! </h1>
      <br>
      <div class="container-fluid headshots">
      <div class="row">
        <div class="col">
          <img src="http://www.pd4pic.com/images/people-boy-man-guy-profile-silhouette-head-black.png">
          <div class="empname">
            <h1> staff 1 </h1>
          </div>
        </div>
        <div class="col">
          <img src="http://www.pd4pic.com/images/people-boy-man-guy-profile-silhouette-head-black.png">
          <div class="empname">
            <h1> staff 2 </h1>
          </div>
        </div>
        <div class="col">
          <img src="http://www.pd4pic.com/images/people-boy-man-guy-profile-silhouette-head-black.png">
          <div class="empname">
            <h1> staff 3 </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact{
    color: rgb(241, 63, 9);
    text-align: center;
    font-size: 20pt;
}

.container{
  color: black;
  font-size: 15pt;
}

.headshots img{
  width: 300px;
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
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
    background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

.storeinfo{
  color: black;
  font-size: 20px;
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

.empname{
  color: black;
}

</style>
