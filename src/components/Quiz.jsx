import React, { useEffect, useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
// import shuffle from "lodash/shuffle";
import Friends_colorful_yellow from "../images/Friends_colorful_yellow.png";
import { useAuth0 } from "@auth0/auth0-react";

function Quiz() {
  const [quotes, setQuotes] = useState();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const {user} = useAuth0();
  const current_username = user.name
  const current_useremail = user.email
  const [name] = useState(current_username)
  const [email] = useState(current_useremail)
  const navigate = useNavigate();

  //Fetch quotes
  const fetchQuotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/quotes");
      console.log(res);
      setQuotes(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  //Get quotes
  useEffect(() => {
    fetchQuotes();
  }, []);

  const saveScore = async () => {
    try {
      const res = await axios.post("http://localhost:3001/userscores", {name, email, score});
      console.log(res);
    } catch (err) {
      alert(err.message);
    }
  };

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

  const scoreClick = async () => {
    await saveScore();
    navigate('/Leaderboard')
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
          <div className="col-12">
            <div className="card">
            {showScore ? (
              <div className="container-fluid text-center">
                <h4 className="lead fs-4 mt-3">Quiz Complete</h4>
                <p className="lead">
                  You've nailed {score} out of {quotes.length} quotes
                </p>
                <button
                  type="button"
                  className="btn btn-info mb-3"
                  onClick={onRestartButtonClick}
                >
                  Give it another Go!
                </button><br />
                <button
                  type="button"
                  className="btn btn-danger mb-3"
                  onClick={scoreClick}
                >
                  Submit score!
                </button>
              </div>
            ) : (
              <>
                {quotes?.length && (
                  <div className="container-fluid text-center">
                    <h4 className="lead fs-4 mt-3 mb-3">
                      Quote {currentQuote + 1}/{quotes.length}
                    </h4>
                    <p className="lead">{quotes[currentQuote].quote}</p>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Quiz;