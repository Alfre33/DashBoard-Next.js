import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { SidebarMenuItem } from './SidebarMenuItem';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCalculate,MdCatchingPokemon } from "react-icons/md";

const menuItems=[
    {
        path:'/dashboard/main',
        icon: <LuLayoutDashboard size={30} />,
        title: 'Dashboard',
        subTitle:'Menu de navegacion'
    },
    {
        path:'/dashboard/counter',
        icon: <MdCalculate size={30} />,
        title: 'Counter',
        subTitle:'Contador'
    },
    {
        path:'/dashboard/pokemons',
        icon: <MdCatchingPokemon size={30} />,
        title: 'Pokemons',
        subTitle:'Lista de pokemons'
    },
]
export const SideBar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll"
      style={{ width: "400px" }}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <FaReact className="mr-3"/>
          Dash
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib"
              alt=""
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Alfredo Gaspar</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
            menuItems.map(itemMenu => <SidebarMenuItem {...itemMenu}/>)
        }
      </div>
    </div>
  );
};
