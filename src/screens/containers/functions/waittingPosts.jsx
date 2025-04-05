import React from "react";
import BackButton from "../../../components/backButton/BackButton";
import Card from "../../../components/card/Card";

function WaittingPosts() {
  return (
    <div>
      <BackButton />
      <div className="w-full my-5">
        <div className="w-full grid grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default WaittingPosts;
