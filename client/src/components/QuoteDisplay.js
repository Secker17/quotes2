import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get('/api/quotes/random');
      setQuote(response.data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Quote of the Day</h1>
      <p>{quote.text} - {quote.author}</p>
    </div>
  );
}

export default QuoteDisplay;
