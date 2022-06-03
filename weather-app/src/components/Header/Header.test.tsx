import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe("Header component", () => {
  test("checking if weather app is rendered", () => {
    render(<Header />);
    const h1Element = screen.getByText(/weather app/i);
    expect(h1Element).toBeInTheDocument();
  });

  test("checking if actions after button click are correct", () => {
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: /about us/i });
    expect(linkElement.getAttribute("href")).toBe("/about");
  });

});
