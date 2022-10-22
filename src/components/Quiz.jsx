import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
// import shuffle from "lodash/shuffle";

function useQuiz() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    axios
      .get("http://localhost:3001/quotes")
      .then((res) => {
        console.log(res);
        setQuotes(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return [quotes, fetchQuotes];
}

function Quiz() {
  const [quotes, fetchQuotes] = useQuiz();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  //fetch quotes
  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleAnswerButtonClick = (answerIndex, correctAnswerIndex) => {
    if (answerIndex === correctAnswerIndex) {
      setScore((curr) => curr + 1);
    }
    const nextQuote = currentQuote + 1;
    if (nextQuote < quotes.length) {
      setCurrentQuote(nextQuote);
    } else {
      setShowScore(true);
    }
  };

  const onRestartButtonClick = async () => {
    await fetchQuotes();
    setCurrentQuote(0);
    setTimeout(() => setShowScore(false), 300);
  };

  return (
    <div>
      <Header />
      {showScore ? (
        <div className="container-fluid text-center">
          <h4>Quiz Complete</h4>
          <p>
            You've nailed {score} out of {quotes.length} quotes
          </p>
          <button onClick={onRestartButtonClick}>Give it another Go!</button>
        </div>
      ) : (
        <>
          {quotes?.length && (
            <div className="container-fluid text-center">
              <h4>
                Quote {currentQuote + 1}/{quotes.length}
              </h4>
              <div>{quotes[currentQuote].quote}</div>
              <br />
              <div>
                {quotes[currentQuote].answers.map((answer, index) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(
                        index,
                        quotes[currentQuote].correctAnswerIndex
                      )
                    }
                    key={index}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default Quiz;
