require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const db = require("./models");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./routes/routes");

app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());

/* if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
} */
app.use(logger("prod"));
// Use apiRoutes
app.use("/api", routes);

const router = express.Router();

app.get("*", (req, res) => {
    res.sendFile("client/build/index.html", {root: __dirname});
});

db.sequelize.sync({}).then(function () {
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT);
	});
});