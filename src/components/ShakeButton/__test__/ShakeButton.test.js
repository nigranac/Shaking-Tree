import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import ShakeButton from "../index";
import { store } from "../../../state/store/configureStore";
beforeEach(() => {
  render(
    <redux.Provider store={store}>
      <ShakeButton />
    </redux.Provider>
  );
});

describe("Shake button", () => {
  test("Button correctly render", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("Button click", () => {
  test("Fire click event", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
