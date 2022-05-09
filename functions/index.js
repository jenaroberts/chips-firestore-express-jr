import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { chipsRouter } from "./routes/chips.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(chipsRouter);
// app.listen(3000, () => {
//   console.log("listening in on http://localhost:3000");
// });

export const api = functions.https.onRequest(app);
