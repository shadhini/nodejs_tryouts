// #### Core Modules ####
// these are modules built in to nodeJS

// when using core modules do not include path at all
// practise is to assign module to a variable with name same as the module

var fs = require('fs'); // File System module
var path = require('path'); // Path module: normalize paths depending on your OS


fs.writeFileSync("corn.txt", "Corn is good. Corn is life");
console.log(fs.readFileSync("corn.txt").toString());


var websiteHome = "\\home\\shadhini\\dev\\repos/shadhini/nodejs_tryouts//basics/modules/index.html";
var websiteAbout = "/home/shadhini/dev/repos/shadhini/nodejs_tryouts/basics/modules/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout)); // directory
console.log(path.basename(websiteAbout)); // file name
console.log(path.extname(websiteAbout)); // file extension
