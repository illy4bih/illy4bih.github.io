
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