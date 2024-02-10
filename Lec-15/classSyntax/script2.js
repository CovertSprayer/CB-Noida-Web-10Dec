
class Vehicle{
    constructor(np, color){
        this.np = np;
        this.color = color;
    }

    printVehicle(){
        console.log(this.np, this.color);
    }
}

class Car extends Vehicle{
    constructor(np, color, mileage){
        super(np, color)
        this.mileage = mileage;
    }

    printMileage(){
        console.log(this.mileage);
    }
}

let v1 = new Vehicle('23SKKDJ23', 'Black');
let c1 = new Car('290090902', 'Brown', '15KmpL')