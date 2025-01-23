export default function notFound(req, res, next) {
    const error = new Error(`Rota não encontrada. A única rota disponível é /repos`);
    error.status = 404;
    next(error);

}