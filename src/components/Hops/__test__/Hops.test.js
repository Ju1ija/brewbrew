import { render, screen } from "@testing-library/react";
import Hops from "../Hops";

const mockData = {
  name: "Simcoe",
  amount: {
    value: "25",
    unit: "grams"
  }
}

test("renders loading", () => {
  render(<Hops />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});

describe("any props sent are rendered", () => {
  test("renders Hops component with data (name)", () => {
    render(<Hops hop={mockData} />);
    const element = screen.getByText(/Simcoe/);
    expect(element).toBeInTheDocument();
  });

  test("renders Hops component with data (value)", () => {
    render(<Hops hop={mockData} />);
    const element = screen.getByText(/25/);
    expect(element).toBeInTheDocument();
  });

  test("renders Hops component with data (unit)", () => {
    render(<Hops hop={mockData} />);
    const element = screen.getByText(/grams/);
    expect(element).toBeInTheDocument();
  });
});
