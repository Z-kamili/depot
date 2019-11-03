// JavaScript source code
var a1, a2, op;
function Afficher(number) {
    "use strict";
    if (document.getElementById("ecran").innerHTML === '+' || document.getElementById("ecran").innerHTML === '-' || document.getElementById("ecran").innerHTML === '*' || document.getElementById("ecran").innerHTML === '/') {
        op = document.getElementById("ecran").innerHTML;
        document.getElementById("ecran").innerHTML = "";
    }
    document.getElementById("ecran").innerHTML += number;

}
function Afficher2(num) {
    a1 = document.getElementById("ecran").innerHTML;
    document.getElementById("ecran").innerHTML = "";
    document.getElementById("ecran").innerHTML = num;
    
}
function Resulta() {

    a2 = document.getElementById("ecran").innerHTML;
    switch (op) {

        case '+': document.getElementById("ecran").innerHTML = Number(a1) + Number(a2); break;
        case '-': document.getElementById("ecran").innerHTML = Number(a1) - Number(a2); break;
        case '*': document.getElementById("ecran").innerHTML = Number(a1) * Number(a2); break;
        case '/': document.getElementById("ecran").innerHTML = Number(a1) / Number(a2); break;
        default  : document.getElementById("ecran").innerHTML = "Erreur";
    }

}
function Supprimer() {
  
    document.getElementById("ecran").innerHTML = "";

}