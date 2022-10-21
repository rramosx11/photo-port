// __tests__/Nav.test.js with hard coded categories
import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    render(<Nav />);

    // expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText("camera")).toHaveTextContent("📸");
    // render(<Nav />);

    // expect(screen.getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // const { getByTestId } = render(<Nav />);
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
    // render(<Nav />);
    // expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    // expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});

it("renders", () => {
  render(
    <Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />
  );
});
