const { Builder, By, Key, until } = require("selenium-webdriver");
const readline = require("readline");

let driver = new Builder().forBrowser("chrome").build();
const MAX_TIMEOUT = 10000;
const EMAIL = "lf_mezenner@esi.dz";
const PASSWORD = "Fares#_2003";
const SEARCH_QUERY = "ai";

async function testSearch() {
  try {
    await driver.get("http://localhost:3000/hero", MAX_TIMEOUT);

    const loginPageButton = await driver.findElement(By.id("login_in"));
    await loginPageButton.click();

    const emailInput = await driver.findElement(By.id("email_in"));
    const passwordInput = await driver.findElement(By.id("password_in"));
    const loginButton = await driver.findElement(By.id("login_button"));

    await emailInput.sendKeys(EMAIL);
    await passwordInput.sendKeys(PASSWORD);
    await loginButton.click();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const searchInput = await driver.findElement(By.id("search_in"));
    const searchButton = await driver.findElement(By.id("search_button"));

    await searchInput.sendKeys(SEARCH_QUERY);
    await searchButton.click();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const articles = await driver.findElements(By.id("read_button"));
    await articles[0].click();
  } catch (error) {
    console.error("Error: ", error);
  }
}

testSearch();
