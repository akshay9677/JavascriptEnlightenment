//Chapter 6 this Keyword
  //1..Overview of this
  var myObj1 = {
      name: 'Akshay',
      age: 21,
      method: function(){
          return this.name;
      }
  }
  var myObj2 = {
      name: 'Akshay',
      age: 21,
      method: () => myObj2.name
  }
  console.log(myObj1.method(),myObj2.method());//Akshay Akshay
  //2..this refers to Head Object in nested function
   var myObj3 = {
       func1: function(){
           console.log(this);//myObj is logged
           var func2 = function(){
               console.log(this);//global object is logged
           }();
       }
   };
   myObj3.func1();
   //3..this nested function issue solution 
   var myObj4 = {
       name: 'I am Akshay',
       methods: function(){
           var that = this;
           var func = function(){
               console.log(that.name);
           }();
       }
   }
   myObj4.methods();//I am Akshay
   //4..Controlling this in call() and apply()
   var obbj = {
    fun : function(param1){
        this.name = param1;//this refers to parent object which becomes to be akshay
        console.log(this); 
    }
     }
     var akshay = {};
     obbj.fun.call(akshay,'Akshay Kannan');//Akshay Kannan
      //Here call is use to invoke a method by passing akshay object as a argument
      //(5)By using apply()
      obbj.fun.apply(akshay,['Akshay Kannan']);//Akshay Kannan
      //apply is same as call only difference is the way in which arguments are passed
    //5..Using this in userdefined Constructor function 
     var Person = function(name){
        this.name = name;
      }
      var akshay = new Person('Akshay Kannan');
      console.log(akshay.name);//Akshay Kannan
      //if new is not used then name prop will be set to the head object
    //6..
