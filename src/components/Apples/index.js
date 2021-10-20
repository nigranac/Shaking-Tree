import React from "react";
import { AppleContainer, AppleImage } from "./styled";
import apple from "../../assets/image/apple.svg";

const Apple = ({ apples, shakingApples, style, index }) => {
  return (
    <AppleContainer style={style} index={index} imageStyle={apples}>
      <AppleImage
        src={apple}
        falling={apples.falling}
        fallApple={apples.didFall}
        shakingApples={shakingApples}
      />
    </AppleContainer>
  );
};

export default Apple;
