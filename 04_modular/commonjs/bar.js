function barSayHello(name) {
    console.log("bar hello, " + name);
}

// 不是本质
exports.barSayHello = barSayHello;

// 本质是module.exports
module.exports = {
    barSayHello
}

console.log(exports == module.exports);
