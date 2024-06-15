import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditQuote = () => {
    const [quote, setQuote] = useState({});
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const { id: quoteId } = params;

    console.log(quote);

    async function getQuote() {
        const res = await axios.get(`http://localhost:5000/api/v1/quotes/${quoteId}`);
        // console.log(res)
        setQuote(res.data.data);
        setText(res.data.data.text);
        setAuthor(res.data.data.author);
    }

    async function submitHandler(){
        const res = await axios.put(`http://localhost:5000/api/v1/quotes/${quoteId}`, {
            text,
            author
        });

        navigate('/');
    }
    useEffect(() => {
        getQuote();
    }, []);

    return (
        // <div>Hello from edit Page</div>
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                submitHandler();
            }}>
                <div className='form-control'>
                    <label htmlFor="author">Author Name:</label> <br />
                    <input required onChange={(e) => {
                        setAuthor(e.target.value);
                    }} id='author' type="text" placeholder='Enter Author Name' value={author} />
                </div>

                <div className='form-control'>
                    <label htmlFor="text">Quote</label> <br />
                    <textarea required onChange={(e) => {
                        setText(e.target.value)
                    }} id="text" cols="30" placeholder='Write your quote here...' rows="5" value={text}></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditQuote