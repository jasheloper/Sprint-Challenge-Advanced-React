import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


describe("renders without crashing", () => {
  it('shows a welcome message', () => {

    const { getByText } = render(<App />);
    getByText("Women's World Cup players");
  });
});
