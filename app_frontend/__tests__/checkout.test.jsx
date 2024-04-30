import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Checkout from "../pages/checkout"; // Adjust the path as needed

describe("Checkout Component", () => {
  // Test to check if the component renders correctly
  it("renders without crashing", () => {
    render(<Checkout />);
    expect(screen.getByText("Make Your Checkout Here")).toBeInTheDocument();
  });

  // Test to check if the alert can be toggled
  it("toggles the alert visibility on button click", () => {
    render(<Checkout />);
    const checkoutButton = screen.getByText("Proceed To Checkout");
    fireEvent.click(checkoutButton); // Click to show
    expect(screen.getByText("checking out successfully")).toBeInTheDocument();
    fireEvent.click(checkoutButton); // Click to hide
    expect(screen.queryByText("checking out successfully")).not.toBeInTheDocument();
  });

  // Test to check if essential input fields are rendered
  it("renders necessary input fields", () => {
    render(<Checkout />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Address")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Postal Code")).toBeInTheDocument();
  });

  // Test to check if the checkout button is rendered
  it("renders the checkout button", () => {
    render(<Checkout />);
    expect(screen.getByText("Proceed To Checkout")).toBeInTheDocument();
  });
});