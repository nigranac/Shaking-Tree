import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { TreeContainer, TreeImage } from "./styled";
import tree from "../../assets/image/tree.svg";
import Apple from "../Apples";

const Tree = ({ alt }) => {
  const { applesOnTree, shaking } = useSelector(
    (state) => state.appleList,
    shallowEqual
  );

  return (
    <TreeContainer>
      <TreeImage src={tree} alt={alt} shakingTree={shaking} />
      {applesOnTree
        .filter((fall) => !fall.didFall)
        .map((apples, index) => (
          <Apple
            key={apples.id}
            index={index}
            apples={apples}
            shakingApples={shaking}
          />
        ))}
    </TreeContainer>
  );
};

export default Tree;
