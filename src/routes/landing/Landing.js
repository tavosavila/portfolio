import AboutPreview from "./AboutPreview";
import HeroPreview from "./HeroPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect, React } from "react";
import "./Landing.sass";

const Mainpage = () => {
  useEffect(() => {
    document.title = "Gustavo Avila | Personal Portfolio";
    window.scrollTo(0, 0);
  })
  return (
    <main className="landing">
      <HeroPreview />
      <AboutPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default Mainpage;
