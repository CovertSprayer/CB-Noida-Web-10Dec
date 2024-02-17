
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

async function main(){
    try {
        const file = await download(url);
        console.log(file);

        const compressedFile = await compress(file);
        console.log(compressedFile)

        const newUrl =  await upload(compressedFile);
        console.log(newUrl);
    } 
    catch (error) {
        console.log(error);
        console.log('Something bad happened!');
    }
}

main();





