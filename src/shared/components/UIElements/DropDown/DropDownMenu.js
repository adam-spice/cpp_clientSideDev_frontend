import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button/Button";
import DropDownItem from "./DropDownItem";
import Backdrop from "../Backdrop/Backdrop";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = (props) => {
  const { history, setCartOpen } = props;
  const [cart] = useContext(CartContext);

  const counter = {};
  let totalPrice = 0;

  cart.forEach((item) => {
    if (item.discount !== 0) totalPrice += item.discountedPrice;
    else totalPrice += item.price;
    var key = item.id;
    counter[key] = (counter[key] || 0) + 1;
  });

  const uniqueItems = Array.from(new Set(cart.map((a) => a.id))).map((id) => {
    return cart.find((a) => a.id === id);
  });

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={() => setCartOpen(false)} />
      <div className="fixed p-4 top-0 right-0 w-auto  z-20">
        <div className="my-4 mr-8 float-right bg-white w-full relative rounded p-5">
          <div className="flex justify-end">
            <span
              className="font-semibold text-xl cursor-pointer"
              onClick={() => setCartOpen(false)}
            >
              X
            </span>
          </div>
          <div className="shopping-cart-header">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="badge">{cart.length}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total: </span>
              <span className="main-color-text">${+totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <ul className="shopping-cart-items">
            {uniqueItems.map((item) => {
              return (
                <DropDownItem key={item.id} item={item} counter={counter} />
              );
            })}
          </ul>
          <Button
            danger
            onClick={() => {
              setCartOpen(false);
              history.push("/cart");
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>,
    document.getElementById("menu")
  );
};

export default withRouter(DropDownMenu);
