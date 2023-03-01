const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
    burgerIcon.classList.toggle('is-active')
});

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("navbar-item");
    for (i = 0; i < x.length +1; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  };

function attendingCheck() {
    if (document.getElementById('rsvpAttending').checked) {
        document.getElementById('menuAdultKid').style.display = 'inline-block';
    } else {
        document.getElementById('menuAdultKid').style.display = 'none';
    }
};
function ageCheck() {
    if (document.getElementById('adultMenu').checked) {
        document.getElementById('menuChoices').style.display = 'inline-block';
        document.getElementById('childOptions').style.display = 'none';
    } else if(document.getElementById('kidsMenu').checked) {
        document.getElementById('childOptions').style.display = 'inline-block';
        document.getElementById('menuChoices').style.display = 'none';
    } else{
        document.getElementById('menuChoices').style.display = 'none';
        document.getElementById('childOptions').style.display = 'none';
    }
};
