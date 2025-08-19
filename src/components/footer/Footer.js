import "./Footer.sass";
import { React } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer">
      <a
        href="https://github.com/catherineisonline/"
        target="_blank"
        rel="noopener noreferrer">
        Designed & Built by Sophia &copy;2023 - {currentYear}
      </a>
    </article>
  );
};

export default Footer;
