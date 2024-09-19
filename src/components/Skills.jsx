import skill_logo from "../images/skill_logo.png";
import skill_icon from "../images/skill_flower.png";
import skill_ui from "../images/skill_ui.png";
import skill_code from "../images/skill_code.png";
import skill_pattern from "../images/skill_pattern.png";
import skill_graphic from "../images/skill_eye.png";
import skill_ai from "../images/adobe-illustrator.256x256.png";
import skill_ps from "../images/adobe-photoshop.256x256.png";
import skill_ae from "../images/adobe-after-effects.256x251.png";
import skill_id from "../images/adobe-indesign.256x250.png";
import skill_vs from "../images/visual-studio-code.256x256.png";
import skill_html5 from "../images/html5.224x256.png";
import skill_css3 from "../images/css3.224x256.png";
import skill_js from "../images/javascript-js.256x256.png";
import skill_react from "../images/react.256x228.png";
import skill_gh from "../images/github.256x244.png";
import skill_figma from "../images/figma.256x256.png";
import skill_canva from "../images/canva.256x256.png";
import blue_wave_small from "../images/blue_wave_skills_small.png";
import blue_wave_large from "../images/blue_wave_skills_large.png";

export default function Skills() {
  return (
    <section>
      <h3 className="h3_skills">og så kan jeg skabe...</h3>
      <div className="skills_flex_container">
        <div className="skills_flex">
          <div className="skill_type">
            <img className="skills_img" src={skill_logo} alt="Ikon" />
            <p className="skills_p">logodesign</p>
          </div>
          <div className="skill_type">
            <img className="skills_img" src={skill_icon} alt="Ikon" />
            <p className="skills_p">ikondesign</p>
          </div>
        </div>
        <div className="skills_flex">
          <div className="skill_type">
            <img className="skills_img" src={skill_ui} alt="Ikon" />
            <p className="skills_p">interfacedesign</p>
          </div>
          <div className="skill_type">
            <img className="skills_img" src={skill_code} alt="Ikon" />
            <p className="skills_p">programmering</p>
          </div>
        </div>
        <div className="skills_flex">
          <div className="skill_type">
            <img className="skills_img" src={skill_pattern} alt="Ikon" />
            <p className="skills_p">mønsterdesign</p>
          </div>
          <div className="skill_type">
            <img className="skills_img" src={skill_graphic} alt="Ikon" />
            <p className="skills_p">grafisk design</p>
          </div>
        </div>
      </div>
      <h3 className="h3_skills">og anvende...</h3>
      <div className="programs_margin skills_flex_container">
        <div className="skills_flex">
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_ai} alt="Ikon" />
            <p className="program_p">Illustrator</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_ps} alt="Ikon" />
            <p className="program_p">Photoshop</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_ae} alt="Ikon" />
            <p className="program_p">After Effects</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_id} alt="Ikon" />
            <p className="program_p">InDesign</p>
          </div>
        </div>
        <div className="skills_flex">
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_vs} alt="Ikon" />
            <p className="program_p">Visual Studio</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_html5} alt="Ikon" />
            <p className="program_p">HTML 5</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_css3} alt="Ikon" />
            <p className="program_p">CSS 3</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_js} alt="Ikon" />
            <p className="program_p">JavaScript</p>
          </div>
        </div>
        <div className="skills_flex">
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_react} alt="Ikon" />
            <p className="program_p">React</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_gh} alt="Ikon" />
            <p className="program_p">GitHub</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_figma} alt="Ikon" />
            <p className="program_p">Figma</p>
          </div>
          <div className="skill_type_program">
            <img className="skills_program_img" src={skill_canva} alt="Ikon" />
            <p className="program_p">Canva</p>
          </div>
        </div>
      </div>
      <picture>
        <source media="(min-width: 768px)" srcSet={blue_wave_large} />
        <img className="blue_wave_skills" src={blue_wave_small} alt="" />
      </picture>
    </section>
  );
}
