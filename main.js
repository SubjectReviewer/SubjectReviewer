// Function to open modal
function openModal(imageSrc, caption) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
  }
  
  // Function to close modal
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("imageModal").style.display = "none";
  }
  
  // Function to zoom image
  function zoomImage(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
