import { render, screen } from "@testing-library/react";
import Footer from "./Footer";


describe("Footer component", () => {
    test("checking if Copyright © is rendered", () => {
        render(<Footer/>);
        const h1Element = screen.getByText(/Copyright © /i);
        expect(h1Element).toBeInTheDocument();
      });

  test("checking if actions after button click are correct", () => {
    render(<Footer />);
    const linkElement = screen.getByRole("link", { name: /Jolanta Pisulska/i });
    expect(linkElement.getAttribute("href")).toBe("mailto:jolanta.pisulska@gmail.com");
  });

});
