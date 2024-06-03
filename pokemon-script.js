Handlebars.registerHelper("increaseIndex", function (inValue) {
  let retValue = ++inValue;
  return retValue;
});

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function popuniPokemone() {
  const data = JSON.parse(xhr.response);
  const source = document.getElementById("pokemon-lista").innerHTML;
  const template = Handlebars.compile(source);
  const context = { pokemon: data.pokemon_species.slice(0, 20) };
  const html = template(context);

  document.getElementById("pokemon-output").innerHTML = html;
}

xhr.onload = function () {
  popuniPokemone();

  $('[data-bs-toggle="popover"]').popover();
};

xhr.send();
