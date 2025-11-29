const express = require("express");
const path = require("path");

const app = express();

// Middleware untuk static files
app.use(express.static(path.join(__dirname, "public")));

// Route untuk halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Redirect untuk semua route ke index.html (untuk SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Terjadi error pada server");
});

app.listen(3000, () => console.log("Frontend running at https://vercel.com/zahradh28s-projects/frontend-titik-banjir"));