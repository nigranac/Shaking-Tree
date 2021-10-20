import * as actionTypes from "../action-types/actionTypes";

export const shakeTree = () => (dispatch) => {
  dispatch({
    type: actionTypes.SHAKE_TREE,
  });
};
export const stopTree = () => (dispatch) => {
  dispatch({
    type: actionTypes.STOP_TREE,
  });
};
export const fallOfApples = () => (dispatch) => {
  dispatch({
    type: actionTypes.FALL_OF_APPLES,
  });
};
export const collectingApples = () => (dispatch) => {
  dispatch({
    type: actionTypes.COLLECTING_APPLES,
  });
};
