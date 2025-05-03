var s = 'nguyen van a';
alert(s);

var ss ='nguyen van b \' hello \'';

// 1. length
console.log(s.length);

// 2. find index: tra ve vi tri dau tien tim thay,
//                 khong tim thay tra ve -1

console.log(s.indexOf('a'), 5); //tim kiem bat dau tu vi tri nao do
console.log(s.search('a')); //tim kiem 

// 3. cut string
//cắt từ trái sang phải
console.log(s.slice(7, 11));
//cắt từ phải sang trái
console.log(s.slice(-6, -2));

//4/replace
//thay từ 'van' thành 'thi'
console.log(s.replace('van', 'thi'))
s = s.replace('nguyen van a', '    khang dang hoc js    ')
//5. convert to upper case
//6. conver to lower case
console.log(s.toUpperCase());
console.log(s.toLowerCase());

//7. Trim: loại bỏ khoảng trắng ở 2 đầu
console.log('truoc khi dung trim: ' + s.length);
s = s.trim();
console.log('sau khi dung trim: ' + s.length);

//8. split: cắt xâu giống java
var languages = 'javascript, ruby, php';
console.log(languages.split(''));

//9. get a character by index
var myString = 'javascript';
console.log(myString.charAt(1));