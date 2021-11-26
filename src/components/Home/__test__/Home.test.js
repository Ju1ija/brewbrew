import { render, screen } from "@testing-library/react";
import Home from "../Home";

const mockData = {
  name: "testname",
  id: "testid",
  description: "testdescription"
}

test("renders loading", () => {
  render(<Home />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});

describe("any props sent are rendered", () => {
  test("renders home component with name", () => {
    render(<Home data={mockData} />);
    const element = screen.getByText("testname");
    expect(element).toBeInTheDocument();
  });

  test("renders home component with id", () => {
    render(<Home data={mockData} />);
    const element = screen.getByText("testid");
    expect(element).toBeInTheDocument();
  });

  test("renders home component with description", () => {
    render(<Home data={mockData} />);
    const element = screen.getByText("testdescription");
    expect(element).toBeInTheDocument();
  });

  test("renders the button component", () => {
    render(<Home data={mockData} />);
    const element = screen.getByTestId("buttonMain");
    expect(element).toBeInTheDocument();
  });
})
