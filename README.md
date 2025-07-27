# AI Doc Generator

This Node.js app lets you upload a file or project, then uses AI to analyze the code and generate documentation.

## Features
- Upload a file via `/upload` endpoint (POST, form-data, key: `file`)
- AI analyzes the uploaded code and returns generated documentation

## How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. Use a tool like Postman or curl to POST a file to `http://localhost:3000/upload`

## AI Service
- The AI logic is in `src/services/aiService.js`. Replace the placeholder with your preferred AI API or model.
