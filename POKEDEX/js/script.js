const BASEURL = "https://pokeapi.co/api/v2/pokemon/"


    let Capturar = document.querySelector('.Capturar');
    let Close = document.querySelector('.Close');
    let List = document.querySelector('li');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let liberarTodos = document.querySelector('.Liberar');
    let quantity = document.querySelector('.quantity');
    
    Capturar.addEventListener('click', () => {
        body.classList.add('active')
    })
    Close.addEventListener('click', () => {
        body.classList.remove('active')
    })




function getAllPokemon(){
    let pokemonPokedex = []
   fetch(BASEURL + '?limit=251').then( response => {
        if(response.status == 200){
            pokemonPokedex = response.json().then( json =>{
                json.results.map( pokemon => {
                    let liPokemon = document.createElement("li")
                    let divNomeId = document.createElement("div")
                    divNomeId.id = 'id-nome'
                    let divButtons = document.createElement("div")
                    divButtons.id = 'Buttons'
                    let divImg = document.createElement("div")
                    divImg.id = 'imgBox'
                    let imgPokemon = document.createElement("img")
                    imgPokemon.id = 'pokemonImg'
                    let idPokemon = document.createElement("p")
                    idPokemon.id = 'pokemonId'
                    let namePokemon = document.createElement("h2")
                    namePokemon.id = 'pokemonName'
                    let buttonInfo =  document.createElement("button")
                    buttonInfo.id = 'infoButton'
                    let buttonCap = document.createElement("button")
                    buttonCap.id = 'capButton'


                    fetch(pokemon['url']).then(response => {response.json().then( (pokemon) => { 
                        (imgPokemon.src = pokemon['sprites']['front_default'])
    
                            idPokemon.innerHTML = '#'+ pokemon.id;
                            namePokemon.innerHTML = pokemon.name
                            buttonInfo.innerHTML = `<button id="infoButton" onclick="abrirModal()">Info</button>`
                            
                            buttonCap.innerHTML = 'Capturar'
                            closeButton.innerHTML = 'Sair'
                            modalPokName.innerHTML = 'Pokemon nome'
                            
                    })})
                    

                    divButtons.appendChild(buttonInfo)
                    divButtons.appendChild(buttonCap)
                    divNomeId.appendChild(idPokemon)
                    divNomeId.appendChild(namePokemon)
                    divImg.appendChild(imgPokemon)

                    liPokemon.appendChild(divImg)
                    liPokemon.appendChild(divNomeId)
                    liPokemon.appendChild(divButtons)
                    document.getElementById("listaPokemon").appendChild(liPokemon)
                })
                return json})
                return pokemonPokedex
        }
   })
}

function fecharModal(){
    let modal = document.getElementById("modal")
    modal.style.display = "none"
}

function abrirModal(){
    let modal = document.getElementById("modal")
    modal.style.display = "block"
}
