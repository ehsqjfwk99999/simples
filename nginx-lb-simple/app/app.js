const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Express running at ${process.env.APP_NAME}`);
});

app.listen(3000, () => {
  console.log(`app running at http://localhost:3000`);
});
