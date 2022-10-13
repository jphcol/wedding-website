const Http = new XMLHttpRequest();
const url = 'https://eo76a395x0bkcxi.m.pipedream.net';

function handleForm () {
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