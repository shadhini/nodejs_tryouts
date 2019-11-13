// #### modules ####
// import modules
// when importing modules never include .js extension
// local modules (user define): require('<path>/<module name>')
// core modules: require('<keyword for the module>')
// PATH: relative path to module from where this script **resides**
var movies = require('./modules');
var movies2 = require('./modules2');

movies.avatar();
movies2.printAvatar();
console.log(movies2.favMovie);