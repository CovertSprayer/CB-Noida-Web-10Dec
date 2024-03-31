const fs = require('fs');
const path = require('path');

function getData(fileName){
    const location = path.join(__dirname, 'data', fileName)
    return new Promise((resolve, reject) => {
        fs.readFile(location, {encoding: 'utf-8'}, (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })
}

function saveData(fileName, data){
    const location = path.join(__dirname, 'data', fileName)
    return new Promise((resolve, reject) => {
        fs.writeFile(location, data, (err)=>{
            if(err) reject(err);
            else resolve('Successfully written!')
        })
    })
}

async function main(){
    const data1 = await getData('input1.txt');
    const data2 = await getData('input2.txt');

    const arr1 = data1.split('\r\n');
    const arr2 = data2.split('\r\n');

    const arr = [...arr1, ...arr2];

    arr.sort((a,b)=> a-b);
    // console.log(arr);
    
    // const finalData = arr.toString('\n');
    const finalData = arr.join('\n');

    const msg = await saveData('output.txt', finalData);
    console.log(msg);
}

main();






