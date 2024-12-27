import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import { base } from "$app/paths";
import creatures from "./creatures.json";
import Battle from "./Battle.svelte";

describe("Battle.svelte", () => {
  test("component renders correctly and displays the creatures", () => {
    const rendered = render(Battle, {
      playerIsAttacking: false,
      enemyIsAttacking: false,
      playerIsUsingSpecial: false,
      playerCreature: {
        img: base + "/game/" + creatures[0].img,
      },
      enemyIsSpawning: false,
      enemyCreature: {
        img: base + "/game/" + creatures[0].img,
      },
    });
    const container = rendered.container;
    const player = container.querySelector(".player-creature");
    const enemy = container.querySelector(".enemy-creature");

    expect(player).toBeInTheDocument();
    expect(enemy).toBeInTheDocument();
  });
});
