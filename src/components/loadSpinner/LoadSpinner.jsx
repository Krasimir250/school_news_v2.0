import React from "react";
import { FadeLoader } from "react-spinners";

const LoadSpinner = () => {
  return (
    <div className="flex justify-center w-full h-full items-center">
      <FadeLoader />
    </div>
  );
};

export default LoadSpinner;
