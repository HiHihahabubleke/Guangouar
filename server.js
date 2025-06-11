const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files like index_with_finish_button.html
app.use(express.static(__dirname));

// Endpoint to return questions JSON
app.get('/questions', (req, res) => {
  const file = req.query.file;
  if (!file) {
    return res.status(400).json({ error: 'Missing file parameter' });
  }
  const filePath = path.join(__dirname, file);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: 'File not found' });
    }
    try {
      const json = JSON.parse(data);
      res.json(json);
    } catch (e) {
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
