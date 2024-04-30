// 배열 데이터
const pokemons = [
  {
    id: 1,
    name: "이상해씨",
    type: "풀, 독",
    url: "./img/1.png",
  },
  {
    id: 2,
    name: "이상해풀",
    type: "풀, 독",
    url: "./img/2.png",
  },
  {
    id: 3,
    name: "이상해꽃",
    type: "풀, 독",
    url: "./img/3.png",
  },
  {
    id: 4,
    name: "메가 이상해꽃",
    type: "풀, 독",
    url: "./img/4.png",
  },
];

// 배열 데이터로 list 생성
const list = document.getElementById("list");
function showList(val = "") {
  list.innerHTML = "";
  const res = pokemons.forEach((pokemon) => {
    if (pokemon.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src='${pokemon.url}' alt='${pokemon.name}'>
      <p>이름: ${pokemon.name}</p>
      <p>속성: ${pokemon.type}</p>
      `;
      list.appendChild(li);
    }
  });
}
showList();

// 검색 기능
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
});
