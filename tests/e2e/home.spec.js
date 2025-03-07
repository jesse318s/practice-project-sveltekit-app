import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("app displays the landing section", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const landingSection = page.locator("section:has(p.popout)");

    await expect(landingSection).toBeVisible();
  });
});
