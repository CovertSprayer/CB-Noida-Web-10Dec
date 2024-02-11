
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const num = Math.floor(Math.random()*10);
        console.log(num);

        const secret = 'This is some secret!';
        if(num >= 5 ){
            resolve(secret)
        }
        else{
            reject(new Error('Sorry! Try Again.'));
        }
    }, 1000)
})

p
.then((secret)=>{
    console.log(secret);
})
.catch((msg)=>{
    console.log(msg)
})