import linkedin from "../images/linkedin.256x256.png";
import mail from "../images/envelope-mail.256x206.png";
import wave_pink_small from "../images/wave_pink_contact_small.png";
import wave_pink_large from "../images/wave_pink_contact_large.png";
import blue_wave_small from "../images/blue_wave_about_small.png";
import blue_wave_large from "../images/blue_wave_about_large.png";
import flowers from "../images/pink_white_flowers.png";
import About from "./About";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_flower_flex">
          <img className="pink_white_flower" src={flowers} alt="" />
          <div className="contact_pc">
            <h2>kontakt mig i dag!</h2>
            <div className="contact_flex_container">
              <div className="contact_mail_flex">
                <a
                  href="https://www.linkedin.com/in/sofie-bluhm-kristensen-496990294/"
                  target="_blank"
                >
                  <img
                    className="contact_icons"
                    src={linkedin}
                    alt="Linkedin ikon"
                  />
                </a>
              </div>
              <div className="contact_mail_flex">
                <img className="contact_icons" src={mail} alt="Konvolut ikon" />
                <p className="contact_mail">fieblomsten@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <picture>
          <source media="(min-width: 768px)" srcSet={wave_pink_large} />
          <img className="pink_wave_contact" src={wave_pink_small} alt="" />
        </picture>
        <About />
      </section>
      <picture>
        <source media="(min-width: 768px)" srcSet={blue_wave_large} />
        <img className="blue_wave_contact" src={blue_wave_small} alt="" />
      </picture>
    </>
  );
}
