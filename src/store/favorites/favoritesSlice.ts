import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataPokemon } from '../../app/pokemons/interfaces/pokemon-data';


// '1' :{id:1,name:'bolbasour'}

export interface FavoritesPokemons{
    favoritesList:{[key: string]:DataPokemon}
}



const initialState:FavoritesPokemons = {
    favoritesList:{}, 
    // ...getPokemons(),
    // '1':{id:'1',name:'bulbasaur'},
    // '2':{id:'2',name:'ivysaur'},
    // '3':{id:'3',name:'venusaur'},
    // '4':{id:'4',name:'charmander'},

}

export const FavoritesPokemonSlice = createSlice({
    name: 'FavoritesPokemon',
    initialState,
    reducers: {
        setFavoritesPockemons:(state,action:PayloadAction<{[key: string]:DataPokemon}>)=>{
            state.favoritesList=action.payload;
        },
        toggleFavorite: (state,action:PayloadAction<DataPokemon>) =>{
            const pokemon = action.payload;
            const {id}= pokemon;
            if(!!state.favoritesList[id]){
                delete state.favoritesList[id];
                // return;
            }else{
                state.favoritesList[id]=pokemon;
            }
            //TODO: es mala practica hacer funciones de este tipo en el localStorage Solucion Middlewares
            localStorage.setItem('favorites pokemons',JSON.stringify(state.favoritesList))

        }
    },
})

export const { toggleFavorite,setFavoritesPockemons } = FavoritesPokemonSlice.actions

export default FavoritesPokemonSlice.reducer