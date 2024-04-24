import express from "express";
const router = express.Router();

import { home } from "../controllers/fbi.controllers.js";


router.get("/", home)

export default router;