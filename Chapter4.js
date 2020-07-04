console.log('--Chapter 4 Function()--');
//1..Function parameters
 //Unlike objects we can have indefinite params
 var addFunc = new Function('num1','num2','return num1+num2');
 console.log(addFunc(2,2));//4
//2..Defining Functions
  //(1) As a statement
  function func1(n1,n2){
      return n1+n2;
  }
  //(2)As a Expression
  const func2 = function(n1,n2){
      return n1+n2;
  }
  //(3)As a Constructor
  var func3 = new Function('num1','num2','return num1+num2');
  console.log(func1(2,2),func2(2,2),func3(2,2));// 4 4 4
//3..Invoking a Function
 //(1)As a Function
 function func4(n1,n2){
      return n1+n2;
  }
  console.log(func4(3,3));//6
  //(2)As a Method
  var myObj = {func5: function(n1,n2){return n1+n2}}
  console.log(myObj.func5(2,2));//4
  //(3)As a Constructor
  var Const = function(){
      this.num = 2;
      this.func6 = function(){return this.num};
  }
  var c = new Const();
  console.log(c);//c body
  //(4)By using call() 
  var obbj = {
      fun : function(){
          console.log(this.name+arguments[0]); 
      }
  }
  var akshay = {name: 'Akshay'};
  obbj.fun.call(akshay,' Kannan');//Akshay Kannan
  //Here call is use to invoke a method by passing akshay object as a argument
  //(5)By using apply()
  obbj.fun.apply(akshay,[' Kannan']);//Akshay Kannan
  //apply is same as call only difference is the way in which arguments are passed
    