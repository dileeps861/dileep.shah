// Get the modal
var resumeModel = document.getElementById("resumeModel");

// Get the button that opens the modal
var openResumeButton = document.getElementById("openResume");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
openResumeButton.onclick = function() {
    resumeModel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    resumeModel.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == resumeModel) {
    resumeModel.style.display = "none";
  }
} 