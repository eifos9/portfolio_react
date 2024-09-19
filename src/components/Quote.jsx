import quotation from "../images/quotationmarks.png";
import moon from "../images/pink_moon.png";
import blue_wave_small from "../images/blue_wave_about_small.png";
import blue_wave_large from "../images/blue_wave_about_large.png";

export default function Quote() {
  return (
    <>
      <picture>
        <source media="(min-width: 768px)" srcSet={blue_wave_large} />
        <img
          className="blue_wave_contact_reverse"
          src={blue_wave_small}
          alt=""
        />
      </picture>
      <section className="quote_section">
        <div className="quote_flex">
          <div className="quote_text_flex">
            <div className="moon_flex">
              <img className="quotation" src={quotation} alt="" />
            </div>
            <p className="p_quote">
              Jeg brænder for at skabe smukke, funktionelle og empatiske
              designløsninger - for hvad er design, hvis ikke forskønnende,
              funktionelt og medfølende?
            </p>
          </div>
          <div className="moon_flex">
            <img className="moon" src={moon} alt="Måne" />
          </div>
        </div>
      </section>
      <picture>
        <source media="(min-width: 768px)" srcSet={blue_wave_large} />
        <img className="blue_wave_contact" src={blue_wave_small} alt="" />
      </picture>
    </>
  );
}
