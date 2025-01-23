export default function errorHandler(err, req, res, next) {
    console.error(err);

    const statusCode = err.status || 500;
    const message = err.message || 'Erro interno do servidor';

    res.status(statusCode).json({
        error: statusCode === 500 ? 'Erro interno do servidor' : 'Erro', message
    })
}