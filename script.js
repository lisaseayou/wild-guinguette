

var button = document.getElementsByClassName('button')[0];
var image = document.getElementsByClassName('imgmenu')[0];

window.afficher = function(){
image.style.display = (image.style.display == "block") ? "none" : "block";
}



button.onclick = afficher;
