import PokemonCard from '@/components/pokemon-card'
import PokemonGrid from '@/components/pokemon-grid'
import { getPokemonList } from '@/lib/pokemonAPI'
import Image from 'next/image'


export default async function Home() {

  const pokemonList = await getPokemonList()
  console.log(pokemonList)
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  )
}
