var photo = 'abc.jpg.pdf';
var validExtns = ['jpg', 'jpeg', 'png'];

var fileExtn = photo.split('.').pop();
if(validExtns.includes(fileExtn)){
    console.log(true)
}else{
    console.log(false)
}