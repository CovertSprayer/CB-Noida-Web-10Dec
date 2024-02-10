
function Student(name, age, id, marks){
    this.name = name;
    this.age = age;
    this.id = id;
    this.marks = marks;
}
Student.prototype.avgMarks = function(){
    return (this.marks[0] + this.marks[1] + this.marks[2])/3;
}

const s1 = new Student('Arpit', 23, 1, [50, 80, 75]);
const s2 = new Student('Rahul', 30, 2, [80, 90, 85]);
const s3 = new Student('Mohit', 20, 3, [70, 95, 95]);

console.log(s1, s2, s3);

let obj = {
    a:4,
    b:true
}

let obj1 = Object.create(obj);

