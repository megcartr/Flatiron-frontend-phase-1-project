//two event listeners w/ unique callback function

//one array iteration(map,forEach,filter,etc.)

fetch("http://localhost:3000/emotions", {
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify ({
      name: 'emotions'
  })
})
.then(res => {
  res.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))