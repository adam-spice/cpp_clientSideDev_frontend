import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

const Counter = ({ productId, count }) => {
  const [cart, setCart] = useContext(CartContext);

  const increment = () => {
    const productToAdd = cart.findIndex((i) => i.id === productId);
    setCart((currentState) => [...currentState, currentState[productToAdd]]);
  };

  const decrement = () => {
    const productToRemove = cart.findIndex((i) => i.id === productId);
    const newCart = cart.filter((item, index) => index !== productToRemove);
    setCart(newCart);
  };

  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={count}
          readOnly
        ></input>
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin" onClick={increment}>
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
