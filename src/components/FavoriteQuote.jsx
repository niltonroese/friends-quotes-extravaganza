import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Friends_Caricature2 from "../images/Friends_Caricature2.jpg";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

function FavoriteQuote() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    quote: "",
    answer: "",
  });
  const [showPopUp, setShowPopUp] = useState(false);

  const showPopupHandler = () => setShowPopUp(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [showPopUp]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/quotes", formData)
      .then((res) => {
        console.log(res);
        setFormData(res.data);
      })
      .catch((err) => console.log(err.message));
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div>
      <Header />
      <h1 className="display-6 text-center m-3">Add Quote</h1>
      <form className="container-fluid text-center" onSubmit={handleSubmit}>
        <label htmlFor="quote">Quote:</label>
        <input
          className="mx-2"
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
        />
        <label htmlFor="answer">Character:</label>
        <select
          className="mx-2"
          type="text"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        >
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
        </select>
        <br />
        <button
          type="submit"
          onClick={showPopupHandler}
          className="btn btn-info mt-3"
        >
          Submit
        </button>
        <br />
        {showPopUp ? (
          <div className="mt-4"> 
            <PopUp />
          </div>
        ) : (
          <img
            src={Friends_Caricature2}
            className="img-fluid mt-4"
            alt="Author"
            height={681}
            width={523}
          />
        )}
      </form>
      <Footer />
    </div>
  );
}

export default FavoriteQuote;
