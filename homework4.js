// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: 
//Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:
let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(err, data) {
  if (err) throw err;
  fs.writeFile('write.txt', data.replace(/ /g, "-"), ()=>{});
});
