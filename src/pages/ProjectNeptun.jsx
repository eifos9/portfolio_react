import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPageLayout from "../components/ProjectPageLayout";
import vs from "../images/vs_white.png";
import html5 from "../images/html5.226x256.png";
import css3 from "../images/css3.226x256.png";
import js from "../images/js_white.png";
import neptun_video from "../video/neptun.mp4";
import neptun_video_info_1 from "../video/neptun_info_1.mp4";
import neptun_video_info_2 from "../video/neptun_info_2.mp4";
import ButtonTop from "../components/ButtonTop";
import ButtonBack from "../components/ButtonBack";
import { NavLink } from "react-router-dom";

export default function Neptun() {
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
        video={neptun_video}
        heading={"Rejsen til Neptun"}
        heading_2={"projekt: interaktiv storytelling"}
        text_large={keywords}
        text_intro={
          "Denne interaktive oplevelse er udtænkt som en løsning til Steno Museets astronomiudstilling i desktop/stor tablet størrelse. Her var der fokus på storytelling og mulighed for at interaktion. Vores 'Rejse til Neptun' er tiltænkt folkeskoleelever i udskolingen med det formål at gøre viden om rummet mere indbydende og sjovt for denne målgruppe."
        }
        repository={
          "https://github.com/eifos9/Interaktiv_Storytelling-Rejsen_til_Neptun"
        }
        prototype={"https://sofiebk.dk/rejsen_til_neptun/"}
        heading_3={"interaktiv infographic og en hjælpende hånd"}
        video_additional_1={neptun_video_info_1}
        text_video_1={
          "En interaktiv infographic over solsystemet, hvor man kan klikke sig ind på de enkelte planeter og lære mere."
        }
        video_additional_2={neptun_video_info_2}
        text_video_2={
          "Svarer man forkert i quiz'ene bliver man hjulpet videre, hvilket fungerer som en slags on boarding."
        }
        programs={icons}
      />
      <div className="btn_project">
        <NavLink to="/" onClick={() => handleScroll(0)}>
          <ButtonBack />
        </NavLink>
        <NavLink to="/project_2" onClick={() => handleScroll(0)}>
          <ButtonTop />
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
