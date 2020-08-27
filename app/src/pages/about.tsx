import React from "react";
import { Button } from "../components/atoms/Button";

const clickBtn = (data: object) => {
  console.log("data :", data);
};

const About = () => {
  return (
    <div className="container">
      <Button text="Hello" clickCallback={clickBtn}></Button>
    </div>
  );
};

export default About;
