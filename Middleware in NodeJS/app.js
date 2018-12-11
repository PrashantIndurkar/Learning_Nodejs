const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.name = "Prashant Indurkar";
  next();
});

app.get("/", (req, res) => {
  res.send(req.name);
});

const port = 5000;

app.listen(port, () => {
  console.log(`App is runing on port ${port}`);
});
