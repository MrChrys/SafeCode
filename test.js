var module = require('./index.js')

module()

console.log(new module.console.runFile("./runTest.js", "./test"))
// remove "test" to see the result into a file outside a folder

module.console.log("The flower ", "are in the garden")