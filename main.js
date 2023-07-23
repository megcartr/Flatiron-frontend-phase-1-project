//two event listeners w/ unique callback function

//Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Interacting with your API data in some way should present an opportunity to use array iteration.
 

  document.addEventListener("DOMContentLoaded", () => {
   
  fetch("http://localhost:3000/emotions")
  .then (response => response.json())
  .then (emotions => renderEmotions(emotions))
 

  function renderEmotions(emotions) {
    emotions.forEach((emotion) => {
      const emotionList = document.getElementById("container")
      document.getElementById("name")
      document.getElementById("image")

      const button = document.createElement("button")
      button.setAttribute("id", `${emotions.id}`)

      const container = container.append("emotionList")
    })}
  })

// submit forms

function isFinished(event) {
  e.preventDefault();
  alert ("SUBMITTED!");
}

const click = document.getElementById("submitForm")
click.addEventListener("click", isFinished)

const submit = document.getElementById("submitForm")
submit.addEventListener("submit", isFinished)


