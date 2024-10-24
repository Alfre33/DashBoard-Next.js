import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";



export const metadata = {
 title: 'Pokemons Favoritos',
 description: 'Lista de Pokemons Favoritos',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col mt-7">
        <span className="text-4xl text-blue-700 text-center">"Tus Pokemons Favoritos" <small className="text-2xl text-blue-400">Global State With Redux</small></span>
        <PokemonGrid pokemons={[]}/>
    </div>
  );
}
