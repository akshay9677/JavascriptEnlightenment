//Chapter 9 Arrays
   //1..Overview of arrays 
    var arr = ['ak','ka'];
    console.log(arr[0]);//ak
    var obj = {
        ak: 'ak',
        ka: 'ka'
    }
    console.log(obj.ak);//ak
    //2..Array() Parameter
     var arr1 = new Array(1,2);
     var arr2 = new Array(100);//if only one number value then it will consider it as size
     console.log(arr1[0],arr1.length);//1 2
     console.log(arr2[0],arr2.length);//undefined 100
    //3..Creating Arrays
     var a = new Array('ak','ka');
     var a1 = ['ak','ka'];
     console.log(a,a1);//logs arrays a and a1
    //4..Adding and updating in Array
     var a1 = [];
     a1[20] = 'red';//Adding
     console.log(a1[20],a1.length);//red 21
     a1[20] = {color: 'red'};//Updating
     console.log(a1[20].color,a1.length);//red 21
    //5..Setting array length can add or remove values
     var a = ['ak','ka'];
     console.log(a.length,a[1]);//2 ka
     a.length = 1;
     console.log(a[1]);//undefined
    //6..Multidimensional Arrays
      var a = [[['akshay']]];
      console.log(a[0][0][0]);//akshay - since 3-dimensional
    //7..Looping over arrays 
    var a = [1,2,3,4];
      //forward
      var counter = 0;
      while(counter < a.length ){
          console.log(a[counter]);// 1 2 3 4
          counter++;
      } 
      //backward
      var myCounter = a.length;
      while(myCounter >= 0){
          console.log(a[myCounter]);// 4 3 2 1
          myCounter--;
      }
     
      