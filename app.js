const express = require("express");
const path = require("path");

const app = express();

// Middleware untuk static files
app.use(express.static(path.join(__dirname, "public")));

// Route untuk halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Catch-all route untuk semua path lainnya
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("Frontend running at https://vercel.com/zahradh28s-projects/frontend-titik-banjir"));