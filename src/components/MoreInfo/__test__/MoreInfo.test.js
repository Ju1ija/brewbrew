import { render, screen } from "@testing-library/react";
import MoreInfo from "../MoreInfo";

const mockData = {
  name: "Slot Machine",
  pairing: ["Barbeque and Mustard Beef on Rye Bread", "Gooseberry and Plum Compote", "Mature Wensleydale"],
  first_brew: "2017",
  img_url: null,
  tagline: "Red Rye IPA.",
  tips: "Rye can cause run off problems. Try to reach a temperature of 78 degrees Celsius if possible, and sparge at the same temperature."
}

test("renders loading", () => {
  render(<MoreInfo />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});

describe("any props sent are rendered", () => {
  test("renders h1 when data is passed", () => {
    render(<MoreInfo pairing={mockData.pairing} />);
    const element = screen.getByText(/more info/i);
    expect(element).toBeInTheDocument();
  });

  test("renders MoreInfo component with data (name)", () => {
    render(<MoreInfo pairing={mockData.pairing} name={mockData.name} />);
    const element = screen.getByText(/Slot Machine/i);
    expect(element).toBeInTheDocument();
  });

  test("renders MoreInfo component with data (tagline)", () => {
    render(<MoreInfo pairing={mockData.pairing} tagline={mockData.tagline} />);
    const element = screen.getByText(/Red Rye IPA/i);
    expect(element).toBeInTheDocument();
  });

  test("renders MoreInfo component with data (first brew)", () => {
    render(<MoreInfo pairing={mockData.pairing} first_brew={mockData.first_brew} />);
    const element = screen.getByText(/2017/i);
    expect(element).toBeInTheDocument();
  });

  test("renders MoreInfo component with data (image)", () => {
    render(<MoreInfo pairing={mockData.pairing} img_url="https://images.punkapi.com/v2/10.png" />);
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
  });

  test("renders MoreInfo component with data (image - when image does not exist)", () => {
    render(<MoreInfo pairing={mockData.pairing} img_url={mockData.img_url} />);
    const element = screen.getByText(/no image/i);
    expect(element).toBeInTheDocument();
  });
});
