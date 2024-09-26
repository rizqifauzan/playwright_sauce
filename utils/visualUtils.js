const { expect } = require('@playwright/test');
require('dotenv').config(); 

/**
 * Perform visual test on the page
 * @param {object} page - The Playwright page object
 * @param {string} snapshotName - The name of the snapshot file
 * @param {number} [tolerance=3000] - Maximum number of pixels allowed to differ from the snapshot
 */
const runVisualComparisonTest = async (page, snapshotName, tolerance) => {
    const screenshot = await page.screenshot();

    const tolerancePercentage = tolerance !== undefined ? tolerance : parseFloat(process.env.TOLERANCE_PERCENTAGE) || 0.05; // Default to 5%

    const width = parseInt(process.env.VIEWPORT_WIDTH || '1280', 10);
    const height =  parseInt(process.env.VIEWPORT_HEIGHT || '720', 10); 
    const pixelTolerance = Math.floor(width * height); // Calculate pixel tolerance

    
    console.log('tolerancePercentage :', tolerancePercentage);
    console.log('pixelTolerance :', pixelTolerance);


    expect(screenshot).toMatchSnapshot(snapshotName, { 
        maxDiffPixels: pixelTolerance 
    });
};

module.exports = {
    runVisualComparisonTest
  };