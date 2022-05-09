import { Router } from "express";
import { getAllChips } from "../services/chips.services.js";

export const chipsRouter = Router();

chipsRouter.get("/chips", async (req, res) => {
  const chips = await getAllChips();
  res.send(chips);
});
