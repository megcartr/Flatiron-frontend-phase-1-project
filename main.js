//two event listeners w/ unique callback function

//one array iteration(map,forEach,filter,etc.)

fetch(`https://phase-1-project-usyy.onrender.com`), {
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify ({
      name: 'emotions'
  })
}
.then(function(response){
  return response.json();})
  .then(function(data){
    //data from DOM
})


//submit forms

let form = document.getElementById('form')

form.addEventListener('submit',function(event){
  event.preventDefault()
})

//timer
