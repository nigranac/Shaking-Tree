import React from "react";
import { SmallTreeImage, TreeShakingButton } from "./styled";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  shakeTree,
  stopTree,
  fallOfApples,
  collectingApples,
} from "../../state/action-creators/userActions";
import tree from "../../assets/image/tree.svg";

const ShakeButton = ({ name }) => {
  const dispatch = useDispatch();
  const { shaking } = useSelector((state) => state.appleList, shallowEqual);
  return (
    <React.Fragment>
      <TreeShakingButton
        onClick={() => {
          dispatch(shakeTree());
          setTimeout(() => {
            dispatch(stopTree());
            dispatch(fallOfApples());
          }, 3000);
          setTimeout(() => {
            dispatch(collectingApples());
          }, 6000);
        }}
        disabled={shaking}
      >
        {name} <SmallTreeImage src={tree} shakingTree={shaking} />
      </TreeShakingButton>
    </React.Fragment>
  );
};

export default ShakeButton;
