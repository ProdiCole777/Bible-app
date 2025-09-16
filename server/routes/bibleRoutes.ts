// bibleRoutes.ts
import { Router } from "express";
import { getBiblePassage } from "../controllers/bibleController";

const router = Router();

router.get("/:book/:chapter/:verse?", getBiblePassage);

export default router;
