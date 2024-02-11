
function download(url, cb){
    setTimeout(()=>{
        const photo = url.split('/').pop();
        cb(photo);
    }, 3000)
}

function compress(photo, cb){
    setTimeout(() => {
        const compressedPhoto = photo.split('.')[0] + '.zip';
        cb(compressedPhoto);
    }, 2000);
}

function upload(compressedPhoto, cb){
    setTimeout(()=>{
        const url = `https://facebook.cloud/user/${compressedPhoto}`;
        cb(url);
    }, 2000)
}

const url = 'https://www.facebook.com/user/profile.jpg'

download(url, function(file){
    console.log(file, ' downloaded successfully');
    compress(file, function(compressedPhoto){
        console.log(`${file} compressed to ${compressedPhoto} successfully`)
        upload(compressedPhoto, (newURL)=>{
            console.log('final URL', newURL)
        })
    })
});

// const photo = download();
// const compressedPhoto = compress(photo);


let arr = [1,2,3,4];

// arr.forEach((num, ind, arr)=>{
//     console.log(num);
// })

// Array.prototype.humaraFor = function(cb){
//     for(let i=0; i<this.length; i++){
//         cb(arr[i], i, arr)
//     }
// }

// arr.humaraFor((num, ind, nums)=>{
//     console.log(num, ind, nums)
// })
