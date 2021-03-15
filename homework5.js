// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, 
//homework3.js, homework4.js): 
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե 
//վարկյանից(win32_14_14_58.txt)   
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:
let os = require('os');
let fs = require('fs');
let time = new Date();
let filename = os.platform() + '_' + time.getHours() + '_' + time.getMinutes() + '_' + time.getSeconds();
for(i = 1; i < 5; i++){
fs.readFile(`homework${i}.js`, 'utf8', function(err, data) {
   if (err) throw err;
   fs.appendFile(filename + '.txt', `${data}
`, function (err) {
    if (err) throw err;
    });
 });
}
