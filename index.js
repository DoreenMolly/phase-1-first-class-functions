// Code your solution in this file!

const spy = () => "A callBack message";
const receivesAFunction = (spy) => spy()
const returnsANamedFunction = () => (function namedValue(){
    return "A named function";});
const returnsAnAnonymousFunction = () => (()=>{
    return "An anonymous function";
})