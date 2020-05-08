import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";

const Drawer = ({ setDrawerOpen, history }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={() => setDrawerOpen(false)} />
      <div className="bg-white absolute top-0 left-0 w-1/2 z-20 shadow-lg h-screen">
        <div
          className="mt-32 mx-8 w-3/4 cursor-pointer border-b hover:font-semibold"
          onClick={() => {
            history.push("/");
            setDrawerOpen(false);
          }}
        >
          Home
        </div>
        <div
          className="mt-4 mx-8 w-3/4 cursor-pointer border-b hover:font-semibold"
          onClick={() => {
            history.push("/shop");
            setDrawerOpen(false);
          }}
        >
          Shop
        </div>
        <div
          className="mt-4 mx-8 w-3/4 cursor-pointer border-b hover:font-semibold"
          onClick={() => {
            history.push("/about");
            setDrawerOpen(false);
          }}
        >
          About
        </div>
        <div
          className="mt-4 mx-8 w-3/4 cursor-pointer border-b hover:font-semibold"
          onClick={() => {
            history.push("/cart");
            setDrawerOpen(false);
          }}
        >
          Checkout
        </div>
      </div>
    </>,
    document.getElementById("drawer")
  );
};

export default withRouter(Drawer);
