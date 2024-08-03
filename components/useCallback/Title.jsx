import React from "react";

const Title = ({ title }) => {
  console.log("Title render");

  return <div className="text-2xl font-bold">{title}</div>;
};

export default Title // Title;
