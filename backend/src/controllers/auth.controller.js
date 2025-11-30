const prisma = require("../prismaClient");
const bcrypt = require("bcryptjs");
const { sign } = require("../utils/jwt");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ error: "Missing fields" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = sign({ userId: user.id });

    return res.json({
        token,
        user: {
        id: user.id,
        name: user.name,
        email: user.email,
        }
    });
};
