import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import wilderRouter from "./routes/wilder";

dotenv.config();

const MONGO_URI: string = process.env.MONGO_URI || "";
const PORT: string = process.env.PORT || "3000";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(MONGO_URI, 
        {
            autoIndex: true
        }
    )
    .then(() => console.log("Connected to db"))
    .catch(err => console.error(err));


app.use("/api/wilder", wilderRouter);


app.use((req, res) => {
    res.send("Route does not exist, error 404");
});



app.listen(PORT, () => console.log(`server started on ${PORT}`));