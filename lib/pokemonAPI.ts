

// getPokemon List -> Get the first 151 pokemon
const POKEMON_API = "https://pokeapi.co/api/v2/"

const GetPokemonList = async() => {
    const data = await((await fetch(POKEMON_API + "pokemon?limit=151&offset=0")).json())
    return data.results
}

export default GetPokemonList

// getPokemon -> given a string "pikachu", get the information of pikachu