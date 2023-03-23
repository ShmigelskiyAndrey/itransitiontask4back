const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7608064",
  password: "f94wAb5ThZ",
  database: "sql7608064",
});

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello World! ${JSON.stringify(req.cookies)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
