import { render, screen } from "@testing-library/react";

import PageNotFound from './PageNotFound';


describe("Page Not Found component", () => {
  test("404 | This page could not be found", () => {
    render(<PageNotFound />);
    const h1Element = screen.getByText(/404 | This page could not be found/i);
    expect(h1Element).toBeInTheDocument();
  });


});
