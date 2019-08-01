const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, function() {
  console.log(`server taking requests on port: ${PORT}`);
});

app.get(
  "/.well-known/acme-challenge/mQFyvUi9ZFlnnd2tBHIYVvd5ptPJ43TJ-fS9lsRTc54",
  function(req, res) {
    res.send(`mQFyvUi9ZFlnnd2tBHIYVvd5ptPJ43TJ-fS9lsRTc54.eOVjY1YlTO0ZoomXCmZaODqkEo9YuO-jgGPb1UscD5M
`);
  }
);
