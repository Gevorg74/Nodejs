// 1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):
let os = require('os');
console.log("Architecturetotal amount of system memory: " + Math.ceil(os.totalmem()/(1024 ** 3)));
