const figlet = require('figlet');

figlet('JavaScript', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(data);
})