import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";
import React from "react";

describe("Button", () => {
  it("renders button text", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("adds correct classes to primary variant", () => {
    const { getByText } = render(<Button primary>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--primary");
  });

  it("adds correct classes to outline variant", () => {
    const { getByText } = render(<Button outline>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--outline");
  });

  it("adds correct classes to disabled variant", () => {
    const { getByText } = render(<Button disabled>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--disabled");
  });

  it("is not disabled by default", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).not.toHaveClass("button--disabled");
  });

  it("disables button", () => {
    const { getByText } = render(<Button disabled>Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toBeDisabled();
  });

  it("adds correct classes to small variant", () => {
    const { getByText } = render(<Button size="small">Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--small");
  });

  it("adds correct classes to medium variant", () => {
    const { getByText } = render(<Button size="medium">Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--medium");
  });

  it("adds correct classes to large variant", () => {
    const { getByText } = render(<Button size="large">Click Me</Button>);
    const button = getByText("Click Me");
    expect(button).toHaveClass("button--large");
  });

  it("forwards ref", () => {
    const ref = React.createRef();
    render(<Button ref={ref}>Click Me</Button>);
    expect(ref.current).toBeTruthy();
  });

  it("spreads additional props", () => {
    const { getByText } = render(
      <Button data-testid="test-id">Click Me</Button>
    );
    const button = getByText("Click Me");
    expect(button).toHaveAttribute("data-testid", "test-id");
  });

  it("renders component unchanged", () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});
