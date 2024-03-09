$('.slideup').on('click', (e)=>{
    console.log(e)
    // $('.box').slideUp()
    // $('.box').hide()
    $('.box').fadeOut()
})

$('.slidedown').on('click', (e)=>{
    console.log(e)
    // $('.box').slideDown()
    // $('.box').show()
    $('.box').fadeIn()
})

$('.slidetoggle').on('click', (e)=>{
    console.log(e)
    $('.box').slideToggle()
})

