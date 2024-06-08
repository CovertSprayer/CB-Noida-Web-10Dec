import React, { useState } from 'react'

const Demo = () => {
    // let num = 1;
    let [num, setNum] = useState(1);

    function increaseHandler(e){
        num = num + 1;
        setNum(num);
    }
    
    return (
        <div>
            <button>decrease</button>
            <span>{num}</span>
            <button onClick={increaseHandler}>increase</button>
        </div>
    )
}

export default Demo