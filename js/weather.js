

getCurrentPosition(성공, 실패)의 역활

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = ;
  const lng = ;
  console.log(position)
}

function onGeoError() {
alert("위치 추적 실패")
}