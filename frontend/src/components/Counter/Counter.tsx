"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <button
        onClick={() => count > 0 && setCount((prev) => prev - 1)}
        className="border-black rounded-2xl px-2 bg-red-500"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border-black rounded-2xl px-2 bg-red-500"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
