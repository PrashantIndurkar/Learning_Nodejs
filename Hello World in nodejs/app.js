const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//About pege
app.get("/about", (req, res) => {
  res.send("Wellcome to About Page!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is run runing on ${port}`);
});
