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
    fetch('http://api.weatherapi.com/v1/forecast.json?key=343026a1d40b4be1acd15649210108&q=' + userLat + ',' + userLong + '&days=3&aqi=no&alerts=no').then(response => response.json()).then(data => console.log(data));
}
const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



