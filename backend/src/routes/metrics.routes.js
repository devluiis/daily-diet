const router = require("express").Router();
const ensureAuth = require("../middlewares/ensureAuth");
const controller = require("../controllers/metrics.controller");

router.get("/metrics", ensureAuth, controller.metrics);

module.exports = router;
