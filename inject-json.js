const fs = require('fs');
const path = require('path');

// File paths
const htmlFilePath = path.join(__dirname, 'index.html');
const jsonFilePath = path.join(__dirname, 'cocktails.json');

// Read files
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Regex to find existing injected content
const scriptTagRegex = /<script id="cocktails-data" type="application\/json">[\s\S]*?<\/script>/;

// Inject JSON into a <script> tag
const injectedScript = `
<script id="cocktails-data" type="application/json">
${JSON.stringify(jsonData, null, 2)}
</script>
`;

// Remove any previously injected JSON content
let updatedHtmlContent;
if (scriptTagRegex.test(htmlContent)) {
    // Replace existing content
    updatedHtmlContent = htmlContent.replace(scriptTagRegex, injectedScript.trim());
} else {
    // Add new content before </body>
    updatedHtmlContent = htmlContent.replace('<script src="render-script.js"></script>', `${injectedScript}<script src="render-script.js"></script>`);
}

// Write updated content back to the HTML file
fs.writeFileSync(htmlFilePath, updatedHtmlContent, 'utf8');
console.log('Cocktails JSON successfully injected into index.html');
