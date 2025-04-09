import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/meals", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/findByNutrients",
      {
        params: {
          ...req.query,
          apiKey: process.env.VITE_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Failed to fetch meals:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch meals." });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
