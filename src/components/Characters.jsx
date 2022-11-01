import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chandler_car from "../images/Chandler_car.png";
import Monica_car from "../images/Monica_car.png";
import Joey_car from "../images/Joey_car.png";
import Ross_car from "../images/Ross_car.png";
import Rachel_car from "../images/Rachel_car.png";
import Phebes_car from "../images/Phebes_car.png";
import axios from "axios";
import "./Characters.css";

function Characters() {
  const [bio, setBio] = useState([]);

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
  }, []);

  return (
    <div>
      <Header />
      <div className="jumbotron jumbotron-fluid text-center mt-3">
        <div className="container">
          <h1 className="display-5">Main Characters</h1>
          <p className="lead">Check out our beloved friends bios!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 cont">
            <div className="card text-center">
              <div className="card_front">
                <img src={Chandler_car} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Chandler</h4>
                  {/* <button className="btn btn-primary">
                  Flip
                </button> */}
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
          </div>

          <div className="col-4">
            <div className="card text-center">
              <img src={Monica_car} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Monica</h4>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <button href="#" className="btn btn-primary">
                  Flip
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card text-center">
              <img src={Joey_car} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Joey</h4>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <button href="#" className="btn btn-primary">
                  Flip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div className="card text-center">
              <img src={Phebes_car} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Phoebe</h4>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <button href="#" className="btn btn-primary">
                  Flip
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card text-center">
              <img src={Ross_car} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Ross</h4>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <button href="#" className="btn btn-primary">
                  Flip
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card text-center">
              <img src={Rachel_car} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Rachel</h4>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <button href="#" className="btn btn-primary">
                  Flip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Characters;