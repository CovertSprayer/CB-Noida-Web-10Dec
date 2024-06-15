import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowQuote = () => {
    const [quote, setQuote] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const { id: quoteId } = params;

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/quotes/${quoteId}`)
            console.log(res.data)
            setQuote(res.data.data);
        })();
    }, [])

    return (
        // <div></div>
        <div className='quote-container'>
            <div className='img-container'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg" alt="" />
            </div>
            <div className='quote-content'>
                <p>{quote?.text}</p>
                <p>- {quote?.author}</p>
                {/* <p>{quote.createdAt}</p> */}
                <div>
                    <a onClick={(e)=>{
                        e.preventDefault();
                        navigate(`/quotes/${quote._id}/edit`);
                    }} href=''>Edit</a> <br />
                    <a onClick={async (e)=>{
                        e.preventDefault(); 
                        const res = await axios.delete(`http://localhost:5000/api/v1/quotes/${quote._id}`)
                        console.log(res);
                        if(res.status == 200){
                            navigate('/');
                        }
                        else{
                            alert('Something went wrong!')
                        }
                    }} href="">Delete   </a>
                </div>
            </div>
            
        </div>
    )
}

export default ShowQuote