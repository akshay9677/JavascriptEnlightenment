 // 1..Ways of Creating Objects in Javascript
          // 1.Using Object Constructor
          var toby = new Object();
          toby.age = 21;
          toby.favouriteColor = 'Red';
          console.log('--Object Using Object Constructor--');
          console.log(toby);
          // Output {age: 21, favouriteColor: "Red"}
       // 2.Constructing our Own Object using constructor function
         var Person = function(age,favouriteColor){
             this.age = age,
             this.favouriteColor = favouriteColor
         }

         var rory = new Person(22,'Green');
         console.log('--Constructing our Own Object using constructor function--');
         console.log(rory);
         //Output Person {age: 22, favouriteColor: "Green"}
  // 2.. Built-in Objects 
        var num = new Number(2);
        var str = new String('Akshay');
        var boolean = new Boolean(true);
        var func = new Function('x','y','return x*y');
        var arr = new Array('ak','ka');
        console.log('--Built-In Objects--');
        console.log(num,str,boolean,func,arr);

       //Output   Number {2} String {"Akshay"} Boolean {true} ƒ anonymous(x,y) {return x*y} ["ak", "ka"]
  
  //3..Userdefined Objects
        var Person = function(age,favouriteColor){
             this.age = age,
             this.favouriteColor = favouriteColor
         }

         var rory = new Person(22,'Green');
         console.log('--Userdefined Objects--');
         console.log(rory);
         //Output Person {age: 22, favouriteColor: "Green"}
  // 4.. Primitive Values
      var s = 'Akshay';
      var n = 2;
      var b = true;
      console.log('--Primitive Values--');
      console.log(s,n,b);

  // 5.. Complex Values
        var num = new Number(2);
        var str = new String('Akshay');
        var boolean = new Boolean(true);
        var func = new Function('x','y','return x*y');
        var arr = new Array('ak','ka');
        console.log('--Complex Objects--');
        console.log(num,str,boolean,func,arr);
  // 6..Constructor Instance have constructor props. that point to constructor functions
      console.log('--Constructor Instance gives info about the Constructor function')
      console.log(num.constructor === Number,str.constructor === String,boolean.constructor === Boolean);
      //Output true true true