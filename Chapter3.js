console.log('--Chapter 3 Object()--')
        //1..Object Parameter
          //Objects can have one value while created using constructor function
          var a = new Object('Akshay');
          var b = new Object(1);
          var arr = new Object('Akshay','Kannan');
          console.log(a,b,arr);// Akshay 1 Akshay (the second param will not be stored)
        //2..Object using literals
          var c = {
              product: 'Phone',
              cameraSpecs: '12mp',
              ramSpecs: '4GB'
          }
          console.log(c);//{product: "Phone", cameraSpecs: "12mp", ramSpecs: "4GB"}
        //3..Object inherit from Object.prototye
          //Not only objects even array,function etc inherit form their constructor function prototype
          Object.prototype.name = 'Akshay';
          var myStrng = 'hello';
          console.log(myStrng.name);//Akshay
          //It looks for the string prototype for name prop and then gets into
          //the prototype chain and looks for that prop in object