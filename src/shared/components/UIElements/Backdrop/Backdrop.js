import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
