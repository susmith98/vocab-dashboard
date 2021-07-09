import React from "react";
import "./App.css";
import { useState } from "react/cjs/react.development";

const getGoogleBase = word => `https://www.google.com/search?igu=1&q=${word}+meaning`;
const getCambridgeBase = word =>
  `https://dictionary.cambridge.org/dictionary/english/${word}`;
const getVocabBase = word => `https://www.vocabulary.com/dictionary/${word}`;
const getThesarusBase = word => `https://www.thesaurus.com/browse/${word}`;


const App = () => {
  const [word, setWord] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Entered word", document.getElementById("word-input").value);
    setWord(document.getElementById("word-input").value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <strong>Enter the word:</strong> <input type="text" id="word-input" placeholder="Enter the word" />
        <input type="submit" value="Submit" />
      </form>

      <div className="body">
        {word && word.length > 0 ? (
          <div>
            <div className="iframes-body">
              <iframe src={getGoogleBase(word)} className="iframe" />
              <iframe src={getVocabBase(word)} className="iframe" />   
            </div>
            <div className="iframes-body">
              <iframe src={getCambridgeBase(word)} className="iframe" />
              <iframe src={getThesarusBase(word)} className="iframe" />
            </div>
          </div>
        ) : (
          <div>Please enter a word</div>
        )}
      </div>
    </div>
  );
};

export default App;
