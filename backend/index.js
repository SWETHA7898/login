const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Subscribe to Arpan Neupane's channel");
});

// ✅ Export the app (Avoids app.listen issue in Vercel)
module.exports = app;
