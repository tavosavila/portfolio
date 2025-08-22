import { Link } from "react-router-dom";
import { React } from 'react';

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Gustavo Avila</em>
        <br></br>Senior Software Engineer
      </h1>
      <p className="gray-text p-tag">Back End Development</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeroPreview;
