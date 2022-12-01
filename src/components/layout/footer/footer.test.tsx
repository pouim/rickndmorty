import { render, screen } from "@testing-library/react";
import { Footer } from ".";

test("render footer", () => {
  render(<Footer />);
  
  expect(screen.getByRole('textbox')).toHaveTextContent("Designed & developed by");
  expect(screen.getByRole('link')).toHaveTextContent("Pouyan Ahmadpour");
});
