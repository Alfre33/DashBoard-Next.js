"use client"
// import { useState } from 'react';
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store';
import { NoFavorites } from './NoFavorites';


export const FavoritesPokemonsList = () => {
    const pokemonsFavorites = useAppSelector((state) => state.favorites.favoritesList);
    const arrayPokemons=Object.values(pokemonsFavorites)
    // const [pokemons, setpokemons] = useState(arrayPokemons);
  return (
    <>
     {
      arrayPokemons.length
      ? <PokemonGrid pokemons={arrayPokemons}/> 
      : <NoFavorites/>
    }
    </>
  )
}
