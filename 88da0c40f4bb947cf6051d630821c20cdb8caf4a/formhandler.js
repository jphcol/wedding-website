window.onload=function(){
const form = document.getElementById('rsvpForm');
const thankYouMessage = document.querySelector('#thank-you-message');
form.addEventListener("submit", evt => {
  evt.preventDefault();
  thankYouMessage.classList.add('show');
  handleForm();
  setTimeout(() => form.submit(), 1000);
})
}
function handleForm () {
    const nameForm = document.getElementById('formName').value;
    const rsvpFunction = () => {
      if(document.getElementById('rsvpAttending').checked == true) {
        return 'Attending';
      } else {
        return 'Not Attending';
      }
    };
    const menuFunction = () => {
      if(document.getElementById('adultMenu').checked == true) {
        return 'Adult Menu';
      } else if(document.getElementById('kidsMenu').checked == true) {
        return 'Kids Menu';
      } else {
        return 'null';
      }
    }
    const rsvp = rsvpFunction();
    const menu = menuFunction();
    const firstCourse = document.getElementById('firstCourse').value;
    const mainCourse = document.getElementById('mainCourse').value;
    const kidsOption = document.getElementById('kidsFood').value;
    const allergies = document.getElementById('allergies').value;
    const message = document.getElementById('message').value;
    fetch('https://6sxnidgy4j.execute-api.eu-west-2.amazonaws.com/Production', {
    method: 'POST',
    headers: {
      'x-api-key' : 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana',
      'Content-Type' : 'application/json'},
    body: JSON.stringify({
      "Guest_Number" : 160622,
      "Guest_Name" : nameForm,
      "RSVP" : rsvp,
      "MENU" : menu,
      "FIRST" : firstCourse,
      "MAIN" : mainCourse,
      "KIDSOPTION" : kidsOption,
      "ALLERGIES" : allergies,
      "MESSAGE" : message
      })
   }).then(response => {
    if(response.ok){
	    return response.json();  
    }
	  throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    console.log(jsonResponse);
  })
}