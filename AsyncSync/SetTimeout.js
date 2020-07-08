const arr = [1,2,3];

function logArray(){
    setTimeout(()=>{
        arr.forEach((a)=>{
            console.log(a);
        })
    },1000)
}

function pushInArray(x){
    setTimeout(()=>{
       arr.push(x);
    },2000)
}

console.log('hello');
pushInArray(4);
logArray();
console.log('bye')