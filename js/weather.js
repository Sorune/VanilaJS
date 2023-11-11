const CURRENT_WEATHER_KEY = 'd94b3a66b8d950c08d93527856ea371f'

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=${CURRENT_WEATHER_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather sapn:first-child")
        const city = document.querySelector("weather sapn:last-child")
        const name = data.name;
        const weather.innerText = data.weather[0].main;
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
