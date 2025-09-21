class FlightTicketsRes {
    static userCount = 0;
    static usersData = []
    #seatNum;#flightNum;
    constructor(seatNum,flightNum,depPort,arrPort){
        
        this.#seatNum = seatNum;
        this.#flightNum = flightNum;
        this.depPort = depPort;
        this.arrPort = arrPort;
        this.date = new Date();
        FlightTicketsRes.usersData.push(this)
        FlightTicketsRes.userCount++;
    }
    set seatNum(newSeat){
        this.#seatNum = newSeat;
    }
    get seatNum(){
        return this.#seatNum
    }
    set flightNum(newflightno){
        this.#flightNum = newflightno;
    }
    get flightNum(){
        return this.#flightNum;
    }
    
    displayInfo(){
        console.log(`userSeatNumber : ${this.#seatNum}
    userFlightNum : ${this.#flightNum}
    depPort - ArrPort : ${this.depPort} - ${this.arrPort}
    registerData : ${this.date}
    `);
    }
    static displayAllInfo(){
        console.log("All registerd tickets : ");
        FlightTicketsRes.usersData.forEach(user => {
            user.displayInfo();
            console.log("");
            console.log("*******");
            console.log("");
        });
    }
}
(function (moduleName, env, className) {
if (typeof module !== "undefined" && module.exports) {
    // module.exports = definition();
    // env = definition(); // -> exports = module.exports
    module.exports = className; // -> exports = module.exports
} else {
    // window[moduleName] = definition();
    env[moduleName] = className;
}
})("myModule", this, FlightTicketsRes);

