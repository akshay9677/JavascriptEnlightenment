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


}

module.exports = functions;