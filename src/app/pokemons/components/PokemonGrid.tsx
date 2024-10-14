import { DataPokemon } from "../interfaces/pokemon-data";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: DataPokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        /* <Image
            key={pokemon.id}
              alt={`pokemon ${pokemon.name}`}
              width={100}
              height={100}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            /> */
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
};
