import React, { useContext, useEffect } from "react";
import { CartContext } from "../../shared/context/cart-context";

import Counter from "../../shared/components/UIElements/Counter/Counter";
import StripeButton from "../components/StripeButton/StripeButton";
import DropDownItem from "../../shared/components/UIElements/DropDown/DropDownItem";

const CartSummary = () => {
  const [cart, setCart] = useContext(CartContext);
  let totalPrice = 0;

  const counter = {};
  useEffect(() => {}, [cart]);

  cart.forEach(function (obj) {
    var key = obj.id;
    counter[key] = (counter[key] || 0) + 1;
    if (obj.discount !== 0) totalPrice += obj.discountedPrice;
    else totalPrice += obj.price;
  });

  const deleteItem = (productId) => {
    const newCart = [...cart];
    const updatedCart = [];
    newCart.forEach((item) => {
      if (item.id !== productId) {
        updatedCart.push(item);
      }
    });

    setCart(updatedCart);
  };

  const uniqueItems = Array.from(new Set(cart.map((a) => a.id))).map((id) => {
    return cart.find((a) => a.id === id);
  });
  return (
    <div className="container mx-auto">
      {cart.length === 0 ? (
        <div className="p-4 flex items-center justify-center h-screen text-3xl">
          Your cart is currently empty
        </div>
      ) : (
        <>
          <ul className="px-4 block md:hidden shopping-cart-items">
            {uniqueItems.map((item) => {
              return (
                <DropDownItem key={item.id} item={item} counter={counter} />
              );
            })}
          </ul>
          <table className="hidden md:block table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2" colSpan="2">
                  Product
                </th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2" colSpan="2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {uniqueItems.map((item) => {
                const quantity = counter[item.id];
                const price =
                  item.discount !== 0 ? item.discountedPrice : item.price;
                return (
                  <tr key={item.id}>
                    <td className="border-b px-4 py-2">
                      <img
                        src={`${process.env.REACT_APP_ASSET_URL}${item.images[0].formats.thumbnail.url}`}
                        alt=""
                      />
                    </td>
                    <td className="border-b px-4 py-2">{item.title}</td>
                    <td className="border-b px-4 py-2">
                      ${item.discount !== 0 ? item.discountedPrice : item.price}
                    </td>
                    <td className="border-b px-4 py-2">
                      <Counter count={quantity} productId={item.id} />
                    </td>
                    <td className="border-b px-4 py-2">
                      ${(price * quantity).toFixed(2)}
                    </td>
                    <td className="border-b px-4 py-2">
                      <span
                        className="cursor-pointer"
                        onClick={() => deleteItem(item.id)}
                      >
                        X
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="p-4 flex justify-between">
            <span>Items in cart: {cart.length}</span>

            <span>Total price: ${+totalPrice.toFixed(2)}</span>
          </div>
          <div className=" p-4 mt-4 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <div className="uppercase text-lg text-red-700 font-semibold">
                *Please enter the following info for payments*
              </div>
              <div className="uppercase text-lg text-red-700 font-semibold">
                CC:4242 4242 4242 4242 exp:01/2021 cvc:123
              </div>
            </div>
            <StripeButton price={totalPrice} />
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
