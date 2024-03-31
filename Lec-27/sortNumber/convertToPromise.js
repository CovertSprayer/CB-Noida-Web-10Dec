const fs = require('fs');
const path = require('path');

const numbers = [];

// const path1 = path.join(__dirname, 'data', 'input1.txt');
// const path2 = path.join(__dirname, 'data', 'input2.txt');

function getData(fileName){
    const location = path.join(__dirname, 'data', fileName)
    return new Promise((resolve, reject) => {
        fs.readFile(location, {encoding: 'utf-8'}, (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })
}

getData('input1.txt')
    .then(data => {
        console.log(data);
        getData('input2.txt')
        .then(data => {
            console.log(data);

            //logic
        })
    })







