#!/usr/bin/env node

var fs = require("fs");
var renderer = require("./index");
var resume = fs.readFileSync(__dirname + "/resume.json", "utf-8");
var result = renderer.render(JSON.parse(resume));
console.log(result);
