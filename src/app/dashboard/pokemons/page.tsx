import { DataPokemon, PokemonsResponse } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";



export const metadata = {
 title: 'Lista de Pokemons',
 description: 'Lista de Pokemons',
};
const getPokemons = async (limit = 10, offset = 0): Promise<DataPokemon[]> => {
  const dataPokemon: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());
  const pokemons = dataPokemon.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

//   throw new Error ('error de prueba') Error 500
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col mt-7">
        <span className="text-4xl text-blue-700 text-center">"Lista de Pokemons" <small className="text-2xl text-blue-400">Contenido estatico</small></span>
        <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
