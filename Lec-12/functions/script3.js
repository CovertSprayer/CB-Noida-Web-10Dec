
function getMovies(movieName){
    function makkhi(){
        return 'makkhi';
    }

    function adhipurush(){
        return 'adhipurush';
    }

    function notFound(){
        return 'No movie found!!';
    }

    if(movieName.toLowerCase() === 'makkhi'){
        return makkhi;
    }
    else if(movieName.toLowerCase() === 'adhipurush'){
        return adhipurush;
    }
    else {
        return notFound;
    }
}

var fun = getMovies('MAKKhi');
console.log(fun());