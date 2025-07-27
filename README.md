# Document Generator

This Node.js app lets you upload a file or project, then uses OpenAI to analyze the code and generate documentation.

## Features
- Upload a file via `/upload` endpoint (POST, form-data, key: `file`)
- OpenAI analyzes the uploaded code 
- Generates a clear, human-readable `.md` documentation file.

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

<img width="754" height="262" alt="image" src="https://github.com/user-attachments/assets/f497a1b8-6e8d-4a74-9617-d66f20ddcdf2" />


## AI Service
- The AI logic is in `src/services/aiService.js`. Replace the placeholder with your preferred AI API or model.

## Example Output
See the generated file:  
[`logicapp-architecture.md`](./logicapp-architecture.md)  
This documentation was automatically created by analyzing an Azure Logic App ARM template.

<img width="850" height="732" alt="image" src="https://github.com/user-attachments/assets/85fd9460-2a6c-45c8-9cd7-6f28154264fa" />


## Tips
- Works best with code that contains logical patterns, structured formats (like JSON, YAML, or ARM templates).
- For large files, consider breaking them into smaller components to stay within OpenAI token limits.
- Can be extended to work with other file formats and documentation styles.
