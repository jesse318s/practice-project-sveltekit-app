import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import creatures from "./creatures.json";
import Battle from "./Battle.svelte";

describe("Battle.svelte", () => {
  test("component renders correctly and displays the creatures", () => {
    const rendered = render(Battle, {
      stage: {},
      playerState: {
        creature: creatures[0],
        isAttacking: false,
        isUsingSpecial: false,
      },
      enemyState: {
        creature: creatures[0],
        isAttacking: false,
        isSpawning: false,
      },
    });
    const container = rendered.container;
    const player = container.querySelector(".player-creature");
    const enemy = container.querySelector(".enemy-creature");

    expect(player).toBeInTheDocument();
    expect(enemy).toBeInTheDocument();
  });
});
