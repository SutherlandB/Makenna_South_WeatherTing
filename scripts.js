//global variable
let userLat = 0;
let userLong = 0;
function successCallback(pos){
    console.log(pos);

    userLat = pos.coords.latitude;
    userLong = pos.coords.longitude;
    console.log("lat: " + userLat + " long: " + userLong);
    fetch(`http://api.weatherapi.com/v1/current.json?key=343026a1d40b4be1acd15649210108&q=${userLat},${userLong}`).then(response => response.json()).then(data => console.log(data));

}
const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
