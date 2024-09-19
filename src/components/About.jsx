import portrait from "../images/portrait.png";
import portrait_color from "../images/portrait_color.png";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll status
  const imageRef = useRef(null); // Ref to access the image DOM element

  // Function to handle scroll events and check if the image is in view
  const handleScroll = () => {
    const rect = imageRef.current.getBoundingClientRect(); // Check if the image is within the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsScrolled(true); // Set scrolled state to true if in view
    } else {
      setIsScrolled(false); // Set scrolled state to false if out of view
    }
  };

  // Effect to add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <section id="about_nav">
      <div className="about_flex_pc">
        <div className="portrait_flex_pc">
          <h2 className="h2_about">Sofie Bluhm Kristensen</h2>
          <div
            className="portrait_flex"
            onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
          >
            <img
              ref={imageRef} // Reference to the image element
              src={
                isHovered || (window.innerWidth < 768 && isScrolled)
                  ? portrait_color
                  : portrait
              }
              alt="Portrætbillede"
              className="portrait"
            />
          </div>
        </div>
        <div className="about_text_pc" id="about">
          <h2 className="about_h2">bonjour - hej med dig!</h2>
          <p className="about_p">
            Jeg hedder Sofie, er 21 år og er i gang med at uddanne mig som
            <span className="about_p_bold"> multimediedesigner</span> hos
            Erhvervsakademi Aarhus. Denne vej har jeg valgt at gå, da jeg har en
            stor interesse i<span className="about_p_bold"> design</span>, som
            her sammenkobles med det tekniske, da jeg har valgt at specialiserer
            mig i<span className="about_p_bold"> frontend</span>. <br />
            <br />
            Jeg synes nemlig, at det er fedt at kunne programmere det, man har
            siddet og designet -{" "}
            <span className="about_p_bold"> den røde tråd </span>i projekter er
            derfor også rigtig vigtig for mig - i formen såvel som i funktionen.
          </p>
          <h3 className="h3_about_pc">derudover, er jeg...</h3>
          <div className="about_list">
            <ul>
              <li>detaljeorienteret og fokuseret</li>
              <li>organiseret</li>
              <li>god til selvstændigt arbejde</li>
            </ul>
            <ul className="ul_right">
              <li>nysgerrig</li>
              <li>divergent tænkende</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
