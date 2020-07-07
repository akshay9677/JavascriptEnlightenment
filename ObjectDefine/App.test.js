

const functions = require('./App');
describe('Test Cases for Object Define Property,IIFE and End of Prototype chain',()=>{
    test('Object define property',()=>{
        const obj = {}
       expect(functions.ObjDefineProperty(obj,22)).toBe(22)
    })
    
    test('Object define properties',()=>{
      const objj = {};
      expect(functions.ObjDefineProperities(objj,22,2)).toStrictEqual([22,2]);
    })
    
    test('Object has own property check',()=>{
        const obj = {props:1};
        expect(functions.ObjectHasOwnProperty(obj,'props')).toBeTruthy();
    })
    
    test('Immediately Invoked Function Expression',()=>{
        expect(functions.ImmediatelyInvokedFuncExp('Hello')).toBe('Hello');
    })
    test('End of the prototype chain',()=>{
        var arr = [];
        expect(functions.EndOfPrototypeChain(arr)).toBe(null)
    })
})










