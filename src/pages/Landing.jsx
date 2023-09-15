import React from "react";
import { useLoaderData } from "react-router-dom";

export const landingLoader = async () => {
  return "Start thinking out of the box";
};

const Landing = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return <div></div>;
};

export default Landing;
