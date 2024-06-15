import React from 'react'
import './Quote.css'
import { useNavigate } from 'react-router-dom'

const Quote = ({quote}) => {
    const navigate = useNavigate();

  return (
    <div className='quote-container'>
        <div onClick={(e)=>{
            navigate(`/quotes/${quote._id}`);
        }} className='img-container'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg" alt="" />
        </div>
        <div className='quote-content'>
            <p>{quote.text}</p>
            <p>- {quote.author}</p>
            {/* <p>{quote.createdAt}</p> */}
        </div>
    </div>
  )
}

export default Quote