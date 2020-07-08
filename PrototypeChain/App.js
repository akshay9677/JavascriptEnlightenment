const functions = {CountTheNoOfPrototypeProp: function(arr){
    var count = 0;
    while(arr.__proto__ !== null){
       count = count + 1;
       arr = arr.__proto__;
    }
   
    return count;
},
BindAndCallMethod: function(obj,lName){
   var person = {
       printName: function(lastName){
          return this.name+' '+lastName
       }
   }
   var akshay = person.printName.bind(obj,lName);
   return akshay()+' '+person.printName.call(obj,lName);
},
BindAndApplyMethod: function(obj,lName){
    var person = {
        printName: function(lastName){
           return this.name+' '+lastName
        }
    }
    var akshay = person.printName.bind(obj,lName);
    return akshay()+' '+person.printName.call(obj,[lName]);
 },
 ObjectDefineModifiers: function(obj){
    Object.defineProperty(obj,'props',{
       value: 22,
       enumerable: false,
       writable: false,
       configurable: false
    })
    obj.props = 42;
    return [delete obj.props,obj.props,Object.keys(obj)]
 },
 SetTimeout: function(x){
   var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(x);
      });
    });
    return promise;
    
 }

}

async function aa() {
   const result = await functions.SetTimeout('Akshay');
   console.log(result); // --> 'done!';
 }
 aa();

module.exports = functions;