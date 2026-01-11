const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js Backend Running for Farm Management System 🌾");
});

app.get("/api/crops", (req, res) => {
  res.json([
    { id: 1, name: "Rice", moisture: "70%" },
    { id: 2, name: "Wheat", moisture: "60%" }
  ]);
});

app.post("/api/crops", (req, res) => {
  res.json({ message: "Crop data received", data: req.body });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Node server running on ${PORT}`));
