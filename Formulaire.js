
var Exp1 = new RegExp("^[a-zA-Z '-]{1,}$");
var Exp2 = new RegExp("^[a-zA-Z0-9 '-.]{1,}$");
var Cod = new RegExp("^[0-9]{5}$");
var Mail = new RegExp("^[a-z0-9]{2,}(([_.-]?)[a-z0-9])*([@]{1})[a-z0-9]{2,}(([_.-]?)[a-z0-9])*([.]{1})[a-z]{2,5}$");
var Tel = new RegExp("^[0-9-/]{14}$");

var Society = document.querySelector('#Societe');
var Contact = document.querySelector('#Contact');
var Adresse = document.querySelector('#Adresse');
var CodPos = document.querySelector('#CodPos');
var Ville = document.querySelector('#Ville');
var eMail = document.querySelector('#Mail');
var Phone = document.querySelector('#Phone');
//var Techniq = document.querySelector('#Techniq');
var Choix  = document.querySelector('#Choisir');
var Valeur = "";

    // Vérification Société, Contact, Ville+++++++++++++++++++++++++++++++++
var verif = function( evt ){
    //console.log(evt.srcElement.value);
    if (evt.srcElement.value != "") {
        //Valeur = evt.srcElement.value;
        Contrl1(evt.srcElement.value);
        evt.srcElement.style.backgroundColor = "white";
    }
    else {
        evt.srcElement.style.backgroundColor = "red";
    }
}
Society.addEventListener("input", verif );
Contact.addEventListener("input", verif );
Ville.addEventListener("input", verif );
function Contrl1(a){
    if (Exp1.test(a) == false){
        alert("Vérifiez")
    }
}

    // Vérification Adresse+++++++++++++++++++++++++++++++++++++++++++++++
var verif2 = function( evt ){
    if (evt.srcElement.value != "") {
        Contrl2(evt.srcElement.value);
        evt.srcElement.style.backgroundColor = "white";
    }
    else {
        evt.srcElement.style.backgroundColor = "red";
    }
}
Adresse.addEventListener("input", verif2 );
function Contrl2(b){
    if (Exp2.test(b) == false){
        alert("Vérifiez")
    }
}

    // Vérification Code Postal+++++++++++++++++++++++++++++++++++++++++
var verif3 = function( evt ){
    if (evt.srcElement.value != "") {

        Valeur = evt.srcElement.value;
        Contrl3();
        evt.srcElement.style.backgroundColor = "white";
    }
    else {
        evt.srcElement.style.backgroundColor = "red";
    }
}
CodPos.addEventListener("blur", verif3);
function Contrl3(){
    if (Cod.test(Valeur) == false){
        alert("Vérifiez le Code Postal")
        CodPos.focus();
    }
}

    // Vérification E-Mail++++++++++++++++++++++++++++++++++++++++++++
var verif4 = function( evt ){
    if (evt.srcElement.value != "") {
        Contrl4(evt.srcElement.value);
        evt.srcElement.style.backgroundColor = "white";
    }
    else {
        evt.srcElement.style.backgroundColor = "red";
    }
}
eMail.addEventListener("blur", verif4);
function Contrl4(d){
    if (Mail.test(d) == false){
        alert("Vérifiez votre Mail")
        eMail.focus();
    }
}

    // Vérification Téléphone+++++++++++++++++++++++++++++++++++++++++
var verif5 = function( evt ){
    if (evt.srcElement.value != "") {
        Contrl5(evt.srcElement.value);
        evt.srcElement.style.backgroundColor = "white";
    }
    else {
        evt.srcElement.style.backgroundColor = "red";
    }
}
Phone.addEventListener("blur", verif5);
function Contrl5(e){
    if (Tel.test(e) == false){
        alert("Vérifiez")
        Phone.focus();
    }
}



Choix.addEventListener("change", function () {
    if (Choix.value != "Choix"){
        var Contenu = Choix.options[Choix.selectedIndex].value;
        Techniq.value += Contenu + "\n";
    }
});