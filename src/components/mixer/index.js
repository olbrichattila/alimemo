import React from "react";
import Spinner from "../spinner";
import "./index.css";

const Mixer = () => {
  return (
    <div className="mixer">
      <p>I am mixing your cards</p>
      <p>Please wait</p>
      <div className="spinnerWrapper">
        <Spinner size={50} color="#4285f4" />
      </div>
    </div>
  );
};

export default Mixer;
