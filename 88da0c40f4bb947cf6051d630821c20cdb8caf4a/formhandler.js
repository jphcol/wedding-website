function handleForm (data) {
    const FD = new FormData(document.querySelector('form'));
    const Http = new XMLHttpRequest();
    const url = 'https://eo76a395x0bkcxi.m.pipedream.net';
    
    for (const[name, value] of Object.entries(data)) {
        FD.append(name, value);
    }
    Http.addEventListener('Load', (event) => {
        alert('Yeah! Data sent and response loaded.');
    });
    Http.addEventListener('error', (event) => {
        alert('Oops! Something went wrong.');
    });
    Http.open("POST", url);
    Http.setRequestHeader('x-api-key', 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana');
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send(
        JSON.stringify({
            form
        })
    );


    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    };
};