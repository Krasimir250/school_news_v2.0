import React from "react";
import Card from "../../components/card/Card";

const MyPosts = () => {
  return (
    <div className="w-full flex space-x-3">
      <Card removeBtn />
      <Card removeBtn />
      <Card removeBtn />
    </div>
  );
};

export default MyPosts;
