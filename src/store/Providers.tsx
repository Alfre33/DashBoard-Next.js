"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritesPockemons } from "./favorites/favoritesSlice";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const pokemons = localStorage.getItem("favorites pokemons");
    const favorites = JSON.parse(pokemons ?? "{}");
    store.dispatch(setFavoritesPockemons(favorites));
  }, []);
  
  return <Provider store={store}>{children}</Provider>;
};
