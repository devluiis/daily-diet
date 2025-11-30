const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.sign = (payload, expires = "7d") =>
    jwt.sign(payload, secret, { expiresIn: expires });

exports.verify = (token) => jwt.verify(token, secret);
