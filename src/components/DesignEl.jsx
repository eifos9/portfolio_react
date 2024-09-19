import nippon_logo from "../images/nippon_logo.png";
import skill_ai from "../images/adobe-illustrator.256x256.png";
import pink_wave_small from "../images/pink_wave_designel_small.png";
import pink_wave_large from "../images/pink_wave_designel_large.png";
import video from "../video/spirit.mp4";
import poster from "../images/spirit.png";
import skill_ps from "../images/adobe-photoshop.256x256.png";
import skill_ae from "../images/adobe-after-effects.256x251.png";
import GalleryDesEl from "./GalleryDesEl";
import cartoon_1 from "../images/inspirerende_prokrastinering_stribe1.png";
import cartoon_2 from "../images/projekt_paa_hjernen_stribe2.png";
import gif from "../images/gif_mia.gif";

export default function DesignEl() {
  return (
    <section id="designelements">
      <h2 className="h2_el">udvalgte designelementer</h2>
      <div className="el_flex">
        <div>
          <img
            className="nippon_logo"
            src={nippon_logo}
            alt="Logo designelement"
          />
        </div>
        <div className="el_text_pc el_text">
          <h3 className="h3_el">logo</h3>
          <p className="p_el">
            Dette logo fra projektet “Nippon Måltidskasser” står jeg bag, og
            finder jeg særligt vellykket med dets grafiske og legende enkelthed.
          </p>
          <img className="program_el" src={skill_ai} alt="Illustrator ikon" />
        </div>
      </div>
      <div className="carousel_small">
        {/* Images for CSS animation of waves, small screen */}
        <div className="carousel">
          <div className="carousel-inner">
            <img className="carousel-item" src={pink_wave_small} alt="" />
            <img className="carousel-item" src={pink_wave_small} alt="" />
            <img className="carousel-item" src={pink_wave_small} alt="" />
          </div>
        </div>
      </div>
      <div className="carousel_large">
        {/* Images for CSS animation of waves, large screen */}
        <div className="carousel">
          <div className="carousel-inner">
            <img className="carousel-item" src={pink_wave_large} alt="" />
            <img className="carousel-item" src={pink_wave_large} alt="" />
            <img className="carousel-item" src={pink_wave_large} alt="" />
          </div>
        </div>
      </div>
      <div className="el_flex_mg el_flex">
        <div>
          <video className="spirit_video" controls poster={poster}>
            <source src={video} />
          </video>
        </div>
        <div className="el_text_pc_mg el_text">
          <h3 className="h3_el">motion graphic</h3>
          <p className="p_el">
            Jeg lavede denne motion graphic, der handler om roveren Spririt, der
            blev sendt på Marsmission til projektet “Rejsen til Neptun”.
          </p>
          <div>
            <img className="program_el" src={skill_ai} alt="Illustrator ikon" />
            <img
              className="program_el"
              src={skill_ae}
              alt="After Effects ikon"
            />
          </div>
        </div>
      </div>
      {/* Images for CSS animation of waves, small screen */}
      <div className="carousel_small">
        <div className="carousel_left">
          <div className="carousel-inner_left">
            <img className="carousel-item_left" src={pink_wave_small} alt="" />
            <img className="carousel-item_left" src={pink_wave_small} alt="" />
            <img className="carousel-item_left" src={pink_wave_small} alt="" />
          </div>
        </div>
      </div>
      {/* Images for CSS animation of waves, large screen */}
      <div className="carousel_large">
        <div className="carousel_left">
          <div className="carousel-inner_left">
            <img className="carousel-item_left" src={pink_wave_large} alt="" />
            <img className="carousel-item_left" src={pink_wave_large} alt="" />
            <img className="carousel-item_left" src={pink_wave_large} alt="" />
          </div>
        </div>
      </div>
      <div className="el_flex_cartoon el_flex">
        <div>
          <GalleryDesEl images={[cartoon_1, cartoon_2, gif]} />
        </div>
        <div className="el_text_pc el_text">
          <h3 className="h3_el">tegneseriestriber & gif</h3>
          <p className="p_el">
            Disse tegneseriestriber og gif lavede jeg til et projekt, hvor vi
            skulle lave et online magasin - mit handlede om det kreative
            studieliv. Karakteren i striberne hedder Multimedie Mia.
          </p>
          <div>
            <img className="program_el" src={skill_ai} alt="Illustrator ikon" />
            <img className="program_el" src={skill_ps} alt="Photoshop Ikon" />
          </div>
        </div>
      </div>
    </section>
  );
}
