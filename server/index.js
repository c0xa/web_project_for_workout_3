const express = require("express");

const app = express();
app.get("*", express.static("./src/"));

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`App start on port ${port}`);
});
