import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Smelly_cat from "../images/Smelly_cat.jpg";

function Leaderboard() {
  const [scoreboard, setScoreboard] = useState([]);

  const getScoreboard = async () => {
    try {
      const res = await axios.get("http://localhost:3001/userscores");
      console.log(res);
      setScoreboard(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getScoreboard();
    console.log(getScoreboard());
  }, []);

  return (
    <div>
      <Header />
      <div className="jumbotron jumbotron-fluid text-center mt-3 mb-4">
        <div className="container">
          <h1 className="display-6">Leaderboard</h1>
          <p className="lead">Check out the top 10 players scores!</p>
        </div>
      </div>
      {scoreboard?.length && (
        <div className="container d-flex justify-content-center">
          <div className="card lead text-center text-white">
            <div className="row">
              <div className="col-4">
                <img src={Smelly_cat} class="img-fluid" alt="cafe" style={{borderRadius: "5px 0 0 5px"}}/>
              </div>
              <div className="col-4" style={{
                        backgroundColor: "#9C8CD4"
                      }}>
                <h4 className="mt-2 mb-4">Friend</h4>
                {scoreboard.map((user, index) => (
                  <ul key={index}>{user.name}</ul>
                ))}
              </div>
              <div className="col-4" style={{
                        backgroundColor: "#9C8CD4",
                        borderRadius: "0 5px 5px 0"
                      }}>
                <h4 className="mt-2 mb-4">Score</h4>
                {scoreboard.map((userscore, index) => (
                  <ul key={index}>{userscore.score}</ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Leaderboard;
