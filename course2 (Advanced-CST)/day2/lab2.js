function arrObj (start , end , step){
    var myArr = [];
    this.step = step
    this.getArr =  function(){
        return myArr;
    };
    function generate(){
        for(var i = start; i<= end; i+=step){
            myArr.push(i);
        }
    }
    generate();
}
// prepend function
arrObj.prototype.prepend = function(val){
    var myArr = this.getArr()
    if(val == myArr[0] - this.step){
        myArr.unshift(val)
    }
    else throw new Error("invalid append");
};
// append function 
arrObj.prototype.append = function(val){
    var myArr = this.getArr();
    if(val == myArr[myArr.length - 1] + this.step)
        myArr.push(val);
    else
        throw new Error("invalid append");
}
// pop function 
arrObj.prototype.pop = function(){
    var myArr = this.getArr();
    if(myArr.length == 0 )
        throw new Error("can't pop from empty array")
    return myArr.pop();
}
// dequeue 
arrObj.prototype.dequeue = function(){
    var myArr = this.getArr();
    if(myArr.length == 0 )
        throw new Error("can't dequeue from empty array")
    return myArr.shift();
}

var db1 = new arrObj(0,10,2);
db1.prepend(-2);
db1.append(12)

// console.log(db1.pop());
// console.log(db1.dequeue());
db1.append(14);

db1.append(16);

console.log(db1.getArr());
console.log(db1);