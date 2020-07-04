//Chapter 7 Scopes and Closures
  //1..Overview scopes
   var x = 1;//global scope
   var func1 = function(){
     console.log(x);//1
   }
   var func2 = function(){
       x = 2;
       var y = 2;//local scope
       console.log(x,y)//2 2
   }
   func1();
   func2();
   eval('var z = 3; console.log(z);')//eval scope logs 3
  //2..Use var inside function otherwise they will be considered global
  var func3 = function(){
      a = 2;
  }();
  console.log(a);//2
  //3..Scope Chain
   var text = 'Hello'//after func4 findes text in global scope
   var func4 = function(){//after func5 searches text in func4 scope
    var func5 = function(){//after func6 searches text in func5 scope
        var func6 = function(){//search for text in func6 scope
          console.log(text);//logs Hello
        }();
    }();
   }();
  //4..Scope chain returns first found value
  var func7 = function(){
      var x = false;
    var func5 = function(){
         x = false
        var func6 = function(){
            x = true//finds x in its own scope has thus does not get into scope chain
          console.log(x);
        }();
    }();
   }();
  //5..Closures
    var func8 = function(){
        var n = 2;
        return function(){
         return n = n*n;
        }
    }();
    console.log(func8());//4
    console.log(func8());//16

   
