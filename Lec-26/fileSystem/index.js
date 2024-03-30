// readFile and writeFile
const fs = require('fs');
const path = require('path');

let data = 'This is some data 12344444444444';
// console.log(__dirname);

// const filePath = __dirname + "/" + "data.txt" ;
const filePath = path.join(__dirname, 'data.txt') ;
console.log(filePath)

// fs.writeFile(filePath, data,  ()=>{
//     console.log('File written successfully!');
// })

// fs.readFile(filePath, 'utf8', (err, data)=>{
//     if(err) {
//         return console.log(err)
//     }
//     console.log(data);
// })

async function getData(){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data)=>{
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}


async function main(){
    const data = await getData();
    console.log(data);

}

main();