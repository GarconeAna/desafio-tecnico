const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const router = require("./routes");
const middlewares = require("./middleware");

const app = express();

app.use(morgan("common"));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Connected to the database!"));

// console.log(process.env.DB_URL);

app.use(router);

//midlleware recurso não encontrado
app.use(middlewares.notFound);
//middleware tratar erro
app.use(middlewares.errorHandling);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server running in: ${PORT}`);
});

