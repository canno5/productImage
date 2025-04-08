const express = require("express");
const path = require("path");
const app = express();
const router = require("../router/route");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({path:".env"});
let port = process.env.PORT || 100;


const staticPath = path.join(__dirname, "../static");
const viewPath = path.join(__dirname, "../template/views");
app.use("/static/product", express.static(staticPath));
app.use(router);

app.set("view engine", "html");
app.set("views", viewPath);
app.engine("html", (filePath, options, cb)=>{
    fs.readFile(filePath, (err,data)=>{
        if(err) return console.log(err);
        const content = data.toString();
        cb(null, content);
    });
});

app.listen(port, ()=>{
    console.log("I am live to the port "+port)
})