//@ts-check

const { test, expect } = require("@playwright/test");
test("Confirming the url", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveURL(/.*orangehrmlive/);
});
