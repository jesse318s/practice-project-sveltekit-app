import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import GameControls from "./GameControls.svelte";

describe("GameControls.svelte", () => {
  test("component renders correctly and displays the controls", () => {
    const rendered = render(GameControls, {
      battleEnemy: () => {},
      playerCreature: {},
      swapCreature: () => {},
      chosenRelic: {},
    });
    const getByText = rendered.getByText;

    expect(rendered.container).toBeTruthy();
    expect(getByText("Attack")).toBeInTheDocument();
    expect(getByText("Special")).toBeInTheDocument();
    expect(getByText("Mimic Summon")).toBeInTheDocument();
    expect(getByText("View Stats")).toBeInTheDocument();
    expect(getByText("Travel")).toBeInTheDocument();
  });
});
