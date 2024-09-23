async function waitForImagesToLoad(page) {
    await page.waitForFunction(() => {
        const images = Array.from(document.images);
        return images.every(img => img.complete && img.naturalHeight !== 0);
    });
}

module.exports = { waitForImagesToLoad };