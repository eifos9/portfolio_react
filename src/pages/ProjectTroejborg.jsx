import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPageLayout from "../components/ProjectPageLayout";
import vs from "../images/vs_white.png";
import html5 from "../images/html5.226x256.png";
import css3 from "../images/css3.226x256.png";
import troejborg_video from "../video/troejborg.mp4";
import troejborg_video_info_1 from "../video/troejborg_info_1.mp4";
import troejborg_video_info_2 from "../video/troejborg_info_2.mp4";
import ButtonTop from "../components/ButtonTop";
import ButtonBack from "../components/ButtonBack";
import { NavLink } from "react-router-dom";

export default function Troejborg() {
  const keywords = (
    <p>
      2023 <br /> <br />
      individuelt projekt <br /> <br /> 1. semester eksamen <br /> <br /> mobil
      + pc
    </p>
  );
  const icons = (
    <div className="icons_flex">
      <img className="icons_size" src={vs} alt="Ikon" />
      <img className="icons_size" src={html5} alt="Ikon" />
      <img className="icons_size" src={css3} alt="Ikon" />
    </div>
  );
  const handleScroll = (top) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <ProjectPageLayout
        video={troejborg_video}
        heading={"TrøjborgBryg"}
        heading_2={"projekt: TrøjborgBryg"}
        text_large={keywords}
        text_intro={
          "Her skulle der produceres en responsiv hjemmeside til det fiktive bryghus TrøjborgBryg og dermed også bygges en visuel identitet op fra bunden af samt udtænkes produkter."
        }
        repository={"https://github.com/eifos9/TroejborgBryg"}
        prototype={"https://sofiebk.dk/troejborgbryg/"}
        heading_3={"navigation og grafiske infographics"}
        video_additional_1={troejborg_video_info_1}
        text_video_1={
          "Her ses, hvordan man navigerer hen til de forskellige undersider i informationsarkitekturen."
        }
        video_additional_2={troejborg_video_info_2}
        text_video_2={
          "Smagsvarianterne forklares visuelt med tværsnit infographics."
        }
        programs={icons}
      />
      <div className="btn_project">
        <NavLink to="/" onClick={() => handleScroll(0)}>
          <ButtonBack />
        </NavLink>
        <NavLink to="/project_3" onClick={() => handleScroll(0)}>
          <ButtonTop />
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
