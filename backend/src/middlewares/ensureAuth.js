const { verify } = require("../utils/jwt");

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ error: "Token missing" });

    const [scheme, token] = auth.split(" ");
    if (scheme !== "Bearer") return res.status(401).json({ error: "Bad token" });

    try {
        const decoded = verify(token);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
};
