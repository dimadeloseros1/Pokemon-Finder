import PokemonCard from '@/components/pokemon-card'
import PokemonGrid from '@/components/pokemon-grid'
import GetPokemonList from '@/lib/pokemonAPI'
import Image from 'next/image'

export default async function Home() {

  const pokemonList = await GetPokemonList()
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  )
}
