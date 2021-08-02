//global variable
var userLat = 0;
var userLong = 0;
function successCallback(pos){
    console.log(pos);

    userLat = pos.coords.latitude;
    userLong = pos.coords.longitude;
    toString(userLat);
    toString(userLong);
    console.log("lat: " + userLat + " long: " + userLong);
    fetch('http://api.weatherapi.com/v1/forecast.json?key=343026a1d40b4be1acd15649210108&q=' + userLat + ',' + userLong + '&days=3&aqi=no&alerts=no').then(response => response.json()).then(data => this.displayData(data));
}
function displayData(data)//this function takes in the data
{
  //Shows information for today
  document.getElementById("forecast-1-heading").innerHTML = data.forecast.forecastday[0].date;//goes specifically to the temperature value and displays it where forecast-1 is the id
  document.getElementById("forecast-1").innerHTML = data.current.temp_f;//goes specifically to the temperature value and displays it where forecast-1 is the id
  //Shows information for next 2 days
  document.getElementById("forecast-2-heading").innerHTML = data.forecast.forecastday[1].date;
  document.getElementById("forecast-2").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
  document.getElementById("forecast-3-heading").innerHTML = data.forecast.forecastday[2].date;
  document.getElementById("forecast-3").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
}
const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
