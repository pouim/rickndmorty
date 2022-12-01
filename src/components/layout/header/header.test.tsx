import { render, screen } from "@testing-library/react";

import { Header } from ".";

test("render header", () => {
  render(<Header />);

  expect(screen.getByRole("textbox")).toHaveTextContent("Rick and Morty");
});
