import { render, fireEvent } from "@testing-library/svelte";
import { describe, test, expect, beforeEach } from "vitest";
import RelicStore from "./RelicStore.svelte";

let rendered;

beforeEach(() => {
  localStorage.clear();
  rendered = render(RelicStore, {
    drachmas: 1,
    chosenRelic: {
      stageId: 1,
    },
    curGridId: 1,
  });
});

describe("RelicStore.svelte", () => {
  test("component renders correctly and displays at least 1 relic", () => {
    const container = rendered.container;
    const relics = container.querySelectorAll(".menu-item");

    expect(relics.length).toBeGreaterThan(0);
  });

  test("buy button handles buying a relic", async () => {
    const container = rendered.container;
    const relics = container.querySelectorAll(".menu-item");
    const buyButtons = container.querySelectorAll("button");

    expect(relics[0].querySelector("p").textContent).not.toBe("Active");
    window.location = {
      reload: () => {},
    };
    await fireEvent.click(buyButtons[0]);
    expect(relics[0].querySelector("p").textContent).toBe("Active");
  });
});
