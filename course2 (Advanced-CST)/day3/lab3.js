/****************** Task 1 ********************/
/** let me Summarize a steps of Inhertance
 *    -1) Chain Parent Constructor
 *           parent.call(this,...)
 *    - 2) Copy Parent Prototype as a reference
 *            Object.create
 *              Employee.prototype = Object.create(Person.prototype)
 *    - 3) re-setup child constructor
 *           prototype functions and properties
 *              Employee.prototype.constructor = Employee;
 *              Employee.prototype.display = function() {
return this.empName;
}
*/
/* Shape Class */
function Shape(len, wid) {
    if (this.constructor == Shape) {
        throw new Error("Can't create instance from abstract class");
    }
    Object.defineProperties(this,{
        length: {
            value: len,
            writable: false, // can't be modified
            enumerable: false, // can't be iterated
            configurable: false // can't be deleted
        },
        width: {
            value: wid,
            writable: false, // can't be modified
            enumerable: false, // can't be iterated
            configurable: false // can't be deleted 
        }
    });
    
}
Shape.prototype.valueOf = function () {
    return this.length * this.width 
}

/* rectangle class inhereit person */
function Rectangle(len,wid) {
    /* chain parent constructor */
    Shape.call(this, len, wid);
}
// Copy shape prototype to rectangel 
Rectangle.prototype = Object.create(Shape.prototype);
// re-set rectangle constructor
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.toString = function () {
    var area = this.length * this.width;
    var Perimeter = (this.length + this.width) * 2;
    console.log("Rectangle : ");
    console.log(
        "   ",
        "Lenght =",
        this.length,
        "width =",
        this.width,
        "Area =",
        area,
        "Perimeter =",
        Perimeter
    );
};
var rect1 = new Rectangle(10, 5);
var rect2 = new Rectangle(20, 5);
rect1.toString();
console.log(rect1+rect2);
/* class square */
function Square(len) {
    
    /* chain parent constructor */
    Rectangle.call(this, len, len);
    Square.counter++;
}
// copy rectangle prototype to square
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    console.log("Square");
    console.log(
        "   ",
        "Length =",
        this.length,
        "Area =",
        this.length * this.length,
        "Perimeter =",
        this.length * 4
    );
    
}
/* create static property counter */
Square.counter = 0;
/* create static function getCounter */
Square.getCounter = function () {
    return this.counter;
}

var sq1 = new Square(10);
var sq2 = new Square(20);
sq2.toString()
console.log(sq1);
console.log(Square.getCounter());

/******************************* Task 2 ***************************/
function Vehicle(speed, color) {
    if (this.constructor == Vehicle)
        throw new Error("Can't create instance from abstract class")
    Object.defineProperties(this, {
        speed: {
            value: speed,
            writable: false,
            enumerable: false,
            configurable: false
        },
        color: {
            value: color,
            writable: false,
            enumerable: false,
            configurable: false
        },
    });
    
    this.turnLeft = function () {
        console.log("Turning left");
    };
    this.TurnRight = function () {
        console.log("Turning right");
    };
    this.goBackward = function(speed, accel){
        console.log("Going back with speed =", speed, "and accel =", accel);
    };
    this.goForward = function(speed, accel){
        console.log("Going forward with speed =", speed, "and accel =", accel);
    };
}
/* class Biclye*/
function Bicycle(speed,color) {
    Vehicle.call(this, speed, color);
    this.ringBell = function () {
        console.log("Ringing bell");
    };
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

bike1 = new Bicycle(260, "black");
console.log(bike1);

/* class motor Vehicle */
function MotorVehicle(speed, color ,sizeOfEngine , licencePlate) {
    Vehicle.call(this, speed, color);
    Object.defineProperties(this, {
        sizeOfEngine: {
            value: sizeOfEngine
        },
        licencePlate: {
            value: licencePlate
        }
    });
    
    this.getSizeOfEngine = function () {
        return this.sizeOfEngine;
    }
    this.getLicencePlate = function () {
        return this.licencePlate;
    }
};
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

var motorvehicle1 = new MotorVehicle(120, "red", 4, "6185");
console.log(motorvehicle1);

/* class DumpTruck */
function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheel, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    Object.defineProperties(this, {
        loadCapacity: {
            value: loadCapacity
        },
        numWheel: {
            value: numWheel
        },
        weight: {
            value: weight
        }
    });
    this.lowerLoad = function () {
        console.log("Lowering Load");
    };
    this.raiseLoad = function () {
        console.log("Raising Load");
    };

};
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

var dumptruck1 = new DumpTruck(80, "gray", 6, "4875", 1000, 6, 5000);
console.log(dumptruck1);

/* class car */
function Car(speed, color, sizeOfEngine, licencePlate, numDoors, numWheels, weight) {
    MotorVehicle.call(this,speed, color, sizeOfEngine, licencePlate);
    Object.defineProperties(this, {
        numDoors: {
            value: numDoors
        },
        numWheels: {
            value: numWheels
        },
        weight: {
            value: weight
        }
    });
    this.switchOnAirCon = function () {
        console.log("Switching on air con");
    };
    this.getNumOfDoors = function () {
        return this.numDoors;
    }
}
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

var car1 = new Car(220, "white", 1600, "1111", 4, 4, 2000);
console.log(car1);