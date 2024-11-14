import express from "express";
import * as apiFuncs from "./getData.js";
const billRouter = express.Router();

billRouter
    .get("/", apiFuncs.getTableData)
    .post("/", apiFuncs.postBillData)
    .delete("/", apiFuncs.deleteData);
export default  billRouter;