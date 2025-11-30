const express = require("express");
const cors = require("cors");
require("dotenv").config();

const users = require("./routes/users.routes");
const auth = require("./routes/auth.routes");
const meals = require("./routes/meals.routes");
const metrics = require("./routes/metrics.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(users);
app.use(auth);
app.use(meals);
app.use(metrics);

module.exports = app;
