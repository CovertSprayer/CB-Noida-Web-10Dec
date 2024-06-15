import React, { useRef, useState } from 'react'
import './AddQuote.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddQuote = () => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const authorRef = useRef();
    const navigate = useNavigate();

    // console.log(text)

    async function submitHandler(){
        const res = await axios.post('http://localhost:5000/api/v1/quotes', {
            author,
            text
        })
        if(res.status == 201){
            navigate('/');
        }
        else{
            alert('Something Went Wrong!!')
        }
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                submitHandler();
            }}>
                <div className='form-control'>
                    <label htmlFor="author">Author Name:</label> <br />
                    <input required onChange={(e)=> {
                        // console.log(authorRef.current.value)

                        setAuthor(e.target.value);
                    }} ref={authorRef} id='author' type="text" placeholder='Enter Author Name' />
                </div>

                <div className='form-control'>
                    <label htmlFor="text">Quote</label> <br />
                    <textarea required onChange={(e)=> {
                        setText(e.target.value)
                    }} id="text" cols="30" placeholder='Write your quote here...' rows="5"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddQuote