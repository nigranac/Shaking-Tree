import * as redux from "react-redux";
import { render, screen } from "@testing-library/react";
import Basket from "../index";
import { store } from "../../../state/store/configureStore";

test("Tree renders correctly", () => {
  render(
    <redux.Provider store={store}>
      <Basket alt="tree" />
    </redux.Provider>
  );
  const basketImage = screen.getAllByAltText("tree");
  expect(basketImage.length).toEqual(1);
});
