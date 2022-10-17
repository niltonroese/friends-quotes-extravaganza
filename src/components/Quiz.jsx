import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Quiz() {
  const [quotes, setQuotes] = useState([]);

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

  return (
    <div>
      <Header />
      <div>
        {quotes.map((q) => {
          return (
            <div key={q.id}>
              <h6>{q.quote}</h6>
              <p>{q.characterOptions}</p>
            </div>
          );
        })}
      </div>
      <div>{quotes[0].quote}</div>
      {/* <div>
        {quotes[0].characterOptions.map((c) => (
          <button>
            {c.character}
          </button>
        ))}
      </div> */}
      <Footer />
    </div>
  );
}

export default Quiz;
