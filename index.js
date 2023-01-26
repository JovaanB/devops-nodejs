const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello from ENIGMA API! 🚀");
});

const port = process.env.PORT || 3000;

app.listen(port);
