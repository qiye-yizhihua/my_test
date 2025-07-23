// ... existing code ...
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is my test project page!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});