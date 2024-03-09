const heading = document.getElementsByTagName('h1');
console.log(heading[0])

$(heading[0]).css('color', 'green')

// const heading = $('h1');
// console.log(heading);


// heading[0].css('color', 'red');
// console.log(heading[0])
// heading[0].style.color = 'red';

// hello-world -> helloWorld

const styles = {
    color: 'brown',
    border: '2px solid red',
}

// $('p').css(styles);
// console.log($('p').text('hello world'))
// console.log($('p').html('<i>hello world</i>'))

// console.log($('p'))
const attributes = $('p').attr('class', 'four');
console.log(attributes)

// to check if attribute exists or not
console.log($('p').attr('class'));

$(heading).addClass('border-solid')
$(heading).removeClass('border-solid')
$(heading).toggleClass('border-solid')
console.log($(heading).hasClass('border-solid'))

    // ----------------------------
    /*
        $(heading).parent()
        $(heading).parent().children()
        $(heading).next()
        $(heading).next().prev()
    */

    ;

// $('.container')
//     .append(
//         $('<p>').text('This is some paragraph!')
//     );

$('.container')
    .prepend(
        $('<p>').text('This is some paragraph!')
    );

// $('h1').after(
//     $('<li>').html('<span>some random text</span>')
// )

$('h1').before(
    $('<li>').html('<span>some random text</span>')
)

$('div p').remove();




