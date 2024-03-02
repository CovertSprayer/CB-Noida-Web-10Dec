const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        try {
            const screenText = screen.innerText;

            if(btn.innerText == 'C')
                screen.innerText = '';

            else if (btn.innerText == 'x')
                screen.innerText = screenText + '*';

            else if(btn.innerText == 'del')
                screen.innerText = screenText.slice(0, screenText.length - 1)

            else if(btn.innerText == '=')
                screen.innerText = eval(screenText);

            else
                screen.innerText = screenText + btn.innerText;

        } 
        catch (error) {
            screen.innerText = 'Invalid Operation!'
            console.log(error.message)
        }
    })
})

