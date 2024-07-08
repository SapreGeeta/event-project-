import React from "react";
import { Link } from "react-scroll";

const HeroSection= () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        
        <div>
        <h1>Our Best Services For You</h1>
              <h2 className='fw-semibold'>Annivarsary,Wedding,Birthday,Camping trip Planning</h2>
              <p>Together,we can create mind-blowing experiences that you and your guests will never forget.</p>
              <p> Don't wait,let's start planning your extraordinary event today!</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
