const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const [tokenType, token] = req.headers["authorization"];
    if (!token) {
        throw Error(`Please, provide a token`)
    }
    try {
        const user = jwt.decode(token, process.env.JWT_SECRET);
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        next(error)
    }

}

module.exports = {
    authMiddleware
}