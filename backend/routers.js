import express from "express";
import * as apiFuncs from "./getData.js";
const billRouter = express.Router();
const patientRouter = express.Router();

patientRouter
    .get("/", apiFuncs.getTableData)
    .delete("/", apiFuncs.deleteData)
    .post("/", apiFuncs.postPatientData);

billRouter
    .get("/", apiFuncs.getTableData)
    .post("/", apiFuncs.postBillData)
    .delete("/", apiFuncs.deleteData);
export default  {billRouter, patientRouter};