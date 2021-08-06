//global variable
var userLat = 0;
var userLong = 0;
function getWeatherIcon(condition,id){
  if (condition == "Partly cloudy")
  {
    document.getElementById(id).src = "partlycloudy-icon.png";
  }
  if (condition == "Sunny")
  {
    document.getElementById(id).src = "sun-icon.png";
  }
}
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
  let currDate = data.forecast.forecastday[0].date;//gets the current date
  let currDate2 = new Date(currDate.slice(0,4), parseInt(currDate.slice(5,7))-1, currDate.slice(8,10)); //takes the date and converts it into a date object
  const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //array of days
  document.getElementById("forecast-1-heading").innerHTML = weekArr[currDate2.getDay()] + " " + currDate.slice(8,10);//Gets the day from the date objet and usses the array to display the string name of that day                             goes specifically to the temperature value and displays it where forecast-1 is the id
  getWeatherIcon(data.current.condition.text,"forecast-1-icon");
  document.getElementById("forecast-1").innerHTML = data.current.temp_f + "°";//goes specifically to the temperature value and displays it where forecast-1 is the id
  //Shows information for next 2 days
  let secondDate = data.forecast.forecastday[1].date;
  let secondDate2 = new Date(secondDate.slice(0,4), parseInt(secondDate.slice(5,7))-1, secondDate.slice(8,10)); //takes the date and converts it into a date object
  document.getElementById("forecast-2-heading").innerHTML = weekArr[secondDate2.getDay()] + " " + secondDate.slice(8,10);
  document.getElementById("forecast-2").innerHTML = data.forecast.forecastday[1].day.avgtemp_f + "°";
  getWeatherIcon(data.forecast.forecastday[1].day.condition.text,"forecast-2-icon");
  let thirdDate = data.forecast.forecastday[2].date;
  let thirdDate2 = new Date(thirdDate.slice(0,4), parseInt(thirdDate.slice(5,7))-1, thirdDate.slice(8,10));
  document.getElementById("forecast-3-heading").innerHTML = weekArr[thirdDate2.getDay()] + " " + thirdDate.slice(8,10);
  getWeatherIcon(data.forecast.forecastday[2].day.condition.text,"forecast-3-icon");
  document.getElementById("forecast-3").innerHTML = data.forecast.forecastday[2].day.avgtemp_f + "°";
}
const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
