
function download(url){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const photo = url.split('/').pop();
            resolve(photo);
        }, 3000)
    })
}

function compress(photo){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const compressedPhoto = photo.split('.')[0] + '.zip';
            resolve(compressedPhoto);
        }, 2000);
    })

    return p;
}

function upload(compressedPhoto ){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const url = `https://facebook.cloud/user/${compressedPhoto}`;
            resolve(url);
        }, 2000)
    })
}

const url = 'https://www.facebook.com/user/profile.jpg'

// download(url, function(file){
//     console.log(file, ' downloaded successfully');
//     compress(file, function(compressedPhoto){
//         console.log(`${file} compressed to ${compressedPhoto} successfully`)
//         upload(compressedPhoto, (newURL)=>{
//             console.log('final URL', newURL)
//         })
//     })
// });

// download(url)
//     .then((photo)=>{
//         console.log(photo)
//         compress(photo)
//             .then((compressedPhoto)=>{
//                 console.log(compressedPhoto)
//             })
//     })

download(url)
    .then((photo)=>{
        console.log(photo);
        return compress(photo)
    })
    .then(compressedPhoto => {
        console.log(compressedPhoto);
        return upload(compressedPhoto);
    })
    .then(newURL => {
        console.log(newURL);
    })
    .catch(err => {
        console.log(err);
    })



