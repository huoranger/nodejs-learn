const { fooSayHello, imodule } = require("./foo");

const { barSayHello } = require('./bar');



console.log(exports);

barSayHello("huoranger");

fooSayHello("huoranger")

console.log(exports === module.exports);

console.log(module);


console.log(imodule);