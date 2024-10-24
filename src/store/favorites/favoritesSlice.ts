import { createSlice } from '@reduxjs/toolkit';
import { DataPokemon } from '../../app/pokemons/interfaces/pokemon-data';


// '1' :{name:'bolbasour'}

interface FavoritesPokemons{
    [key: string]:DataPokemon
}

const initialState:FavoritesPokemons = {
    '1':{id:'1',name:'bulbasaur'}
}

export const FavoritesPokemonSlice = createSlice({
    name: 'FavoritesPokemon',
    initialState,
    reducers: {
        
    },
})

export const {  } = FavoritesPokemonSlice.actions

export default FavoritesPokemonSlice.reducer