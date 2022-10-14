import React from "react";
import LogoCouch from "../images/LogoCouch.png";
import HowWell from "../images/HowWell.jpeg";

function MainContent() {
  return (
    <div>
      <img
        src={LogoCouch}
        // src={HowWell}
        className="img-fluid"
        alt="Author"
      />
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>
            "Look at me! I'm Chandler! Could I be wearing any more clothes?"
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Joey
        </figcaption>
      </figure>
    </div>
  );
}

export default MainContent;
