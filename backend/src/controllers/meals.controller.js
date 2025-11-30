const prisma = require("../prismaClient");

module.exports = {
    async create(req, res) {
        try {
        const { name, description, datetime, isDiet } = req.body;
        const userId = req.user.id;

        const meal = await prisma.meal.create({
            data: {
            name,
            description,
            datetime: new Date(datetime),
            isDiet,
            userId,
            },
        });

        return res.status(201).json(meal);
        } catch (e) {
        return res.status(500).json({ error: "Erro ao criar refeição" });
        }
    },

    async list(req, res) {
        try {
        const userId = req.user.id;
        const meals = await prisma.meal.findMany({
            where: { userId },
            orderBy: { datetime: "desc" },
        });
        return res.json(meals);
        } catch (e) {
        return res.status(500).json({ error: "Erro ao listar refeições" });
        }
    },

    async getOne(req, res) {
        try {
        const id = req.params.id;
        const userId = req.user.id;

        const meal = await prisma.meal.findFirst({
            where: { id, userId },
        });

        if (!meal) return res.status(404).json({ error: "Não encontrada" });

        return res.json(meal);
        } catch (e) {
        return res.status(500).json({ error: "Erro ao buscar refeição" });
        }
    },

    async update(req, res) {
        try {
        const id = req.params.id;
        const userId = req.user.id;
        const { name, description, datetime, isDiet } = req.body;

        const exists = await prisma.meal.findFirst({ where: { id, userId } });
        if (!exists) return res.status(404).json({ error: "Não encontrada" });

        const meal = await prisma.meal.update({
            where: { id },
            data: {
            name,
            description,
            datetime: new Date(datetime),
            isDiet,
            },
        });

        return res.json(meal);
        } catch (e) {
        return res.status(500).json({ error: "Erro ao atualizar" });
        }
    },

    async remove(req, res) {
        try {
        const id = req.params.id;
        const userId = req.user.id;

        const exists = await prisma.meal.findFirst({ where: { id, userId } });
        if (!exists) return res.status(404).json({ error: "Não encontrada" });

        await prisma.meal.delete({ where: { id } });

        return res.status(204).send();
        } catch (e) {
        return res.status(500).json({ error: "Erro ao excluir" });
        }
    },
};
