const appRootPath = require("app-root-path");
const express = require("express");

var bodyParser = require('body-parser');
// const userRoutes=require('./Routes/userRoutes');
const app = express();
const port = process.env.PORT || 5000;







app.use("/static", express.static(appRootPath + "/src/public"));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.get("/", (req, res,next) => res.send("Hello World!"));
app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});
