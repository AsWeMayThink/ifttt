const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.post('/api/ifttt', (req, res) => {
  console.log('/api/ifttt called');
  console.log('body', req.body);

  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
