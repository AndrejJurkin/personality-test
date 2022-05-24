import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../Nav";
import navLinks from "../../../resources/navLinks";

describe("Nav", () => {
  it("renders navigation role", () => {
    const { getByRole } = render(<Nav />);
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("renders nav links", () => {
    const { getByText } = render(<Nav />);
    navLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });

  it("renders CTA", () => {
    const { getByText } = render(<Nav />);
    expect(getByText("Take the Test")).toBeInTheDocument();
  });

  it("renders component unchanged", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
