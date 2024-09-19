import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import DesignEl from "./DesignEl";
import Quote from "./Quote";
import Talents from "./Talents";
import ButtonTop from "./ButtonTop";
import { NavLink } from "react-router-dom";

export default function Main() {
  // Function to handle logo click, scrolling to the top of the page smoothly
  const handleScroll = (top) => {
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <main>
      <Projects />
      <Contact />
      <Skills />
      <DesignEl />
      <Quote />
      <Talents />
      <NavLink to="/" onClick={() => handleScroll(0)}>
        <ButtonTop />
      </NavLink>
    </main>
  );
}
