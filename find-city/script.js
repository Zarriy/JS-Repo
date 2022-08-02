const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
  });

function searchCity(searchq, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(searchq, "gi");

    return place.city.match(regex) || place.city.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatch = function () {
  const matchArray = searchCity(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const city = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const state = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");
  container.innerHTML = html;
};

const searchBox = document.querySelector(".search");
const container = document.querySelector(".suggestions");

searchBox.addEventListener("change", displayMatch);
searchBox.addEventListener("keyup", displayMatch);
