import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Characters from './components/Characters';
import Quiz from './components/Quiz';
import Login from './components/Login';
import FavoriteQuote from './components/FavoriteQuote';
import Leaderboard from './components/Leaderboard';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-31xgflva.us.auth0.com"
    clientId="H2Pv9OXOPbkNt2xGpJh8aMw0uMCNd4Fm"
    redirectUri={window.location.origin}
    >
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/FavoriteQuote" element={<FavoriteQuote />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
