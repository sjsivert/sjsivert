/**
 * Tests that the main menu and footer have content and
 * that clicking a link in the main menu navigates correctly
 */
import { expect, test } from "@playwright/test";

test.describe("Main menu", () => {
	test("Testing for a correct main menu setup", async ({ page }) => {
		// Visit the page
		await page.goto("/");
		// Expects that the Home and Articles items are found in the main menu
		await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
		await expect(page.getByRole("link", { name: "Articles" })).toBeVisible();
	});
	test("Clicking the articles link should navigate to /articles", async ({ page }) => {
		// Go to the home page
		await page.goto("/");
		// Click the articles link in the main menu
		const articleLink = page.getByRole("link", { name: "Articles" });
		await articleLink.click();
		// The url should now be /articles
		await expect(page).toHaveURL("/articles");
	});
});

test.describe("Footer", () => {
	test("Correct footer setup", async ({ page }) => {
		// Start on the home page
		await page.goto("/");

		// Expects that the main footer text is visible
		await expect(page.getByText("This is the footer")).toBeVisible();
	});
});
