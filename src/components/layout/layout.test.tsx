import { render, screen } from "@testing-library/react";

import AppLayout from ".";

test("render layout", () => {
  render(
    <AppLayout>
      <div data-testid="#children">Hello world!</div>
    </AppLayout>
  );

  expect(screen.getByTestId("#header-container")).toBeTruthy();
  expect(screen.getByTestId("#footer-container")).toBeTruthy();
  expect(screen.getByTestId("#children")).toBeTruthy();
});
