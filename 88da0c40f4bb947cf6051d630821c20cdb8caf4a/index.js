const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
    burgerIcon.classList.toggle('is-active')
});




function handleForm () {
    const Http = new XMLHttpRequest();
    const url = 'https://eo76a395x0bkcxi.m.pipedream.net';
    Http.open("POST", url);
    Http.setRequestHeader('x-api-key', 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana');
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send(
        JSON.stringify({
            "Name" : "Jack"
        })
    );


    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    };
};