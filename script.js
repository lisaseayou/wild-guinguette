<<<<<<< HEAD
var buttonPopup = document.getElementById('button-popup');
var overlay = document.getElementById('overlay');
button-popup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}
=======


var button = document.getElementsByClassName('button')[0];
var image = document.getElementsByClassName('imgmenu')[0];

window.afficher = function(){
image.style.display = (image.style.display == "block") ? "none" : "block";
}



button.onclick = afficher;
>>>>>>> menu
