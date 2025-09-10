import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // install this: npm install node-fetch

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/bible/:book/:chapter/:verse?", async (req, res) => {
  try {
    const { book, chapter, verse } = req.params;
    let url = `https://bible-api.com/${book}+${chapter}`;
    if (verse) {
      url += `:${verse}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Bible text" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
