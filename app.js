const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello World - Mr. Roy!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
