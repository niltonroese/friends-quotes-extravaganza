import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
// import shuffle from "lodash/shuffle";
import Friends_colorful_yellow from "../images/Friends_colorful_yellow.png";

function Quiz() {
  const [quotes, setQuotes] = useState();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const fetchQuotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/quotes");
      console.log(res);
      setQuotes(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  //fetch quotes
  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleAnswerButtonClick = (value, answer) => {
    if (value === answer) {
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
    setTimeout(() => setShowScore(false), 500);
    setCurrentQuote(0);
    setTimeout(() => setScore(0), 500);
  };

  return (
    <div className="text-center">
      <Header />
      <div className="jumbotron jumbotron-fluid text-center mt-3 mb-4">
        <div className="container">
          <h1 className="display-6">Quiz me!</h1>
        </div>
      </div>
      <div className="container d-flex justify-content-center" >
        <div className="row">
          <div className="col-12" style={{
                border: '11px solid #9C8CD4',  
                borderRadius:'10px',
                width: 'auto',        
                boxSizing: 'border-box'
              }}>
            {/* <div className="card"> */}
            {showScore ? (
              <div className="container-fluid text-center">
                <h4>Quiz Complete</h4>
                <p>
                  You've nailed {score} out of {quotes.length} quotes
                </p>
                <button
                  type="button"
                  className="btn btn-info mb-3"
                  onClick={onRestartButtonClick}
                >
                  Give it another Go!
                </button>
                <p>Or</p>
                <Link className="link-primary" to="/FavoriteQuote">
                  Help us to increase our quotes database, add one here!
                </Link>
                <Outlet />
              </div>
            ) : (
              <>
                {quotes?.length && (
                  <div className="container-fluid text-center">
                    <h4 className="lead fs-4 mt-3 mb-3">
                      Quote {currentQuote + 1}/{quotes.length}
                    </h4>
                    <p className="lead ">{quotes[currentQuote].quote}</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Chandler"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Chandler 
                      </button>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Monica"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Monica
                      </button>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Joey"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Joey
                      </button>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Phoebe"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Phoebe
                      </button>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Ross"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Ross
                      </button>
                      <button
                        type="button"
                        className="btn btn-info m-1"
                        value="Rachel"
                        onClick={(e) =>
                          handleAnswerButtonClick(
                            e.target.value,
                            quotes[currentQuote].answer
                          )
                        }
                      >
                        Rachel
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            <div>
              <br />
              <img
                src={Friends_colorful_yellow}
                className="img-fluid"
                alt="Author"
                height={357}
                width={716}
              /><br /><br />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Quiz;