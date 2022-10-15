import React from 'react'
import LogoCouch1 from "../images/LogoCouch1.jpeg";

function HomeContent() {
  return (
    <div>
      <div>
      <img
        src={LogoCouch1}
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
    </div>
  )
}

export default HomeContent
