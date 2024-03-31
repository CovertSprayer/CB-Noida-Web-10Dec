const fs = require('fs');
const path = require('path');

const numbers = [];

const path1 = path.join(__dirname, 'data', 'input1.txt');
const path2 = path.join(__dirname, 'data', 'input2.txt');

fs.readFile(path1, {encoding: 'utf-8'}, (err, data1)=>{
    if(err){
        console.log(err);
        return;
    }
    numbers.push(data1);
    fs.readFile(path2, {encoding: 'utf-8'}, (err, data2)=>{
        if(err){
            console.log(err);
            return;
        }
        numbers.push(data2);

        console.log(numbers)

        //logic
    })
})


