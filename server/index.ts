import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.get("/api/verses", (req: Request, res: Response) => {
  res.json([
    { id: 1, verse: "For God so loved the world...", reference: "John 3:16" },
    { id: 2, verse: "I can do all things through Christ...", reference: "Philippians 4:13" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
