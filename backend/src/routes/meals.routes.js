const router = require("express").Router();
const ensureAuth = require("../middlewares/ensureAuth");
const controller = require("../controllers/meals.controller");

router.use(ensureAuth);

router.post("/meals", controller.create);
router.get("/meals", controller.list);
router.get("/meals/:id", controller.getOne);
router.put("/meals/:id", controller.update);
router.delete("/meals/:id", controller.remove);

module.exports = router;
