const pokemons = [
  {
    id: 1,
    name: 1,
    type: 1,
    url: 1,
  },
  {
    id: 2,
    name: 2,
    type: 1,
    url: 1,
  },
  {
    id: 3,
    name: 3,
    type: 1,
    url: 1,
  },
  {
    id: 4,
    name: 4,
    type: 1,
    url: 1,
  },
];

const list = document.querySelector("#list");

function showList(val = "") {
  list.innerHTML = "";
  const res = pokemons.forEach((pokemon) => {
    if (pokemon.name) {
      // <- 이부분 에러
      const li = document.createElement("li");
      li.innerHTML = `
      <p>이름: ${pokemon.name}</p>
      <p>속성: ${pokemon.type}</p>
      `;
      list.appendChild(li);
    }
  });
}
showList();

// 검색기능
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
});
