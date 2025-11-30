const prisma = require("../prismaClient");

function bestSequence(arr) {
    let max = 0, current = 0;
    for (const val of arr) {
        if (val) {
        current++;
        max = Math.max(max, current);
        } else {
        current = 0;
        }
    }
    return max;
    }

    exports.metrics = async (req, res) => {
    const userId = req.userId;

    const totalMeals = await prisma.meal.count({ where: { userId } });
    const mealsInDiet = await prisma.meal.count({ where: { userId, isDiet: true } });
    const mealsOutDiet = await prisma.meal.count({ where: { userId, isDiet: false } });

    const allMeals = await prisma.meal.findMany({
        where: { userId },
        orderBy: { datetime: "asc" },
    });

    const seq = allMeals.map(m => m.isDiet);
    const best = bestSequence(seq);

    return res.json({
        totalMeals,
        mealsInDiet,
        mealsOutDiet,
        bestSequence: best
    });
};
