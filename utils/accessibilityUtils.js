const { injectAxe, checkA11y } = require('axe-playwright');

/**
 * Perform accessibility test on the page and log the violations
 * @param {object} page - The Playwright page object
 * @param {object} [options] - Optional configuration for the a11y check
 */
async function runAccessibilityTest(page, options = null) {
  // Inject the axe-core script into the page
  await injectAxe(page);
  
  // Run accessibility checks
  const violations = await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: {
      html: true,
      ...options
    }
  });

  // Log violations to the console for debugging
  if (violations && violations.length) {
    console.log('Accessibility Violations:', violations);
  } else {
    console.log('No accessibility violations found.');
  }
}

module.exports = {
  runAccessibilityTest
};
