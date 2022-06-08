// Code your solution in this file!

const callBacking = () => "A callBack message";
const receivesAFunction = (callBacking) => callBacking()
const returnsANamedFunction = () => (function namedValue(){
    return "A named function";});
const returnsAnAnonymousFunction = () => (()=>{
    return "An anonymous function";
})