var searchfield = document.querySelector(".searchfield")
var searchbutton = document.querySelector(".sumbitbutton")

searchbutton.addEventListener("click", function(event){
    event.preventDefault()
    console.log (searchfield)
    changecity(searchfield.value)
})
//c2955d89e2d1a0ef70aa557e788db9c0

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function changecity(city){
    var url = "http://api.openweathermap.org/geo/1.0/direct?q="
    fetch(url + city + "&appid=c2955d89e2d1a0ef70aa557e788db9c0")
    .then(function(res){
        res.json()
        .then(function(data){
            console.log(data)
            currentweather(data[0].lat,data[0].lon)
        })
    })
}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
function currentweather(lats, lons){
    var url ="https://api.openweathermap.org/data/2.5/onecall?"
    var coordinates = "lat="+lats+"&lon="+lons
    fetch(url + coordinates + "&units=imperial&appid=c2955d89e2d1a0ef70aa557e788db9c0")
    .then(function(res){
        res.json()
        .then(function(data){
            console.log(data)
        })
    })
}