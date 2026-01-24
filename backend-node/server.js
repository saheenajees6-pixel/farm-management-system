const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API
app.get("/api/crops", (req, res) => {
    res.json([
        { id: 1, name: "Rice", moisture: "70%" },
        { id: 2, name: "Wheat", moisture: "60%" }
    ]);
});

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Node server running on http://localhost:${PORT}`)
);