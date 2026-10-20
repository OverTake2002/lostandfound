const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// I-add ang routes dito

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
