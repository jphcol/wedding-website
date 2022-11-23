function handleForm () {
    const nameForm = document.getElementByIdAll('formName').value;
    const rsvpAttending = document.getElementByIdAll('rsvpAttending').value;
    const rsvpNotAttending = document.getElementByIdAll('rsvpNotAttending').value;
    const firstCourse = document.getElementByIdAll('firstCourse').value;
    const mainCourse = document.getElementByIdAll('mainCourse').value;
    const dessertCourse = document.getElementByIdAll('dessertCourse').value;
    const allergies = document.getElementByIdAll('allergies').value;
    const message = document.getElementByIdAll('message').value;
    const Http = new XMLHttpRequest();
    const url='https://6sxnidgy4j.execute-api.eu-west-2.amazonaws.com/Production';
    Http.open("POST", url);
    Http.setRequestHeader('x-api-key', 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana');
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send(
        JSON.stringify({
            "Guest_Number" : 160622,
            "Guest_Name" : nameForm,
            "ATTENDING" : rsvpAttending,
            "NOT_ATTENDING" : rsvpNotAttending,
            "FIRST" : firstCourse,
            "MAIN" : mainCourse,
            "DESSERT" : dessertCourse,
            "ALLERGIES" : allergies,
            "MESSAGE" : message
            })
    );
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    };
    if(alert('Thanks ' + nameForm)){}
    else    window.location.reload(); 
    };