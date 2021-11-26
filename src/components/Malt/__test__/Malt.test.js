import { render, screen } from "@testing-library/react";
import Malt from "../Malt";

const mockData = {
  name: "Extra Pale",
  amount: {
    value: "2.7",
    unit: "kilograms"
  }
}

test("renders loading", () => {
  render(<Malt />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});

describe("any props sent are rendered", () => {
  test("renders Malt component with data (name)", () => {
    render(<Malt malt={mockData} />);
    const element = screen.getByText(/Extra Pale/);
    expect(element).toBeInTheDocument();
  });

  test("renders Malt component with data (value)", () => {
    render(<Malt malt={mockData} />);
    const element = screen.getByText(/2.7/);
    expect(element).toBeInTheDocument();
  });

  test("renders Malt component with data (unit)", () => {
    render(<Malt malt={mockData} />);
    const element = screen.getByText(/kilograms/);
    expect(element).toBeInTheDocument();
  });
});
