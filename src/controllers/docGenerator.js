const aiService = require('../services/aiService');
const fs = require('fs');

exports.generateDoc = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  try {
    const filePath = req.file.path;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const documentation = await aiService.analyzeAndGenerateDoc(fileContent);

    // Save the documentation as a markdown file on the user's Desktop
    const path = require('path');
    const outputFile = path.join(__dirname, '../../logicapp-architecture.md');
    let fileWriteError = null;

    try {
      fs.writeFileSync(outputFile, documentation, 'utf-8');
      console.log('Documentation written to:', outputFile);
    } catch (err) {
      fileWriteError = err.message;
      console.error('Error writing documentation file:', err);
    }

    res.json({ documentation, savedTo: outputFile, fileWriteError });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate documentation.' });
  }
};
