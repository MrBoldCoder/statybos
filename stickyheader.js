// cookie stuff
document.cookie = "promo_shown=1; Max-Age=2600000; Secure";
("promo_shown=1; Max-Age=2600000; Secure");

//end of cookie stuff

/*STICKY HEADER//////////////////////////*/

window.onscroll = function () {
  myFunction();
};

// const menuanchor = document.querySelector("menuanchor");
const header = document.querySelector(".header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("sticky2");
    // menuanchor.classList.remove(".menubtn");
    document.getElementById("menuanchor1").classList.remove("menubtn");
    document.getElementById("menuanchor2").classList.remove("menubtn");
    // document.getElementById("menuanchor3").classList.remove("menubtn");
    document.getElementById("menuanchor4").classList.remove("menubtn");
    document.getElementById("menuanchor5").classList.remove("menubtn");
  } else {
    header.classList.remove("sticky");
    document.getElementById("menuanchor1").classList.add("menubtn");
    document.getElementById("menuanchor2").classList.add("menubtn");
    // document.getElementById("menuanchor3").classList.add("menubtn");
    document.getElementById("menuanchor4").classList.add("menubtn");
    document.getElementById("menuanchor5").classList.add("menubtn");
  }
}

// hamburger menu

const element = document.getElementById("ultra");
const elementas = document.getElementById("menuanchor1");
const elementas1 = document.getElementById("menuanchor1");
const elementas2 = document.getElementById("menuanchor2");
const elementas4 = document.getElementById("menuanchor4");
const elementas5 = document.getElementById("menuanchor5");

const menu = document.querySelector(".ul");
const menuItems = document.querySelectorAll(".menubtn");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menuIcon = document.querySelector(".open");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    element.classList.remove("ulmobilenav");
    elementas.classList.remove("aaa");
    elementas1.classList.remove("aaa");
    elementas2.classList.remove("aaa");
    elementas4.classList.remove("aaa");
    elementas5.classList.remove("aaa");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    element.classList.add("ulmobilenav");
    elementas.classList.add("aaa");
    elementas1.classList.add("aaa");
    elementas2.classList.add("aaa");
    elementas4.classList.add("aaa");
    elementas5.classList.add("aaa");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// end of hamburger menu
