import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Page Not Found component", () => {
  test('checking if button is rendered ond have attribute type="text', () => {
    const mockedSetCity = jest.fn();
    render(<Search setCity={mockedSetCity} />);
    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
});
