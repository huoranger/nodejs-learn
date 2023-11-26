console.log(__dirname);

console.log(__filename);

// 计时器
setTimeout(() => {
    console.log("setTimeout~~~");
}, 1000);

// setInterval(() => {
//     console.log("setInterval~~~");
// }, 1000);

setImmediate(() => {
    console.log("setImmediate~~~");
});

process.nextTick(() => console.log("nextTick~~"));


console.log(global.process.argv);