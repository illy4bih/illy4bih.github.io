
$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });
  })
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction4(){
  var checkBox=document.getElementById("myCheck");
var inputBox=document.getElementById("addCourses");

if(checkBox.checked===true){
  inputBox.style.display="block";
} else{
  inputBox.style.display="none";
 }
}
function myFunction5(){
  var checkBox=document.getElementById("myCheck1");
  var inputBox1=document.getElementById("addSchool");
  
  if(checkBox.checked===true){
    inputBox1.style.display="block";
  } else{
    inputBox1.style.display="none";
   }
  }
function myFunction3(){
  var getInvolved=document.getElementById("getInvolved");
  var courseLabel=document.getElementById("specCoursesLabel");
  var checkBox=document.getElementById("myCheck");
  var schoolLabel=document.getElementById("specSchoolLabel");
  var checkBox1=document.getElementById("myCheck1");
  var inputBox1=document.getElementById("addSchool");
  var inputBox=document.getElementById("addCourses");
 

  if(getInvolved.checked===true){
    courseLabel.style.display="block";
    checkBox.style.display="block";
    schoolLabel.style.display="block";
    checkBox1.style.display="block";
  }else {
    courseLabel.style.display="none";
    checkBox.style.display="none";
    schoolLabel.style.display="none";
    checkBox1.style.display="none";
    inputBox.style.display="none";
    inputBox1.style.display="none";
  }

}
/*geolokacija*/
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
