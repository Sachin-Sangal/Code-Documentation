require('dotenv').config();
const express = require('express');
const uploadRouter = require('./routes/upload');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/upload', uploadRouter);

app.get('/', (req, res) => {
  res.send('AI Doc Generator API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
