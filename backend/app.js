const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api', (req, res) => {
  res.send({id: req.query.id});
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
