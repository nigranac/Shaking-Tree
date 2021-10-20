import * as actionTypes from "../action-types/actionTypes";

const initialState = {
  applesOnTree: [
    { id: 1, coordX: "30%", coordY: "15%", falling: false, didFall: false },
    { id: 2, coordX: "22%", coordY: "20%", falling: false, didFall: false },
    { id: 3, coordX: "30%", coordY: "35%", falling: false, didFall: false },
    { id: 4, coordX: "18%", coordY: "34%", falling: false, didFall: false },
    { id: 5, coordX: "12%", coordY: "44%", falling: false, didFall: false },
    { id: 6, coordX: "50%", coordY: "15%", falling: false, didFall: false },
    { id: 7, coordX: "42%", coordY: "20%", falling: false, didFall: false },
    { id: 8, coordX: "57%", coordY: "30%", falling: false, didFall: false },
    { id: 9, coordX: "36%", coordY: "30%", falling: false, didFall: false },
    { id: 10, coordX: "40%", coordY: "40%", falling: false, didFall: false },
    { id: 11, coordX: "67%", coordY: "37%", falling: false, didFall: false },
    { id: 12, coordX: "76%", coordY: "28%", falling: false, didFall: false },
    { id: 13, coordX: "80%", coordY: "40%", falling: false, didFall: false },
    { id: 14, coordX: "70%", coordY: "18%", falling: false, didFall: false },
  ],
  shaking: false,
};

export const shakingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHAKE_TREE:
      return {
        ...state,
        shaking: true,
      };
    case actionTypes.STOP_TREE:
      return {
        ...state,
        shaking: false,
      };
    case actionTypes.FALL_OF_APPLES:
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      const randomizedState = {
        list: state.applesOnTree.map((listItem) => {
          // get random number between 1 and 0
          const randomInt = getRandomInt(0, 2);
          return {
            id: listItem.id,
            coordX: listItem.coordX,
            coordY: listItem.coordY,
            falling: listItem.didFall ? true : !(randomInt === 1),
            didFall: listItem.didFall,
          };
        }),
      };

      return { ...state, applesOnTree: randomizedState.list };
    case actionTypes.COLLECTING_APPLES:
      const apples = state.applesOnTree.map((listItem) => {
        return {
          id: listItem.id,
          coordX: listItem.coordX,
          coordY: listItem.coordY,
          falling: listItem.falling,
          didFall: listItem.falling,
        };
      });
      return { ...state, applesOnTree: apples };
    default:
      return state;
  }
};
