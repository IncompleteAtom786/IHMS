import bodyParser from "body-parser";
import express from "express";
import * as apiFuncs from "./getData.js";



const server = express();
const port = 8383;

server.use(bodyParser.urlencoded({extended: true}));
server.use(express.json());
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

server.get("/getdata", apiFuncs.giveDataAndTablesToFrontend);

server.post("/modify", apiFuncs.executeModifyingQuery);

server.post("/select", apiFuncs.executeSelectQuery);

server.listen(port, () => {
    console.log(`Server is running on Port : ${port}!`);
})