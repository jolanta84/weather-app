import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";


describe("About Us component", () => {
  test("checking if button is rendered", () => {
    render(<AboutUs />);
    const button= screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test("checking if actions after button click are correct", () => {
    render(<AboutUs />);
    const linkElement = screen.getByRole("link", { name: /check weather/i });
    expect(linkElement.getAttribute("href")).toBe("/");
  });

});
