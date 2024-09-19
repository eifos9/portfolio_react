import linkedin from "../images/linkedin.256x256.png";
import mail from "../images/envelope-mail.256x206.png";
import github from "../images/github.256x249.png";
import waves_small from "../images/waves_footer_small.png";
import waves_large from "../images/waves_footer_large.png";

export default function Footer() {
  return (
    <>
      <picture>
        <source media="(min-width: 768px)" srcSet={waves_large} />
        <img className="blue_wave_footer" src={waves_small} alt="" />
      </picture>
      <footer>
        <div className="footer_flex">
          <div>
            <h2 className="h2_footer">kontakt mig i dag!</h2>
            <div className="contact_flex">
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
          <div className="footer_left_pc">
            <div className="gh_pc gh_mobile">
              <img className="github_footer" src={github} alt="GitHub ikon" />
              <p className="p_gh">portfolio repository</p>
            </div>
            <p className="p_footer">sofiebk.dk/portfolio</p>
          </div>
        </div>
      </footer>
    </>
  );
}
