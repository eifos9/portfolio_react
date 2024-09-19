import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPageLayout from "../components/ProjectPageLayout";
import vs from "../images/vs_white.png";
import html5 from "../images/html5.226x256.png";
import css3 from "../images/css3.226x256.png";
import js from "../images/js_white.png";
import nippon_video from "../video/nippon.mp4";
import nippon_video_info_1 from "../video/nippon_info_1.mp4";
import nippon_video_info_2 from "../video/nippon_info_2.mp4";
import ButtonTop from "../components/ButtonTop";
import ButtonBack from "../components/ButtonBack";
import { NavLink } from "react-router-dom";

export default function Nippon() {
  const keywords = (
    <p>
      2024 <br /> <br />
      gruppeprojekt <br /> <br /> 2. semester <br /> <br /> pc
    </p>
  );
  const icons = (
    <div className="icons_flex">
      <img className="icons_size" src={vs} alt="Ikon" />
      <img className="icons_size" src={html5} alt="Ikon" />
      <img className="icons_size" src={css3} alt="Ikon" />
      <img className="icons_size" src={js} alt="Ikon" />
    </div>
  );
  const handleScroll = (top) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <ProjectPageLayout
        video={nippon_video}
        heading={"Nippon Måltidskasser"}
        heading_2={"projekt: Nippon Måltidskasser"}
        text_large={keywords}
        text_intro={
          "Nippon er et fiktivt måltidskassefirma, hvortil der skulle udvikles en digital løsning til desktop. Her var der især fokus på brugervenlighed ift. til den valgte primære målgruppe - her unge voksne - samt en klar japansk inspiration i udtryk."
        }
        repository={"https://github.com/eifos9/Nippon_maaltidskasser"}
        prototype={"https://sofiebk.dk/nippon_maaltidskasser/"}
        heading_3={"brugerhandlinger og flow"}
        video_additional_1={nippon_video_info_1}
        text_video_1={
          "Her er der brugt for loop og if sætninger, så man kan tilføje retter."
        }
        video_additional_2={nippon_video_info_2}
        text_video_2={"Et flow gennem vores løsning."}
        programs={icons}
      />
      <div className="btn_project">
        <NavLink to="/" onClick={() => handleScroll(0)}>
          <ButtonBack />
        </NavLink>
        <NavLink to="/project_1" onClick={() => handleScroll(0)}>
          <ButtonTop />
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
