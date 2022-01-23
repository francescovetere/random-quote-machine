import React from "react";
import QuoteBox from "../components/QuoteBox";
import "./App.scss";

interface PropsTypes {
  headerText: string;
}
export default function App({ headerText }: PropsTypes) {
  return (
    <>
      <header>{headerText}</header>

      <QuoteBox
        colors={["red", "green", "blue"]}
        // colors={["cyan", "yellow", "magenta", "black"]}
        newQuoteText="New quote"
      />
    </>
  );
}
