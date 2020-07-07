const functions = {
    ObjDefineProperty: function(obj,val){
        Object.defineProperty(obj,'propss',{
            value: val
        })
        return obj.propss;
    },
    ObjDefineProperities: function(obj2,val1,val2){
        Object.defineProperties(obj2,{props1:{value: val1},props2:{value: val2}});
         var myArr = [obj2.props1,obj2.props2];
         return myArr;
    },
    ObjectHasOwnProperty: function(obj3,prop){
       
       return obj3.hasOwnProperty(prop);
    },
    ImmediatelyInvokedFuncExp: function(str){
        const f = (function(x){
            return x;
        })(str);
        return f;
    },
    EndOfPrototypeChain: function(arr){
        return arr.__proto__.__proto__.__proto__;
    }
}




module.exports = functions;