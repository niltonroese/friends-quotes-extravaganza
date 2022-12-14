import React from "react";
import LogoCouch1 from "../images/LogoCouch1.jpeg";

function HomeContent() {
  return (
    <div className="mt-5">
      <div>
        <img src={LogoCouch1} className="img-fluid" alt="Author" />
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="lead">
              "Look at me! I'm Chandler! Could I be wearing any more clothes?"
            </p>
          </blockquote>
          <figcaption className="blockquote-footer lead">Joey</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default HomeContent;
