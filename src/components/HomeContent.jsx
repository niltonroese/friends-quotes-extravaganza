import React from "react";
import LogoCouch1 from "../images/LogoCouch1.jpeg";

function HomeContent() {
  return (
    <div>
      <div>
        <img src={LogoCouch1} className="img-fluid" alt="Author" />
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>
              "Look at me! I'm Chandler! Could I be wearing any more clothes?"
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">Joey</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default HomeContent;
