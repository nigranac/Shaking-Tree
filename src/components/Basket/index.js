import React from "react";
import { BasketContainer, BasketImage } from "./styled";
import basket from "../../assets/image/basket.svg";
import { useSelector, shallowEqual } from "react-redux";
import Apple from "../Apples";

const Basket = ({ alt }) => {
  const { applesOnTree, shaking } = useSelector(
    (state) => state.appleList,
    shallowEqual
  );
  return (
    <BasketContainer>
      {applesOnTree
        .filter((fall) => fall.didFall)
        .map((apple, index) => (
          <Apple
            key={apple.id}
            apples={apple}
            shakingApples={shaking}
            style={{ marginTop: `${20 * (index % 2)}px` }}
          />
        ))}
      <BasketImage src={basket} alt={alt} />
    </BasketContainer>
  );
};

export default Basket;
