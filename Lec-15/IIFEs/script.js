// () -> expresssion
// ()=>{} -> function
// (()=>{}) -> function expression
// (()=>{})() -> calling function expression

const obj = (()=>{
    let person = {
        name:'Rahul',
        age:23,
        marks:[80,70,80]
    }

    function updateMarks(marks, ind){
        person.marks[ind] = marks;
    }

    function getMarks(){
        console.log(person.marks);
    }

    // updateMarks(100, 0);
    // getMarks();

    return {
        "getMarks": getMarks
    }
})()