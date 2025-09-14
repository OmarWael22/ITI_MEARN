/* 1 */
let mystr : string = "Hello TS";
console.log( typeof mystr);
let mynum = 123;
console.log(typeof mynum);
let mybool :boolean = true;
console.log(mybool);
let myArr : number[] = [1,2,3];
console.log(myArr);
/* 2 */
let mixedArr : (number | string)[]= [1,"two",3,"four"];
for (const element of mixedArr) {
    console.log(`${element} => ${typeof element}`);
}
/* 3 */
enum TrafficLight{
    Red,
    Yellow,
    Green
};
function getAction(light : TrafficLight):string {
    switch(light){
        case TrafficLight.Red:
            return "Stop";
        case TrafficLight.Yellow:
            return "Get";
        case TrafficLight.Green:
            return "Go"
    }
};
let state:TrafficLight = TrafficLight.Yellow;
console.log(getAction(state));
/* 4 */
enum Role{
    Admin,
    User,
    Guest
};
type userTuple = [id:string,name:string,role:Role];
let user:userTuple=["123","omar",Role.Admin];
(function describeUser(user:userTuple):void{
    console.log(`UserName => ${user[1]}
    id => ${user[0]}
    role => ${user[2]}`);
    
})(user);
/* 5 */
function overLoadedFunc( data : (number | string)) {
    if (typeof data == "number")
        return "$" + data as string;
    else
        return data.toUpperCase();
}
console.log(overLoadedFunc("adc"));
/* 6 */
let anonymous : unknown = "string";
function processInput(data : unknown){
    if(typeof data == "number")
        return Math.pow(data,2)
    else if(typeof data == "string")
        return data.toUpperCase()
}
console.log(processInput(anonymous));