import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Chandler_car3 from "../images/Chandler_car3.png";
import Monica_car3 from "../images/Monica_car3.png";
import Joey_car3 from "../images/Joey_car3.png";
import Ross_car3 from "../images/Ross_car3.png";
import Rachel_car3 from "../images/Rachel_car3.png";
import Phebes_car3 from "../images/Phebes_car3.png";
import axios from "axios";
// import "./Characters.css";

function Characters() {
  const [bio, setBio] = useState([]);
  const flippyRef = useRef();

  const getBio = async () => {
    try {
      const res = await axios.get("http://localhost:3001/characters/3");
      console.log(res);
      setBio(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getBio();
    console.log(getBio());
  }, []);

  return (
    <div>
      <Header />
      <div className="jumbotron jumbotron-fluid text-center mt-3">
        <div className="container">
          <h1 className="display-5">Main Characters</h1>
          <p className="lead">Flip to our beloved friends bios!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 cont">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: 'lightseagreen',
                  cursor: "pointer",
                }}
              >
                <img src={Chandler_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Chandler
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: 'lightseagreen',
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>

          <div className="col-4 cont">
          <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: "lightcoral",
                  cursor: "pointer",
                }}
              >
                <img src={Monica_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Monica
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "lightcoral",
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>

          <div className="col-4">
          <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: "yellowgreen",
                  cursor: "pointer",
                }}
              >
                <img src={Joey_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Joey
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "yellowgreen",
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: "rgb(210, 148, 158)",
                  cursor: "pointer",
                }}
              >
                <img src={Phebes_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Phoebe
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "rgb(210, 148, 158)",
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>

          <div className="col-4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: "rgb(2, 117, 216)",
                  cursor: "pointer",
                }}
              >
                <img src={Ross_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Ross
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "rgb(2, 117, 216)",
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>

          <div className="col-4">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal"
              ref={flippyRef}
            >
              <FrontSide
                style={{
                  backgroundColor: "rgb(194, 3, 3)",
                  cursor: "pointer",
                }}
              >
                <img src={Rachel_car3} className="card-img-top" alt="..." />
                <h5 className="card-title lead text-white text-center mt-2">
                  Rachel
                </h5>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "rgb(194, 3, 3)",
                  cursor: "pointer",
                }}
              >
                {" "}
                <div className="text-white">
                  <h4 className="text-center mb-3">{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                </div>
              </BackSide>
            </Flippy>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Characters;

{
  /* <div className="col-4 cont">
            <div className="card text-center">
              <div className="card_front">
                <img src={Chandler_car3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title lead">Chandler</h5>
                </div>
              </div>
              <div className="card_back">
                <div className="mt-5">
                  <h4>{bio.name}</h4>
                  <p>Date of Birth: {bio.date_of_birth}</p>
                  <p>Occupation: {bio.occupation}</p>
                  <p>Traits: {bio.traits}</p>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div> */
}

// .cont {
//   background-color: transparent;
//   perspective: 1000px;
//   /* border: 1px solid #CCC;  */
//   /* display: inline-block; */
//  }

// .card {
//   position: relative;
//   width: 100%;
//   height: 100;
//   cursor: pointer;
//   text-align: center;
//   transform-style: preserve-3d;
//   transition: transform 0.8s;
//  }

// .card_front, .card_back {
//   position: absolute;
//   /* background-color: rgb(2, 117, 216); */
//   /* border: 1px solid grey; */
//   width: 100%;
//   height: 100;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   }

// /* .card_front {
//   } */

// .card_back {
//   background-color: rgb(2, 117, 216); 
//   color: white;
//   transform: rotateY(180deg);
//   }

// .cont:hover .card {
//   transform: rotateY(180deg);
// }