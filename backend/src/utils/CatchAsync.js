const CatchAsync = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((e) => {
        console.log("promise cannot be bracked");
        next(e);
    })
}


module.exports = CatchAsync;