import { render, screen} from "@testing-library/react";
import Search from "./Search";

test('render search input', () => {
  const mockedSetCity = jest.fn();

  render(<Search setCity={mockedSetCity} />);

  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});
