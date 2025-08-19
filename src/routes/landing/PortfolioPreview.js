import ProjectsPreview from "./ProjectsPreview";
import { React } from 'react';

const PortfolioPreview = () => {
  return (
    <article className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
        I specialize in crafting technical solutions from scratch, continuously honing my development skills. Below, you’ll find select projects that reflect my engineering mindset and technical rigor. Additionally, I’ve undertaken several smaller-scale projects via coursework and coding challenges to reinforce foundational skills. You’re welcome to explore them on my [link].
          <span>
            <a
              href="https://github.com/catherineisonline?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
