const { expect } = require('@playwright/test');

/**
 * Perform visual test on the page
 * @param {object} page - The Playwright page object
 * @param {string} snapshotName - The name of the snapshot file
 * @param {number} [tolerance=3000] - Maximum number of pixels allowed to differ from the snapshot
 */
const runVisualComparisonTest = async (page, snapshotName, tolerance = 3000) => {
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot(snapshotName, { 
        maxDiffPixels: tolerance 
    });
};

module.exports = {
    runVisualComparisonTest
  };