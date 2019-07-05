const fs = require('fs');
const { JSDOM } = require('jsdom');

const file = fs.readFileSync('./index.html', { encoding: "utf8" });
var dom = new JSDOM(file);
var document = dom.window.document;

const div = document.createElement("div");
div.innerHTML = "A div";
document.body.appendChild(div);

fs.writeFileSync('./index.html', document.documentElement.outerHTML , { encoding: "utf8" });