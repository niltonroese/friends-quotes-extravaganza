import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReactCardFlip from "react-card-flip";
import Chandler_car from "../images/Chandler_car.png";
import axios from 'axios'

function Characters() {
  const [flip, setFlip] = useState(false);
  const [bio, setBio] = useState([])

  const getBio = async () => {
    try {
        const res = await axios.get("http://localhost:3001/characters/3");
        console.log(res);
        setBio(res.data);
    } catch (err) {
        alert(err.message);
    }
  }

  useEffect (() => {
    getBio ();
  }, []);

  return (
    <div>
      <Header />
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div>
            <img
              onClick={() => setFlip(!flip)}
              alt="caricature"
              src={Chandler_car}
            />
          </div>
          <div onClick={() => setFlip(!flip)}>
            <div>Name: {bio.name}</div>
            <div>Date of Birth: {bio.date_of_birth}</div>
            <div>Occupation: {bio.occupation}</div>
            <div>Traits: {bio.traits}</div>
        </div>
      </ReactCardFlip>
      <Footer />
    </div>
  );
}

export default Characters;
