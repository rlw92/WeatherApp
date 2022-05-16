
let cityI = document.getElementById("city");
cityI.addEventListener('click',SW)

//pexels key = "563492ad6f9170000100000113fdec34302b4f8cb1f64ca0b9632d54"

/*img = document.createElement("img");
img.src = "https://www.w3schools.com/images/w3schools_green.jpg"
document.querySelector("#weat").appendChild(img);
*/

function SW(){
    let city = document.getElementById("Name").value;
    console.log(city)
    weather = document.querySelector("#weather");
    

// URL (required), options (optional)
fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=e133f693876767edcedc77530a5a90ca', {mode: 'cors'})
.then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    console.log(response.base)
    console.log(response.weather[0].description)
    document.querySelector("#descr").textContent = response.weather[0].description
    document.querySelector("#City").textContent = response.name
    document.querySelector("#weat").textContent = response.weather[0].main

    let img = document.getElementById("weatimg")
    img.style.border = "dotted black 2px"
    img.src="http://openweathermap.org/img/wn/"+response.weather[0].icon+".png"
    
  })
  .catch(function(err) {
    console.log(err)
  });
}

  /*
   .catch(function(err) {
    console.log(err)
  });
  */
    

  console.log("HI")