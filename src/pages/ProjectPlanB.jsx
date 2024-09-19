import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPageLayout from "../components/ProjectPageLayout";
import vs from "../images/vs_white.png";
import html5 from "../images/html5.226x256.png";
import css3 from "../images/css3.226x256.png";
import js from "../images/js_white.png";
import planb_video from "../video/planb.mp4";
import planb_video_info_1 from "../video/planb_info_1.mp4";
import planb_video_info_2 from "../video/planb_info_2.mp4";
import ButtonTop from "../components/ButtonTop";
import ButtonBack from "../components/ButtonBack";
import { NavLink } from "react-router-dom";

export default function PlanB() {
  const keywords = (
    <p>
      2024 <br /> <br />
      gruppeprojekt <br /> <br /> 2. semester eksamen <br /> <br /> mobil + pc
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
        video={planb_video}
        heading={"Plan B"}
        heading_2={"projekt: Plan B vin & tapas"}
        text_large={keywords}
        text_intro={
          "I dette projekt valgte vi at arbejde med virksomheden Plan B, som er en vinbar i Aarhus, og her var vores mål at opbygge en stærk og gennemgående visuel identitet ved at lave en løsning fra bunden, der også inviterer brugeren til at være interaktiv med sidens indhold."
        }
        repository={"https://github.com/eifos9/Plan_B"}
        prototype={"https://sofiebk.dk/plan_b/"}
        heading_3={"interaktive infographics"}
        video_additional_1={planb_video_info_1}
        text_video_1={
          "Her er der bl.a. gjort brug af onscroll og getBoundingClientRect."
        }
        video_additional_2={planb_video_info_2}
        text_video_2={"Her anvendes der onclick, if-else sætninger og boolean."}
        programs={icons}
      />
      <div className="btn_project">
        <NavLink to="/" onClick={() => handleScroll(0)}>
          <ButtonBack />
        </NavLink>
        <NavLink to="/project_0" onClick={() => handleScroll(0)}>
          <ButtonTop />
        </NavLink>
      </div>

      <Footer />
    </>
  );
}
