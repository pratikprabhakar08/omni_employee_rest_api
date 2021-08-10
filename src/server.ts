import db from "./config/database.config";
import app from "./app";

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

db.sync().then(() => {
	console.log("connect to db");
});

app.listen(port, () => {
	console.log("server is running on port " + port);
});