import React from "react";
import { Title } from "./Title";
import { Spotlight } from "./Spotlight";
import { Trending } from "./Trending";
import { Navbar } from "./../Navbar";

const HomePage: React.FC = () => {
  return( 
  <>
    <Title />
    <Spotlight />
    <Trending />
    <Navbar activePage= {"home"}   />
  </>)
};

export default HomePage;
