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

function Characters() {
  const [bio, setBio] = useState([]);
  const flippyRef = useRef();

  const getBio = async () => {
    try {
      const res = await axios.get("http://localhost:3001/characters");
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
      <div>
        {bio?.length && (
          <>
            <div className="jumbotron jumbotron-fluid text-center mt-3 mb-4">
              <div className="container">
                <h1 className="display-6">Main Characters</h1>
                <p className="lead">Flip and check out our beloved friends bios!</p>
              </div>
            </div>

            <div className="container">
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
                        backgroundColor: "lightseagreen",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={Chandler_car3}
                        className="card-img-top"
                        alt="..."
                      />
                      <h5 className="card-title lead text-white text-center mt-2">
                        Chandler
                      </h5>
                    </FrontSide>
                    <BackSide
                      style={{
                        backgroundColor: "lightseagreen",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <div className="text-white">
                        <h4 className="text-center mb-3">{bio[2].name}</h4>
                        <p>Date of Birth: {bio[2].date_of_birth}</p>
                        <p>Occupation: {bio[2].occupation}</p>
                        <p>Traits: {bio[2].traits}</p>
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
                        backgroundColor: "lightcoral",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={Monica_car3}
                        className="card-img-top"
                        alt="..."
                      />
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
                        <h4 className="text-center mb-3">{bio[1].name}</h4>
                        <p>Date of Birth: {bio[1].date_of_birth}</p>
                        <p>Occupation: {bio[1].occupation}</p>
                        <p>Traits: {bio[1].traits}</p>
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
                        <h4 className="text-center mb-3">{bio[4].name}</h4>
                        <p>Date of Birth: {bio[4].date_of_birth}</p>
                        <p>Occupation: {bio[4].occupation}</p>
                        <p>Traits: {bio[4].traits}</p>
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
                      <img
                        src={Phebes_car3}
                        className="card-img-top"
                        alt="..."
                      />
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
                        <h4 className="text-center mb-3">{bio[5].name}</h4>
                        <p>Date of Birth: {bio[5].date_of_birth}</p>
                        <p>Occupation: {bio[5].occupation}</p>
                        <p>Traits: {bio[5].traits}</p>
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
                        <h4 className="text-center mb-3">{bio[0].name}</h4>
                        <p>Date of Birth: {bio[0].date_of_birth}</p>
                        <p>Occupation: {bio[0].occupation}</p>
                        <p>Traits: {bio[0].traits}</p>
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
                      <img
                        src={Rachel_car3}
                        className="card-img-top"
                        alt="..."
                      />
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
                        <h4 className="text-center mb-3">{bio[3].name}</h4>
                        <p>Date of Birth: {bio[3].date_of_birth}</p>
                        <p>Occupation: {bio[3].occupation}</p>
                        <p>Traits: {bio[3].traits}</p>
                      </div>
                    </BackSide>
                  </Flippy>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Characters;