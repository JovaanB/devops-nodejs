const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello ENIGMA" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
