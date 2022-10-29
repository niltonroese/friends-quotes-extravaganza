import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Friends_Caricature from "../images/Friends_Caricature.jpeg";
import { useNavigate } from "react-router-dom";

function FavoriteQuote() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    quote: "",
    // answers: ["Ross", "Monica", "Chandler", "Rachel", "Joey", "Phoebe"],
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("Thanks for playing!");
    e.preventDefault();
    navigate("/");
    axios
      .post("http://localhost:3001/quotes", formData)
      .then((res) => {
        console.log(res);
        setFormData();
      })
      .catch((err) => console.log(err.message));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const requestMethod = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     };
  //     fetch("http://localhost:3001/quotes", requestMethod)
  //     .then((res) => {
  //         console.log(res);
  //         // navigate("/");
  //     })
  //     .catch((err) => console.log(err.message))
  //   };

  return (
    <div>
      <Header />
      <h1 className="text-center m-3">Add Quote</h1>
      <form className="container-fluid text-center" onSubmit={handleSubmit}>
        <label htmlFor="quote">Quote:</label>
        <input
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
        />
        {/* <input type="hidden" name="answer" value={formData.answer} /> */}
        <label htmlFor="answer">Character:</label>
        <select
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
        <button type="submit" className="btn btn-info mt-3">
          Submit
        </button>
        <br />
        <img
          src={Friends_Caricature}
          className="img-fluid mt-4"
          alt="Author"
          height={681}
          width={523}
        />
      </form>
      <Footer />
    </div>
  );
}

export default FavoriteQuote;
