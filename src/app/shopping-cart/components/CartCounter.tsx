'use client'
import { useState } from "react";

export const CartCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
    return;
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <button
        onClick={increment}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 mt-4"
      >
        -
      </button>
    </>
  );
};
