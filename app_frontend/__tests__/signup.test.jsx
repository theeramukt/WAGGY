import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Signup from "../pages/signup"; // Adjust the path as needed

describe("Signup Component", () => {
  // Test to check if the component renders correctly
  it("renders without crashing", () => {
    render(<Signup />);
    expect(screen.getByText("Sign up your account")).toBeInTheDocument();
  });

  // Test to check if full name, email, and password inputs are rendered
  it("renders all required input fields", () => {
    render(<Signup />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  // Test to check if the file input for ID card picture upload is rendered
  it("renders file input for ID card picture upload", () => {
    render(<Signup />);
    expect(screen.getByText("Uploading a picture of your ID Card is an alternative to filling out the form")).toBeInTheDocument();
  });

  // Test to check if the sign-up button is rendered
  it("renders a sign-up button", () => {
    render(<Signup />);
    const button = screen.getByRole("button", { name: "Sign up" });
    expect(button).toBeInTheDocument();
  });
});