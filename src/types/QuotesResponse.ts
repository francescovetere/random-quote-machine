interface QuotesResponse {
  quotes: Quote[];
}

interface Quote {
  quote: string;
  author: string;
}

export { QuotesResponse, Quote };
