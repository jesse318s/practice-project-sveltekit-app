import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import WorldControls from "./WorldControls.svelte";

describe("WorldControls.svelte", () => {
  test("component renders correctly and displays the controls", () => {
    const rendered = render(WorldControls, {
      movePlayer: () => {},
    });
    const getByText = rendered.getByText;

    expect(rendered.container).toBeTruthy();
    expect(getByText("↑")).toBeInTheDocument();
    expect(getByText("↓")).toBeInTheDocument();
    expect(getByText("←")).toBeInTheDocument();
    expect(getByText("→")).toBeInTheDocument();
    expect(getByText("Relic Store")).toBeInTheDocument();
    expect(getByText("World Map")).toBeInTheDocument();
    expect(getByText("Battle")).toBeInTheDocument();
  });
});
