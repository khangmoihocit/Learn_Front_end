var languages = ['javascript', 'c++', null, undefined, {}, 123];

console.log(typeof languages);

// kiểm tra xem có phải array không
console.log(Array.isArray(languages));

//toString
var arr = new Array('javascript', 'php', 'ruby');
console.log(arr.toString());

//join: hiện các phần tử trong mảng cách nhau bởi ...
console.log(arr.join(', '));

//pop: xoá phần tử cuối mảng và trả về nó
console.log(arr.pop());
console.log(arr);

//push: them 1 hoac nhieu phan tu vao cuoi mang
arr.push('java', 'dart');
console.log(arr);

//shift: xoa phan tu dau mang va tra ve no
console.log(arr.shift());
console.log(arr);
//unshift: giống push nhưng ở đầu mảng

//splice: Xoá phần tử theo chỉ số
arr.splice(1);
console.log(arr);

//xoá 3 phần tử bắt đầu tử phần tử ở chỉ số 1
arr.splice(1, 3);

//xoá 1 phần tử ở vị trí 1 và thêm 1 hoặc nhiều phần tử mới
arr.splice(1, 1, 'java', 'dart', 'html', 'css', 'python');
console.log(arr);
arr.splice(1, 1, 'c++');
console.log(arr);

//concat: nối
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b);
console.log(c);

//slice(start, end): cắt ra phần tử trong mảng
console.log(c.slice(2, 4));