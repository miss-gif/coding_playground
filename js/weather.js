navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "705cc22546b2ab62a3f9dce86744cd06";

function onGeoOk(position) {
  const lat = position.coords.latitude; // latitude 위도
  const lng = position.coords.longitude; // longitude 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);

  fetch(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = date.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("위치 추적 실패");
}
