const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// 🔹 Serve HTML from public folder
app.use(express.static(path.join(__dirname, "public")));

// Test root
app.get("/", (req, res) => {
    res.send("Node.js Backend Running for Farm Management System 🌾");
});

// API: get crops
app.get("/api/crops", (req, res) => {
    res.json([
        { id: 1, name: "Rice", moisture: "70%" },
        { id: 2, name: "Wheat", moisture: "60%" }
    ]);
});

// API: post crops
app.post("/api/crops", (req, res) => {
    res.json({
        message: "Crop data received",
        data: req.body
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node server running on ${PORT}`);
});