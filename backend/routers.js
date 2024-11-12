import express from "express";
import * as apiFuncs from "./getData.js";

const router = express.Router();

router.get("/", apiFuncs.giveDataAndTablesToFrontend);

router.post("/modify", apiFuncs.executeModifyingQuery);

router.post("/select", apiFuncs.executeSelectQuery);


export default router;