import React from "react";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";

const clickBtn = (data: object) => {
  console.log("data :", data);
};

const About = () => {
  return (
    <div className="container">
      <Button text="Hello" clickCallback={clickBtn}></Button>

      <Input />
    </div>
  );
};

export default About;
