const functions = require('./App');

describe('Test Cases for No of Prototypes in Prototype Chain,Call, Bind and Apply and Object Define Modifiers',()=>{
    test('Count the no of prototype in prototype chain in ARRAYS',()=>{
        var a = [];
        expect(functions.CountTheNoOfPrototypeProp(a)).toBe(2);
    });
    test('Count the no of prototype in prototype chain in OBJECTS',()=>{
        var obj = {};
        expect(functions.CountTheNoOfPrototypeProp(obj)).toBe(1);
    });
    test('Bind and Call method test case',()=>{
        var obj = {name: 'Akshay'};
        expect(functions.BindAndCallMethod(obj,'Kannan')).toBe('Akshay Kannan Akshay Kannan')
    })
    test('Bind and Apply method test case',()=>{
        var obj = {name: 'Akshay'};
        expect(functions.BindAndApplyMethod(obj,'Kannan')).toBe('Akshay Kannan Akshay Kannan')
    })
    

});