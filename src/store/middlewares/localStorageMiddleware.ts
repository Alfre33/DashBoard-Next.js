import { Action, Dispatch, MiddlewareAPI } from "redux";
import { RootState } from '../index';

export const localStorageMiddleware=(state:MiddlewareAPI)=>{
    return (next:Dispatch) => (action:Action) =>{
        next(action);
        if(action.type.includes("FavoritesPokemon/toggleFavorite")){
            const {favorites}=state.getState() as RootState
            localStorage.setItem('favorites pokemons',JSON.stringify(favorites));
            return;
        }
        // console.log({state: state.getState()})
    }
}