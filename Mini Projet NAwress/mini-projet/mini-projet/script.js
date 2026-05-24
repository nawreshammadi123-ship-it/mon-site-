function afficheImage(e) {
    document.getElementById("bigImage").src = e.src;
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

// récupérer toutes les images
let images = document.querySelectorAll(".zoom");

let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");

// quand on clique sur une image
images.forEach(function(image){

    image.addEventListener("click", function(){

        popup.style.display = "flex";

        // afficher image agrandie
        popupImg.src = this.src;

    });

});

// fermer popup
popup.addEventListener("click", function(){

    popup.style.display = "none";

});
function message() {
    alert("Formulaire envoyé !");
}