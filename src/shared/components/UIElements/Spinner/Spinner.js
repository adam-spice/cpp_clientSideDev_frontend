import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center content-center">
      <Loader
        type="Puff"
        color="#c53030"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
