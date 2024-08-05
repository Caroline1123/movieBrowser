import React from "react";
import { Title } from "./Title";
import { Spotlight } from "./Spotlight";
import { Trending } from "./Trending";

const HomePage: React.FC = () => {
  return( 
  <>
    <Title />
    <Spotlight />
    <Trending />
  </>)
};

export default HomePage;
