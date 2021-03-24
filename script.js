/*
var buttonPopup = document.getElementById('button-popup');
var overlay = document.getElementById('overlay');
button-popup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}*/

document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";

})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


var button = document.getElementsByClassName('button')[0];
var image = document.getElementsByClassName('imgmenu')[0];

window.afficher = function(){
image.style.display = (image.style.display == "block") ? "none" : "block";
}

button.onclick = afficher;


const boutonContact = document.getElementById("bouton-contact"); 
const formulaireContact = document.querySelector(".pop"); 

boutonContact.addEventListener("click", function(){
    formulaireContact.style.display = 'flex'; 
});

document.querySelector(".closed").addEventListener("click", function(){
    document.querySelector(".pop").style.display = "none";
});
