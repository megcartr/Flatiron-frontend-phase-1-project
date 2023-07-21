//two event listeners w/ unique callback function

//Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Interacting with your API data in some way should present an opportunity to use array iteration.

fetch("http://localhost:3000/emotions")
  .then (response => response.json())
  .then (function(data){
    console.log(data)
  }) 
//   method:'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify ({
//       name: 'emotions'
//   })
// }
// .then(function(response){
//   return response.json();})
//   .then(function(data){
//     //data from DOM
// })


//submit forms

let submitForm = document.querySelector("submitForm");
let submitButton = document.querySelector("SubmitButton");

submitButton.addEventListener("click", function(e){
  e.preventDefault();
  alert ("SUBMITTED!");
});

submitForm.addEventListener("submit", function(e) {
  e.preventDefault();
})


