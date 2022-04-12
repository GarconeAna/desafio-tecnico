// middleware - recurso não encontrado
const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// middleware - tratar erro
const errorHandling = (error, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode = statusCode;
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? "ok" : error.stack
    });
};

module.exports = {
    notFound,
    errorHandling
};