// ------------------- spread operator

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// const arr = arr1.concat(arr2);
const arr = [...arr2, ...arr1]
// console.log(arr);

function addNums(a, b, ...c) {
    let d = c.reduce((acc, num) => {
        return acc + num;
    })
    return a + b + d;
}

// console.log(addNums(1,2,3,4,5,6,7))


// ------------------ object desturcturing

var student = {
    name: 'Arnav',
    age: 24,
    marks: {
        maths: 80,
        physics: 90,
        chemisty: 60,
        avg: function () {
            return (this.maths +
                this.physics +
                this.chemisty) / 3;
        }
    }
}

printMarks(student)

function printMarks({marks:{maths, physics}}) {
    console.log(`Maths: ${maths}, Physics: ${physics}`)
}

let obj = {
    a: 10,
    b: 20
}

let { a, b } = obj;
console.log(a, b);
console.log(obj.a, obj.b);