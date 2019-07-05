const fs = require('fs');
const { JSDOM } = require('jsdom');
const file = fs.readFileSync('./index.html', { encoding: "utf8" });

// convert file to DOM
const dom = new JSDOM(file);
const document = dom.window.document;

// Simple append child
const div = document.createElement("div");
div.innerHTML = "A div";
div.classList = "class";
document.body.appendChild(div);

// Append to api id
const api = document.getElementById('api');
const div2 = document.createElement("div");
div2.innerHTML = "A div";
div2.classList = "class";
api.appendChild(div2);

fs.writeFileSync('./index.html', dom.serialize() , { encoding: "utf8" });