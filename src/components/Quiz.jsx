import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Quiz() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(0);
//   const [showScore, setShowScore] = useState(false)

  //fetch quotes
  useEffect(() => {
    fetch("http://localhost:3001/quotes")
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setQuotes(json);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleAnswerButtonClick = () => {
    const nextQuote = currentQuote + 1;
    if (nextQuote < quotes.length) {
      setCurrentQuote(nextQuote);
    } else {
      alert("end of quiz")
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid text-center">
        <span>Quote 1/{quotes.length}</span>
        <div>{quotes[currentQuote].quote}</div>
        <div>
          {quotes[currentQuote].answers.map((a) => (
            <button onClick={handleAnswerButtonClick} key={a.id}>
              {a}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
