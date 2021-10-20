import * as redux from "react-redux";
import { render, screen } from "@testing-library/react";
import Tree from "../index";
import { store } from "../../../state/store/configureStore";

test("Tree renders correctly", () => {
  render(
    <redux.Provider store={store}>
      <Tree alt="tree" />
    </redux.Provider>
  );
  const treeImage = screen.getAllByAltText("tree");
  expect(treeImage.length).toEqual(1);
});
