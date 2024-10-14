import Link from "next/link";
import Image from "next/image";
import { DataPokemon } from "../interfaces/pokemon-data";
import { GrFavorite } from "react-icons/gr";
import { ImPower } from "react-icons/im";

interface Props {
  pokemon: DataPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            className="h-24 w-24 text-white rounded-full mx-auto"
            alt={`pokemon ${name}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width="32"
            height="32"
          />
          {/* <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg> */}
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion...
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/pokemons"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-green-600">
              <ImPower size={30} color="#e5e619" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Habilidades
              </p>
              <p className="text-xs text-gray-500">Ver sus habilidades</p>
            </div>
          </Link>
          <Link
            href="/dashboard/pokemons"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-gray-800">
              <GrFavorite size={30} color="red" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favoritos
              </p>
              <p className="text-xs text-gray-500">Agregalo a tus favoritos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
