//global variable
let userLat = 0;
let userLong = 0;
function successCallback(pos){
    console.log(pos);
    
    userLat = pos.coords.latitude;
    userLong = pos.coords.longitude;
    console.log("lat: " + userLat + " long: " + userLong);
}
const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


