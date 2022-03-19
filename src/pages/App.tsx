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
        colors={["#FF7676", "#B7A126", "#5DAE8B", "#1F79D9"]}
        newQuoteText="New quote"
      />
    </>
  );
}
