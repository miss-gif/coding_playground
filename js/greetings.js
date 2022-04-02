// 마지막 코드
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const good = document.querySelector("#good");

// 반복되는 문자열은 대문자 변수로 저장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KET, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KET);
  good.innerText = `hi ${username}`;
  good.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KET);

if (saveUsername === null) {
  // form을 보여줌
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // good를 보여줌
  paintGreetings(saveUsername);
}
