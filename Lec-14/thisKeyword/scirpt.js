
// ---------------- default binding
// console.log(this);

// function temp(){
//     console.log(this);
// }

// temp();

// ---------------- implicit binding

let car = {
    color:'Black',
    seats:2,
    price:25000,
    getDetails: function(){
        // console.log(this); // points to car obj
        console.log(`Color: ${this.color}, 
                     Seats: ${this.seats},
                     price: ${this.price}`);
    }
}

// car.getDetails();

// -------------------- explicit binding

function updatePerson(name, age){
    this.name = name;
    this.age = age;
}

var p1 = {
    name:'Abhishek',
    age:30
}

var p2 = {
    name:'Arnav',
    age:24
}

data = ['aarave', 20]

updatePerson.call(p2,'Aaravvvvvvv', 20);
updatePerson.apply(p1, data);

const newFun = updatePerson.bind(p2);
newFun('abcd', 34)

console.log(p1)
console.log(p2)


