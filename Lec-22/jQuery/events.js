// $('button').click(function(){
//     console.log('clicked')
// })

$('h1').on('click', (e)=>{
    // console.log(e.target)
    $(e.target).css('color', 'red');
    console.log('clicked!!');
})
