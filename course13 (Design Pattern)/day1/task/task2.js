function counter(){
    if(counter.prototype.instance){
        return counter.prototype.instance
    }
    else{
        this.counter = 1 
        counter.prototype.instance = this
    }
}
let s1 = new counter();
console.log(s1.counter);
let s2 = new counter();
console.log(s2.counter);
let s3 = new counter();
console.log(s3.counter);