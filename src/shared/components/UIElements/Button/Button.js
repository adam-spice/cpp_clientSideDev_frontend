import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  let color = "blue";
  if (props.danger) color = "red";

  let button = (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 w-full text-white font-bold py-2 px-4 rounded uppercase`}
      onClick={props.onClick}
    >
      {props.icon && (
        <span className="mr-4">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      {props.children}
    </button>
  );
  if (props.inverse) {
    return (
      <button
        className={`bg-transparent hover:bg-${color}-500 w-full text-${color}-700 font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded uppercase`}
        onClick={props.onClick}
      >
        {props.icon && (
          <span className="mr-4">
            <FontAwesomeIcon icon={props.icon} />
          </span>
        )}{" "}
        {props.children}
      </button>
    );
  } else return button;
};

export default Button;
