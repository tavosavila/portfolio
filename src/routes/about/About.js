import "./About.sass";
import { useEffect, React } from "react";
import { Footer } from "../../components/index.js";
import Stack from "./Stack.js";
import Experience from "./Experience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop.js";

const About = () => {
  useEffect(() => {
    document.title = "About | Gustavo Avila";
    window.scrollTo(0, 0);
  })
  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Experience />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default About;
