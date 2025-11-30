const prisma = require("../prismaClient");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.status(400).json({ error: "Missing fields" });

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, password: hashed },
    });

    return res.status(201).json({ message: "User created", id: user.id });
};
