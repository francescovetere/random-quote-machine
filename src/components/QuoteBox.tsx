import axios from "axios";
import React, { useEffect, useState } from "react";
import { quotesUrl } from "../config";
import { Quote, QuotesResponse } from "../types/QuotesResponse";

export default function QuoteBox() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote>({
    quote: "",
    author: "",
  });

  useEffect(() => {
    async function _fetchData() {
      const p = await axios.get<QuotesResponse>(quotesUrl);
      setQuotes(p.data.quotes);
      setCurrentQuote(
        p.data.quotes[Math.floor(Math.random() * p.data.quotes.length)]
      );
    }

    _fetchData();
  }, []);

  return (
    // TODO: remove ids.
    <div className="quote-box" id="quote-box">
      <p className="text" id="text">
        {currentQuote.quote}
      </p>
      <p className="author" id="author">
        {currentQuote.author}
      </p>
      <a
        href={`https://twitter.com/intent/tweet?text="${currentQuote.quote}" ~ ${currentQuote.author}&hashtags=quotes`}
        target="_blank"
        className="tweet-quote"
        id="tweet-quote"
      >
        Twitter icon
      </a>
      <button
        className="new-quote"
        id="new-quote"
        onClick={() =>
          setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
      >
        New quote
      </button>
    </div>
  );
}
