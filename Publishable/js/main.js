//Change header color
var img = document.getElementById('menu');
var elms = document.querySelectorAll("[id='a']");


window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById('navigatie');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("navbar1");
        img.src = "Design/menuBlack.svg"
        
        for(var i = 0; i < elms.length; i++) 
            elms[i].style.color='black'; // <-- whatever you need to do here.
    } else {
        nav.classList.remove("navbar1");
        img.src = "Design/menu.svg"
        for(var i = 0; i < elms.length; i++) 
            elms[i].style.color='white'; // <-- whatever you need to do here.
    }
}

//open smooth nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

//close smooth nav
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//form valideren
function validateForm(){
    let naam = document.forms["form"]["naam"].value;
    let email = document.forms["form"]["email"].value;
    let onderwerp = document.forms["form"]["onderwerp"].value;
    let bericht = document.forms["form"]["bericht"].value;

    if(naam == "" || email == "" || onderwerp == "" || bericht == ""){
        alert("Alle velden zijn verplicht");
        return false;
    }
    else{
        alert("Bedankt voor uw interesse! We zullen u zo rap mogelijk contacteren");
    }
}