import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../components/Quote/Quote';


const AllQuotes = () => {   
    const [quotes, setQuotes] = useState([]);

    async function getQuotes(){
        const res = await axios.get('http://localhost:5000/api/v1/quotes');
        // console.log(res.data.data);
        setQuotes(res.data.data);
    }

    useEffect(()=>{
        getQuotes();
    }, [])
  return (
    <div>
        {quotes.map(quote => <Quote key={quote._id} quote={quote}/>)}
    </div>
  )
}

export default AllQuotes