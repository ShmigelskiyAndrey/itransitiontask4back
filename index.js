const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const authorizationHandler = require("./handlers/authorization");
const db = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7608064",
  password: "f94wAb5ThZ",
  database: "sql7608064",
});

db.connect();

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.json());

app.use("/api/auth/v1", authorizationHandler(db));

app.get("/", (req, res) => {
  res.send(`Hello World! ${JSON.stringify(req.cookies)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
