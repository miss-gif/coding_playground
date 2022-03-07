// 1. 배열
// 2. 비동기
// 이해가 안되는게 정상. 하지만 이해가 되도록 친해지도록 노력하자~ 자꾸보자~
// 자꾸보면 정든다 정들도록 노력하자~

// 숙제 -> 반복문을 이용하여 포켓몬 리스트를 만들어 보자
// 비동기과정을 더 이해가 잘되도록 익숙하게끔 공부하자 이론이해필요

const 포켓몬넘버 = document.querySelector(".포켓몬넘버").value;

const url = `https://pokeapi.co/api/v2/pokemon/`${포켓몬넘버}`;
const pokemonsEl = document.querySelector(".pokemons");

fetch(url)
  .then(async (res) => {
    // 성공 시 출력되는 부분
    const json = await res.json();

    // 구조 분해 할당
    const {
      name, // 이름
      height, // 높이
      weight, // 무게
      sprites: {
        // 이미지
        other: {
          dream_world: { front_default: pokemonImage },
        },
      },
    } = json;

    console.log(name, height, weight, pokemonImage);

    pokemonsEl.innerHTML = `
        <li>
            <h3>${name}</h3>
            <img src="${pokemonImage}" alt="${name}" />
            <p>키 : ${height}cm</p>
            <p>무게 : ${weight}kg</p>
        </li>`;
  })

  .catch((err) => console.log("뿡...")); // 실패 시 출력되는 부분

//자바스크립트가 기본적으로 제공하는 비동기방식 (내장함수)
// 객체,,,배열,,,내장함수..
// 성공과 실패로 나뉜다.
// 어씽크어웨이 악시오스..>>> 성공과 실패로 구분한다.

// fetch(url)
// .then(()=> {
//     console.log(data...)
// })
// .catch(()=>{
//     console.log('실패했어요 데이터를 불러오지 못했어요..')
// })

// async function 함수명() {
//   await 비동기_처리_메서드_명();
// }

// const 함수명 = async () => {
//   await 비동기_처리_메서드_명();
// };
