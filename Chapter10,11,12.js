//Chapter 10 String()
   //1..Overiview of Strings
     var str = new String('akshay');
      console.log(str, typeof str);//akshay object
     var strWithoutNew = String('Kannan');
     console.log(strWithoutNew,typeof strWithoutNew);//Kannan string
     var strLiteral = 'akshay kannan';
     console.log(strLiteral,typeof strLiteral);//akshay kannan String
    //2..String() Parameter
    var str = new String('akshay','kannan');
    console.log(str);//logs only akshay
//Chapter 11 Number()
   //1..Overview of Numbers
    var num = new Number(1);
    console.log(num,typeof num);// 1 object
    var num1 = Number(2);
    console.log(num1,typeof num1);// 2 number
    var num2 = 3;
    console.log(num2,typeof num2);// 3 number
    //2..Number() parameter
    var num = new Number(1,2);
    console.log(num);//logs only 1
//Chapter 12 Boolean()
  //1..Overview of boolean
   var b = new Boolean(0);
   console.log(b,typeof b);//false object 
   var b1 = Boolean(false);
   console.log(b1,typeof b1);//false object
   var b3 = true;
   console.log(b3,typeof b3);//true object
 //2..Boolean() parameter
  var b4 = new Boolean(false);
  console.log(b4);
  //false takes only one param
 //3..Non-primitive false boolean covert to true
  if(b4){
      console.log('Non-primitive boolean are converted to true');
  }