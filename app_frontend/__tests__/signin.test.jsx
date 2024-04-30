import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Signin from "../pages/signin"; // Adjust the path as needed

describe("Signin Component", () => {
  // Test to check if the component renders correctly
  it("renders without crashing", () => {
    render(<Signin />);
    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
  });

  // Test to check if email and password inputs are rendered
  it("renders email and password inputs", () => {
    render(<Signin />);
    expect(screen.getByLabelText("Your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  // Test to check if the sign-in button is rendered
  it("renders a sign-in button", () => {
    render(<Signin />);
    const button = screen.getByRole("button", { name: "Sign in" });
    expect(button).toBeInTheDocument();
  });
});