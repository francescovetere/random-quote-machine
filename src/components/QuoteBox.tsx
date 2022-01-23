import axios from "axios";
import React, { useEffect, useState } from "react";
import { quotesUrl } from "../config";
import { Quote, QuotesResponse } from "../types/QuotesResponse";
import "./QuoteBox.scss";

interface PropsTypes {
  colors: string[];
  newQuoteText: string;
}

export default function QuoteBox({ colors, newQuoteText }: PropsTypes) {
  // State
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote>({
    quote: "",
    author: "",
  });
  const [currentColor, setCurrentColor] = useState(0);

  // Effects
  useEffect(() => {
    document.querySelector("body")!.style.backgroundColor =
      colors[currentColor];

    (document.querySelector(".text") as HTMLElement).style.color =
      colors[currentColor];

    (document.querySelector(".author") as HTMLElement).style.color =
      colors[currentColor];

    (document.querySelector(".tweet-quote") as HTMLElement).style.color =
      colors[currentColor];

    (
      document.querySelector(".new-quote") as HTMLElement
    ).style.backgroundColor = colors[currentColor];
  }, [currentColor]);

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

  useEffect(() => {
    setTimeout(
      () => document.querySelector("body")?.removeAttribute("class"),
      1
    );
  }, []);

  function randomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    // TODO: remove ids.
    <div className="quote-box" id="quote-box">
      <p className="text" id="text">
        “{currentQuote.quote}”
      </p>
      <p className="author" id="author">
        ~ {currentQuote.author}
      </p>
      <div className="footer">
        <a
          href={`https://twitter.com/intent/tweet?text="${currentQuote.quote}" ~ ${currentQuote.author}&hashtags=quotes`}
          target="_blank"
          className="tweet-quote"
          id="tweet-quote"
        >
          {/* <i className="fab fa-twitter"></i> */}
          <i className="fa-3x fa-brands fa-twitter-square"></i>
        </a>
        <button
          className="new-quote"
          id="new-quote"
          onClick={() => {
            setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
            setCurrentColor((prev) => (prev + 1) % colors.length);
          }}
        >
          {newQuoteText}
        </button>
      </div>
    </div>
  );
}
