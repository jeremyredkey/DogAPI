'use strict';


function getDogNumber() {
  let dogNumber = $('#userInput').val()
  console.log(dogNumber)
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Error: Please enter number between 1 & 50.'));
}

function displayResults(responseJson) {
let dogNumber = $('#userInput').val()

for(let i = 0; i < dogNumber; i++) {
console.log(responseJson.message[i])
  $('.entry').append(`<img src="${responseJson.message[i]}" class="results-img-${i+1}">`);

  }
   $('.results').removeClass('hidden');
 $('.message').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogNumber();
    $('.entry').html('');
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
'use strict';


function getDogNumber() {
  let dogNumber = $('#userInput').val()
  console.log(dogNumber)
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Error: Please enter number between 1 & 50.'));
}

function displayResults(responseJson) {
let dogNumber = $('#userInput').val()

for(let i = 0; i < dogNumber; i++) {
console.log(responseJson.message[i])
  $('.entry').append(`<img src="${responseJson.message[i]}" class="results-img-${i+1}">`);

  }
   $('.results').removeClass('hidden');
 $('.message').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogNumber();
    $('.entry').html('');
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
