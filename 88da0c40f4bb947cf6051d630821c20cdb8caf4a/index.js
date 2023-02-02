const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
    burgerIcon.classList.toggle('is-active')
});

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