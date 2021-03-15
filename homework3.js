// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ 
//Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
let os = require("os");
let number = require("random");
let fs = require('fs');
let filename = '';
for(let i = 0; i < 8; i++){
    filename += number.int(0, 9);
}
fs.appendFile(filename + '.txt', JSON.stringify(os.cpus()), function (err) {
  if (err) throw err;
});
