function afficheImage(e){
    document.getElementById('bigImage').src = e.src
    
    
}
function AfficherBox() {

document.getElementById("box").style.display = "block";
}
function AfficheBox() {

document.getElementById("Box").style.display = "block";
}
function affichebox() {

document.getElementById("box2").style.display = "block";
}
let images = document.querySelectorAll(".zoom");

images.forEach(img => {
  img.addEventListener("click", function () {
    img.classList.toggle("active");
  });
});  
    }
    function message() {
    alert("Formulaire envoyé !");
}


