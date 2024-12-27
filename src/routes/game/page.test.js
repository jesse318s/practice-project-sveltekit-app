import { render, fireEvent } from "@testing-library/svelte";
import { describe, test, expect, beforeEach } from "vitest";
import Page from "./+page.svelte";

let getByText;

beforeEach(() => {
  localStorage.clear();

  const rendered = render(Page);

  getByText = rendered.getByText;
});

describe("+page.svelte", () => {
  test("page renders correctly and displays initial player and enemy HP", () => {
    expect(getByText(/Player HP:/)).toBeInTheDocument();
    expect(getByText(/Enemy HP:/)).toBeInTheDocument();
  });

  test("attack button updates the combat alert", async () => {
    const attackButton = getByText("Attack");

    await fireEvent.click(attackButton);
    expect(
      getByText(
        /Victory!|Defeat!|Enemy was too slow!|Your summon was too slow!|Both abilities succeeded./
      )
    ).toBeInTheDocument();
  });

  test("special attack button updates the combat alert", async () => {
    const specialAttackButton = getByText("Special");

    await fireEvent.click(specialAttackButton);
    expect(
      getByText(
        /Victory!|Defeat!|Enemy was too slow!|Your summon was too slow!|Both abilities succeeded./
      )
    ).toBeInTheDocument();
  });

  test("swap summon button updates player HP to enemy HP", async () => {
    const initialEnemyHP = getByText(/Enemy HP: /).textContent.replace(
      /Enemy HP: /,
      ""
    );
    const swapButton = getByText("Mimic Summon");

    await fireEvent.click(swapButton);

    const updatedPlayerHP = getByText(/Player HP: /).textContent;

    expect(updatedPlayerHP.replace(/Player HP: /, "")).toBe(initialEnemyHP);
  });

  test("view stats button displays the stats", async () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    const viewStatsButton = getByText("View Stats");

    await fireEvent.click(viewStatsButton);
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Name:"));
    alertSpy.mockRestore();
  });
});
