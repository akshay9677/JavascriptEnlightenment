//Chapter 8 Function Prototype Property
   //1..Whenever a constructor function is created it is assigned with a prototype object
     function Person(firstName,lastName){
         this.firstName = firstName,
         this.lastName = lastName
     }
     console.log(Person.prototype); //this object will have a constructor which points to Person function
    //2..When a object is created it will have a __proto__
     var akshay = new Person('Akshay','Kannan');
     console.log(akshay.__proto__);//this __proto__ or dunder proto points to Person.prototype
     //3..Object .prototype is the last stop in the prototype chain
      var arr = [];
      console.log(arr.name);//undefined
      //Here javascript looks for name prop in arr and,
      //if it is not found then it looks in array.prototype and object.prototype
     //4..Prototype chain returns the first prop match
     var arry = [];
     Array.prototype.name = 'Akshay';
     arry.name = 'akshay';
     console.log(arry.name);//akshay
     //5..Replacing prototype property with new object does not update former instance
     var func = new Function();
     func.prototype.x = 2;
     var func2 = new func();
     console.log(func2.x);//2
     func.prototype = {x:4};
     console.log(func2.x)//logs 2 eventhough the prototype is updated,
     //this is because the prototype is assigned before func2 creation,
     //and changing after assigning won't change the func2.x
     //6..Creting inhertince chain
      var Person = function(){this.x = 1};
      Person.prototype.y = 2;
      var Chef = function(){this.z = 3};
      Chef.prototype = new Person();
      var cody = new Chef();
      console.log(cody.x,cody.y,cody.z);//1 2 3
     