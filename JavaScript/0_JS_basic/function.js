// function showDiaLog(){
//     console.log('xin chao');
// }

// // showDiaLog();
// var s = 'day la log';
// function test(s){
//     console.log(s);
// }

// function messges(){
//     for (var x of arguments){
//         console.log(x);
//     }
// }

// test(s);
// messges('log1', 'log2', 'log3', 'log4');

// function cong(a, b){
//     return a + b;
// }

// var result = cong(32, 51);
// console.log(result);

var a = [1, 4, 5, 7,2 ,6];
var s = '';
for (var arr of a){
    s += `${arr} `;
}
console.log(s);

for (var i = 0; i<a.length; ++i){
    for (var j = i+1; j<=i; j++){
       if(a[i] > a[j]){
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
       }      
    }
}

var ss = '';
for (var arr of a){
    ss += `${arr} `;
}
console.log(ss);

var b = [5, 4, 3, 2, 1];
for(let i = 0; i<b.length; ++i){
    for (let j = i+1; j<=i; ++j){
        
    }
}

let person = {
    name: 'khang',
    address: 'Ha Noi',
    age: 19
}

console.log();