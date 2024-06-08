import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const InputForm = ({ addTodo }) => {
  const [inpValue, setInpValue] = useState("");


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo({ id: uuid(), text:inpValue, marked:false })
      setInpValue("");
    }}>
      <input onChange={(e) => {
        setInpValue(e.target.value);
      }} type="text" placeholder='Write here...' value={inpValue} />
      <button>Add</button>
    </form>
  )
}

export default InputForm