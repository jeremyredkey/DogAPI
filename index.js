// Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console.

// Building on the previous app, create an app that lets users choose to display between 1 and 50 random dog images, 
// then prints the results of the images in the console, and loads those images in the DOM.

// Create an app that loads a single random image for a specific breed. 
// This app should account for the happy case when the breed is found, as well as the unhappy case when it is not.


'use strict';

function getDogImage() {
  let userNum = $('#userInput').val()
  let dogBreed = $('#dogBreed').val()
  console.log(dogBreed)
  console.log(userNum)
const targetUrl = `https://dog.ceo/api/breed/${dogBreed}/images/random/${userNum}`;
  fetch(targetUrl)
     .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
     .catch(error => console.log(error));
}

function displayResults(responseJson) {
  
let imgArr = responseJson.message;
console.log(imgArr)
 for (let i = 0; i < imgArr.length; i++) {
  //replace the existing image with the new one
   $('.results').append(
   `<img src="${imgArr[i]}" class="results-img">`
  )
 }

  //display the results section
  $('.results').removeClass('hidden');
}
$('#undo').click(function undoButton(){
  $('.results-img').remove();

  $('.results').addClass('hidden');

})


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});