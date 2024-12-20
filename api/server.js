require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
// Serve static files from React's build folder
// app.use(express.static(path.join(__dirname, "../dist")));

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
