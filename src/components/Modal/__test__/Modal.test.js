import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

const mockData = {
  children: [<h3 />, <p />],
  show: true,
  tips: true,
  setOppositeModal: () => { },
  setShow: () => { }
}

test("renders loading", () => {
  render(<Modal />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});

describe("any props sent are rendered", () => {
  test("renders a header", () => {
    render(<Modal children={mockData.children} show={mockData.show} />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  test("renders close text", () => {
    render(<Modal children={mockData.children} show={mockData.show} />);
    const element = screen.getByText(/close/i);
    expect(element).toBeInTheDocument();
  });
})

test("element clicked triggers event", () => {
  render(<Modal
    children={mockData.children}
    setOppositeModal={mockData.setOppositeModal}
    setShow={mockData.setShow}
    tips={mockData.tips}
  />)
  const element = screen.getByTestId("modalContainer");
  fireEvent.click(element);
  const tipsElement = screen.getByText(/see tips/i)
  expect(tipsElement).toBeInTheDocument();
});