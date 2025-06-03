var a = 10;

var promise = new Promise((resolve, reject)=>{
    if(a!=="" && a!==undefined && a!==null){
        resolve(a);
    }else{
        reject(a);
    }
});

promise
    .then((success)=>{
        return success+1;
    })
    .then((success)=>{ //success đầu vào là kết quả return của then đằng trước
        return success+1;
    })
    .then((success)=>{
        console.log(success+1);
    })
    .catch((error)=>{
        console.log("Loi: ", error);
    })
    .finally(()=>{
        console.log("luon vao day");
    })