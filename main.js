//two event listeners w/ unique callback function

//one array iteration(map,forEach,filter,etc.)

function meditationTimer() {
    setInterval(function() {
               date = new Date()
               let hour = date.getHours();
               let minutes = date.getMinutes();
               let seconds = date.getSeconds();
               document.getElementById("demo").innerHTML = hour + ":"+ minutes + ":" + seconds;
  }, 1000);
}