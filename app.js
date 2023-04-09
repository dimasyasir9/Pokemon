const navbar = document.querySelector("nav");
const imgMenu = document.createElement("i");

imgMenu.innerHTML = '<i data-feather="menu"></i>';
imgMenu.classList.add("menu");

navbar.appendChild(imgMenu);

// menu slide
const slide = document.querySelector(".navbar");
imgMenu.onclick = () => {
  slide.classList.toggle("slide");
};

document.addEventListener("click", (e) => {
  if (!imgMenu.contains(e.target) && !slide.contains(e.target)) {
    slide.classList.remove("slide");
  }
});

// pokemon
const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const containerSatu = document.querySelector("#container-satu");
const containerDua = document.querySelector("#container-dua");

for (let i = 1; i <= 20; i++) {
  const pokemonSatu = document.createElement("div");
  pokemonSatu.classList.add("pokemon");

  const imgSatu = document.createElement("img");
  imgSatu.src = `${imgUrl}${i}.png`;

  pokemonSatu.appendChild(imgSatu);
  containerSatu.appendChild(pokemonSatu);
}

for (let i = 21; i <= 40; i++) {
  const pokemonDua = document.createElement("div");
  pokemonDua.classList.add("pokemon");

  const imgDua = document.createElement("img");
  imgDua.src = `${imgUrl}${i}.png`;

  pokemonDua.appendChild(imgDua);
  containerDua.appendChild(pokemonDua);
}

// const container = document.querySelector("#container");

// for (let i = 1; i <= 500; i++) {
//   const pokemon = document.createElement("div");
//   pokemon.classList.add("pokemon");

//   const imgPokemon = document.createElement("img");
//   imgPokemon.src = `${imgUrl}${i}.png`;

//   const label = document.createElement("span");
//   label.append(`Pokemon no. ${i}`);

//   pokemon.appendChild(label);
//   pokemon.appendChild(imgPokemon);
//   container.appendChild(pokemon);
// }
