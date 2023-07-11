import React, { useState, useEffect } from "react";
import "../styles/QuoteGenerator.css";
import ShareQuotes from "./ShareQuotes";
import FavoriteQuotes from "./FavoriteQuotes";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  // Fetch a random quote from an API or predefined list
  const fetchQuote = async () => {
    // Replace `YOUR_API_ENDPOINT` with the actual API endpoint or implement logic to fetch from a predefined list
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const randomQuote = data;
      setQuote(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <p className="quote">{quote.content}</p>
      <p className="author">- {quote.author}</p>
      <button onClick={fetchQuote}>Generate Quote</button>
      <ShareQuotes quote={quote.content} />
      <FavoriteQuotes quote={quote.content} author={quote.author} />
    </div>
  );
};

export default QuoteGenerator;
