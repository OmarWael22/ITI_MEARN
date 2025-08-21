exports.sum = (a,b) =>{
    if(typeof a == "string" || typeof b == "string")
        throw new TypeError("a,b must be numbers");
    else
        return a+b;
};