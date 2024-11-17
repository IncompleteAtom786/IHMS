import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routers from "./routers.js";

const server = express();
const port = 8383;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

server.use(cors(corsOption));

server.use("/bill", routers.billRouter);
server.use("/patient", routers.patientRouter);

server.listen(port, () => {
    console.log(`Server is running on Port : ${port}!`);
})