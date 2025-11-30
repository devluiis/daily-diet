const router = require("express").Router();
const controller = require("../controllers/users.controller");

router.post("/users", controller.register);

module.exports = router;
