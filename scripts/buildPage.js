const marked = require("marked");
const fs = require("fs");

const readMe = fs.readFileSync("README.md", "utf-8");
const markdownHtml = marked(readMe);

const header = fs.readFileSync("./html/header.html", "utf-8");
const footer = fs.readFileSync("./html/footer.html", "utf-8");

let htmlPage = header + markdownHtml + footer;

fs.writeFile("./index.html", htmlPage, (err) => console.log(err));
