//@ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Create a locator.
  const getStarted = page.getByRole("link", { name: "Get started" });
  await getStarted.click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("click on typescript", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  //create locator
  const clickOnTypescript = page.getByRole("link", { name: "TypeScript" });
  await clickOnTypescript.click();

  const texts = await page.getByRole("link").allTextContents();
});
