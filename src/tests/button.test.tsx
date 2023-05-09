import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button, { VARIANTS, SIZES } from "../components/ui/button";

describe("Button", () => {
  it("renders the text content correctly", async () => {
    const text = "Click me";
    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();

    const { getByRole } = render(
      <Button onClick={handleClick}>Click me!</Button>,
    );

    fireEvent.click(getByRole("button"));

    expect(handleClick).toHaveBeenCalled();
  });

  it("disables the button when isDisabled prop is true", () => {
    const { getByRole } = render(<Button isDisabled>Click me!</Button>);

    expect(getByRole("button")).toBeDisabled();
  });

  it("shows the loading spinner when isLoading prop is true", () => {
    const { queryByText, rerender } = render(
      <Button isLoading>Click me</Button>,
    );

    expect(queryByText("Loading...")).toBeInTheDocument();

    rerender(<Button>Click me</Button>);
    expect(queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("applies the correct className for the specified variant and size", () => {
    const { getByRole, rerender } = render(
      <Button size="large">Click me!</Button>,
    );

    expect(getByRole("button")).toHaveClass(VARIANTS["gray"], SIZES["large"]);

    rerender(<Button variant="pink">Get started</Button>);

    expect(getByRole("button")).toHaveClass(VARIANTS["pink"], SIZES["medium"]);
  });
});
