////kiss-mvp
"use strict";
var fhelper = require("./helpers/file");
var readline = require('readline');
process.stdout.write('\u001B[2J\u001B[0;0f');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

require("./tasks/main").setup(rl);