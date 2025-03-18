import { chromium } from 'playwright-chromium';
import { expect } from 'chai';
import { it } from "mocha";

const host = "http://localhost:3000"; // Assuming you're using the port from your package.json
const DEBUG = true;
const slowMo = 500;

let browser;
let page;
let context;

describe("Accordion E2E Tests", function() {
    this.timeout(5000);

    before(async () => {
        browser = await chromium.launch({ headless: !DEBUG, slowMo });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    }

    it("should load and display articles", async () => { 
        await page.goto(host);
    });
    it("should load and display articles 2", async () => {
        console.log("some data");
    });
    it("should load and display articles 3", async () => {
        console.log("some data");
    });
});