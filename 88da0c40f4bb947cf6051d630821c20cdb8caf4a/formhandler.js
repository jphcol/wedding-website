const nameForm = document.getElementById('#name');

function handleForm (nameForm) {
const Http = new XMLHttpRequest();
const url='https://6sxnidgy4j.execute-api.eu-west-2.amazonaws.com/Production';
Http.open("POST", url);
Http.setRequestHeader('x-api-key', 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana');
Http.setRequestHeader('Content-Type', 'application/json');
Http.send(
    JSON.stringify({
        nameForm
        })
);

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
};
