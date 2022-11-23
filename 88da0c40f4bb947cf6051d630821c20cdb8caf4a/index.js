const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
    burgerIcon.classList.toggle('is-active')
});

function attendingCheck() {
    if (document.getElementById('rsvpAttending').checked) {
        document.getElementById('menuChoices').style.display = 'inline-block';
    } else {
        document.getElementById('menuChoices').style.display = 'none';
    }
};