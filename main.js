//two event listeners w/ unique callback function

//one array iteration(map,forEach,filter,etc.)

const image = document.createElement("https://static.vecteezy.com/system/resources/previews/008/856/128/non_2x/black-silhouette-of-a-man-in-a-pose-for-meditation-meditation-and-yoga-in-the-lotus-position-illustration-isolated-on-white-background-vector.jpg")
image.src = meditationPose

const emotionFaces = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        body: JSON.stringify()
    }
}

function emotionFaces () {
    const emotions = fetch("http://localhost:3000/emotions")
    .then((response)=>response.json())
    .then((json)=>renderFaces(json))
}

function renderFaces(emotions) {
    document.addEventListener('DOMContentLoaded', function() {
        emotionFaces()
    })
}
