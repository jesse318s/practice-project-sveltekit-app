import { test, expect } from "@playwright/test";

test.describe("Game", () => {
  test("app navigates to the game page from the home page", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const gameButton = page.getByRole("button", { name: "Game" });

    await expect(gameButton).toBeVisible();
    await gameButton.click();
    await expect(page).toHaveURL(/\/game$/);
    await expect(page.locator('h1:has-text("Omega Summoners")')).toBeVisible();
  });
});
