import { render, fireEvent } from "@testing-library/svelte";
import { describe, test, expect, beforeEach } from "vitest";
import Page from "./+page.svelte";

let container, getByText;

beforeEach(() => {
  localStorage.clear();

  const rendered = render(Page);

  container = rendered.container;
  getByText = rendered.getByText;
});

describe("+page.svelte", () => {
  test("page renders correctly and displays game grid", async () => {
    const gridCells = container.querySelectorAll(".cell");

    expect(gridCells).toHaveLength(25);
  });

  test("arrow buttons move the player within the world", async () => {
    const upButton = getByText("↑");
    const downButton = getByText("↓");
    const leftButton = getByText("←");
    const rightButton = getByText("→");
    let playerCell = container.querySelector(".player");

    expect(playerCell).toBeTruthy();
    await fireEvent.click(upButton);
    playerCell = container.querySelector(".player");
    expect(playerCell).toBeTruthy();
    await fireEvent.click(downButton);
    playerCell = container.querySelector(".player");
    expect(playerCell).toBeTruthy();
    await fireEvent.click(leftButton);
    playerCell = container.querySelector(".player");
    expect(playerCell).toBeTruthy();
    await fireEvent.click(rightButton);
    playerCell = container.querySelector(".player");
    expect(playerCell).toBeTruthy();
  });
});
