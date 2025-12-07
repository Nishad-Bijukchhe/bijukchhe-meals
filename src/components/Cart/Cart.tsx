"use client";

import { ShoppingCart } from "lucide-react";
import { Fragment, useRef } from "react";

const Cart = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleCartModal = () => {
    modalRef.current?.classList.toggle("hidden");
  };

  return (
    <Fragment>
      <button
        className="bg-black/50 text-white  px-2 py-2 rounded-2xl flex sm:px-4"
        onClick={toggleCartModal}
      >
        <ShoppingCart />
        <span className="hidden mx-4 sm:flex">Cart</span>
        <span className="hidden bg-red-800 px-4 rounded-2xl sm:flex">0</span>
      </button>
      {/* MODAL/DIALOG */}
      {/* OVERLAY */}
      <div
        ref={modalRef}
        className="fixed left-0 top-0 bg-black/50 w-screen h-screen hidden"
      >
        {/* dialog box */}
        <div className="bg-white w-[30%] m-auto mt-50 rounded-lg p-6">
          <ul>
            <li>Momo</li>
            <li>Pizza</li>
            <li>Chowmein</li>
          </ul>
          <button
            className=" rounded-2xl text-white bg-red-800 hover:bg-red-700 my-2 px-2 py-1"
            onClick={toggleCartModal}
          >
            Close Cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
