const arr = [1,2,3];
function logArray(){
    setTimeout(()=>{
        arr.forEach((a)=>{
            console.log(a);
        })
    },1000)
}

function pushInArray(x){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push(x);
         if(arr[arr.length - 1] == x){
             resolve();
         }else{
             reject('failed');
         }
         },2000)
         
    })
    console.log(p);
    return p;
}

console.log('Hi')

async function arrayInsert(c){
     await pushInArray(c);
    logArray()
}

arrayInsert(4);

console.log('Bye');