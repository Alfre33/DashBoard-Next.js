import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => {
  return (
    <div className='h-[50vh] flex flex-col justify-center items-center'>
        <IoHeartOutline size={200} className="text-red-500"/>
    <span className="text-2xl">No hay favoritos</span>
    </div>
  )
}
