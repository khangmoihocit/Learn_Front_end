var age = 19;
var pi = 3.14;

var result = (4 / 'abc'); //kết quả không đúng --> NaN
console.log(result);

//cách ktra 1 số có phải NaN
console.log(isNaN(result));

//chuyển từ số --> xâu
var myString = pi.toString();
console.log(typeof myString);

//làm tròn số
var a = 300.23676721;
console.log(a.toFixed(2));