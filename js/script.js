let output = '';
let html = '';

const DOMElements = {
  search: document.querySelector('#search'),
  main: document.querySelector('main')
};

function charSearch() {
  const pokemon = DOMElements.search.value;
  DOMElements.search.value = '';

  return getContent(pokemon)
};

async function getContent(pokemon){
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase().trim()}/`);
    const data = await response.json();
    
    console.log(data);

    show(data);
  } catch (e) {
    console.log(e);
  }
};

function show(poke){
  for( let value = poke.abilities.length - 1; value >= 0; value-- ){
    ability = poke.abilities[value].ability.name;

    html += 
    `
      <li class="abilities">${ability}</li>
    `;

    output = `
    <div class="card">
      <h2 class="poke-name">#${poke.id} - ${poke.name}</h2> 
      <img src="${poke.sprites.front_shiny}" />
      <ul>
        ${html}
      </ul>
    </div>
    `
  }
  
  html = '';

  DOMElements.main.innerHTML = output;
};

getContent();