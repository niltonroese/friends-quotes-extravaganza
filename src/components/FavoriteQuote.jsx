import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Friends_Caricature from "../images/Friends_Caricature.jpeg";

function FavoriteQuote() {
  const [formData, setFormData] = useState({
    quote: "",
    answers: ["Ross", "Monica", "Chandler", "Rachel", "Joey", "Phoebe"],
    correctAnswerIndex: parseInt(''),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <h1 className="text-center mb-3">Add Quote</h1>
      <form className="container-fluid text-center">
        <label htmlFor="quote">Quote:</label>
        <input
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
        />
        <input type="hidden" name="answers" value={formData.answers} />
        <label htmlFor="correctAnswerIndex">Character:</label>
        <select
          type="number"
          name="correctAnswerIndex"
          value={formData.correctAnswerIndex}
          onChange={handleChange}
          >
            <option value="0">Ross</option>
            <option value="1">Monica</option>
            <option value="2">Chandler</option>
            <option value="3">Rachel</option>
            <option value="4">Joey</option>
            <option value="5">Phoebe</option>
          </select>
        <button type="submit">Submit</button>
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
