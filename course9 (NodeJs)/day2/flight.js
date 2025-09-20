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
let user1 = new FlightTicketsRes(10,20,"cairo","alex")
let user2 = new FlightTicketsRes(50,20,"cairo","alex")
let user3 = new FlightTicketsRes(578, 544, "aswan", "alex")
user2.seatNum = 1400;
console.log(user3.flightNum);
user1.displayInfo()
FlightTicketsRes.displayAllInfo()