module.exports = (req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Request-Headers','origin, x-requested-with, Content-Type, Accept');
    next();
}