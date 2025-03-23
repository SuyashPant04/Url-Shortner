import express from "express";
import { shortenURL, redirectURL } from "./controllers.js";
const router = express.Router();


router.post("/shorten", shortenURL);
router.get("/:shortCode", redirectURL);

export default router;