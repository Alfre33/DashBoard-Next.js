"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { increment, decrement, initCounterState } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props{
  value:number;
}

interface ResponseCounter {
  method: string;
  count:  number;
}


const getApiCounter = async ():Promise<ResponseCounter>=>{
const data =await fetch('/api/counter').then(response => response.json());
return data;
}

export const CartCounter = ({ value=0 }:Props) => {
  // const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   if (counter > 0) setCounter(counter - 1);
  //   return;
  // };


  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };
  const OnDecrement = () => {
    if (count > 0) dispatch(decrement());
    return;
  };

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [value,dispatch]);
  
  useEffect(() => {
    getApiCounter()
    .then(({count})=> dispatch(initCounterState(count)))

  }, [dispatch]);

  

  return (
    <>
      <span className="text-9xl">{count}</span>
      <button
        onClick={onIncrement}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
      >
        +
      </button>
      <button
        onClick={OnDecrement}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 mt-4"
      >
        -
      </button>
    </>
  );
};
