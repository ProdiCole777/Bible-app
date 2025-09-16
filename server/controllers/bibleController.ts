import { Request, Response, NextFunction } from "express";
import fetch from "node-fetch";

export const getBiblePassage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { book, chapter, verse } = req.params;

    if (!book || !chapter) {
      return res.status(400).json({ error: "Book and chapter are required" });
    }
    if (isNaN(Number(chapter))) {
      return res.status(400).json({ error: "Chapter must be a number" });
    }
    if (verse && isNaN(Number(verse))) {
      return res.status(400).json({ error: "Verse must be a number" });
    }

    let url = `https://bible-api.com/${book}+${chapter}`;
    if (verse) url += `:${verse}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    next(err);
  }
};
