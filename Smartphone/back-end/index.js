const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const {MONGO_URL, PORT} = process.env;
const app = express();

mongoose.connect(MONGO_URL)
.then(() => console.log("Database is connected successfully!"))
.catch(error => console.error(error));

app.use(express.json());

app.use(cors({
    origin: [`http://localhost:${PORT}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});