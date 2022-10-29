import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
// import shuffle from "lodash/shuffle";
import Friends_colorful from "../images/Friends_colorful.png";

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
    fetchQuotes()
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
    setScore(() => setShowScore(0), 500)
  };

  return (
    <div className="text-center">
      <Header />
      <br />
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
              <h4>
                Quote {currentQuote + 1}/{quotes.length}
              </h4>
              <div>{quotes[currentQuote].quote}</div>
              <br />
              <div>
                <button type="button"
                    className="btn btn-info" value="Chandler" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Chandler</button>
                <button type="button"
                    className="btn btn-info" value="Monica" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Monica</button>
                <button type="button"
                    className="btn btn-info" value="Joey" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Joey</button>
                <button type="button"
                    className="btn btn-info" value="Phoebe" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Phoebe</button>
                <button type="button"
                    className="btn btn-info" value="Ross" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Ross</button>
                <button type="button"
                    className="btn btn-info" value="Rachel" onClick={(e) =>
                        handleAnswerButtonClick(e.target.value, quotes[currentQuote].answer)}>Rachel</button>
              </div>
            </div>
          )}
        </>
      )}
      <div>
        <br />
        <img
          src={Friends_colorful}
          className="img-fluid"
          alt="Author"
          height={681}
          width={523}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;

// function useQuiz() {
//     const [quotes, setQuotes] = useState([]);
  
//     const fetchQuotes = () => {
//       axios
//         .get("http://localhost:3001/quotes")
//         .then((res) => {
//           console.log(res);
//           setQuotes(res.data);
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     };
  
//     return [quotes, fetchQuotes];
//   }
  
//   function Quiz() {
//     const [quotes, fetchQuotes] = useQuiz();
//     const [currentQuote, setCurrentQuote] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [score, setScore] = useState(0);
  
//     //fetch quotes
//     useEffect(() => {
//       fetchQuotes()
//     }, []);
  
//     const handleAnswerButtonClick = (answerIndex, correctAnswerIndex) => {
//       if (answerIndex === correctAnswerIndex) {
//         setScore((curr) => curr + 1);
//       }
//       const nextQuote = currentQuote + 1;
//       if (nextQuote < quotes.length) {
//         setCurrentQuote(nextQuote);
//       } else {
//         setShowScore(true);
//       }
//     };
  
//     const onRestartButtonClick = async () => {
//       await fetchQuotes();
//       setTimeout(() => setShowScore(false), 500);
//       setCurrentQuote(0);
//     };
  
//     return (
//       <div className="text-center">
//         <Header />
//         <br />
//         {showScore ? (
//           <div className="container-fluid text-center">
//             <h4>Quiz Complete</h4>
//             <p>
//               You've nailed {score} out of {quotes.length} quotes
//             </p>
//             <button
//               type="button"
//               className="btn btn-info mb-3"
//               onClick={onRestartButtonClick}
//             >
//               Give it another Go!
//             </button>
//             <p>Or</p>
//             <Link className="link-primary" to="/FavoriteQuote">
//               Help us to increase our quotes database, add one here!
//             </Link>
//             <Outlet />
//           </div>
//         ) : (
//           <>
//             {quotes?.length && (
//               <div className="container-fluid text-center">
//                 <h4>
//                   Quote {currentQuote + 1}/{quotes.length}
//                 </h4>
//                 <div>{quotes[currentQuote].quote}</div>
//                 <br />
//                 <div>
//                   {quotes[currentQuote].answers.map((answer, index) => (
//                     <button
//                       type="button"
//                       className="btn btn-info"
//                       onClick={() =>
//                         handleAnswerButtonClick(
//                           index,
//                           quotes[currentQuote].correctAnswerIndex
//                         )
//                       }
//                       key={index}
//                     >
//                       {answer}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//         <div>
//           <br />
//           <img
//             src={Friends_colorful}
//             className="img-fluid"
//             alt="Author"
//             height={681}
//             width={523}
//           />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
  
//   export default Quiz;