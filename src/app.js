const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("common"));
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use((req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode = statusCode;
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? "ok" : error.stack
    });
});

app.get("/", (req, res) => {
    res.send("Hello Hello!!")
})

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

