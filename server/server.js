const express = require("express");
// const cookieParser = require("cookie-parser");
const cors = require("cors")
const db = require("./utils/db.js");
const AuthRoute = require("./router/auth.route.js");

const PORT = 8081;
const app = express();
app.use(cors())

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());

app.use("/v1", AuthRoute);

app.listen(PORT, () => {
  db();
  console.log(`http://127.0.0.1:${PORT}/v1`);
});
