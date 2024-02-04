
// console.log(1);

// console.log(2)

// setTimeout(()=>{
//     console.log(3)
// }, 2000)

// setTimeout(()=>{    
//     console.log(4)
// }, 4000)

// console.log(5)


// -------------------------
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(3)
// }, 0);

// setTimeout(()=>{
//     console.log(4)
// }, 3000)

// console.log(5)

// setTimeout(()=>{    
//     console.log(6)
// }, 2000)

const id = setInterval(()=>{
    console.log('random something')
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 5000);
