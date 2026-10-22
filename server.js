const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASS = process.env.ADMIN_PASS;

// Serve website files from the current folder
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`BCP Lost and Found is running!`);
  console.log(`Open: http://localhost:${PORT}`);
});