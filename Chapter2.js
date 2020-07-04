console.log('--Chapter 2 Object props--')
var x = {
   name: 'Akshay',
   age:21,
   height: 175
 };
//1..Object properties access- Dot Notation
 console.log(x.name);//Akshay
//2..Object properties access- Bracket Notation
 console.log(x['age']);//21
//3..Deleting a Property
 delete x.height;
 console.log(x.height);//undefined
//4..Complex Values can have Javascript values as Property
 var y = new Array()
 y.myObj = new Object();
 y.myFunc = new Function();
 y.myString = new String();
 console.log(y);// myObj,myFunc,myString
//5..HasOwnProperty
 //It check only the property of the constructor function not its parent object
 var myArray = ['ak','ka'];
 console.log(myArray.hasOwnProperty('toString'));//flase
//6..In 
 //It checks the entire prototype chain of the constructor.Here we 
 //get true because array is an object with the parent as object and 
 //that is why it has access to toString method
 console.log('toString' in myArray);//true