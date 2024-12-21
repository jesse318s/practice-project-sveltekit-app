import { render } from "@testing-library/svelte";
import { describe, test, expect, beforeEach } from "vitest";
import WorldMap from "./WorldMap.svelte";

let container;

beforeEach(() => {
  const rendered = render(WorldMap, { curGridId: 1 });

  container = rendered.container;
});

describe("WorldMap.svelte", () => {
  test("component renders correctly and displays stages", () => {
    const stages = container.querySelectorAll(".stage");

    expect(stages.length).toBeGreaterThan(1);
  });

  test("component highlights the current stage", () => {
    const currentStage = container.querySelector(".stage.current");

    expect(currentStage).toBeTruthy();
    expect(currentStage.querySelector("p").textContent).toBe("Current Stage");
  });
});
