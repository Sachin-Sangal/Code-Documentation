const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.analyzeAndGenerateDoc = async (fileContent) => {
  try {
    const prompt = `You will receive one or more Azure Logic App ARM templates (sometimes multiple ARM templates in a single file).Please use the provided sample documentation template to review the ARM templates and create a consolidated architecture document for the overall integration..\n\nARM Templates:\n${fileContent}`;
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'prompt to generate the documentation' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 800
    });
    return completion.choices[0].message.content.trim();
  } catch (err) {
    return 'Error generating documentation: ' + err.message;
  }
};
