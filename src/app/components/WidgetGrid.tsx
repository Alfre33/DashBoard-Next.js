'use client'
import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { CiCalculator2 } from "react-icons/ci";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count)

  const counter={
    title:count,
    subtitle:'Counter',
    label:'Counter estado global',
    icon:<CiCalculator2 size={50} className="text-blue-600"/>,
    href:'/dashboard/counter'
  }

  return (
    <div className="flex flex-wrap p-3">
    <SimpleWidget counter={counter}/>
    </div>
  )
}
