
class Person{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    avgMarks() {
        let totalMarks = 0;
        for(let num of this.marks){
            totalMarks += num;
        }
        return totalMarks / this.marks.length;
    }

    set updateAge(age){
        this.age = age;
    }

    get totalMarks(){
        let total = this.marks.reduce((acc, num)=>acc + num);
        return total;
    }

    static sayHello(){
        console.log('Hello from Person');
    }
}

let p1 = new Person('Anurag', 24, [90, 80, 70]);
console.log(p1);