import express from "express";
import routes from "./src/routers/routes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = +process.env.PORT || 5000;
app.use("/files", routes);

app.listen(port);
