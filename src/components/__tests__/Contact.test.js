import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Check if component loads", () => {

    render(<Contact/>);

    const text = screen.getByText("Contact Us Page");

    expect(text).toBeInTheDocument();
});